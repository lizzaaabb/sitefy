'use client'

import React from 'react'
import '../../styles/home/Logos.css'

const logos = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.svg',
  '/logos/logo5.png',
  '/logos/logo6.png',
  '/logos/logo7.svg',
  '/logos/logo8.png',
  '/logos/logo9.png',
]

function Logos() {
  return (
    <div className="logos-container">
      <div className="logos-track">
        {[...logos, ...logos].map((src, i) => {
          const index = i % logos.length
          const isLarge = index === 3 || index === 8
          return (
            <div
              className={`logo-item ${isLarge ? 'logo-item-large' : ''}`}
              key={i}
            >
              <img src={src} alt={`logo-${index + 1}`} className="logo-img" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Logos