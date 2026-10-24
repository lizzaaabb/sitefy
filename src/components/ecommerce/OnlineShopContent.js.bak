'use client'

import React, { useState } from 'react'
import { useLocale } from 'next-intl'
import '../../styles/ecommerce/OnlineShopContent.css'

const content = {
  titleGeo: "როგორ მუშაობს თქვენი მაღაზია",
  titleEng: "How Your Store Works",
  descriptionGeo: "დააჭირეთ ზედა მენიუს და გადადით მაღაზიის სხვადასხვა გვერდზე — ზუსტად ისე, როგორც რეალურ საიტზე.",
  descriptionEng: "Click the top menu to move through the store's pages — just like on a real website.",

  tabs: [
    {
      key: 'catalog',
      labelGeo: 'კატალოგი', labelEng: 'Catalog',
      captionGeo: 'პროდუქტების კატალოგი სურათებით, ფასებითა და ფილტრებით.',
      captionEng: 'A product catalog with images, prices, and filters.',
    },
    {
      key: 'cart',
      labelGeo: 'კალათა', labelEng: 'Cart',
      captionGeo: 'კალათა რაოდენობის მართვითა და ჯამის დათვლით.',
      captionEng: 'A cart with quantity controls and total calculation.',
    },
    {
      key: 'checkout',
      labelGeo: 'გადახდა', labelEng: 'Checkout',
      captionGeo: 'უსაფრთხო ბარათით გადახდა მარტივი პროცესით.',
      captionEng: 'Secure card payment with a simple checkout process.',
    },
    {
      key: 'admin',
      labelGeo: 'ადმინი', labelEng: 'Admin',
      captionGeo: 'ადმინ პანელი — შეკვეთები, სტატისტიკა და პროდუქტების მართვა.',
      captionEng: 'Admin panel — orders, statistics, and product management.',
    },
  ],
}

const products = [
  { nameGeo: 'სმარტფონი', nameEng: 'Smartphone', price: '₾1200', icon: 'phone' },
  { nameGeo: 'ყურსასმენი', nameEng: 'Headphones', price: '₾180', icon: 'head' },
  { nameGeo: 'ლეპტოპი', nameEng: 'Laptop', price: '₾2400', icon: 'laptop' },
]

/* ---------- Icons ---------- */
function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2 3 6v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6l-3-4z" />
      <path d="M3 6h18M16 10a4 4 0 0 1-8 0" strokeLinecap="round" />
    </svg>
  )
}
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4-4" strokeLinecap="round" />
    </svg>
  )
}
function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3.2 1.3 4 2.5.8-1.2 2-2.5 4-2.5 3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21z" />
    </svg>
  )
}
function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
function ProductIcon({ type }) {
  const p = { className: 'oss-prod', viewBox: '0 0 24 24', fill: 'none' }
  if (type === 'phone') return <svg {...p}><rect x="6.5" y="2" width="11" height="20" rx="3" /><path d="M10.5 5.5h3M10.5 18.5h3" /></svg>
  if (type === 'head') return <svg {...p}><path d="M5 13v-1a7 7 0 0 1 14 0v1" /><path d="M5 13a2.2 2.2 0 0 1 2.2 2.2v2.6A2.2 2.2 0 0 1 5 20a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" /><path d="M19 13a2.2 2.2 0 0 0-2.2 2.2v2.6A2.2 2.2 0 0 0 19 20a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z" /></svg>
  if (type === 'laptop') return <svg {...p}><rect x="4.5" y="4.5" width="15" height="10.5" rx="1.6" /><path d="M2 19h20M9.5 15.5h5" /></svg>
  if (type === 'watch') return <svg {...p}><rect x="6.5" y="6.5" width="11" height="11" rx="3.5" /><path d="M9 6.5l.6-3h4.8l.6 3M9 17.5l.6 3h4.8l.6-3M12 10v2.2l1.5 1" /></svg>
  return null
}

