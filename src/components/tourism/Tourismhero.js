'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/tourism/TourismHero.css'

import Beams from '../background/Beams'

const content = {
  titleGeo: "ტურისტული ვებსაიტის დამზადება",
  titleEng: "Tourism Website Development",

  descriptionGeo:
    "შექმენით თქვენი ტურისტული ბიზნესისთვის თანამედროვე ვებსაიტი — საინფორმაციო გვერდიდან სრულფასოვან ონლაინ ჯავშნის პლატფორმამდე.",
  descriptionEng:
    "Get a modern website for your tourism business — from an informational site to a full online booking platform.",

  ctaGeo: "ტურისტული ვებსაიტის შეკვეთა →",
  ctaEng: "Order Your Tourism Website →",
};

function TourismHero() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng
  const cta = isGeo ? content.ctaGeo : content.ctaEng

  return (
    <div className="tourism-hero-container">
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

      <div className="tourism-hero-content">
        <h1 className={`tourism-hero-title ${localeClass}`}>{title}</h1>

        <p className={`tourism-hero-description ${localeClass}`}>{description}</p>

        <div className="buttons-container">
          <a href="#order" className={`button1 ${localeClass}`}>
            {cta}
          </a>
        </div>
      </div>

      <div className="tourism-hero-scroll" aria-hidden="true">
        <span className="tourism-hero-scroll-label">Scroll</span>
        <span className="tourism-hero-scroll-track">
          <span className="tourism-hero-scroll-fill" />
        </span>
      </div>
    </div>
  )
}

export default TourismHero