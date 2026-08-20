'use client'

import React from 'react'
import { useLocale } from 'next-intl'
import '../../styles/home/Work.css'

const PROJECTS = [
  {
    number: '01',
    title: 'Valore Real Estate',
    tagGeo: 'უძრავი ქონება · ვებ პლატფორმა',
    tagEng: 'Real Estate · Web Platform',
    year: '2025',
    href: 'https://www.valore.ge/',
  },
  {
    number: '02',
    title: 'Utopia VIP Travel',
    tagGeo: 'ტურიზმი · ბუქინგ პლატფორმა',
    tagEng: 'Tourism · Booking Platform',
    year: '2024',
    href: 'https://www.utopiaviptravel.com/',
  },
  {
    number: '03',
    title: 'Your Hood',
    tagGeo: 'ტანსაცმელი · ონლაინ მაღაზია',
    tagEng: 'Clothing · Online Store',
    year: '2025',
    href: 'https://yourhood.ge/',
  },
]

function Work() {
  const locale = useLocale()
  const isGeo = locale === 'ka'

  return (
    <section className="work-container">
      <div className="work-header">
        <p className="work-eyebrow">Selected Work</p>
        <h2 className={`work-heading ${isGeo ? 'geo' : 'eng'}`}>
          {isGeo ? 'გამორჩეული ნამუშევრები' : 'Featured Projects'}
        </h2>
      </div>

      <div className="work-list">
        {PROJECTS.map((project) => (
          <a href={project.href}
            className="work-row"
            key={project.number}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="work-number">{project.number}</span>
            <span className="work-title">{project.title}</span>
            <span className={`work-tag ${isGeo ? 'geo' : 'eng'}`}>
              {isGeo ? project.tagGeo : project.tagEng}
            </span>
            <span className="work-year">{project.year}</span>
            <span className="work-arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </div>

      <div className="work-footer">
        <a href="/work" className="work-cta">
          <span className={`work-cta-text ${isGeo ? 'geo' : 'eng'}`}>
            {isGeo ? 'იხილეთ ყველა ნამუშევარი' : 'View All Projects'}
          </span>
        </a>
      </div>
    </section>
  )
}

export default Work