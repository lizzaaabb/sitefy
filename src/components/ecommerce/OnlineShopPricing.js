'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/landing/LandingPricing.css'
import '../../styles/ecommerce/OnlineShopPricing.css'

const plans = [
  {
    price: "1800",
    noteGeo: "გადახდის სისტემის გარეშე",
    noteEng: "No online payment system",
    titleGeo: "ონლაინ კატალოგი",
    titleEng: "Online Catalog",
    descriptionGeo:
      "ონლაინ კატალოგი ფილტრებით და ადმინ პანელით — შეკვეთები მიიღება WhatsApp-ის საშუალებით, გადახდების სისტემის გარეშე.",
    descriptionEng:
      "An online catalog with filters and an admin panel — orders are received via WhatsApp, without a payment system.",
    features: [
      { geo: "ინდივიდუალური დიზაინი", eng: "Custom design" },
      { geo: "პროდუქტების კატალოგი", eng: "Product catalog" },
      { geo: "ფილტრები და ძებნა", eng: "Filters and search" },
      { geo: "კატეგორიების მართვა", eng: "Category management" },
      { geo: "შეკვეთა WhatsApp-ით", eng: "WhatsApp ordering" },
      { geo: "ადმინ პანელი", eng: "Admin panel" },
      { geo: "პროდუქტების დამატება და რედაქტირება", eng: "Add and edit products" },
      { geo: "სურათების მართვა", eng: "Image management" },
      { geo: "მობილურზე სრულად მორგებული დიზაინი", eng: "Fully mobile-responsive design" },
      { geo: "SEO-სთვის ოპტიმიზებული სტრუქტურა", eng: "SEO-optimized structure" },
      { geo: "Next.js ტექნოლოგია", eng: "Built with Next.js" },
    ],
  },
  {
    price: "4000",
    featured: true,
    badgeGeo: "ყველაზე სრული",
    badgeEng: "Most complete",
    noteGeo: "ონლაინ გადახდები შედის ფასში",
    noteEng: "Online payments included in the price",
    titleGeo: "სრული ონლაინ მაღაზია",
    titleEng: "Full Online Store",
    descriptionGeo:
      "სრულფასოვანი e-commerce პლატფორმა ონლაინ გადახდებით, კალათითა და შეკვეთების ავტომატური მართვით.",
    descriptionEng:
      "A full e-commerce platform with online payments, a shopping cart, and automated order management.",
    features: [
      { geo: "ყველაფერი, რაც შედის ონლაინ კატალოგში", eng: "Everything in the Online Catalog plan" },
      { geo: "კალათა და checkout სისტემა", eng: "Shopping cart and checkout" },
      { geo: "ონლაინ გადახდების ინტეგრაცია", eng: "Online payment integration" },
      { geo: "შეკვეთების მართვის სისტემა", eng: "Order management system" },
      { geo: "მომხმარებლის რეგისტრაცია და პროფილი", eng: "Customer registration and accounts" },
      { geo: "მარაგის (სტოკის) მართვა", eng: "Stock management" },
      { geo: "ფასდაკლებისა და კუპონების სისტემა", eng: "Discount and coupon system" },
      { geo: "ავტომატური შეტყობინებები ელფოსტაზე", eng: "Automated email notifications" },
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
  descriptionGeo:
    "ჩამოთვლილი ფუნქციების გარდა შესაძლებელია დამატებითი შესაძლებლობების დამატებაც — ფასი შესაბამისად შეიცვლება.",
  descriptionEng:
    "Beyond what's listed, additional features can be added — the price will change accordingly.",
  examples: [
    { geo: "ერთგულების (loyalty) ქულების სისტემა", eng: "Loyalty points system" },
    { geo: "მიწოდების ღირებულების კალკულატორი", eng: "Delivery cost calculator" },
    { geo: "პროდუქტის ვარიაციები (ზომა/ფერი)", eng: "Product variants (size/color)" },
    { geo: "საწყობის სისტემასთან ინტეგრაცია", eng: "Inventory system integration" },
    { geo: "Live chat ინტეგრაცია", eng: "Live chat integration" },
    { geo: "ანალიტიკის დაშბორდი", eng: "Analytics dashboard" },
  ],
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function OnlineShopPricing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  return (
    <section className="landing-pricing-container online-shop-pricing">
      <div className="lp-inner osp-inner">
        <div className="lp-header">
          <span className={`lp-eyebrow ${localeClass}`}>{isGeo ? 'ფასები' : 'Pricing'}</span>
          <h2 className={`lp-heading ${localeClass}`}>
            {isGeo ? 'აირჩიეთ თქვენთვის შესაფერისი ვერსია' : "Choose the Plan That's Right for You"}
          </h2>
          <p className={`lp-subhead ${localeClass}`}>
            {isGeo
              ? 'კატალოგი WhatsApp-ით შეკვეთებისთვის, ან სრული მაღაზია ონლაინ გადახდებით — ორივე ადმინ პანელით.'
              : 'A catalog with WhatsApp orders, or a full store with online payments — both with an admin panel.'}
          </p>
        </div>

        <div className="osp-grid">
          {plans.map((plan) => (
            <article className={`osp-card${plan.featured ? ' is-featured' : ''}`} key={plan.price}>
              <span className="osp-card-glow" aria-hidden="true" />

              {plan.featured && (
                <span className={`osp-badge ${localeClass}`}>
                  <span className="osp-badge-star" aria-hidden="true">✦</span>
                  {isGeo ? plan.badgeGeo : plan.badgeEng}
                </span>
              )}

              <div className="osp-top">
                <h3 className={`osp-title ${localeClass}`}>{isGeo ? plan.titleGeo : plan.titleEng}</h3>
                <span className={`lp-note osp-note ${localeClass}`}>{isGeo ? plan.noteGeo : plan.noteEng}</span>
              </div>

              <div className="osp-price">
                <sup className="osp-cur">₾</sup>{plan.price}
              </div>

              <p className={`osp-desc ${localeClass}`}>{isGeo ? plan.descriptionGeo : plan.descriptionEng}</p>

              <span className="osp-divider" aria-hidden="true" />

              <ul className="osp-feats">
                {plan.features.map((f) => (
                  <li className={`osp-feat ${localeClass}`} key={f.geo}>
                    <span className="lp-tick"><CheckIcon /></span>
                    <span>{isGeo ? f.geo : f.eng}</span>
                  </li>
                ))}
              </ul>

              <a href="#order" className={`osp-cta ${localeClass}${plan.featured ? ' is-solid' : ''}`}>
                {isGeo ? 'შეკვეთა' : 'Order'} <span className="osp-cta-arrow" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="osp-addon">
          <span className="osp-addon-price">{additionalLanguage.price}</span>
          <span className={`osp-addon-label ${localeClass}`}>
            {isGeo ? additionalLanguage.labelGeo : additionalLanguage.labelEng}
          </span>
        </div>

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

export default OnlineShopPricing
