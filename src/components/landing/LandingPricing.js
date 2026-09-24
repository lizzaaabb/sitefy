'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import '../../styles/landing/LandingPricing.css'

const plans = [
  {
    price: "500",
    noteGeo: "ადმინ პანელი არ შედის",
    noteEng: "Admin panel not included",
    titleGeo: "სტანდარტული ვერსია",
    titleEng: "Standard Package",
    tabGeo: "სტანდარტული",
    tabEng: "Standard",
    descriptionGeo: "სრული ერთგვერდიანი ვებსაიტი თქვენი ბიზნესის ონლაინ წარმოსაჩენად.",
    descriptionEng: "A complete one-page website to showcase your business online.",
    features: [
      { geo: "ინდივიდუალური დიზაინი", eng: "Custom design" },
      { geo: "მობილურზე მორგებული", eng: "Mobile-responsive" },
      { geo: "ყველა სექცია (6)", eng: "All sections (6)" },
      { geo: "SEO ოპტიმიზაცია", eng: "SEO optimization" },
      { geo: "Next.js ტექნოლოგია", eng: "Built with Next.js" },
    ],
  },
  {
    price: "1000",
    noteGeo: "ადმინ პანელი შედის ფასში",
    noteEng: "Admin panel included",
    titleGeo: "ვერსია ადმინ პანელით",
    titleEng: "Package with Admin Panel",
    tabGeo: "ადმინ პანელით",
    tabEng: "With Admin Panel",
    descriptionGeo: "იგივე სრული საიტი + ადმინ პანელი, სადაც თავად მართავთ კონტენტს.",
    descriptionEng: "The same complete site + an admin panel to manage content yourself.",
    features: [
      { geo: "ყველაფერი ₾500-ში", eng: "Everything in ₾500" },
      { geo: "ადმინ პანელი", eng: "Admin panel" },
      { geo: "ტექსტების შეცვლა", eng: "Edit text content" },
      { geo: "სურათების მართვა", eng: "Image management" },
      { geo: "განახლება დეველოპერის გარეშე", eng: "Update without a developer" },
    ],
  },
]

const additionalLanguage = {
  price: "+₾100",
  labelGeo: "თითოეული დამატებითი ენა",
  labelEng: "Each additional language",
}

const additionalFeatures = {
  titleGeo: "გსურთ დამატებითი ფუნქციები?",
  titleEng: "Want additional features?",
  descriptionGeo: "სტანდარტულ პაკეტში ჩამოთვლილის გარდა სხვა ფუნქციის დამატებისას პროექტის ფასი შესაბამისად შეიცვლება.",
  descriptionEng: "If you need features beyond the standard package, the project price will change accordingly.",
  examples: [
    { geo: "ონლაინ ჯავშნის სისტემა", eng: "Online booking system" },
    { geo: "ონლაინ გადახდები", eng: "Online payments" },
    { geo: "რეგისტრაცია / ავტორიზაცია", eng: "Registration / login" },
    { geo: "დამატებითი ინტეგრაციები", eng: "Additional integrations" },
    { geo: "სხვა ინდივიდუალური ფუნქციები", eng: "Other custom features" },
  ],
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LandingPricing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const [active, setActive] = useState(0)
  const plan = plans[active]

  const tabRefs = useRef([])
  const [pill, setPill] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const el = tabRefs.current[active]
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth })
  }, [active, locale])

  useEffect(() => {
    function onResize() {
      const el = tabRefs.current[active]
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [active])

  return (
    <section className="landing-pricing-container">
      <div className="lp-inner">
        <div className="lp-header">
          <span className={`lp-eyebrow ${localeClass}`}>{isGeo ? 'ფასები' : 'Pricing'}</span>
          <h2 className={`lp-heading ${localeClass}`}>
            {isGeo ? 'აირჩიეთ თქვენთვის შესაფერისი ვერსია' : "Choose the Plan That's Right for You"}
          </h2>
          <p className={`lp-subhead ${localeClass}`}>
            {isGeo
              ? 'გამჭვირვალე ფასი, ფარული ხარჯების გარეშე — ორივე პაკეტში ულამაზესი, მობილურზე მორგებული საიტი.'
              : 'Transparent pricing, no hidden costs — both packages include a beautiful, mobile-ready site.'}
          </p>
        </div>

        {/* ==== THE CARD ==== */}
        <div className="lp-card">
          <span className="lp-card-glow" aria-hidden="true" />

          {/* toggle inside card */}
          <div className="lp-toggle" role="tablist">
            <span className="lp-toggle-pill" style={{ transform: `translateX(${pill.left}px)`, width: pill.width }} />
            {plans.map((p, i) => (
              <button
                key={p.price}
                type="button"
                role="tab"
                aria-selected={i === active}
                ref={(el) => (tabRefs.current[i] = el)}
                className={`lp-tab ${localeClass}${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                {isGeo ? p.tabGeo : p.tabEng}
              </button>
            ))}
          </div>

          <div className="lp-stage" key={active}>
            <span className={`lp-note ${localeClass}`}>{isGeo ? plan.noteGeo : plan.noteEng}</span>
            <div className="lp-price">
              <sup className="lp-cur">₾</sup>{plan.price}
            </div>
            <h3 className={`lp-title ${localeClass}`}>{isGeo ? plan.titleGeo : plan.titleEng}</h3>
            <p className={`lp-desc ${localeClass}`}>{isGeo ? plan.descriptionGeo : plan.descriptionEng}</p>

            <div className="lp-feats">
              {plan.features.map((f) => (
                <span className={`lp-feat ${localeClass}`} key={f.geo}>
                  <span className="lp-tick"><CheckIcon /></span>
                  {isGeo ? f.geo : f.eng}
                </span>
              ))}
            </div>

            <a href="#order" className={`lp-cta ${localeClass}`}>
              {isGeo ? 'შეკვეთა' : 'Order'} <span className="lp-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          {/* addon inside card */}
          <div className="lp-addon">
            <span className="lp-addon-price">{additionalLanguage.price}</span>
            <span className={`lp-addon-label ${localeClass}`}>
              {isGeo ? additionalLanguage.labelGeo : additionalLanguage.labelEng}
            </span>
          </div>
        </div>

        {/* extra features below */}
        <div className="lp-extra">
          <h3 className={`lp-extra-title ${localeClass}`}>
            {isGeo ? additionalFeatures.titleGeo : additionalFeatures.titleEng}
          </h3>
          <p className={`lp-extra-desc ${localeClass}`}>
            {isGeo ? additionalFeatures.descriptionGeo : additionalFeatures.descriptionEng}
          </p>
          <div className="lp-chips">
            {additionalFeatures.examples.map((ex) => (
              <span className={`lp-chip ${localeClass}`} key={ex.geo}>
                {isGeo ? ex.geo : ex.eng}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPricing