'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/corporate/CorporateHero.css'

import Beams from '../background/Beams'

const content = {
  titleGeo: "კორპორატიული ვებსაიტის დამზადება",
  titleEng: "Corporate Website Development",

  descriptionGeo:
    "ყველაფერი, რაც მომხმარებელმა თქვენი კომპანიის შესახებ უნდა იცოდეს — ერთ თანამედროვე და სრულფასოვან ვებსაიტში.",
  descriptionEng:
    "Everything visitors need to know about your company — in one modern, fully-featured website.",

  ctaGeo: "კორპორატიული ვებსაიტის შეკვეთა →",
  ctaEng: "Order Your Corporate Website →",
};

function CorporateHero() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng
  const cta = isGeo ? content.ctaGeo : content.ctaEng

  return (
    <div className="corporate-hero-container">
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

      <div className="corporate-hero-content">
        <h1 className={`corporate-hero-title ${localeClass}`}>{title}</h1>

        <p className={`corporate-hero-description ${localeClass}`}>{description}</p>

        <div className="buttons-container">
          <a href="#order" className={`button1 ${localeClass}`}>
            {cta}
          </a>
        </div>
      </div>

      <div className="corporate-hero-scroll" aria-hidden="true">
        <span className="corporate-hero-scroll-label">Scroll</span>
        <span className="corporate-hero-scroll-track">
          <span className="corporate-hero-scroll-fill" />
        </span>
      </div>
    </div>
  )
}

export default CorporateHero