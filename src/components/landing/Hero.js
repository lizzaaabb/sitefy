'use client'

import React from 'react'
import '../../styles/landing/Hero.css'

function Hero() {
  return (
    <section className="lp-hero">
      <div className="lp-hero-bg" aria-hidden="true" />

      <div className="lp-hero-inner">
        <p className="lp-hero-eyebrow">ლენდინგ გვერდები</p>

        <h1 className="lp-hero-heading">
          ლენდინგ გვერდი, რომელიც
          <span className="lp-hero-heading-accent"> გაყიდვებს ზრდის</span>
        </h1>

        <p className="lp-hero-desc">
          ვქმნით სწრაფ, კონვერტირებად ლენდინგ გვერდებს — თქვენი პროდუქტის ან
          სერვისის გასაყიდად შექმნილს, ერთი მკაფიო მიზნით.
        </p>

        <div className="lp-hero-actions">
          <a href="tel:+995575755712" className="lp-hero-btn-primary">
            მოგვწერეთ
          </a>
          <a href="#work" className="lp-hero-btn-secondary">
            ნამუშევრების ნახვა
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero