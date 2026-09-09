'use client'

import React, { useState } from 'react'
import { useLocale } from 'next-intl'
import '../../styles/landing/LandingContent.css'

const content = {
  titleGeo: "რა შედის ვებსაიტში",
  titleEng: "What's Included in the Website",

  descriptionGeo:
    "ვებსაიტის სტრუქტურა თქვენი ბიზნესის საჭიროებების მიხედვით იგეგმება და მოიცავს იმ ძირითად ინფორმაციას, რომელიც მომხმარებელს თქვენი საქმიანობის გასაცნობად და თქვენთან დასაკავშირებლად სჭირდება.",
  descriptionEng:
    "The website's structure is planned around your business needs and includes the core information visitors need to learn about what you do and get in touch with you.",

  sections: [
    {
      titleGeo: "მთავარი სექცია",
      titleEng: "Hero Section",
      descriptionGeo:
        "მომხმარებლისთვის პირველივე ეკრანზე ვაჩვენებთ თქვენი ბიზნესის მთავარ შეთავაზებას და ყველაზე მნიშვნელოვან ინფორმაციას.",
      descriptionEng:
        "The very first screen shows visitors your business's main offering and the most important information.",
    },
    {
      titleGeo: "ბიზნესის შესახებ",
      titleEng: "About the Business",
      descriptionGeo:
        "წარმოაჩინეთ თქვენი გამოცდილება, საქმიანობა და ბიზნესის ისტორია მარტივი და გასაგები ფორმით.",
      descriptionEng:
        "Showcase your experience, activity, and business history in a simple, easy-to-understand way.",
    },
    {
      titleGeo: "ბიზნესის სტატისტიკა",
      titleEng: "Business Statistics",
      descriptionGeo:
        "აჩვენეთ თქვენი გამოცდილება კონკრეტული მონაცემებით — რამდენი წელია ბაზარზე ხართ, რამდენ კლიენტს ემსახურებით, რამდენი პროექტი გაქვთ შესრულებული და სხვა მნიშვნელოვანი მაჩვენებლები.",
      descriptionEng:
        "Show your experience through concrete numbers — how many years you've been in business, how many clients you serve, how many projects you've completed, and other key metrics.",
    },
    {
      titleGeo: "სერვისები",
      titleEng: "Services",
      descriptionGeo:
        "მომხმარებელს მკაფიოდ გააცანით თქვენი ძირითადი სერვისები და ის, რასაც თქვენს ბიზნესში სთავაზობთ.",
      descriptionEng:
        "Clearly introduce your core services and what you offer through your business.",
    },
    {
      titleGeo: "რატომ უნდა აგირჩიოთ",
      titleEng: "Why Choose You",
      descriptionGeo:
        "გამოკვეთეთ თქვენი მთავარი უპირატესობები და მიზეზები, რის გამოც მომხმარებელმა თქვენი ბიზნესი უნდა აირჩიოს.",
      descriptionEng:
        "Highlight your main advantages and the reasons visitors should choose your business.",
    },
    {
      titleGeo: "საკონტაქტო ინფორმაცია",
      titleEng: "Contact Information",
      descriptionGeo:
        "მომხმარებელს მარტივად მიეცით თქვენთან დაკავშირების შესაძლებლობა — ტელეფონით, ელფოსტით, სოციალური ქსელებით ან საკონტაქტო ფორმით.",
      descriptionEng:
        "Make it easy for visitors to reach you — by phone, email, social media, or a contact form.",
    },
  ],
};

function pad(n) {
  return String(n).padStart(2, '0')
}

function LandingContent() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const [active, setActive] = useState(0)
  const current = content.sections[active]

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng

  return (
    <section className="landing-content-container">
      <span className="landing-content-watermark" key={`wm-${active}`} aria-hidden="true">
        {pad(active + 1)}
      </span>

      <div className="landing-content-header">
        <h2 className={`landing-content-heading ${localeClass}`}>{title}</h2>
        <p className={`landing-content-description ${localeClass}`}>{description}</p>
      </div>

      <div className="landing-content-split">
        <nav className="landing-content-nav">
          {content.sections.map((section, i) => {
            const sectionTitle = isGeo ? section.titleGeo : section.titleEng
            return (
              <button
                key={section.titleGeo}
                type="button"
                className={`landing-content-nav-item${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="landing-content-nav-index">{pad(i + 1)}</span>
                <span className={`landing-content-nav-title ${localeClass}`}>{sectionTitle}</span>
                <span className="landing-content-nav-leader" aria-hidden="true" />
              </button>
            )
          })}
        </nav>

        <div className="landing-content-panel">
          <div className="landing-content-panel-body" key={active}>
            <span className="landing-content-panel-accent" aria-hidden="true" />
            <h3 className={`landing-content-panel-title ${localeClass}`}>
              {isGeo ? current.titleGeo : current.titleEng}
            </h3>
            <p className={`landing-content-panel-description ${localeClass}`}>
              {isGeo ? current.descriptionGeo : current.descriptionEng}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingContent