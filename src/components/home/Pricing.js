'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/home/Pricing.css'

const PLANS = [
  {
    number: '01',
    titleGeo: 'ერთგვერდიანი საიტი',
    titleEng: 'One-Page Website',
    price: '800',
    tagGeo: 'ადმინ პანელით',
    tagEng: 'With Admin Panel',
    featuresGeo: [
      'თანამედროვე, რესპონსული დიზაინი',
      'ადმინ პანელი კონტენტის სამართავად',
      'SEO საბაზისო ოპტიმიზაცია',
      'ჰოსტინგი და გაშვება',
    ],
    featuresEng: [
      'Modern, responsive design',
      'Admin panel for content management',
      'Basic SEO optimization',
      'Hosting and deployment',
    ],
  },
  {
    number: '02',
    titleGeo: 'კორპორატიული საიტი',
    titleEng: 'Corporate Website',
    price: '1500',
    tagGeo: 'ადმინ პანელით',
    tagEng: 'With Admin Panel',
    featured: true,
    badgeGeo: 'ყველაზე პოპულარული',
    badgeEng: 'Most Popular',
    featuresGeo: [
      'მრავალგვერდიანი სტრუქტურა',
      'ადმინ პანელი სრული კონტროლით',
      'SEO ოპტიმიზაცია ყველა გვერდზე',
      'ორ/მრავალენოვანი მხარდაჭერა',
      'ჰოსტინგი და გაშვება',
    ],
    featuresEng: [
      'Multi-page structure',
      'Admin panel with full control',
      'SEO optimization on every page',
      'Bilingual/multilingual support',
      'Hosting and deployment',
    ],
  },
  {
    number: '03',
    titleGeo: 'ონლაინ მაღაზია',
    titleEng: 'Online Store',
    price: '2500',
    tagGeo: 'E-commerce',
    tagEng: 'E-commerce',
    featuresGeo: [
      'პროდუქტების სრული მართვის სისტემა',
      'გადახდის სისტემის ინტეგრაცია',
      'შეკვეთების და მომხმარებლების მართვა',
      'SEO ოპტიმიზაცია',
      'ჰოსტინგი და გაშვება',
    ],
    featuresEng: [
      'Full product management system',
      'Payment system integration',
      'Order and customer management',
      'SEO optimization',
      'Hosting and deployment',
    ],
  },
]

function Pricing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'

  return (
    <section className="pricing-container">
      <div className="pricing-header">
        <p className={`pricing-eyebrow ${isGeo ? 'geo' : 'eng'}`}>
          {isGeo ? 'ფასები' : 'Pricing'}
        </p>
        <h2 className={`pricing-heading ${isGeo ? 'geo' : 'eng'}`}>
          {isGeo ? 'ვებსაიტის დამზადების ფასები' : 'Website Development Pricing'}
        </h2>
      </div>

      <div className="pricing-grid">
        {PLANS.map((plan) => {
          const title = isGeo ? plan.titleGeo : plan.titleEng
          const tag = isGeo ? plan.tagGeo : plan.tagEng
          const badge = isGeo ? plan.badgeGeo : plan.badgeEng
          const features = isGeo ? plan.featuresGeo : plan.featuresEng

          return (
            <div
              className={`pricing-col ${plan.featured ? 'pricing-col--featured' : ''}`}
              key={plan.number}
            >
              {badge && <span className={`pricing-badge ${isGeo ? 'geo' : 'eng'}`}>{badge}</span>}

              <span className="pricing-number">{plan.number}</span>

              <div className="pricing-price">
                <span className="pricing-currency">₾</span>
                <span className="pricing-amount">{plan.price}</span>
              </div>
              <p className={`pricing-from ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? 'დაწყებული, ერთჯერადი გადახდა' : 'Starting from, one-time payment'}
              </p>

              <h3 className={`pricing-title ${isGeo ? 'geo' : 'eng'}`}>{title}</h3>
              <p className={`pricing-tag ${isGeo ? 'geo' : 'eng'}`}>{tag}</p>

              <ul className={`pricing-features ${isGeo ? 'geo' : 'eng'}`}>
                {features.map((f) => (
                  <li key={f}>
                    <span className="pricing-feature-index" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="tel:+995575755712" className={`pricing-cta ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? 'მოთხოვნა' : 'Request'} <span aria-hidden="true">→</span>
              </a>
            </div>
          )
        })}
      </div>

      <p className={`pricing-note ${isGeo ? 'geo' : 'eng'}`}>
        {isGeo
          ? 'ფასი საბოლოოა პროექტის დეტალების დაზუსტების შემდეგ — არ არსებობს ფარული ხარჯები.'
          : 'Final price is confirmed once project details are clarified — no hidden costs.'}
      </p>
    </section>
  )
}

export default Pricing