'use client'

import React from 'react'
import '../../styles/landing/LandingPricing.css'

const content = {
  title: "აირჩიეთ თქვენთვის შესაფერისი ვერსია",

  plans: [
    {
      price: "₾500",
      title: "სტანდარტული ვერსია",
      description:
        "თანამედროვე ერთგვერდიანი ვებსაიტი თქვენი ბიზნესის ონლაინ წარმოსაჩენად.",
      note: "ადმინ პანელი არ შედის",
      features: [
        "ინდივიდუალური დიზაინი",
        "ერთგვერდიანი სტრუქტურა",
        "მთავარი ლენდინგ სექცია",
        "ბიზნესის შესახებ",
        "ბიზნესის სტატისტიკა",
        "სერვისების სექცია",
        "რატომ უნდა აგირჩიოთ",
        "საკონტაქტო ინფორმაცია",
        "მობილურზე სრულად მორგებული დიზაინი",
        "SEO-სთვის ოპტიმიზებული სტრუქტურა",
        "Next.js ტექნოლოგია",
      ],
    },

    {
      price: "₾1000",
      title: "ვერსია ადმინ პანელით",
      description:
        "ერთგვერდიანი ვებსაიტი ადმინ პანელით, რომელიც საშუალებას გაძლევთ თავად მართოთ ძირითადი კონტენტი.",
      note: "ადმინ პანელი შედის ფასში",
      features: [
        "ყველაფერი, რაც შედის ₾500-იან ვერსიაში",
        "ადმინ პანელი",
        "ტექსტების შეცვლა",
        "სერვისების დამატება და რედაქტირება",
        "სურათების მართვა",
        "ძირითადი კონტენტის მართვა",
        "ვებსაიტის განახლება დეველოპერის დახმარების გარეშე",
      ],
    },
  ],

  additionalLanguage: {
    price: "+₾100",
    title: "დამატებითი ენა",
    description:
      "თითოეული დამატებითი ენის დამატება ღირს ₾100.",
  },

  additionalFeatures: {
    title: "გსურთ დამატებითი ფუნქციები?",
    description:
      "სტანდარტულ პაკეტში ჩამოთვლილი ფუნქციების გარდა სხვა ფუნქციის დამატების შემთხვევაში პროექტის ფასი შესაბამისად შეიცვლება.",
    examples: [
      "ონლაინ ჯავშნის სისტემა",
      "ონლაინ გადახდები",
      "მომხმარებლის რეგისტრაცია და ავტორიზაცია",
      "დამატებითი ინტეგრაციები",
      "სხვა ინდივიდუალური ფუნქციები",
    ],
  },
};

function LandingPricing() {
  return (
    <section className="landing-pricing-container">
      <div className="landing-pricing-header">
        <h2 className="landing-pricing-heading">{content.title}</h2>
      </div>

      <div className="landing-pricing-grid">
        {content.plans.map((plan) => (
          <div className="landing-pricing-col" key={plan.title}>
            <span className="landing-pricing-accent" aria-hidden="true" />

            <span className="landing-pricing-price">{plan.price}</span>
            <p className="landing-pricing-note">{plan.note}</p>

            <h3 className="landing-pricing-title">{plan.title}</h3>
            <p className="landing-pricing-description">{plan.description}</p>

            <ul className="landing-pricing-features">
              {plan.features.map((f) => (
                <li key={f}>
                  <span className="landing-pricing-feature-index" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            {/* placeholder label — swap for the real CTA text/link when ready */}
            <a href="#order" className="landing-pricing-cta">
              შეკვეთა
              <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>

      <div className="landing-pricing-addon">
        <span className="landing-pricing-addon-price">{content.additionalLanguage.price}</span>
        <div>
          <p className="landing-pricing-addon-title">{content.additionalLanguage.title}</p>
          <p className="landing-pricing-addon-description">
            {content.additionalLanguage.description}
          </p>
        </div>
      </div>

      <div className="landing-pricing-extra">
        <h3 className="landing-pricing-extra-title">{content.additionalFeatures.title}</h3>
        <p className="landing-pricing-extra-description">
          {content.additionalFeatures.description}
        </p>
        <div className="landing-pricing-extra-examples">
          {content.additionalFeatures.examples.map((example) => (
            <span className="landing-pricing-extra-chip" key={example}>
              {example}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LandingPricing