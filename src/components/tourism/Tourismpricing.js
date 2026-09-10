'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/tourism/TourismPricing.css'

const content = {
  titleGeo: "აირჩიეთ თქვენთვის შესაფერისი ვერსია",
  titleEng: "Choose the Plan That's Right for You",

  plans: [
    {
      price: "₾2000",
      titleGeo: "საინფორმაციო საიტი",
      titleEng: "Informational Website",
      descriptionGeo:
        "მრავალგვერდიანი საინფორმაციო საიტი დანიშნულების ადგილების, ტურების და მიმოხილვების გვერდებით — ონლაინ ყიდვის გარეშე.",
      descriptionEng:
        "A multi-page informational site with destination, tour, and review pages — without online purchasing.",
      noteGeo: "ონლაინ ყიდვის გარეშე",
      noteEng: "Without online purchasing",
      features: [
        { geo: "ინდივიდუალური დიზაინი", eng: "Custom design" },
        { geo: "მრავალგვერდიანი სტრუქტურა", eng: "Multi-page structure" },
        { geo: "დანიშნულების ადგილების/ტურების გვერდები", eng: "Destination/tour pages" },
        { geo: "ფოტო-გალერეა", eng: "Photo gallery" },
        { geo: "მიმოხილვები და შეფასებები", eng: "Reviews and ratings" },
        { geo: "საკონტაქტო ფორმა (მოთხოვნის გაგზავნა)", eng: "Contact form (inquiry only)" },
        { geo: "რუკაზე მდებარეობების ჩვენება", eng: "Locations shown on a map" },
        { geo: "ადმინ პანელი", eng: "Admin panel" },
        { geo: "ორენოვანი (ქართული + ინგლისური)", eng: "Bilingual (Georgian + English)" },
        { geo: "მობილურზე სრულად მორგებული დიზაინი", eng: "Fully mobile-responsive design" },
        { geo: "SEO-სთვის ოპტიმიზებული სტრუქტურა", eng: "SEO-optimized structure" },
        { geo: "Next.js ტექნოლოგია", eng: "Built with Next.js" },
      ],
    },
    {
      price: "₾4000",
      titleGeo: "ონლაინ ჯავშნები",
      titleEng: "Online Booking",
      descriptionGeo:
        "ტურების სრული ონლაინ გაყიდვა — ჯავშნებით, გადახდებით და ავტომატური დადასტურებით.",
      descriptionEng:
        "Full online tour sales — with bookings, payments, and automatic confirmation.",
      noteGeo: "ონლაინ გადახდები შედის ფასში",
      noteEng: "Online payments included in the price",
      features: [
        { geo: "ყველაფერი, რაც შედის საინფორმაციო საიტში", eng: "Everything in the Informational Website plan" },
        { geo: "ტურების კალენდარი და ხელმისაწვდომობა", eng: "Tour calendar and availability" },
        { geo: "ონლაინ ჯავშნა და გადახდა", eng: "Online booking and payment" },
        { geo: "ჯავშნის ავტომატური დადასტურება ელფოსტაზე", eng: "Automatic email booking confirmation" },
        { geo: "სეზონური ფასების მართვა", eng: "Seasonal pricing management" },
        { geo: "მომხმარებლის პროფილი (ჯავშნების ისტორია)", eng: "Customer profile (booking history)" },
      ],
    },
    {
      price: "₾8000",
      titleGeo: "სრული პლატფორმა",
      titleEng: "Full Platform",
      descriptionGeo:
        "სრული ტურისტული ეკოსისტემა — ტრანსფერების ბუქინგი, მანქანების გაქირავება და დამატებითი სერვისები ერთად.",
      descriptionEng:
        "A complete tourism ecosystem — transfer booking, car rental, and additional services all in one.",
      noteGeo: "სრული ტურისტული ეკოსისტემა",
      noteEng: "A complete tourism ecosystem",
      features: [
        { geo: "ყველაფერი, რაც შედის ონლაინ ჯავშნაში", eng: "Everything in the Online Booking plan" },
        { geo: "ტრანსფერების ბუქინგი", eng: "Transfer booking" },
        { geo: "მანქანების გაქირავების სისტემა", eng: "Car rental system" },
        { geo: "დამატებითი სერვისების არჩევანი ჯავშნისას (გიდი, დაზღვევა)", eng: "Additional service selection during booking (guide, insurance)" },
        { geo: "ანალიტიკის dashboard ადმინისთვის", eng: "Analytics dashboard for admin" },
      ],
    },
  ],

  ctaGeo: "შეკვეთა",
  ctaEng: "Order",

  additionalLanguage: {
    price: "+₾300",
    titleGeo: "დამატებითი ენა",
    titleEng: "Additional Language",
    descriptionGeo:
      "ქართული და ინგლისური ენები უკვე შედის ფასში — თითოეული დამატებითი ენის დამატება ღირს ₾300.",
    descriptionEng:
      "Georgian and English are already included in the price — each additional language costs ₾300.",
  },

  additionalFeatures: {
    titleGeo: "გსურთ დამატებითი ფუნქციები?",
    titleEng: "Want additional features?",
    descriptionGeo:
      "ჩამოთვლილი ფუნქციების გარდა შესაძლებელია დამატებითი შესაძლებლობების დამატებაც — ფასი შესაბამისად შეიცვლება.",
    descriptionEng:
      "Beyond what's listed, additional features can be added — the price will change accordingly.",
    examples: [
      { geo: "მრავალვალუტიანი გადახდები", eng: "Multi-currency payments" },
      { geo: "Live chat ინტეგრაცია", eng: "Live chat integration" },
      { geo: "ფასდაკლების კოდები", eng: "Discount codes" },
      { geo: "ბლოგი / სიახლეები", eng: "Blog / News section" },
      { geo: "ლოიალობის პროგრამა", eng: "Loyalty program" },
      { geo: "მესამე მხარის ტურ-ოპერატორის API ინტეგრაცია", eng: "Third-party tour operator API integration" },
    ],
  },
};

