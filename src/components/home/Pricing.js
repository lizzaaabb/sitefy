'use client'

import React from 'react'
import '../../styles/home/Pricing.css'

const PLANS = [
  {
    number: '01',
    title: 'ერთგვერდიანი საიტი',
    price: '800',
    tag: 'ადმინ პანელით',
    features: [
      'თანამედროვე, რესპონსული დიზაინი',
      'ადმინ პანელი კონტენტის სამართავად',
      'SEO საბაზისო ოპტიმიზაცია',
      'ჰოსტინგი და გაშვება',
    ],
  },
  {
    number: '02',
    title: 'კორპორატიული საიტი',
    price: '1500',
    tag: 'ადმინ პანელით',
    featured: true,
    badge: 'ყველაზე პოპულარული',
    features: [
      'მრავალგვერდიანი სტრუქტურა',
      'ადმინ პანელი სრული კონტროლით',
      'SEO ოპტიმიზაცია ყველა გვერდზე',
      'ორ/მრავალენოვანი მხარდაჭერა',
      'ჰოსტინგი და გაშვება',
    ],
  },
  {
    number: '03',
    title: 'ონლაინ მაღაზია',
    price: '2500',
    tag: 'E-commerce',
    features: [
      'პროდუქტების სრული მართვის სისტემა',
      'გადახდის სისტემის ინტეგრაცია',
      'შეკვეთების და მომხმარებლების მართვა',
      'SEO ოპტიმიზაცია',
      'ჰოსტინგი და გაშვება',
    ],
  },
]

function Pricing() {
  return (
    <section className="pricing-container">
      <div className="pricing-header">
        <p className="pricing-eyebrow">ფასები</p>
        <h2 className="pricing-heading">
          ვებსაიტის დამზადების ფასები
        </h2>
      </div>

      <div className="pricing-grid">
        {PLANS.map((plan) => (
          <div
            className={`pricing-col ${plan.featured ? 'pricing-col--featured' : ''}`}
            key={plan.number}
          >
            {plan.badge && <span className="pricing-badge">{plan.badge}</span>}

            <span className="pricing-number">{plan.number}</span>

            <div className="pricing-price">
              <span className="pricing-currency">₾</span>
              <span className="pricing-amount">{plan.price}</span>
            </div>
            <p className="pricing-from">დაწყებული, ერთჯერადი გადახდა</p>

            <h3 className="pricing-title">{plan.title}</h3>
            <p className="pricing-tag">{plan.tag}</p>

            <ul className="pricing-features">
              {plan.features.map((f) => (
                <li key={f}>
                  <span className="pricing-feature-index" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            <a href="tel:+995575755712" className="pricing-cta">
              მოთხოვნა <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>

      <p className="pricing-note">
        ფასი საბოლოოა პროექტის დეტალების დაზუსტების შემდეგ — არ არსებობს ფარული ხარჯები.
      </p>
    </section>
  )
}

export default Pricing