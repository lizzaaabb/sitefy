'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/ecommerce/OnlineShopPricing.css'

const content = {
  titleGeo: "აირჩიეთ თქვენთვის შესაფერისი ვერსია",
  titleEng: "Choose the Plan That's Right for You",

  plans: [
    {
      price: "₾1800",
      titleGeo: "ონლაინ კატალოგი",
      titleEng: "Online Catalog",
      descriptionGeo:
        "ონლაინ კატალოგი ფილტრებით და ადმინ პანელით — შეკვეთები მიიღება WhatsApp-ის საშუალებით, გადახდების სისტემის გარეშე.",
      descriptionEng:
        "An online catalog with filters and an admin panel — orders are received via WhatsApp, without a payment system.",
      noteGeo: "გადახდის სისტემის გარეშე",
      noteEng: "No online payment system",
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
      price: "₾4000",
      titleGeo: "სრული ონლაინ მაღაზია",
      titleEng: "Full Online Store",
      descriptionGeo:
        "სრულფასოვანი e-commerce პლატფორმა ონლაინ გადახდებით, კალათითა და შეკვეთების ავტომატური მართვით.",
      descriptionEng:
        "A full e-commerce platform with online payments, a shopping cart, and automated order management.",
      noteGeo: "ონლაინ გადახდები შედის ფასში",
      noteEng: "Online payments included in the price",
      features: [
        { geo: "ყველაფერი, რაც შედის ონლაინ კატალოგში", eng: "Everything included in the Online Catalog plan" },
        { geo: "კალათა და checkout სისტემა", eng: "Shopping cart and checkout" },
        { geo: "ონლაინ გადახდების ინტეგრაცია", eng: "Online payment integration" },
        { geo: "შეკვეთების მართვის სისტემა", eng: "Order management system" },
        { geo: "მომხმარებლის რეგისტრაცია და პროფილი", eng: "Customer registration and accounts" },
        { geo: "მარაგის (სტოკის) მართვა", eng: "Stock management" },
        { geo: "ფასდაკლებისა და კუპონების სისტემა", eng: "Discount and coupon system" },
        { geo: "ავტომატური შეტყობინებები ელფოსტაზე", eng: "Automated email notifications" },
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
  },
};

function OnlineShopPricing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const cta = isGeo ? content.ctaGeo : content.ctaEng

  return (
    <section className="online-shop-pricing-container">
      <div className="online-shop-pricing-header">
        <h2 className={`online-shop-pricing-heading ${localeClass}`}>{title}</h2>
      </div>

      <div className="online-shop-pricing-grid">
        {content.plans.map((plan) => {
          const planTitle = isGeo ? plan.titleGeo : plan.titleEng
          const planDescription = isGeo ? plan.descriptionGeo : plan.descriptionEng
          const planNote = isGeo ? plan.noteGeo : plan.noteEng

          return (
            <div className="online-shop-pricing-col" key={plan.titleGeo}>
              <span className="online-shop-pricing-accent" aria-hidden="true" />

              <span className="online-shop-pricing-price">{plan.price}</span>
              <p className={`online-shop-pricing-note ${localeClass}`}>{planNote}</p>

              <h3 className={`online-shop-pricing-title ${localeClass}`}>{planTitle}</h3>
              <p className={`online-shop-pricing-description ${localeClass}`}>{planDescription}</p>

              <ul className={`online-shop-pricing-features ${localeClass}`}>
                {plan.features.map((f) => (
                  <li key={f.geo}>
                    <span className="online-shop-pricing-feature-index" aria-hidden="true" />
                    {isGeo ? f.geo : f.eng}
                  </li>
                ))}
              </ul>

              <a href="#order" className={`online-shop-pricing-cta ${localeClass}`}>
                {cta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )
        })}
      </div>

      <div className="online-shop-pricing-addon">
        <span className="online-shop-pricing-addon-price">{content.additionalLanguage.price}</span>
        <div>
          <p className={`online-shop-pricing-addon-title ${localeClass}`}>
            {isGeo ? content.additionalLanguage.titleGeo : content.additionalLanguage.titleEng}
          </p>
          <p className={`online-shop-pricing-addon-description ${localeClass}`}>
            {isGeo ? content.additionalLanguage.descriptionGeo : content.additionalLanguage.descriptionEng}
          </p>
        </div>
      </div>

      <div className="online-shop-pricing-extra">
        <h3 className={`online-shop-pricing-extra-title ${localeClass}`}>
          {isGeo ? content.additionalFeatures.titleGeo : content.additionalFeatures.titleEng}
        </h3>
        <p className={`online-shop-pricing-extra-description ${localeClass}`}>
          {isGeo ? content.additionalFeatures.descriptionGeo : content.additionalFeatures.descriptionEng}
        </p>
        <div className="online-shop-pricing-extra-examples">
          {content.additionalFeatures.examples.map((example) => (
            <span className={`online-shop-pricing-extra-chip ${localeClass}`} key={example.geo}>
              {isGeo ? example.geo : example.eng}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OnlineShopPricing