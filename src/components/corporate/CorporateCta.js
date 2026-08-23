'use client'
import React from 'react'
import '../../styles/corporate/CorporateCta.css'

const content = {
  title: "ვებსაიტის შესაკვეთად დაგვიკავშირდით",
  description:
    "მოგვწერეთ თქვენი ბიზნესის შესახებ და განვიხილოთ ვებსაიტის დეტალები.",

  cta: {
    text: "დაგვიკავშირდით →",
    href: "tel:+995575755712",
  },
};

function CorporateCta() {
  return (
    <section className="corporate-cta-container">
      <div className="corporate-cta-card">
        <div className="corporate-cta-text">
          <h2 className="corporate-cta-heading">{content.title}</h2>
          <p className="corporate-cta-desc">{content.description}</p>
        </div>

        <div className="corporate-cta-buttons">
          <a href={content.cta.href} className="corporate-cta-btn-primary">
            {content.cta.text}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CorporateCta