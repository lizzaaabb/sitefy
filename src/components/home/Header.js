'use client'

import React, { useState, useEffect, useRef } from 'react'
import '../../styles/home/Header.css'

const logoilo = '/logo/logo-ilo.png'

const productColumns = [
  {
    label: 'ვებსაიტები',
    items: [
      { title: 'ერთგვერდიანი ვებსაიტი', href: '#' },
      { title: 'კორპორატიული ვებსაიტი', href: '#' },
      { title: 'ონლაინ მაღაზია', href: '#' },
    ],
  },
  {
    label: 'სპეციალიზებული',
    items: [
      { title: 'ავტო დილერის ვებსაიტი', href: '#' },
      { title: 'ტურისტული ვებსაიტი', href: '#' },
      { title: 'უძრავი ქონების პლატფორმა', href: '#' },
    ],
  },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState('geo')
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setProductsOpen(true)
  }

  const closeProductsDelayed = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120)
  }

  return (
    <>
      <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">

          <a href="/" className="logo">
            <img src={logoilo} alt="sitefy logo" className="header-logo" />
          </a>

          <nav className="header-nav">
            <div
              className="nav-item"
              onMouseEnter={openProducts}
              onMouseLeave={closeProductsDelayed}
            >
              <button className={`nav-link ${productsOpen ? 'active' : ''}`}>
                პროდუქტები
                <svg className="chevron" width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <a href="#work" className="nav-link nav-link-plain">ნამუშევრები</a>
            <a href="#pricing" className="nav-link nav-link-plain">ფასები</a>
          </nav>

          <div className="header-actions">
            <button
              className="lang-toggle"
              onClick={() => setLang(lang === 'geo' ? 'eng' : 'geo')}
              aria-label="Change language"
            >
              <span className={lang === 'geo' ? 'lang-active' : ''}>GEO</span>
              <span className="lang-divider">/</span>
              <span className={lang === 'eng' ? 'lang-active' : ''}>ENG</span>
            </button>

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

        {/* Full-width products panel */}
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
      </header>

      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />

      <aside className={`mobile-sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <img src={logoilo} alt="sitefy logo" className="header-logo" />
          <button className="burger open" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <span></span>
            <span></span>
          </button>
        </div>

        <details className="mobile-accordion">
          <summary>
            პროდუქტები
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
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
        </details>

        <a href="#work" className="mobile-link" onClick={() => setMobileOpen(false)}>ნამუშევრები</a>
        <a href="#pricing" className="mobile-link" onClick={() => setMobileOpen(false)}>ფასები</a>

        <div className="mobile-sidebar-footer">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'geo' ? 'eng' : 'geo')}
          >
            <span className={lang === 'geo' ? 'lang-active' : ''}>GEO</span>
            <span className="lang-divider">/</span>
            <span className={lang === 'eng' ? 'lang-active' : ''}>ENG</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default Header