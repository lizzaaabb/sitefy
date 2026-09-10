'use client'

import React, { useState } from 'react'
import { useLocale } from 'next-intl'
import '../../styles/tourism/TourismContent.css'

const content = {
  titleGeo: "რა შედის ტურისტულ ვებსაიტში",
  titleEng: "What's Included in a Tourism Website",

  descriptionGeo:
    "სტრუქტურა და ფუნქციონალი დამოკიდებულია იმაზე, გსურთ საინფორმაციო საიტი თუ სრულფასოვანი ონლაინ ჯავშნის პლატფორმა.",
  descriptionEng:
    "The structure and functionality depend on whether you want an informational site or a full online booking platform.",

  sections: [
    {
      titleGeo: "დანიშნულების ადგილების გვერდები",
      titleEng: "Destination Pages",
      descriptionGeo:
        "თითოეული ტურის/დანიშნულების ცალკე გვერდი აღწერით, ფასით და დეტალებით.",
      descriptionEng:
        "A separate page for each tour or destination with a description, price, and details.",
    },
    {
      titleGeo: "ფოტო-გალერეა",
      titleEng: "Photo Gallery",
      descriptionGeo:
        "ვიზუალურად მიმზიდველი გალერეა, რომელიც წარმოაჩენს დანიშნულების ადგილებსა და ტურების ატმოსფეროს.",
      descriptionEng:
        "A visually appealing gallery that showcases destinations and the atmosphere of your tours.",
    },
    {
      titleGeo: "მიმოხილვები და შეფასებები",
      titleEng: "Reviews & Ratings",
      descriptionGeo:
        "მომხმარებელთა გამოხმაურება ზრდის ნდობას და ეხმარება ახალ ვიზიტორებს გადაწყვეტილების მიღებაში.",
      descriptionEng:
        "Customer feedback builds trust and helps new visitors make decisions.",
    },
    {
      titleGeo: "ონლაინ ჯავშნა და გადახდა",
      titleEng: "Online Booking & Payment",
      descriptionGeo:
        "კალენდარზე დაფუძნებული ხელმისაწვდომობა, ონლაინ გადახდა და ავტომატური დადასტურება ელფოსტაზე.",
      descriptionEng:
        "Calendar-based availability, online payment, and automatic email confirmation.",
    },
    {
      titleGeo: "დამატებითი სერვისები",
      titleEng: "Additional Services",
      descriptionGeo:
        "ტრანსფერების ჯავშნა, მანქანების გაქირავება და სხვა დამატებითი სერვისების არჩევანი ჯავშნისას.",
      descriptionEng:
        "Transfer bookings, car rentals, and other additional services selectable during booking.",
    },
    {
      titleGeo: "ადმინ პანელი",
      titleEng: "Admin Panel",
      descriptionGeo:
        "თავად მართეთ ტურები, ფასები, ხელმისაწვდომობა და ჯავშნები — დეველოპერის დახმარების გარეშე.",
      descriptionEng:
        "Manage tours, prices, availability, and bookings yourself — no developer needed.",
    },
    {
      titleGeo: "საკონტაქტო ინფორმაცია და რუკა",
      titleEng: "Contact Information & Map",
      descriptionGeo:
        "საკონტაქტო ფორმა, სოციალური ქსელები და დანიშნულების ადგილების მდებარეობა რუკაზე.",
      descriptionEng:
        "A contact form, social media links, and destination locations shown on a map.",
    },
  ],
};

function pad(n) {
  return String(n).padStart(2, '0')
}

function TourismContent() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const [active, setActive] = useState(0)
  const current = content.sections[active]

  const title = isGeo ? content.titleGeo : content.titleEng
  const description = isGeo ? content.descriptionGeo : content.descriptionEng

  return (
    <section className="tourism-content-container">
      <span className="tourism-content-watermark" key={`wm-${active}`} aria-hidden="true">
        {pad(active + 1)}
      </span>

      <div className="tourism-content-header">
        <h2 className={`tourism-content-heading ${localeClass}`}>{title}</h2>
        <p className={`tourism-content-description ${localeClass}`}>{description}</p>
      </div>

      <div className="tourism-content-split">
        <nav className="tourism-content-nav">
          {content.sections.map((section, i) => {
            const sectionTitle = isGeo ? section.titleGeo : section.titleEng
            return (
              <button
                key={section.titleGeo}
                type="button"
                className={`tourism-content-nav-item${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="tourism-content-nav-index">{pad(i + 1)}</span>
                <span className={`tourism-content-nav-title ${localeClass}`}>{sectionTitle}</span>
                <span className="tourism-content-nav-leader" aria-hidden="true" />
              </button>
            )
          })}
        </nav>

        <div className="tourism-content-panel">
          <div className="tourism-content-panel-body" key={active}>
            <span className="tourism-content-panel-accent" aria-hidden="true" />
            <h3 className={`tourism-content-panel-title ${localeClass}`}>
              {isGeo ? current.titleGeo : current.titleEng}
            </h3>
            <p className={`tourism-content-panel-description ${localeClass}`}>
              {isGeo ? current.descriptionGeo : current.descriptionEng}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourismContent