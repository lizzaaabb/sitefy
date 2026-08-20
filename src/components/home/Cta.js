'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/home/Cta.css'

function CtaGold() {
  const locale = useLocale()
  const isGeo = locale === 'ka'

  return (
    <section className="cta-gold-container">
      <div className="cta-gold-card">
        <div className="cta-gold-text">
          <p className={`cta-gold-eyebrow ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo ? 'შეკვეთა' : 'Get Started'}
          </p>
          <h2 className={`cta-gold-heading ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo
              ? 'გსურთ ბიზნესის ონლაინ სივრცეში განვითარება?'
              : 'Ready to grow your business online?'}
          </h2>
          <p className={`cta-gold-desc ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo
              ? 'ვქმნით საიტებს, რომლებიც არა მხოლოდ ვიზუალურად საინტერესოა, არამედ რეალურ შედეგებს გვაძლევს.'
              : 'We build websites that aren\u2019t just visually engaging — they deliver real results.'}
          </p>
        </div>

        <div className="cta-gold-buttons">
          
           <a href="https://wa.me/995574065469"
            target="_blank"
            rel="noopener noreferrer"
            className={`cta-gold-btn-primary ${isGeo ? 'geo' : 'eng'}`}
          >
            {isGeo ? 'მოგვწერეთ' : 'Message Us'}
          </a>
          <a href="tel:+995575755712" className={`cta-gold-btn-secondary ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo ? 'დაგვირეკეთ' : 'Call Us'}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaGold