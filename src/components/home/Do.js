'use client'

import React, { useRef } from 'react'
import '../../styles/home/Do.css'

const content = {
  titleGeo: 'რას ვაკეთებთ',
  titleEng: 'What We Do',
  services: [
    {
      titleGeo: 'ვებსაიტები',
      titleEng: 'Websites',
      descriptionGeo:
        'ნებისმიერი სირთულის ვებსაიტები - თანამედროვე ტექნოლოგიებზე აგებული, ელვისებური სისწრაფით და გამორჩეული დიზაინით.',
      descriptionEng:
        'Websites of any complexity - built with modern technologies, lightning-fast performance, and outstanding design.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="6.5" cy="6.5" r="0.75" fill="currentColor" />
          <circle cx="9" cy="6.5" r="0.75" fill="currentColor" />
        </svg>
      )
    },
    {
      titleGeo: 'SaaS პლატფორმები',
      titleEng: 'SaaS Platforms',
      descriptionGeo:
        'ვაქცევთ იდეებს ციფრულ პროდუქტებად - ონლაინ პლატფორმები პროდუქტებით, სერვისებით და ფუნქციებით, რომლებიც მომხმარებლებს რეალურ ღირებულებას სთავაზობს.',
      descriptionEng:
        'We turn ideas into digital products - creating online platforms with products, services, and features that deliver real value to users.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      titleGeo: 'ვებ აპლიკაციები',
      titleEng: 'Web Applications',
      descriptionGeo:
        'ვქმნით მორგებულ ვებ სისტემებს, რომლებიც ამარტივებს პროცესებს და ეხმარება თქვენს ბიზნესს უფრო სწრაფად და ეფექტურად მუშაობაში.',
      descriptionEng:
        'We build custom web systems that simplify processes and help your business operate faster and more efficiently.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ]
}

function ServiceCard({ service, index }) {
  const cardRef = useRef(null)

  function handleMouseMove(e) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    card.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      className="service-card reveal"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="service-card-spotlight" />
      <div className="service-top">
        <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="service-icon">{service.icon}</span>
      </div>
      <h3 className="service-title geo">{service.titleGeo}</h3>
      <p className="service-description geo">{service.descriptionGeo}</p>
      <span className="service-arrow" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  )
}

function Do() {
  return (
    <div className="what-we-do-container">
      <h2 className="what-we-do-title geo">{content.titleGeo}</h2>

      <div className="services-grid">
        {content.services.map((service, i) => (
          <ServiceCard service={service} index={i} key={service.titleGeo} />
        ))}
      </div>
    </div>
  )
}

export default Do