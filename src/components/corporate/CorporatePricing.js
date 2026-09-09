'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/corporate/CorporatePricing.css'

const content = {
  titleGeo: "კორპორატიული ვებსაიტი",
  titleEng: "Corporate Website",

  plans: [
    {
      price: "₾2800",
      titleGeo: "კორპორატიული ვერსია",
      titleEng: "Corporate Package",
      descriptionGeo:
        "მრავალგვერდიანი კორპორატიული ვებსაიტი ადმინ პანელით, რომელიც თქვენი კომპანიის ონლაინ წარმომადგენლობისთვის საჭირო ძირითად ფუნქციონალს აერთიანებს.",
      descriptionEng:
        "A multi-page corporate website with an admin panel, combining the core functionality your company needs for its online presence.",
      noteGeo: "ადმინ პანელი შედის ფასში",
      noteEng: "Admin panel included in the price",
      features: [
        { geo: "ინდივიდუალური დიზაინი", eng: "Custom design" },
        { geo: "მრავალგვერდიანი სტრუქტურა", eng: "Multi-page structure" },
        { geo: "მთავარი გვერდი", eng: "Homepage" },
        { geo: "ჩვენ შესახებ", eng: "About Us" },
        { geo: "სერვისების გვერდი", eng: "Services page" },
        { geo: "პროექტები / პორტფოლიო", eng: "Projects / Portfolio" },
        { geo: "ბლოგი / სიახლეები", eng: "Blog / News" },
        { geo: "გუნდის გვერდი", eng: "Team page" },
        { geo: "საკონტაქტო გვერდი", eng: "Contact page" },
        { geo: "ადმინ პანელი", eng: "Admin panel" },
        { geo: "ტექსტების მართვა", eng: "Text management" },
        { geo: "სურათების მართვა", eng: "Image management" },
        { geo: "სერვისების მართვა", eng: "Services management" },
        { geo: "პროექტების მართვა", eng: "Projects management" },
        { geo: "ბლოგისა და სიახლეების მართვა", eng: "Blog and news management" },
        { geo: "გუნდის წევრების მართვა", eng: "Team member management" },
        { geo: "მობილურზე სრულად მორგებული დიზაინი", eng: "Fully mobile-responsive design" },
        { geo: "SEO-სთვის ოპტიმიზებული სტრუქტურა", eng: "SEO-optimized structure" },
        { geo: "Next.js ტექნოლოგია", eng: "Built with Next.js" },
      ],
    },
  ],

  ctaGeo: "შეკვეთა",
  ctaEng: "Order",

  additionalLanguage: {
    titleGeo: "დამატებითი ენა",
    titleEng: "Additional Language",
    descriptionGeo:
      "ვებსაიტის დამატებით ენაზე მომზადება შესაძლებელია პროექტის მოთხოვნების მიხედვით და ფასდება ცალკე.",
    descriptionEng:
      "The website can be prepared in an additional language depending on the project's requirements, priced separately.",
  },

  additionalFeatures: {
    titleGeo: "გსურთ დამატებითი ფუნქციები?",
    titleEng: "Want additional features?",
    descriptionGeo:
      "კორპორატიულ ვებსაიტს შესაძლებელია დაემატოს თქვენი ბიზნესისთვის საჭირო დამატებითი ფუნქციები. დამატებითი ფუნქციების შემთხვევაში პროექტის ფასი შესაბამისად შეიცვლება.",
    descriptionEng:
      "Additional features your business needs can be added to the corporate website. Adding extra features will adjust the project price accordingly.",
    examples: [
      { geo: "ონლაინ ჯავშნის სისტემა", eng: "Online booking system" },
      { geo: "ონლაინ გადახდები", eng: "Online payments" },
      { geo: "მომხმარებლის რეგისტრაცია და ავტორიზაცია", eng: "User registration and login" },
      { geo: "პროდუქციის კატალოგი", eng: "Product catalog" },
      { geo: "დამატებითი ინტეგრაციები", eng: "Additional integrations" },
      { geo: "სხვა ინდივიდუალური ფუნქციები", eng: "Other custom features" },
    ],
  },
};

function CorporatePricing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const cta = isGeo ? content.ctaGeo : content.ctaEng

  return (
    <section className="corporate-pricing-container">
      <div className="corporate-pricing-header">
        <h2 className={`corporate-pricing-heading ${localeClass}`}>{title}</h2>
      </div>

      <div className="corporate-pricing-grid">
        {content.plans.map((plan) => {
          const planTitle = isGeo ? plan.titleGeo : plan.titleEng
          const planDescription = isGeo ? plan.descriptionGeo : plan.descriptionEng
          const planNote = isGeo ? plan.noteGeo : plan.noteEng

          return (
            <div className="corporate-pricing-col" key={plan.titleGeo}>
              <span className="corporate-pricing-accent" aria-hidden="true" />

              <span className="corporate-pricing-price">{plan.price}</span>
              <p className={`corporate-pricing-note ${localeClass}`}>{planNote}</p>

              <h3 className={`corporate-pricing-title ${localeClass}`}>{planTitle}</h3>
              <p className={`corporate-pricing-description ${localeClass}`}>{planDescription}</p>

              <ul className={`corporate-pricing-features ${localeClass}`}>
                {plan.features.map((f) => (
                  <li key={f.geo}>
                    <span className="corporate-pricing-feature-index" aria-hidden="true" />
                    {isGeo ? f.geo : f.eng}
                  </li>
                ))}
              </ul>

              <a href="#order" className={`corporate-pricing-cta ${localeClass}`}>
                {cta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )
        })}
      </div>

      <div className="corporate-pricing-addon">
        <p className={`corporate-pricing-addon-title ${localeClass}`}>
          {isGeo ? content.additionalLanguage.titleGeo : content.additionalLanguage.titleEng}
        </p>
        <p className={`corporate-pricing-addon-description ${localeClass}`}>
          {isGeo ? content.additionalLanguage.descriptionGeo : content.additionalLanguage.descriptionEng}
        </p>
      </div>

      <div className="corporate-pricing-extra">
        <h3 className={`corporate-pricing-extra-title ${localeClass}`}>
          {isGeo ? content.additionalFeatures.titleGeo : content.additionalFeatures.titleEng}
        </h3>
        <p className={`corporate-pricing-extra-description ${localeClass}`}>
          {isGeo ? content.additionalFeatures.descriptionGeo : content.additionalFeatures.descriptionEng}
        </p>
        <div className="corporate-pricing-extra-examples">
          {content.additionalFeatures.examples.map((example) => (
            <span className={`corporate-pricing-extra-chip ${localeClass}`} key={example.geo}>
              {isGeo ? example.geo : example.eng}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CorporatePricing