function TourismPricing() {
  const locale = useLocale()
  const isGeo = locale === 'ka'
  const localeClass = isGeo ? 'geo' : 'eng'

  const title = isGeo ? content.titleGeo : content.titleEng
  const cta = isGeo ? content.ctaGeo : content.ctaEng

  return (
    <section className="tourism-pricing-container">
      <div className="tourism-pricing-header">
        <h2 className={`tourism-pricing-heading ${localeClass}`}>{title}</h2>
      </div>

      <div className="tourism-pricing-grid">
        {content.plans.map((plan) => {
          const planTitle = isGeo ? plan.titleGeo : plan.titleEng
          const planDescription = isGeo ? plan.descriptionGeo : plan.descriptionEng
          const planNote = isGeo ? plan.noteGeo : plan.noteEng

          return (
            <div className="tourism-pricing-col" key={plan.titleGeo}>
              <span className="tourism-pricing-accent" aria-hidden="true" />

              <span className="tourism-pricing-price">{plan.price}</span>
              <p className={`tourism-pricing-note ${localeClass}`}>{planNote}</p>

              <h3 className={`tourism-pricing-title ${localeClass}`}>{planTitle}</h3>
              <p className={`tourism-pricing-description ${localeClass}`}>{planDescription}</p>

              <ul className={`tourism-pricing-features ${localeClass}`}>
                {plan.features.map((f) => (
                  <li key={f.geo}>
                    <span className="tourism-pricing-feature-index" aria-hidden="true" />
                    {isGeo ? f.geo : f.eng}
                  </li>
                ))}
              </ul>

              <a href="#order" className={`tourism-pricing-cta ${localeClass}`}>
                {cta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )
        })}
      </div>

      <div className="tourism-pricing-addon">
        <span className="tourism-pricing-addon-price">{content.additionalLanguage.price}</span>
        <div>
          <p className={`tourism-pricing-addon-title ${localeClass}`}>
            {isGeo ? content.additionalLanguage.titleGeo : content.additionalLanguage.titleEng}
          </p>
          <p className={`tourism-pricing-addon-description ${localeClass}`}>
            {isGeo ? content.additionalLanguage.descriptionGeo : content.additionalLanguage.descriptionEng}
          </p>
        </div>
      </div>

      <div className="tourism-pricing-extra">
        <h3 className={`tourism-pricing-extra-title ${localeClass}`}>
          {isGeo ? content.additionalFeatures.titleGeo : content.additionalFeatures.titleEng}
        </h3>
        <p className={`tourism-pricing-extra-description ${localeClass}`}>
          {isGeo ? content.additionalFeatures.descriptionGeo : content.additionalFeatures.descriptionEng}
        </p>
        <div className="tourism-pricing-extra-examples">
          {content.additionalFeatures.examples.map((example) => (
            <span className={`tourism-pricing-extra-chip ${localeClass}`} key={example.geo}>
              {isGeo ? example.geo : example.eng}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourismPricing