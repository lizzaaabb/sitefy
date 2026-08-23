'use client'

import React, { useState } from 'react'
import '../../styles/landing/LandingContent.css'

const content = {
  title: "რა შედის ვებსაიტში",
  description:
    "ვებსაიტის სტრუქტურა თქვენი ბიზნესის საჭიროებების მიხედვით იგეგმება და მოიცავს იმ ძირითად ინფორმაციას, რომელიც მომხმარებელს თქვენი საქმიანობის გასაცნობად და თქვენთან დასაკავშირებლად სჭირდება.",

  sections: [
    {
      title: "მთავარი სექცია",
      description:
        "მომხმარებლისთვის პირველივე ეკრანზე ვაჩვენებთ თქვენი ბიზნესის მთავარ შეთავაზებას და ყველაზე მნიშვნელოვან ინფორმაციას.",
    },
    {
      title: "ბიზნესის შესახებ",
      description:
        "წარმოაჩინეთ თქვენი გამოცდილება, საქმიანობა და ბიზნესის ისტორია მარტივი და გასაგები ფორმით.",
    },
    {
      title: "ბიზნესის სტატისტიკა",
      description:
        "აჩვენეთ თქვენი გამოცდილება კონკრეტული მონაცემებით — რამდენი წელია ბაზარზე ხართ, რამდენ კლიენტს ემსახურებით, რამდენი პროექტი გაქვთ შესრულებული და სხვა მნიშვნელოვანი მაჩვენებლები.",
    },
    {
      title: "სერვისები",
      description:
        "მომხმარებელს მკაფიოდ გააცანით თქვენი ძირითადი სერვისები და ის, რასაც თქვენს ბიზნესში სთავაზობთ.",
    },
    {
      title: "რატომ უნდა აგირჩიოთ",
      description:
        "გამოკვეთეთ თქვენი მთავარი უპირატესობები და მიზეზები, რის გამოც მომხმარებელმა თქვენი ბიზნესი უნდა აირჩიოს.",
    },
    {
      title: "საკონტაქტო ინფორმაცია",
      description:
        "მომხმარებელს მარტივად მიეცით თქვენთან დაკავშირების შესაძლებლობა — ტელეფონით, ელფოსტით, სოციალური ქსელებით ან საკონტაქტო ფორმით.",
    },
  ],
};

function pad(n) {
  return String(n).padStart(2, '0')
}

function LandingContent() {
  const [active, setActive] = useState(0)
  const current = content.sections[active]

  return (
    <section className="landing-content-container">
      <span className="landing-content-watermark" key={`wm-${active}`} aria-hidden="true">
        {pad(active + 1)}
      </span>

      <div className="landing-content-header">
        <h2 className="landing-content-heading">{content.title}</h2>
        <p className="landing-content-description">{content.description}</p>
      </div>

      <div className="landing-content-split">
        <nav className="landing-content-nav">
          {content.sections.map((section, i) => (
            <button
              key={section.title}
              type="button"
              className={`landing-content-nav-item${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="landing-content-nav-index">{pad(i + 1)}</span>
              <span className="landing-content-nav-title">{section.title}</span>
              <span className="landing-content-nav-leader" aria-hidden="true" />
            </button>
          ))}
        </nav>

        <div className="landing-content-panel">
          <div className="landing-content-panel-body" key={active}>
            <span className="landing-content-panel-accent" aria-hidden="true" />
            <h3 className="landing-content-panel-title">{current.title}</h3>
            <p className="landing-content-panel-description">{current.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingContent