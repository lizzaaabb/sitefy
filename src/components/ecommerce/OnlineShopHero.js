'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/ecommerce/OnlineShopHero.css'

import Beams from '../background/Beams'

const content = {
  titleGeo: "ონლაინ მაღაზიის დამზადება",
  titleEng: "Online Store Development",

  descriptionGeo:
    "შექმენით თქვენი პროდუქციისთვის თანამედროვე ონლაინ მაღაზია — მარტივი კატალოგიდან სრულფასოვან გადახდებიან პლატფორმამდე, ზუსტად თქვენი ბიზნესის საჭიროებების მიხედვით.",
  descriptionEng:
    "Get a modern online store for your products — from a simple catalog to a full payment-enabled platform, built exactly around your business needs.",

  ctaGeo: "ონლაინ მაღაზიის შეკვეთა →",
  ctaEng: "Order Your Online Store →",
};

function OnlineShopHero() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng
  const cta = isGeo ? content.ctaGeo : content.ctaEng

  return (
    <div className="online-shop-hero-container">
      <div className="orb-bg">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
      </div>

      <span className="online-shop-hero-badge" aria-hidden="true">
        <svg viewBox="0 0 48 48" className="online-shop-hero-badge-svg">
          <defs>
            <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4E4BC" />
              <stop offset="35%" stopColor="#E8C874" />
              <stop offset="70%" stopColor="#C9A05C" />
              <stop offset="100%" stopColor="#8B6914" />
            </linearGradient>
          </defs>
          <path
            d="M14 16h20l1.6 24.4a3 3 0 0 1-3 3.2H15.4a3 3 0 0 1-3-3.2L14 16Z"
            fill="url(#bagGrad)"
          />
          <path
            d="M18 16v-3a6 6 0 1 1 12 0v3"
            fill="none"
            stroke="url(#bagGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <g className="online-shop-hero-badge-sparkle">
            <circle cx="34" cy="12" r="1.6" fill="#FFFDF6" />
            <circle cx="10" cy="22" r="1" fill="#FFFDF6" />
          </g>
        </svg>
      </span>

      <div className="online-shop-hero-content">
        <h1 className={`online-shop-hero-title ${localeClass}`}>{title}</h1>

        <p className={`online-shop-hero-description ${localeClass}`}>{description}</p>

        <div className="buttons-container">
          <a href="#order" className={`button1 ${localeClass}`}>
            {cta}
          </a>
        </div>
      </div>

      <div className="online-shop-hero-scroll" aria-hidden="true">
        <span className="online-shop-hero-scroll-label">Scroll</span>
        <span className="online-shop-hero-scroll-track">
          <span className="online-shop-hero-scroll-fill" />
        </span>
      </div>
    </div>
  )
}

export default OnlineShopHero