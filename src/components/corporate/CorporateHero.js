'use client'

import React from 'react'
import '../../styles/corporate/CorporateHero.css'

import Beams from '../background/Beams'

const content = {
  title: "კორპორატიული ვებსაიტის დამზადება",

  description:
    "ყველაფერი, რაც მომხმარებელმა თქვენი კომპანიის შესახებ უნდა იცოდეს — ერთ თანამედროვე და სრულფასოვან ვებსაიტში.",

  cta: "კორპორატიული ვებსაიტის შეკვეთა →",
};

function CorporateHero() {
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
        <h1 className="corporate-hero-title">{content.title}</h1>

        <p className="corporate-hero-description">{content.description}</p>

        <div className="buttons-container">
          <a href="#order" className="button1">
            {content.cta}
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