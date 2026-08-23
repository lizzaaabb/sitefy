'use client'

import React from 'react'
import '../../styles/corporate/CorporatePricing.css'

const content = {
  title: "კორპორატიული ვებსაიტი",

  plans: [
    {
      price: "₾2800",
      title: "კორპორატიული ვერსია",
      description:
        "მრავალგვერდიანი კორპორატიული ვებსაიტი ადმინ პანელით, რომელიც თქვენი კომპანიის ონლაინ წარმომადგენლობისთვის საჭირო ძირითად ფუნქციონალს აერთიანებს.",
      note: "ადმინ პანელი შედის ფასში",
      features: [
        "ინდივიდუალური დიზაინი",
        "მრავალგვერდიანი სტრუქტურა",
        "მთავარი გვერდი",
        "ჩვენ შესახებ",
        "სერვისების გვერდი",
        "პროექტები / პორტფოლიო",
        "ბლოგი / სიახლეები",
        "გუნდის გვერდი",
        "საკონტაქტო გვერდი",
        "ადმინ პანელი",
        "ტექსტების მართვა",
        "სურათების მართვა",
        "სერვისების მართვა",
        "პროექტების მართვა",
        "ბლოგისა და სიახლეების მართვა",
        "გუნდის წევრების მართვა",
        "მობილურზე სრულად მორგებული დიზაინი",
        "SEO-სთვის ოპტიმიზებული სტრუქტურა",
        "Next.js ტექნოლოგია",
      ],
    },
  ],

  additionalLanguage: {
    title: "დამატებითი ენა",
    description:
      "ვებსაიტის დამატებით ენაზე მომზადება შესაძლებელია პროექტის მოთხოვნების მიხედვით და ფასდება ცალკე.",
  },

  additionalFeatures: {
    title: "გსურთ დამატებითი ფუნქციები?",
    description:
      "კორპორატიულ ვებსაიტს შესაძლებელია დაემატოს თქვენი ბიზნესისთვის საჭირო დამატებითი ფუნქციები. დამატებითი ფუნქციების შემთხვევაში პროექტის ფასი შესაბამისად შეიცვლება.",
    examples: [
      "ონლაინ ჯავშნის სისტემა",
      "ონლაინ გადახდები",
      "მომხმარებლის რეგისტრაცია და ავტორიზაცია",
      "პროდუქციის კატალოგი",
      "დამატებითი ინტეგრაციები",
      "სხვა ინდივიდუალური ფუნქციები",
    ],
  },
};

function CorporatePricing() {
  return (
    <section className="corporate-pricing-container">
      <div className="corporate-pricing-header">
        <h2 className="corporate-pricing-heading">{content.title}</h2>
      </div>

      <div className="corporate-pricing-grid">
        {content.plans.map((plan) => (
          <div className="corporate-pricing-col" key={plan.title}>
            <span className="corporate-pricing-accent" aria-hidden="true" />

            <span className="corporate-pricing-price">{plan.price}</span>
            <p className="corporate-pricing-note">{plan.note}</p>

            <h3 className="corporate-pricing-title">{plan.title}</h3>
            <p className="corporate-pricing-description">{plan.description}</p>

            <ul className="corporate-pricing-features">
              {plan.features.map((f) => (
                <li key={f}>
                  <span className="corporate-pricing-feature-index" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            {/* placeholder label — swap for the real CTA text/link when ready */}
            <a href="#order" className="corporate-pricing-cta">
              შეკვეთა
              <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>

      <div className="corporate-pricing-addon">
        <p className="corporate-pricing-addon-title">{content.additionalLanguage.title}</p>
        <p className="corporate-pricing-addon-description">
          {content.additionalLanguage.description}
        </p>
      </div>

      <div className="corporate-pricing-extra">
        <h3 className="corporate-pricing-extra-title">{content.additionalFeatures.title}</h3>
        <p className="corporate-pricing-extra-description">
          {content.additionalFeatures.description}
        </p>
        <div className="corporate-pricing-extra-examples">
          {content.additionalFeatures.examples.map((example) => (
            <span className="corporate-pricing-extra-chip" key={example}>
              {example}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CorporatePricing