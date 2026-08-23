'use client'
import React from 'react'
import '../../styles/landing/LandingCta.css'

const content = {
  title: "ვებსაიტის შესაკვეთად დაგვიკავშირდით",
  description:
    "მოგვწერეთ თქვენი ბიზნესის შესახებ და განვიხილოთ ვებსაიტის დეტალები.",

  cta: {
    text: "დაგვიკავშირდით →",
    href: "tel:+995575755712",
  },
};

function LandingCta() {
  return (
    <section className="landing-cta-container">
      <div className="landing-cta-card">
        <div className="landing-cta-text">
          <h2 className="landing-cta-heading">{content.title}</h2>
          <p className="landing-cta-desc">{content.description}</p>
        </div>

        <div className="landing-cta-buttons">
          <a href={content.cta.href} className="landing-cta-btn-primary">
            {content.cta.text}
          </a>
        </div>
      </div>
    </section>
  )
}

export default LandingCta