'use client'

import React from 'react'
import '../../styles/home/WhyUs.css'

const content = {
  titleGeo: 'რატომ ჩვენ',
  subtitleGeo: 'გვჯერა, რომ ხარისხიანი პროდუქტი მყარ პრინციპებზეა აგებული',
  reasons: [
    {
      titleGeo: 'მომხმარებელზე ზრუნვა',
      descriptionGeo:
        'თქვენი კმაყოფილება ჩვენი მთავარი პრიორიტეტია. თითოეულ პროექტს ინდივიდუალური ყურადღებით ვუდგებით.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 21c-5-3.5-8-6.8-8-10.5A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 8 4.5c0 3.7-3 7-8 10.5Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      titleGeo: 'მუდმივი კომუნიკაცია',
      descriptionGeo:
        'პროექტის ყველა ეტაპზე თქვენთან მუდმივ კავშირზე ვართ და გადაწყვეტილებებს ერთად ვიღებთ.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 9h8M8 12.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      titleGeo: 'პროფესიონალების გუნდი',
      descriptionGeo:
        'Sitefy-ს გუნდი აერთიანებს დიზაინის, Frontend, Backend და DevOps სპეციალისტებს.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="17" cy="7.5" r="2.3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15.5 12c2.5 0 4.5 1.8 5 4.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    }
  ]
}

function WhyUs() {
  return (
    <div className="why-us-container">
      <div className="why-us-header">
        <h2 className="why-us-title geo">{content.titleGeo}</h2>
        <p className="why-us-subtitle geo">{content.subtitleGeo}</p>
      </div>

      <div className="why-us-grid">
        {content.reasons.map((reason) => (
          <div className="why-us-item" key={reason.titleGeo}>
            <div className="why-us-icon">{reason.icon}</div>
            <h3 className="why-us-item-title geo">{reason.titleGeo}</h3>
            <p className="why-us-item-description geo">{reason.descriptionGeo}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyUs