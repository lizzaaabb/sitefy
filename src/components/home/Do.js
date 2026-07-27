'use client'

import React from 'react'
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
        'Websites of any complexity - built with modern technologies, lightning-fast performance, and outstanding design.'
    },
    {
      titleGeo: 'SaaS პლატფორმები',
      titleEng: 'SaaS Platforms',
      descriptionGeo:
        'ვაქცევთ იდეებს ციფრულ პროდუქტებად - ონლაინ პლატფორმები პროდუქტებით, სერვისებით და ფუნქციებით, რომლებიც მომხმარებლებს რეალურ ღირებულებას სთავაზობს.',
      descriptionEng:
        'We turn ideas into digital products - creating online platforms with products, services, and features that deliver real value to users.'
    },
    {
      titleGeo: 'ვებ აპლიკაციები',
      titleEng: 'Web Applications',
      descriptionGeo:
        'ვქმნით მორგებულ ვებ სისტემებს, რომლებიც ამარტივებს პროცესებს და ეხმარება თქვენს ბიზნესს უფრო სწრაფად და ეფექტურად მუშაობაში.',
      descriptionEng:
        'We build custom web systems that simplify processes and help your business operate faster and more efficiently.'
    }
  ]
}

function Do() {
  return (
    <div className='what-we-do-container'>
      <h2 className="what-we-do-title geo">{content.titleGeo}</h2>

      <div className="services-grid">
        {content.services.map((service, i) => (
          <div className="service-card" key={service.titleGeo}>
            <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="service-title geo">{service.titleGeo}</h3>
            <p className="service-description geo">{service.descriptionGeo}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Do