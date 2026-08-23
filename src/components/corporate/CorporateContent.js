'use client'

import React, { useState } from 'react'
import '../../styles/corporate/CorporateContent.css'

const content = {
  title: "რა შედის კორპორატიულ ვებსაიტში",

  description:
    "კომპანიის საჭიროებების მიხედვით შექმნილი მრავალგვერდიანი სტრუქტურა, რომელიც მომხმარებელს თქვენი ბიზნესის შესახებ სრულ და ორგანიზებულ ინფორმაციას აწვდის.",

  sections: [
    {
      title: "მთავარი გვერდი",
      description:
        "კომპანიის ძირითადი საქმიანობა, მთავარი სერვისები და მნიშვნელოვანი ინფორმაცია ერთ სივრცეში.",
    },

    {
      title: "ჩვენ შესახებ",
      description:
        "კომპანიის ისტორია, გამოცდილება, მისია და სხვა მნიშვნელოვანი ინფორმაცია.",
    },

    {
      title: "სერვისები",
      description:
        "თქვენი სერვისების დეტალური აღწერა და მომხმარებლისთვის მკაფიოდ წარმოდგენა.",
    },

    {
      title: "პროექტები / პორტფოლიო",
      description:
        "შესრულებული სამუშაოებისა და პროექტების წარმოდგენა, რომელიც თქვენს გამოცდილებასა და შესაძლებლობებს აჩვენებს.",
    },

    {
      title: "ბლოგი / სიახლეები",
      description:
        "სტატიების, სიახლეებისა და კომპანიისთვის მნიშვნელოვანი ინფორმაციის გამოქვეყნება.",
    },

    {
      title: "გუნდი",
      description:
        "კომპანიის გუნდის წევრებისა და მათი პოზიციების წარმოდგენა.",
    },

    {
      title: "კონტაქტი",
      description:
        "საკონტაქტო ინფორმაცია, საკონტაქტო ფორმა, სოციალური ქსელები და კომპანიის მდებარეობა.",
    },
  ],
};

function pad(n) {
  return String(n).padStart(2, '0')
}

function CorporateContent() {
  const [active, setActive] = useState(0)
  const current = content.sections[active]

  return (
    <section className="corporate-content-container">
      <span className="corporate-content-watermark" key={`wm-${active}`} aria-hidden="true">
        {pad(active + 1)}
      </span>

      <div className="corporate-content-header">
        <h2 className="corporate-content-heading">{content.title}</h2>
        <p className="corporate-content-description">{content.description}</p>
      </div>

      <div className="corporate-content-split">
        <nav className="corporate-content-nav">
          {content.sections.map((section, i) => (
            <button
              key={section.title}
              type="button"
              className={`corporate-content-nav-item${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="corporate-content-nav-index">{pad(i + 1)}</span>
              <span className="corporate-content-nav-title">{section.title}</span>
              <span className="corporate-content-nav-leader" aria-hidden="true" />
            </button>
          ))}
        </nav>

        <div className="corporate-content-panel">
          <div className="corporate-content-panel-body" key={active}>
            <span className="corporate-content-panel-accent" aria-hidden="true" />
            <h3 className="corporate-content-panel-title">{current.title}</h3>
            <p className="corporate-content-panel-description">{current.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CorporateContent