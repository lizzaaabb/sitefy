'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/projects/ProjectsHero.css'

import Beams from '../background/MagicRings'

const content = {
  kickerGeo: 'ნამუშევრები',
  kickerEng: 'Selected Work',
  titleGeo: 'პროექტები',
  titleEng: 'Our Work'
}

function ProjectsHero() {
  const locale = useLocale()
  const isGeo = locale === 'ka'

  const kicker = isGeo ? content.kickerGeo : content.kickerEng
  const title = isGeo ? content.titleGeo : content.titleEng

  return (
    <div className="projects-hero-container">
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

      <div className="projects-hero-content">
        <div className="projects-hero-kicker">
          <span className="projects-hero-kicker-line" />
          <span className={isGeo ? 'geo' : 'eng'}>{kicker}</span>
          <span className="projects-hero-kicker-line" />
        </div>

        <h1 className={`projects-hero-title ${isGeo ? 'geo' : 'eng'}`}>{title}</h1>
      </div>

      <div className="projects-hero-scroll" aria-hidden="true">
        <span className="projects-hero-scroll-label">Scroll</span>
        <span className="projects-hero-scroll-track">
          <span className="projects-hero-scroll-fill" />
        </span>
      </div>
    </div>
  )
}

export default ProjectsHero