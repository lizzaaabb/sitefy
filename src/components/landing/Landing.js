'use client'

import React from 'react'
import LandingHero from './LandingHero'
import LandingContent from './LandingContent'
import LandingPricing from './LandingPricing'
import LandingCta from './LandingCta'


function Landing() {
  return (
    <div>
        <LandingHero />
        <LandingContent />
        <LandingPricing />
        <LandingCta />
    </div>
  )
}

export default Landing
