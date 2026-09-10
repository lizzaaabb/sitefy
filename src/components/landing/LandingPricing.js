'use client'

import React, { useState } from 'react'
import { useLocale } from 'next-intl'
import '../../styles/landing/LandingPricing.css'

const plans = [
  {
    price: "500",
    titleGeo: "სტანდარტული ვერსია",
    titleEng: "Standard Package",
    noteGeo: "ადმინ პანელი არ შედის",
    noteEng: "Admin panel not included",
    descriptionGeo:
      "თანამედროვე ერთგვერდიანი ვებსაიტი თქვენი ბიზნესის ონლაინ წარმოსაჩენად.",
    descriptionEng:
      "A modern one-page website to showcase your business online.",
    groups: [
      {
        labelGeo: "დიზაინი",
        labelEng: "Design",
        items: [
          { geo: "ინდივიდუალური დიზაინი", eng: "Custom design" },
          { geo: "მობილურზე სრულად მორგებული დიზაინი", eng: "Fully mobile-responsive design" },
        ],
      },
      {
        labelGeo: "სექციები",
        labelEng: "Sections",
        items: [
          { geo: "ერთგვერდიანი სტრუქტურა", eng: "One-page structure" },
          { geo: "მთავარი ლენდინგ სექცია", eng: "Main landing section" },
          { geo: "ბიზნესის შესახებ", eng: "About the business" },
          { geo: "ბიზნესის სტატისტიკა", eng: "Business statistics" },
          { geo: "სერვისების სექცია", eng: "Services section" },
          { geo: "რატომ უნდა აგირჩიოთ", eng: "Why choose you" },
          { geo: "საკონტაქტო ინფორმაცია", eng: "Contact information" },
        ],
      },
      {
        labelGeo: "ტექნიკური",
        labelEng: "Technical",
        items: [
          { geo: "SEO-სთვის ოპტიმიზებული სტრუქტურა", eng: "SEO-optimized structure" },
          { geo: "Next.js ტექნოლოგია", eng: "Built with Next.js" },
        ],
      },
    ],
  },
  {
    price: "1000",
    titleGeo: "ვერსია ადმინ პანელით",
    titleEng: "Package with Admin Panel",
    noteGeo: "ადმინ პანელი შედის ფასში",
    noteEng: "Admin panel included in the price",
    descriptionGeo:
      "ერთგვერდიანი ვებსაიტი ადმინ პანელით, რომელიც საშუალებას გაძლევთ თავად მართოთ ძირითადი კონტენტი.",
    descriptionEng:
      "A one-page website with an admin panel that lets you manage the core content yourself.",
    groups: [
      {
        labelGeo: "ყველაფერი ₾500-იან ვერსიაში",
        labelEng: "Everything in the ₾500 package",
        items: [],
      },
      {
        labelGeo: "ადმინ პანელი",
        labelEng: "Admin Panel",
        items: [
          { geo: "ადმინ პანელი", eng: "Admin panel" },
          { geo: "ტექსტების შეცვლა", eng: "Edit text content" },
          { geo: "სერვისების დამატება და რედაქტირება", eng: "Add and edit services" },
          { geo: "სურათების მართვა", eng: "Image management" },
          { geo: "ძირითადი კონტენტის მართვა", eng: "Core content management" },
          { geo: "ვებსაიტის განახლება დეველოპერის დახმარების გარეშე", eng: "Update the website without developer help" },
        ],
      },
    ],
  },
]

const additionalLanguage = {
  price: "+₾100",
  titleGeo: "დამატებითი ენა",
  titleEng: "Additional Language",
  descriptionGeo: "თითოეული დამატებითი ენის დამატება ღირს ₾100.",
  descriptionEng: "Each additional language costs ₾100.",
}

