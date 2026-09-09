'use client'
import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/ecommerce/OnlineShopCta.css'

const content = {
  titleGeo: "ონლაინ მაღაზიის შესაკვეთად დაგვიკავშირდით",
  titleEng: "Contact Us to Order Your Online Store",

  descriptionGeo:
    "მოგვწერეთ თქვენი პროდუქციის შესახებ და განვიხილოთ მაღაზიის დეტალები.",
  descriptionEng:
    "Tell us about your products and let's discuss the details of your store.",

  cta: {
    textGeo: "დაგვიკავშირდით →",
    textEng: "Contact Us →",
    href: "tel:+995575755712",
  },
};

function OnlineShopCta() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng
  const ctaText = isGeo ? content.cta.textGeo : content.cta.textEng

  return (
    <section className="online-shop-cta-container">
      <div className="online-shop-cta-card">
        <div className="online-shop-cta-text">
          <h2 className={`online-shop-cta-heading ${localeClass}`}>{title}</h2>
          <p className={`online-shop-cta-desc ${localeClass}`}>{description}</p>
        </div>

        <div className="online-shop-cta-buttons">
          <a href={content.cta.href} className={`online-shop-cta-btn-primary ${localeClass}`}>
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default OnlineShopCta