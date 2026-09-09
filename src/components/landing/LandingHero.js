'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/landing/LandingHero.css'

import Beams from '../background/Beams'

const content = {
  titleGeo: "ერთგვერდიანი ვებსაიტის დამზადება",
  titleEng: "One-Page Website Development",

  descriptionGeo:
    "შექმენით თქვენი ბიზნესისთვის თანამედროვე, სწრაფი და პროფესიონალური ვებსაიტი, რომელიც მომხმარებლებს გააცნობს თქვენს საქმიანობას, სერვისებსა და საკონტაქტო ინფორმაციას.",
  descriptionEng:
    "Get a modern, fast, and professional website for your business that introduces visitors to what you do, your services, and how to reach you.",

  ctaGeo: "ვებსაიტის შეკვეთა →",
  ctaEng: "Order Your Website →",
};

function LandingHero() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng
  const cta = isGeo ? content.ctaGeo : content.ctaEng

  return (
    <div className="landing-hero-container">
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

      <div className="landing-hero-content">
        <h1 className={`landing-hero-title ${localeClass}`}>{title}</h1>

        <p className={`landing-hero-description ${localeClass}`}>{description}</p>

        <div className="buttons-container">
          <a href="#order" className={`button1 ${localeClass}`}>
            {cta}
          </a>
        </div>
      </div>

      <div className="landing-hero-scroll" aria-hidden="true">
        <span className="landing-hero-scroll-label">Scroll</span>
        <span className="landing-hero-scroll-track">
          <span className="landing-hero-scroll-fill" />
        </span>
      </div>
    </div>
  )
}

export default LandingHero