'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/landing/LandingPricing.css'

const content = {
  titleGeo: "აირჩიეთ თქვენთვის შესაფერისი ვერსია",
  titleEng: "Choose the Plan That's Right for You",

  plans: [
    {
      price: "₾500",
      titleGeo: "სტანდარტული ვერსია",
      titleEng: "Standard Package",
      descriptionGeo:
        "თანამედროვე ერთგვერდიანი ვებსაიტი თქვენი ბიზნესის ონლაინ წარმოსაჩენად.",
      descriptionEng:
        "A modern one-page website to showcase your business online.",
      noteGeo: "ადმინ პანელი არ შედის",
      noteEng: "Admin panel not included",
      features: [
        { geo: "ინდივიდუალური დიზაინი", eng: "Custom design" },
        { geo: "ერთგვერდიანი სტრუქტურა", eng: "One-page structure" },
        { geo: "მთავარი ლენდინგ სექცია", eng: "Main landing section" },
        { geo: "ბიზნესის შესახებ", eng: "About the business" },
        { geo: "ბიზნესის სტატისტიკა", eng: "Business statistics" },
        { geo: "სერვისების სექცია", eng: "Services section" },
        { geo: "რატომ უნდა აგირჩიოთ", eng: "Why choose you" },
        { geo: "საკონტაქტო ინფორმაცია", eng: "Contact information" },
        { geo: "მობილურზე სრულად მორგებული დიზაინი", eng: "Fully mobile-responsive design" },
        { geo: "SEO-სთვის ოპტიმიზებული სტრუქტურა", eng: "SEO-optimized structure" },
        { geo: "Next.js ტექნოლოგია", eng: "Built with Next.js" },
      ],
    },

    {
      price: "₾1000",
      titleGeo: "ვერსია ადმინ პანელით",
      titleEng: "Package with Admin Panel",
      descriptionGeo:
        "ერთგვერდიანი ვებსაიტი ადმინ პანელით, რომელიც საშუალებას გაძლევთ თავად მართოთ ძირითადი კონტენტი.",
      descriptionEng:
        "A one-page website with an admin panel that lets you manage the core content yourself.",
      noteGeo: "ადმინ პანელი შედის ფასში",
      noteEng: "Admin panel included in the price",
      features: [
        { geo: "ყველაფერი, რაც შედის ₾500-იან ვერსიაში", eng: "Everything included in the ₾500 package" },
        { geo: "ადმინ პანელი", eng: "Admin panel" },
        { geo: "ტექსტების შეცვლა", eng: "Edit text content" },
        { geo: "სერვისების დამატება და რედაქტირება", eng: "Add and edit services" },
        { geo: "სურათების მართვა", eng: "Image management" },
        { geo: "ძირითადი კონტენტის მართვა", eng: "Core content management" },
        { geo: "ვებსაიტის განახლება დეველოპერის დახმარების გარეშე", eng: "Update the website without developer help" },
      ],
    },
  ],

  ctaGeo: "შეკვეთა",
  ctaEng: "Order",

  additionalLanguage: {
    price: "+₾100",
    titleGeo: "დამატებითი ენა",
    titleEng: "Additional Language",
    descriptionGeo: "თითოეული დამატებითი ენის დამატება ღირს ₾100.",
    descriptionEng: "Each additional language costs ₾100.",
  },

  additionalFeatures: {
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
  },
};

function LandingPricing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const cta = isGeo ? content.ctaGeo : content.ctaEng

  return (
    <section className="landing-pricing-container">
      <div className="landing-pricing-header">
        <h2 className={`landing-pricing-heading ${localeClass}`}>{title}</h2>
      </div>

      <div className="landing-pricing-grid">
        {content.plans.map((plan) => {
          const planTitle = isGeo ? plan.titleGeo : plan.titleEng
          const planDescription = isGeo ? plan.descriptionGeo : plan.descriptionEng
          const planNote = isGeo ? plan.noteGeo : plan.noteEng

          return (
            <div className="landing-pricing-col" key={plan.titleGeo}>
              <span className="landing-pricing-accent" aria-hidden="true" />

              <span className="landing-pricing-price">{plan.price}</span>
              <p className={`landing-pricing-note ${localeClass}`}>{planNote}</p>

              <h3 className={`landing-pricing-title ${localeClass}`}>{planTitle}</h3>
              <p className={`landing-pricing-description ${localeClass}`}>{planDescription}</p>

              <ul className={`landing-pricing-features ${localeClass}`}>
                {plan.features.map((f) => (
                  <li key={f.geo}>
                    <span className="landing-pricing-feature-index" aria-hidden="true" />
                    {isGeo ? f.geo : f.eng}
                  </li>
                ))}
              </ul>

              <a href="#order" className={`landing-pricing-cta ${localeClass}`}>
                {cta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )
        })}
      </div>

      <div className="landing-pricing-addon">
        <span className="landing-pricing-addon-price">{content.additionalLanguage.price}</span>
        <div>
          <p className={`landing-pricing-addon-title ${localeClass}`}>
            {isGeo ? content.additionalLanguage.titleGeo : content.additionalLanguage.titleEng}
          </p>
          <p className={`landing-pricing-addon-description ${localeClass}`}>
            {isGeo ? content.additionalLanguage.descriptionGeo : content.additionalLanguage.descriptionEng}
          </p>
        </div>
      </div>

      <div className="landing-pricing-extra">
        <h3 className={`landing-pricing-extra-title ${localeClass}`}>
          {isGeo ? content.additionalFeatures.titleGeo : content.additionalFeatures.titleEng}
        </h3>
        <p className={`landing-pricing-extra-description ${localeClass}`}>
          {isGeo ? content.additionalFeatures.descriptionGeo : content.additionalFeatures.descriptionEng}
        </p>
        <div className="landing-pricing-extra-examples">
          {content.additionalFeatures.examples.map((example) => (
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