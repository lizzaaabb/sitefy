'use client'

import React, { useState } from 'react'
import { useLocale } from 'next-intl'
import '../../styles/ecommerce/OnlineShopContent.css'

const content = {
  titleGeo: "რა შედის ონლაინ მაღაზიაში",
  titleEng: "What's Included in an Online Store",

  descriptionGeo:
    "მაღაზიის სტრუქტურა და ფუნქციონალი დამოკიდებულია იმაზე, თუ როგორ გსურთ გაყიდვების პროცესის მართვა — WhatsApp-ზე შეკვეთებით თუ სრულად ავტომატური ონლაინ გადახდებით.",
  descriptionEng:
    "The store's structure and functionality depend on how you want to manage the sales process — WhatsApp orders or fully automated online payments.",

  sections: [
    {
      titleGeo: "პროდუქტების კატალოგი",
      titleEng: "Product Catalog",
      descriptionGeo:
        "პროდუქციის სრული ჩამონათვალი სურათებით, ფასებით და აღწერებით, კატეგორიების მიხედვით მოწესრიგებული.",
      descriptionEng:
        "A full product listing with images, prices, and descriptions, organized by category.",
    },
    {
      titleGeo: "ფილტრები და ძებნა",
      titleEng: "Filters & Search",
      descriptionGeo:
        "მომხმარებელი მარტივად პოულობს სასურველ პროდუქტს ფასის, კატეგორიის, ზომის ან სხვა პარამეტრების მიხედვით.",
      descriptionEng:
        "Visitors quickly find what they're looking for by price, category, size, or other attributes.",
    },
    {
      titleGeo: "შეკვეთის სისტემა",
      titleEng: "Ordering System",
      descriptionGeo:
        "ორი ვარიანტია შესაძლებელი — შეკვეთა WhatsApp-ის საშუალებით, ან სრული კალათა და checkout სისტემა ონლაინ გადახდით.",
      descriptionEng:
        "Two options are available — ordering via WhatsApp, or a full cart and checkout system with online payment.",
    },
    {
      titleGeo: "ადმინ პანელი",
      titleEng: "Admin Panel",
      descriptionGeo:
        "თავად მართეთ პროდუქტები, ფასები, კატეგორიები და მარაგი — დეველოპერის დახმარების გარეშე.",
      descriptionEng:
        "Manage products, prices, categories, and stock yourself — no developer needed.",
    },
    {
      titleGeo: "გადახდის სისტემა",
      titleEng: "Payment System",
      descriptionGeo:
        "ბარათით გადახდის ინტეგრაცია, უსაფრთხო და მომხმარებლისთვის მარტივი checkout პროცესით.",
      descriptionEng:
        "Card payment integration with a secure, user-friendly checkout process.",
    },
    {
      titleGeo: "მომხმარებლის პროფილი",
      titleEng: "Customer Accounts",
      descriptionGeo:
        "მომხმარებელს შეუძლია დარეგისტრირდეს, ნახოს შეკვეთების ისტორია და შეინახოს საკუთარი მონაცემები.",
      descriptionEng:
        "Customers can register, view their order history, and save their details.",
    },
    {
      titleGeo: "საკონტაქტო ინფორმაცია",
      titleEng: "Contact Information",
      descriptionGeo:
        "საკონტაქტო ინფორმაცია, საკონტაქტო ფორმა, სოციალური ქსელები და მაღაზიის მდებარეობა.",
      descriptionEng:
        "Contact details, a contact form, social media links, and store location.",
    },
  ],
};

function pad(n) {
  return String(n).padStart(2, '0')
}

function OnlineShopContent() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const [active, setActive] = useState(0)
  const current = content.sections[active]

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng

  return (
    <section className="online-shop-content-container">
      <span className="online-shop-content-watermark" key={`wm-${active}`} aria-hidden="true">
        {pad(active + 1)}
      </span>

      <div className="online-shop-content-header">
        <h2 className={`online-shop-content-heading ${localeClass}`}>{title}</h2>
        <p className={`online-shop-content-description ${localeClass}`}>{description}</p>
      </div>

      <div className="online-shop-content-split">
        <nav className="online-shop-content-nav">
          {content.sections.map((section, i) => {
            const sectionTitle = isGeo ? section.titleGeo : section.titleEng
            return (
              <button
                key={section.titleGeo}
                type="button"
                className={`online-shop-content-nav-item${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="online-shop-content-nav-index">{pad(i + 1)}</span>
                <span className={`online-shop-content-nav-title ${localeClass}`}>{sectionTitle}</span>
                <span className="online-shop-content-nav-leader" aria-hidden="true" />
              </button>
            )
          })}
        </nav>

        <div className="online-shop-content-panel">
          <div className="online-shop-content-panel-body" key={active}>
            <span className="online-shop-content-panel-accent" aria-hidden="true" />
            <h3 className={`online-shop-content-panel-title ${localeClass}`}>
              {isGeo ? current.titleGeo : current.titleEng}
            </h3>
            <p className={`online-shop-content-panel-description ${localeClass}`}>
              {isGeo ? current.descriptionGeo : current.descriptionEng}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlineShopContent