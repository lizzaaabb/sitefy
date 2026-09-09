'use client'
import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/landing/LandingCta.css'

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

function LandingCta() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng
  const ctaText = isGeo ? content.cta.textGeo : content.cta.textEng

  return (
    <section className="landing-cta-container">
      <div className="landing-cta-card">
        <div className="landing-cta-text">
          <h2 className={`landing-cta-heading ${localeClass}`}>{title}</h2>
          <p className={`landing-cta-desc ${localeClass}`}>{description}</p>
        </div>

        <div className="landing-cta-buttons">
          <a href={content.cta.href} className={`landing-cta-btn-primary ${localeClass}`}>
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default LandingCta