'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/corporate/CorporatePricing.css'

const content = {
  titleGeo: "კორპორატიული ვებსაიტი",
  titleEng: "Corporate Website",

  price: "₾2800",
  noteGeo: "ადმინ პანელი შედის ფასში",
  noteEng: "Admin panel included in the price",
  planTitleGeo: "კორპორატიული ვერსია",
  planTitleEng: "Corporate Package",
  descriptionGeo:
    "მრავალგვერდიანი კორპორატიული ვებსაიტი ადმინ პანელით, რომელიც თქვენი კომპანიის ონლაინ წარმომადგენლობისთვის საჭირო ძირითად ფუნქციონალს აერთიანებს.",
  descriptionEng:
    "A multi-page corporate website with an admin panel, combining the core functionality your company needs for its online presence.",

  groups: [
    {
      labelGeo: "გვერდები",
      labelEng: "Pages",
      items: [
        { geo: "მთავარი გვერდი", eng: "Homepage" },
        { geo: "ჩვენ შესახებ", eng: "About Us" },
        { geo: "სერვისების გვერდი", eng: "Services page" },
        { geo: "პროექტები / პორტფოლიო", eng: "Projects / Portfolio" },
        { geo: "ბლოგი / სიახლეები", eng: "Blog / News" },
        { geo: "გუნდის გვერდი", eng: "Team page" },
        { geo: "საკონტაქტო გვერდი", eng: "Contact page" },
      ],
    },
    {
      labelGeo: "ადმინ პანელი",
      labelEng: "Admin Panel",
      items: [
        { geo: "ტექსტების მართვა", eng: "Text management" },
        { geo: "სურათების მართვა", eng: "Image management" },
        { geo: "სერვისების მართვა", eng: "Services management" },
        { geo: "პროექტების მართვა", eng: "Projects management" },
        { geo: "ბლოგისა და სიახლეების მართვა", eng: "Blog and news management" },
        { geo: "გუნდის წევრების მართვა", eng: "Team member management" },
      ],
    },
    {
      labelGeo: "დიზაინი და ტექნიკური",
      labelEng: "Design & Technical",
      items: [
        { geo: "ინდივიდუალური დიზაინი", eng: "Custom design" },
        { geo: "მრავალგვერდიანი სტრუქტურა", eng: "Multi-page structure" },
        { geo: "მობილურზე სრულად მორგებული", eng: "Fully mobile-responsive" },
        { geo: "SEO-ოპტიმიზებული სტრუქტურა", eng: "SEO-optimized structure" },
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
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CorporatePricing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'
  const cta = isGeo ? content.ctaGeo : content.ctaEng

  return (
    <section className="cp-container">
      <div className="cp-inner">
        <div className="cp-header">
          <span className={`cp-eyebrow ${localeClass}`}>{isGeo ? 'ფასები' : 'Pricing'}</span>
          <h2 className={`cp-heading ${localeClass}`}>
            {isGeo ? content.titleGeo : content.titleEng}
          </h2>
        </div>

        <div className="cp-card">
          <span className="cp-card-glow" aria-hidden="true" />

          {/* top: price + description */}
          <div className="cp-top">
            <div className="cp-top-left">
              <span className={`cp-note ${localeClass}`}>{isGeo ? content.noteGeo : content.noteEng}</span>
              <div className="cp-price">{content.price}</div>
              <h3 className={`cp-plan-title ${localeClass}`}>{isGeo ? content.planTitleGeo : content.planTitleEng}</h3>
            </div>
            <div className="cp-top-right">
              <p className={`cp-desc ${localeClass}`}>{isGeo ? content.descriptionGeo : content.descriptionEng}</p>
              <a href="#order" className={`cp-cta ${localeClass}`}>
                {cta} <span className="cp-cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* features in columns */}
          <div className="cp-groups">
            {content.groups.map((group) => (
              <div className="cp-group" key={group.labelGeo}>
                <div className={`cp-group-label ${localeClass}`}>
                  {isGeo ? group.labelGeo : group.labelEng}
                </div>
                <ul className={`cp-group-list ${localeClass}`}>
                  {group.items.map((item) => (
                    <li key={item.geo}>
                      <span className="cp-tick"><CheckIcon /></span>
                      {isGeo ? item.geo : item.eng}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* language addon */}
        <div className="cp-addon">
          <p className={`cp-addon-title ${localeClass}`}>
            {isGeo ? content.additionalLanguage.titleGeo : content.additionalLanguage.titleEng}
          </p>
          <p className={`cp-addon-desc ${localeClass}`}>
            {isGeo ? content.additionalLanguage.descriptionGeo : content.additionalLanguage.descriptionEng}
          </p>
        </div>

        {/* extra features */}
        <div className="cp-extra">
          <h3 className={`cp-extra-title ${localeClass}`}>
            {isGeo ? content.additionalFeatures.titleGeo : content.additionalFeatures.titleEng}
          </h3>
          <p className={`cp-extra-desc ${localeClass}`}>
            {isGeo ? content.additionalFeatures.descriptionGeo : content.additionalFeatures.descriptionEng}
          </p>
          <div className="cp-chips">
            {content.additionalFeatures.examples.map((ex) => (
              <span className={`cp-chip ${localeClass}`} key={ex.geo}>
                {isGeo ? ex.geo : ex.eng}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CorporatePricing