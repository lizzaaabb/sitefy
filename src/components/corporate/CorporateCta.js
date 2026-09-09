'use client'
import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/corporate/CorporateCta.css'

const content = {
  titleGeo: "ვებსაიტის შესაკვეთად დაგვიკავშირდით",
  titleEng: "Contact Us to Order Your Website",

  descriptionGeo:
    "მოგვწერეთ თქვენი ბიზნესის შესახებ და განვიხილოთ ვებსაიტის დეტალები.",
  descriptionEng:
    "Tell us about your business and let's discuss the details of your website.",

  cta: {
    textGeo: "დაგვიკავშირდით →",
    textEng: "Contact Us →",
    href: "tel:+995575755712",
  },
};

function CorporateCta() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng
  const ctaText = isGeo ? content.cta.textGeo : content.cta.textEng

  return (
    <section className="corporate-cta-container">
      <div className="corporate-cta-card">
        <div className="corporate-cta-text">
          <h2 className={`corporate-cta-heading ${localeClass}`}>{title}</h2>
          <p className={`corporate-cta-desc ${localeClass}`}>{description}</p>
        </div>

        <div className="corporate-cta-buttons">
          <a href={content.cta.href} className={`corporate-cta-btn-primary ${localeClass}`}>
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CorporateCta