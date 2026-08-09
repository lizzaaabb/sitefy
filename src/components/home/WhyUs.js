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
      icon: '/icons/icon2.png'
    },
    {
      titleGeo: 'მუდმივი კომუნიკაცია',
      descriptionGeo:
        'პროექტის ყველა ეტაპზე თქვენთან მუდმივ კავშირზე ვართ და გადაწყვეტილებებს ერთად ვიღებთ.',
      icon: '/icons/icon1.png'
    },
    {
      titleGeo: 'პროფესიონალების გუნდი',
      descriptionGeo:
        'Sitefy-ს გუნდი აერთიანებს დიზაინის, Frontend, Backend და DevOps სპეციალისტებს.',
      icon: '/icons/icon3.png'
    }
  ]
}

function WhyUs() {
  return (
    <div className="why-us-container">
      <div className="why-us-header">
        <h2 className="geo">{content.titleGeo}</h2>
        <p className="geo">{content.subtitleGeo}</p>
      </div>

      <div className="why-us-body">
        {content.reasons.map((reason) => (
          <div key={reason.titleGeo} className="why-us-card">
            <img src={reason.icon} alt={reason.titleGeo} className="why-us-icon" />
            <h3 className="geo">{reason.titleGeo}</h3>
            <p className="geo">{reason.descriptionGeo}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyUs