'use client'

import React, { useState } from 'react'
import { useLocale } from 'next-intl'
import '../../styles/tourism/TourismPricing.css'

const plans = [
  {
    price: "2000",
    titleGeo: "საინფორმაციო საიტი",
    titleEng: "Informational Website",
    noteGeo: "ონლაინ ყიდვის გარეშე",
    noteEng: "Without online purchasing",
    descriptionGeo:
      "მრავალგვერდიანი საინფორმაციო საიტი დანიშნულების ადგილების, ტურების და მიმოხილვების გვერდებით.",
    descriptionEng:
      "A multi-page informational site with destination, tour, and review pages.",
    groups: [
      {
        labelGeo: "დიზაინი",
        labelEng: "Design",
        items: [
          { geo: "ინდივიდუალური დიზაინი", eng: "Custom design" },
          { geo: "მობილურზე სრულად მორგებული", eng: "Fully mobile-responsive" },
        ],
      },
      {
        labelGeo: "გვერდები",
        labelEng: "Pages",
        items: [
          { geo: "დანიშნულების ადგილების/ტურების გვერდები", eng: "Destination/tour pages" },
          { geo: "ფოტო-გალერეა", eng: "Photo gallery" },
          { geo: "მიმოხილვები და შეფასებები", eng: "Reviews and ratings" },
          { geo: "საკონტაქტო ფორმა და რუკა", eng: "Contact form and map" },
        ],
      },
      {
        labelGeo: "ტექნიკური",
        labelEng: "Technical",
        items: [
          { geo: "ადმინ პანელი", eng: "Admin panel" },
          { geo: "ორენოვანი (ქართული + ინგლისური)", eng: "Bilingual (Georgian + English)" },
          { geo: "SEO ოპტიმიზაცია", eng: "SEO optimization" },
          { geo: "Next.js ტექნოლოგია", eng: "Built with Next.js" },
        ],
      },
    ],
  },
  {
    price: "4000",
    titleGeo: "ონლაინ ჯავშნები",
    titleEng: "Online Booking",
    noteGeo: "ონლაინ გადახდები შედის ფასში",
    noteEng: "Online payments included",
    descriptionGeo:
      "ტურების სრული ონლაინ გაყიდვა — ჯავშნებით, გადახდებით და ავტომატური დადასტურებით.",
    descriptionEng:
      "Full online tour sales — with bookings, payments, and automatic confirmation.",
    groups: [
      {
        labelGeo: "ყველაფერი საინფორმაციო საიტიდან",
        labelEng: "Everything in Informational Website",
        items: [],
      },
      {
        labelGeo: "ჯავშნა და გადახდები",
        labelEng: "Booking & Payments",
        items: [
          { geo: "ტურების კალენდარი და ხელმისაწვდომობა", eng: "Tour calendar and availability" },
          { geo: "ონლაინ ჯავშნა და გადახდა", eng: "Online booking and payment" },
          { geo: "ავტომატური დადასტურება ელფოსტაზე", eng: "Automatic email confirmation" },
          { geo: "სეზონური ფასების მართვა", eng: "Seasonal pricing management" },
          { geo: "მომხმარებლის პროფილი", eng: "Customer profile" },
        ],
      },
    ],
  },
  {
    price: "8000",
    titleGeo: "სრული პლატფორმა",
    titleEng: "Full Platform",
    noteGeo: "სრული ტურისტული ეკოსისტემა",
    noteEng: "A complete tourism ecosystem",
    descriptionGeo:
      "სრული ტურისტული ეკოსისტემა — ტრანსფერების ბუქინგი, მანქანების გაქირავება და დამატებითი სერვისები ერთად.",
    descriptionEng:
      "A complete tourism ecosystem — transfer booking, car rental, and additional services all in one.",
    groups: [
      {
        labelGeo: "ყველაფერი ონლაინ ჯავშნებიდან",
        labelEng: "Everything in Online Booking",
        items: [],
      },
      {
        labelGeo: "დამატებითი სერვისები",
        labelEng: "Additional Services",
        items: [
          { geo: "ტრანსფერების ბუქინგი", eng: "Transfer booking" },
          { geo: "მანქანების გაქირავების სისტემა", eng: "Car rental system" },
          { geo: "დამატებითი სერვისები ჯავშნისას (გიდი, დაზღვევა)", eng: "Additional services at booking (guide, insurance)" },
          { geo: "ანალიტიკის dashboard", eng: "Analytics dashboard" },
        ],
      },
    ],
  },
]

const additionalLanguage = {
  price: "+₾300",
  titleGeo: "დამატებითი ენა",
  titleEng: "Additional Language",
  descriptionGeo: "ქართული და ინგლისური ენები უკვე შედის ფასში — თითოეული დამატებითი ენის დამატება ღირს ₾300.",
  descriptionEng: "Georgian and English are already included — each additional language costs ₾300.",
}

const additionalFeatures = {
  titleGeo: "გსურთ დამატებითი ფუნქციები?",
  titleEng: "Want additional features?",
  descriptionGeo: "ჩამოთვლილი ფუნქციების გარდა შესაძლებელია დამატებითი შესაძლებლობების დამატებაც — ფასი შესაბამისად შეიცვლება.",
  descriptionEng: "Beyond what's listed, additional features can be added — the price will change accordingly.",
  examples: [
    { geo: "მრავალვალუტიანი გადახდები", eng: "Multi-currency payments" },
    { geo: "Live chat ინტეგრაცია", eng: "Live chat integration" },
    { geo: "ფასდაკლების კოდები", eng: "Discount codes" },
    { geo: "ბლოგი / სიახლეები", eng: "Blog / News section" },
    { geo: "ლოიალობის პროგრამა", eng: "Loyalty program" },
    { geo: "ტურ-ოპერატორის API ინტეგრაცია", eng: "Tour operator API integration" },
  ],
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TourismPricing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'
  const cta = isGeo ? 'შეკვეთა' : 'Order'

  const [active, setActive] = useState(0)
  const plan = plans[active]

  return (
    <section className="tourism-pricing-container">
      <div className="tourism-pricing-header">
        <h2 className={`tourism-pricing-heading ${localeClass}`}>
          {isGeo ? 'აირჩიეთ თქვენთვის შესაფერისი ვერსია' : "Choose the Plan That's Right for You"}
        </h2>
      </div>

      <div className="tp-switch" role="tablist">
        {plans.map((p, i) => (
          <button
            key={p.titleGeo}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`tp-switch-btn ${localeClass}${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {isGeo ? p.titleGeo : p.titleEng}
          </button>
        ))}
        <span className="tp-switch-track" aria-hidden="true">
          <span className="tp-switch-fill" style={{ width: `${((active + 1) / plans.length) * 100}%` }} />
        </span>
      </div>

      <div className="tp-stage" key={active}>
        <div className="tp-stage-left">
          <span className={`tp-stage-note ${localeClass}`}>{isGeo ? plan.noteGeo : plan.noteEng}</span>
          <div className="tp-stage-price">
            <span className="tp-stage-currency">₾</span>
            <span className="tp-stage-number">{plan.price}</span>
          </div>
          <h3 className={`tp-stage-title ${localeClass}`}>{isGeo ? plan.titleGeo : plan.titleEng}</h3>
          <p className={`tp-stage-desc ${localeClass}`}>{isGeo ? plan.descriptionGeo : plan.descriptionEng}</p>
          <a href="#order" className={`tp-stage-cta ${localeClass}`}>
            {cta} <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="tp-stage-right">
          {plan.groups.map((group) => (
            <div className="tp-feature-group" key={group.labelGeo}>
              <span className={`tp-feature-group-label ${localeClass}${group.items.length === 0 ? ' is-included' : ''}`}>
                {group.items.length === 0 && <CheckIcon />}
                {isGeo ? group.labelGeo : group.labelEng}
              </span>
              {group.items.length > 0 && (
                <div className="tp-feature-grid">
                  {group.items.map((item) => (
                    <span className={`tp-feature-item ${localeClass}`} key={item.geo}>
                      <span className="tp-feature-dot" />
                      {isGeo ? item.geo : item.eng}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="tourism-pricing-addon">
        <span className="tourism-pricing-addon-price">{additionalLanguage.price}</span>
        <div>
          <p className={`tourism-pricing-addon-title ${localeClass}`}>
            {isGeo ? additionalLanguage.titleGeo : additionalLanguage.titleEng}
          </p>
          <p className={`tourism-pricing-addon-description ${localeClass}`}>
            {isGeo ? additionalLanguage.descriptionGeo : additionalLanguage.descriptionEng}
          </p>
        </div>
      </div>

      <div className="tourism-pricing-extra">
        <h3 className={`tourism-pricing-extra-title ${localeClass}`}>
          {isGeo ? additionalFeatures.titleGeo : additionalFeatures.titleEng}
        </h3>
        <p className={`tourism-pricing-extra-description ${localeClass}`}>
          {isGeo ? additionalFeatures.descriptionGeo : additionalFeatures.descriptionEng}
        </p>
        <div className="tourism-pricing-extra-examples">
          {additionalFeatures.examples.map((example) => (
            <span className={`tourism-pricing-extra-chip ${localeClass}`} key={example.geo}>
              {isGeo ? example.geo : example.eng}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourismPricing