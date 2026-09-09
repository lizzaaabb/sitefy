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
      region: "catalog",
      titleGeo: "პროდუქტების კატალოგი",
      titleEng: "Product Catalog",
      descriptionGeo:
        "პროდუქციის სრული ჩამონათვალი სურათებით, ფასებით და აღწერებით, კატეგორიების მიხედვით მოწესრიგებული.",
      descriptionEng:
        "A full product listing with images, prices, and descriptions, organized by category.",
    },
    {
      region: "filters",
      titleGeo: "ფილტრები და ძებნა",
      titleEng: "Filters & Search",
      descriptionGeo:
        "მომხმარებელი მარტივად პოულობს სასურველ პროდუქტს ფასის, კატეგორიის, ზომის ან სხვა პარამეტრების მიხედვით.",
      descriptionEng:
        "Visitors quickly find what they're looking for by price, category, size, or other attributes.",
    },
    {
      region: "cart",
      titleGeo: "შეკვეთის სისტემა",
      titleEng: "Ordering System",
      descriptionGeo:
        "ორი ვარიანტია შესაძლებელი — შეკვეთა WhatsApp-ის საშუალებით, ან სრული კალათა და checkout სისტემა ონლაინ გადახდით.",
      descriptionEng:
        "Two options are available — ordering via WhatsApp, or a full cart and checkout system with online payment.",
    },
    {
      region: "admin",
      titleGeo: "ადმინ პანელი",
      titleEng: "Admin Panel",
      descriptionGeo:
        "თავად მართეთ პროდუქტები, ფასები, კატეგორიები და მარაგი — დეველოპერის დახმარების გარეშე.",
      descriptionEng:
        "Manage products, prices, categories, and stock yourself — no developer needed.",
    },
    {
      region: "payment",
      titleGeo: "გადახდის სისტემა",
      titleEng: "Payment System",
      descriptionGeo:
        "ბარათით გადახდის ინტეგრაცია, უსაფრთხო და მომხმარებლისთვის მარტივი checkout პროცესით.",
      descriptionEng:
        "Card payment integration with a secure, user-friendly checkout process.",
    },
    {
      region: "account",
      titleGeo: "მომხმარებლის პროფილი",
      titleEng: "Customer Accounts",
      descriptionGeo:
        "მომხმარებელს შეუძლია დარეგისტრირდეს, ნახოს შეკვეთების ისტორია და შეინახოს საკუთარი მონაცემები.",
      descriptionEng:
        "Customers can register, view their order history, and save their details.",
    },
    {
      region: "footer",
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

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="20" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1.2" fill="currentColor" stroke="none" />
      <path d="M2.5 3h2l2.2 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.4" />
      <path d="M4.5 20c1.4-3.6 4.4-5.5 7.5-5.5s6.1 1.9 7.5 5.5" strokeLinecap="round" />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.2" />
      <path d="M2.5 10h19" />
    </svg>
  )
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 13.5a1.7 1.7 0 0 0 .34 1.87l.06.06a2.06 2.06 0 1 1-2.92 2.92l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56v.17a2.06 2.06 0 1 1-4.12 0v-.09a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2.06 2.06 0 1 1-2.92-2.92l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03h-.17a2.06 2.06 0 1 1 0-4.12h.09a1.7 1.7 0 0 0 1.56-1.11 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2.06 2.06 0 1 1 2.92-2.92l.06.06a1.7 1.7 0 0 0 1.87.34h.08a1.7 1.7 0 0 0 1.03-1.56V2.1a2.06 2.06 0 1 1 4.12 0v.09a1.7 1.7 0 0 0 1.03 1.56h.08a1.7 1.7 0 0 0 1.87-.34l.06-.06a2.06 2.06 0 1 1 2.92 2.92l-.06.06a1.7 1.7 0 0 0-.34 1.87v.08a1.7 1.7 0 0 0 1.56 1.03h.17a2.06 2.06 0 1 1 0 4.12h-.09a1.7 1.7 0 0 0-1.56 1.03Z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.3-4.3" strokeLinecap="round" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

const products = [
  { nameGeo: 'სმარტფონი', nameEng: 'Smartphone', price: '₾1200' },
  { nameGeo: 'ყურსასმენი', nameEng: 'Headphones', price: '₾180' },
  { nameGeo: 'ლეპტოპი', nameEng: 'Laptop', price: '₾2400' },
  { nameGeo: 'სმარტ საათი', nameEng: 'Smartwatch', price: '₾350' },
  { nameGeo: 'კამერა', nameEng: 'Camera', price: '₾890' },
  { nameGeo: 'დინამიკი', nameEng: 'Speaker', price: '₾145' },
]

function OnlineShopContent() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const [active, setActive] = useState(0)
  const activeRegion = content.sections[active].region

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng

  const hl = (region) => `online-shop-mockup-hl${activeRegion === region ? ' is-active' : ''}`

  return (
    <section className="online-shop-content-container">
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
                key={section.region}
                type="button"
                className={`online-shop-content-nav-item${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <span className="online-shop-content-nav-index">{pad(i + 1)}</span>
                <span className={`online-shop-content-nav-title ${localeClass}`}>{sectionTitle}</span>
                <span className="online-shop-content-nav-leader" aria-hidden="true" />
              </button>
            )
          })}
        </nav>

        <div className="online-shop-content-panel">
          <div className="online-shop-mockup" aria-hidden="true">
            <div className="online-shop-mockup-chrome">
              <span className="online-shop-mockup-dot" />
              <span className="online-shop-mockup-dot" />
              <span className="online-shop-mockup-dot" />
              <span className="online-shop-mockup-url">yourstore.ge</span>
            </div>

            <div className="online-shop-mockup-topbar">
              <span className="online-shop-mockup-logo">SHOP</span>

              <div className={hl('filters')}>
                <span className="online-shop-mockup-search">
                  <SearchIcon />
                  <span className="online-shop-mockup-search-line" />
                </span>
              </div>

              <div className="online-shop-mockup-icons">
                <span className={hl('account')}><UserIcon /></span>
                <span className={hl('cart')}><CartIcon /></span>
                <span className={hl('payment')}><CardIcon /></span>
                <span className={hl('admin')}><GearIcon /></span>
              </div>
            </div>

            <div className="online-shop-mockup-body">
              <div className={`online-shop-mockup-sidebar ${hl('filters')}`}>
                <span className="online-shop-mockup-sidebar-line long" />
                <span className="online-shop-mockup-sidebar-line" />
                <span className="online-shop-mockup-sidebar-line" />
                <span className="online-shop-mockup-sidebar-line short" />
                <span className="online-shop-mockup-sidebar-line" />
              </div>

              <div className={`online-shop-mockup-grid ${hl('catalog')}`}>
                {products.map((product, i) => (
                  <div className="online-shop-mockup-card" key={product.nameGeo}>
                    <span className={`online-shop-mockup-card-image swatch-${(i % 6) + 1}`} />
                    <span className={`online-shop-mockup-card-name ${localeClass}`}>
                      {isGeo ? product.nameGeo : product.nameEng}
                    </span>
                    <span className="online-shop-mockup-card-price">{product.price}</span>
                    <span className={`online-shop-mockup-card-add ${hl('cart')}`}>
                      <PlusIcon />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`online-shop-mockup-footer ${hl('footer')}`}>
              <span className="online-shop-mockup-footer-line" />
            </div>
          </div>

          <p className={`online-shop-content-caption ${localeClass}`} key={active}>
            {isGeo ? content.sections[active].descriptionGeo : content.sections[active].descriptionEng}
          </p>
        </div>
      </div>
    </section>
  )
}

export default OnlineShopContent