'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '../../i18n/navigation'
import '../../styles/home/Header.css'
import useTimeTheme from '../theme/useTimeTheme'
import useProductColumns from './useProductColumns'
import { Link } from '../../i18n/navigation'

const logoilo = '/logo/logo-ilo.png'
const logowhite = '/logo/logowhite.png'

function Header() {
  const t = useTranslations('Header')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const productColumns = useProductColumns()

  const isDark = useTimeTheme()
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  const productsCloseTimer = useRef(null)
  const langCloseTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
      setProductsOpen(false)
      setLangOpen(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) setMobileProductsOpen(false)
  }, [mobileOpen])

  const openProducts = () => {
    if (productsCloseTimer.current) clearTimeout(productsCloseTimer.current)
    setProductsOpen(true)
  }
  const closeProductsDelayed = () => {
    productsCloseTimer.current = setTimeout(() => setProductsOpen(false), 120)
  }

  const openLang = () => {
    if (langCloseTimer.current) clearTimeout(langCloseTimer.current)
    setLangOpen(true)
  }
  const closeLangDelayed = () => {
    langCloseTimer.current = setTimeout(() => setLangOpen(false), 120)
  }

  const switchLocale = (newLocale) => {
    router.replace(pathname, { locale: newLocale })
    setLangOpen(false)
  }

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">

        <a href="/" className="logo">
          <img
            src={isDark ? logowhite : logoilo}
            alt="sitefy logo"
            className="header-logo"
          />
        </a>

        <nav className="header-nav">
          <div
            className="nav-item"
            onMouseEnter={openProducts}
            onMouseLeave={closeProductsDelayed}
          >
            <button className={`nav-link ${productsOpen ? 'active' : ''}`}>
              {t('nav.products')}
              <svg className="chevron" width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <Link href="/projects" className="nav-link nav-link-plain">{t('nav.work')}</Link>
          <a href="#pricing" className="nav-link nav-link-plain">{t('nav.pricing')}</a>
        </nav>

        <div className="header-actions">
          <div
            className="nav-item lang-item"
            onMouseEnter={openLang}
            onMouseLeave={closeLangDelayed}
          >
            <button className={`nav-link ${langOpen ? 'active' : ''}`}>
              {locale === 'ka' ? 'GEO' : 'ENG'}
              <svg className="chevron" width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`lang-dropdown ${langOpen ? 'open' : ''}`}>
              <button
                className={`lang-option ${locale === 'ka' ? 'selected' : ''}`}
                onClick={() => switchLocale('ka')}
              >
                GEO
              </button>
              <button
                className={`lang-option ${locale === 'en' ? 'selected' : ''}`}
                onClick={() => switchLocale('en')}
              >
                ENG
              </button>
            </div>
          </div>

          <button
            className={`burger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>

      </div>

      {/* Desktop full-width products panel */}
      <div
        className={`products-panel ${productsOpen ? 'open' : ''}`}
        onMouseEnter={openProducts}
        onMouseLeave={closeProductsDelayed}
      >
        <div className="products-panel-inner">
          {productColumns.map((col) => (
            <div className="products-col" key={col.label}>
              <h5 className="products-col-label">{col.label}</h5>
              <ul>
                {col.items.map((item) => (
                  <li key={item.title}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">

          <div className="mobile-accordion">
            <button
              type="button"
              className={`mobile-accordion-summary ${mobileProductsOpen ? 'open' : ''}`}
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              aria-expanded={mobileProductsOpen}
            >
              {t('nav.products')}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`mobile-accordion-collapse ${mobileProductsOpen ? 'open' : ''}`}>
              <div className="mobile-accordion-body">
                {productColumns.map((col) => (
                  <div key={col.label} className="mobile-accordion-group">
                    <span className="mobile-accordion-label">{col.label}</span>
                    {col.items.map((item) => (
                      <a key={item.title} href={item.href} onClick={() => setMobileOpen(false)}>
                        {item.title}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href="/projects" className="mobile-link" onClick={() => setMobileOpen(false)}>{t('nav.work')}</Link>
          <a href="#pricing" className="mobile-link" onClick={() => setMobileOpen(false)}>{t('nav.pricing')}</a>

          <div className="mobile-menu-footer">
            <span className="mobile-menu-footer-label">{t('langLabel')}</span>
            <div className="mobile-lang-options">
              <button
                className={`mobile-lang-btn ${locale === 'ka' ? 'selected' : ''}`}
                onClick={() => switchLocale('ka')}
              >
                GEO
              </button>
              <button
                className={`mobile-lang-btn ${locale === 'en' ? 'selected' : ''}`}
                onClick={() => switchLocale('en')}
              >
                ENG
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header