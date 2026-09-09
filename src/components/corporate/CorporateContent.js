'use client'

import React, { useState } from 'react'
import { useLocale } from 'next-intl'
import '../../styles/corporate/CorporateContent.css'

const content = {
  titleGeo: "რა შედის კორპორატიულ ვებსაიტში",
  titleEng: "What's Included in a Corporate Website",

  descriptionGeo:
    "კომპანიის საჭიროებების მიხედვით შექმნილი მრავალგვერდიანი სტრუქტურა, რომელიც მომხმარებელს თქვენი ბიზნესის შესახებ სრულ და ორგანიზებულ ინფორმაციას აწვდის.",
  descriptionEng:
    "A multi-page structure built around your company's needs, giving visitors complete, well-organized information about your business.",

  sections: [
    {
      titleGeo: "მთავარი გვერდი",
      titleEng: "Homepage",
      descriptionGeo:
        "კომპანიის ძირითადი საქმიანობა, მთავარი სერვისები და მნიშვნელოვანი ინფორმაცია ერთ სივრცეში.",
      descriptionEng:
        "Your company's core activity, main services, and key information in one place.",
    },

    {
      titleGeo: "ჩვენ შესახებ",
      titleEng: "About Us",
      descriptionGeo:
        "კომპანიის ისტორია, გამოცდილება, მისია და სხვა მნიშვნელოვანი ინფორმაცია.",
      descriptionEng:
        "Company history, experience, mission, and other important information.",
    },

    {
      titleGeo: "სერვისები",
      titleEng: "Services",
      descriptionGeo:
        "თქვენი სერვისების დეტალური აღწერა და მომხმარებლისთვის მკაფიოდ წარმოდგენა.",
      descriptionEng:
        "A detailed description of your services, presented clearly for visitors.",
    },

    {
      titleGeo: "პროექტები / პორტფოლიო",
      titleEng: "Projects / Portfolio",
      descriptionGeo:
        "შესრულებული სამუშაოებისა და პროექტების წარმოდგენა, რომელიც თქვენს გამოცდილებასა და შესაძლებლობებს აჩვენებს.",
      descriptionEng:
        "A showcase of completed work and projects that demonstrates your experience and capabilities.",
    },

    {
      titleGeo: "ბლოგი / სიახლეები",
      titleEng: "Blog / News",
      descriptionGeo:
        "სტატიების, სიახლეებისა და კომპანიისთვის მნიშვნელოვანი ინფორმაციის გამოქვეყნება.",
      descriptionEng:
        "Publishing articles, news, and information relevant to your company.",
    },

    {
      titleGeo: "გუნდი",
      titleEng: "Team",
      descriptionGeo:
        "კომპანიის გუნდის წევრებისა და მათი პოზიციების წარმოდგენა.",
      descriptionEng:
        "Introducing your team members and their roles.",
    },

    {
      titleGeo: "კონტაქტი",
      titleEng: "Contact",
      descriptionGeo:
        "საკონტაქტო ინფორმაცია, საკონტაქტო ფორმა, სოციალური ქსელები და კომპანიის მდებარეობა.",
      descriptionEng:
        "Contact details, a contact form, social media links, and your company's location.",
    },
  ],
};

function pad(n) {
  return String(n).padStart(2, '0')
}

function CorporateContent() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const [active, setActive] = useState(0)
  const current = content.sections[active]

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng

  return (
    <section className="corporate-content-container">
      <span className="corporate-content-watermark" key={`wm-${active}`} aria-hidden="true">
        {pad(active + 1)}
      </span>

      <div className="corporate-content-header">
        <h2 className={`corporate-content-heading ${localeClass}`}>{title}</h2>
        <p className={`corporate-content-description ${localeClass}`}>{description}</p>
      </div>

      <div className="corporate-content-split">
        <nav className="corporate-content-nav">
          {content.sections.map((section, i) => {
            const sectionTitle = isGeo ? section.titleGeo : section.titleEng
            return (
              <button
                key={section.titleGeo}
                type="button"
                className={`corporate-content-nav-item${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="corporate-content-nav-index">{pad(i + 1)}</span>
                <span className={`corporate-content-nav-title ${localeClass}`}>{sectionTitle}</span>
                <span className="corporate-content-nav-leader" aria-hidden="true" />
              </button>
            )
          })}
        </nav>

        <div className="corporate-content-panel">
          <div className="corporate-content-panel-body" key={active}>
            <span className="corporate-content-panel-accent" aria-hidden="true" />
            <h3 className={`corporate-content-panel-title ${localeClass}`}>
              {isGeo ? current.titleGeo : current.titleEng}
            </h3>
            <p className={`corporate-content-panel-description ${localeClass}`}>
              {isGeo ? current.descriptionGeo : current.descriptionEng}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CorporateContent