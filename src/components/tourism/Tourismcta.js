'use client'
import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/tourism/TourismCta.css'

const content = {
  titleGeo: "ტურისტული ვებსაიტის შესაკვეთად დაგვიკავშირდით",
  titleEng: "Contact Us to Order Your Tourism Website",

  descriptionGeo:
    "მოგვწერეთ თქვენი ტურისტული ბიზნესის შესახებ და განვიხილოთ ვებსაიტის დეტალები.",
  descriptionEng:
    "Tell us about your tourism business and let's discuss the details of your website.",

  cta: {
    textGeo: "დაგვიკავშირდით →",
    textEng: "Contact Us →",
    href: "tel:+995575755712",
  },
};

function TourismCta() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng
  const ctaText = isGeo ? content.cta.textGeo : content.cta.textEng

  return (
    <section className="tourism-cta-container">
      <div className="tourism-cta-card">
        <div className="tourism-cta-text">
          <h2 className={`tourism-cta-heading ${localeClass}`}>{title}</h2>
          <p className={`tourism-cta-desc ${localeClass}`}>{description}</p>
        </div>

        <div className="tourism-cta-buttons">
          <a href={content.cta.href} className={`tourism-cta-btn-primary ${localeClass}`}>
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default TourismCta