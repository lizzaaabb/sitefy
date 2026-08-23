'use client'

import React from 'react'
import '../../styles/landing/LandingHero.css'

import Beams from '../background/Beams'

const content = {
  title: "ერთგვერდიანი ვებსაიტის დამზადება",
  description:
    "შექმენით თქვენი ბიზნესისთვის თანამედროვე, სწრაფი და პროფესიონალური ვებსაიტი, რომელიც მომხმარებლებს გააცნობს თქვენს საქმიანობას, სერვისებსა და საკონტაქტო ინფორმაციას.",
 
  cta: "ვებსაიტის შეკვეთა →",
};

function LandingHero() {
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
        <h1 className="landing-hero-title">{content.title}</h1>

        <p className="landing-hero-description">{content.description}</p>

        <div className="buttons-container">
          <a href="#order" className="button1">
            {content.cta}
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