const additionalFeatures = {
  titleGeo: "გსურთ დამატებითი ფუნქციები?",
  titleEng: "Want additional features?",
  descriptionGeo:
    "სტანდარტულ პაკეტში ჩამოთვლილი ფუნქციების გარდა სხვა ფუნქციის დამატების შემთხვევაში პროექტის ფასი შესაბამისად შეიცვლება.",
  descriptionEng:
    "If you need features beyond those listed in the standard package, the project price will change accordingly.",
  examples: [
    { geo: "ონლაინ ჯავშნის სისტემა", eng: "Online booking system" },
    { geo: "ონლაინ გადახდები", eng: "Online payments" },
    { geo: "მომხმარებლის რეგისტრაცია და ავტორიზაცია", eng: "User registration and login" },
    { geo: "დამატებითი ინტეგრაციები", eng: "Additional integrations" },
    { geo: "სხვა ინდივიდუალური ფუნქციები", eng: "Other custom features" },
  ],
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LandingPricing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'
  const cta = isGeo ? 'შეკვეთა' : 'Order'

  const [active, setActive] = useState(0)
  const plan = plans[active]

  return (
    <section className="landing-pricing-container">
      <div className="landing-pricing-header">
        <h2 className={`landing-pricing-heading ${localeClass}`}>
          {isGeo ? 'აირჩიეთ თქვენთვის შესაფერისი ვერსია' : "Choose the Plan That's Right for You"}
        </h2>
      </div>

      <div className="lp-switch" role="tablist">
        {plans.map((p, i) => (
          <button
            key={p.titleGeo}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`lp-switch-btn ${localeClass}${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {isGeo ? p.titleGeo : p.titleEng}
          </button>
        ))}
        <span className="lp-switch-track" aria-hidden="true">
          <span className="lp-switch-fill" style={{ width: `${((active + 1) / plans.length) * 100}%` }} />
        </span>
      </div>

      <div className="lp-stage" key={active}>
        <div className="lp-stage-left">
          <span className={`lp-stage-note ${localeClass}`}>{isGeo ? plan.noteGeo : plan.noteEng}</span>
          <div className="lp-stage-price">
            <span className="lp-stage-currency">₾</span>
            <span className="lp-stage-number">{plan.price}</span>
          </div>
          <h3 className={`lp-stage-title ${localeClass}`}>{isGeo ? plan.titleGeo : plan.titleEng}</h3>
          <p className={`lp-stage-desc ${localeClass}`}>{isGeo ? plan.descriptionGeo : plan.descriptionEng}</p>
          <a href="#order" className={`lp-stage-cta ${localeClass}`}>
            {cta} <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="lp-stage-right">
          {plan.groups.map((group) => (
            <div className="lp-feature-group" key={group.labelGeo}>
              <span className={`lp-feature-group-label ${localeClass}${group.items.length === 0 ? ' is-included' : ''}`}>
                {group.items.length === 0 && <CheckIcon />}
                {isGeo ? group.labelGeo : group.labelEng}
              </span>
              {group.items.length > 0 && (
                <div className="lp-feature-grid">
                  {group.items.map((item) => (
                    <span className={`lp-feature-item ${localeClass}`} key={item.geo}>
                      <span className="lp-feature-dot" />
                      {isGeo ? item.geo : item.eng}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="landing-pricing-addon">
        <span className="landing-pricing-addon-price">{additionalLanguage.price}</span>
        <div>
          <p className={`landing-pricing-addon-title ${localeClass}`}>
            {isGeo ? additionalLanguage.titleGeo : additionalLanguage.titleEng}
          </p>
          <p className={`landing-pricing-addon-description ${localeClass}`}>
            {isGeo ? additionalLanguage.descriptionGeo : additionalLanguage.descriptionEng}
          </p>
        </div>
      </div>

      <div className="landing-pricing-extra">
        <h3 className={`landing-pricing-extra-title ${localeClass}`}>
          {isGeo ? additionalFeatures.titleGeo : additionalFeatures.titleEng}
        </h3>
        <p className={`landing-pricing-extra-description ${localeClass}`}>
          {isGeo ? additionalFeatures.descriptionGeo : additionalFeatures.descriptionEng}
        </p>
        <div className="landing-pricing-extra-examples">
          {additionalFeatures.examples.map((example) => (
            <span className={`landing-pricing-extra-chip ${localeClass}`} key={example.geo}>
              {isGeo ? example.geo : example.eng}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LandingPricing