function OnlineShopContent() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const [active, setActive] = useState(0)
  const tab = content.tabs[active]
  const region = tab.key

  const name = (p) => (isGeo ? p.nameGeo : p.nameEng)

  return (
    <section className="oss-container">
      <div className="oss-header">
        <h2 className={`oss-heading ${localeClass}`}>{isGeo ? content.titleGeo : content.titleEng}</h2>
        <p className={`oss-description ${localeClass}`}>{isGeo ? content.descriptionGeo : content.descriptionEng}</p>
      </div>

      <div className="oss-shop">
        {/* header */}
        <div className="oss-hdr">
          <div className="oss-brand">
            <span className="oss-brand-mark"><BagIcon /></span>
            <span className="oss-brand-name">LU<b>XE</b></span>
          </div>
          <nav className="oss-nav" role="tablist">
            {content.tabs.map((t, i) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`oss-navbtn ${localeClass}${i === active ? ' is-on' : ''}`}
                onClick={() => setActive(i)}
              >
                {isGeo ? t.labelGeo : t.labelEng}
              </button>
            ))}
          </nav>
          <div className="oss-hdr-icons">
            <span className="oss-hicon"><SearchIcon /></span>
            <span className="oss-hicon"><BagIcon /><span className="oss-hbadge">3</span></span>
          </div>
        </div>

        {/* screen */}
        <div className="oss-screen" key={region}>
          {region === 'catalog' && (
            <div className="oss-view">
              <div className="oss-vhead">
                <span className={`oss-vtitle ${localeClass}`}>{isGeo ? 'პროდუქტების კატალოგი' : 'Product Catalog'}</span>
                <span className="oss-vsub">{isGeo ? '64 პროდუქტი' : '64 products'}</span>
              </div>
              <div className="oss-grid">
                {products.map((p) => (
                  <div className="oss-pcard" key={p.icon}>
                    <div className="oss-pimg">
                      <ProductIcon type={p.icon} />
                      <span className="oss-pfav"><HeartIcon /></span>
                    </div>
                    <div className="oss-pmeta">
                      <div className={`oss-pn ${localeClass}`}>{name(p)}</div>
                      <div className="oss-prow">
                        <span className="oss-pp">{p.price}</span>
                        <span className="oss-padd">+</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="oss-catrow2">
                <span className="oss-catrow2-ic"><ProductIcon type="watch" /></span>
                <span className={`oss-catrow2-txt ${localeClass}`}>
                  <b>{isGeo ? '+ 61 სხვა პროდუქტი' : '+ 61 more products'}</b>{' '}
                  {isGeo ? '— საათები, აქსესუარები და სხვა' : '— watches, accessories, and more'}
                </span>
                <span className="oss-catrow2-arrow" aria-hidden="true">→</span>
              </div>
            </div>
          )}

          {region === 'cart' && (
            <div className="oss-view">
              <div className="oss-vhead">
                <span className={`oss-vtitle ${localeClass}`}>{isGeo ? 'შენი კალათა' : 'Your Cart'}</span>
                <span className="oss-vsub">{isGeo ? '1 ნივთი' : '1 item'}</span>
              </div>
              <div className="oss-crow">
                <span className="oss-cimg"><ProductIcon type="laptop" /></span>
                <div className="oss-cinfo">
                  <div className={`oss-cn ${localeClass}`}>{isGeo ? 'ლეპტოპი' : 'Laptop'}</div>
                  <div className="oss-cqty"><span>−</span><b>1</b><span>+</span></div>
                </div>
                <span className="oss-cp">₾2400</span>
              </div>
              <div className="oss-csum">
                <div className={`oss-csum-row ${localeClass}`}><span>{isGeo ? 'ქვეჯამი' : 'Subtotal'}</span><span>₾2,400</span></div>
                <div className={`oss-csum-row ${localeClass}`}><span>{isGeo ? 'მიწოდება' : 'Shipping'}</span><span>{isGeo ? 'უფასო' : 'Free'}</span></div>
                <div className={`oss-csum-tot ${localeClass}`}><span>{isGeo ? 'ჯამი' : 'Total'}</span><b>₾2,400</b></div>
              </div>
              <div className={`oss-btn ${localeClass}`}>{isGeo ? 'შეკვეთის გაფორმება — ₾2,400 →' : 'Checkout — ₾2,400 →'}</div>
            </div>
          )}

          {region === 'checkout' && (
            <div className="oss-view">
              <div className="oss-vhead">
                <span className={`oss-vtitle ${localeClass}`}>{isGeo ? 'გადახდა' : 'Checkout'}</span>
                <span className="oss-vsub">{isGeo ? 'უსაფრთხო' : 'Secure'}</span>
              </div>
              <div className="oss-cout">
                <div className="oss-creditcard">
                  <div className="oss-cc-top">
                    <span className="oss-cc-chip" />
                    <span className="oss-cc-brand">VISA</span>
                  </div>
                  <div className="oss-cc-num">4917 •••• •••• 2481</div>
                  <div className="oss-cc-bottom">
                    <span>{isGeo ? 'მფლობელი' : 'Holder'}<b>NODAR K.</b></span>
                    <span>{isGeo ? 'ვადა' : 'Expiry'}<b>08 / 28</b></span>
                  </div>
                </div>
                <div className={`oss-pay-btn ${localeClass}`}>
                  <LockIcon />{isGeo ? 'გადახდა — ₾2,400' : 'Pay — ₾2,400'}
                </div>
              </div>
            </div>
          )}

          {region === 'admin' && (
            <div className="oss-view">
              <div className="oss-admin-head">
                <span className={`oss-lbl ${localeClass}`}>{isGeo ? 'მიმოხილვა' : 'Overview'}</span>
                <span className={`oss-addbtn ${localeClass}`}><span>+</span>{isGeo ? 'პროდუქტის დამატება' : 'Add product'}</span>
              </div>
              <div className="oss-stats">
                {[
                  { labelGeo: 'შეკვეთები', labelEng: 'Orders', value: '128', up: '+12%' },
                  { labelGeo: 'შემოსავალი', labelEng: 'Revenue', value: '₾24.6k', up: '+8%' },
                  { labelGeo: 'პროდუქტები', labelEng: 'Products', value: '64' },
                ].map((s) => (
                  <div className="oss-stat" key={s.labelGeo}>
                    <span className="oss-stat-ico"><BagIcon /></span>
                    <span className={`oss-sl ${localeClass}`}>{isGeo ? s.labelGeo : s.labelEng}</span>
                    <span className="oss-sv">{s.value}{s.up && <em>{s.up}</em>}</span>
                  </div>
                ))}
              </div>
              <div className="oss-admin-head">
                <span className={`oss-lbl ${localeClass}`}>{isGeo ? 'ბოლო შეკვეთები' : 'Recent orders'}</span>
              </div>
              {[
                { nameGeo: 'ლეპტოპი', nameEng: 'Laptop', id: '#1042', price: '₾2400', icon: 'laptop', status: 'done' },
                { nameGeo: 'სმარტფონი', nameEng: 'Smartphone', id: '#1041', price: '₾1200', icon: 'phone', status: 'wait' },
              ].map((o) => (
                <div className="oss-order" key={o.id}>
                  <span className="oss-oimg"><ProductIcon type={o.icon} /></span>
                  <div className="oss-oinfo">
                    <div className={`oss-on ${localeClass}`}>{isGeo ? o.nameGeo : o.nameEng}</div>
                    <div className="oss-oid">{o.id}</div>
                  </div>
                  <span className={`oss-ostatus ${o.status} ${localeClass}`}>
                    {o.status === 'done' ? (isGeo ? 'შესრულდა' : 'Done') : (isGeo ? 'მიმდინარე' : 'Pending')}
                  </span>
                  <span className="oss-op">{o.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <p className={`oss-caption ${localeClass}`} key={`cap-${active}`}>
        {isGeo ? tab.captionGeo : tab.captionEng}
      </p>
    </section>
  )
}

export default OnlineShopContent