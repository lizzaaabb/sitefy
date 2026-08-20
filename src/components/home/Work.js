'use client'

import React from 'react'
import '../../styles/home/Work.css'

const PROJECTS = [
  {
    number: '01',
    title: 'Valore Real Estate',
    tag: 'უძრავი ქონება · ვებ პლატფორმა',
    year: '2025',
    href: 'https://www.valore.ge/',
  },
  {
    number: '02',
    title: 'Utopia VIP Travel',
    tag: 'ტურიზმი · ბუქინგ პლატფორმა',
    year: '2024',
    href: 'https://www.utopiaviptravel.com/',
  },
  {
    number: '03',
    title: 'Greeter Transfer',
    tag: 'ტურიზმი · ბუკინგ პლატფორმა',
    year: '2025',
    href: '#',
  },
]

function Work() {
  return (
    <section className="work-container">
      <div className="work-header">
        <p className="work-eyebrow">Selected Work</p>
        <h2 className="work-heading">გამორჩეული ნამუშევრები</h2>
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
            <span className="work-tag">{project.tag}</span>
            <span className="work-year">{project.year}</span>
            <span className="work-arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </div>

      <div className="work-footer">
        <a href="/work" className="work-cta">
          <span className="work-cta-text">იხილეთ ყველა ნამუშევარი</span>
        </a>
      </div>
    </section>
  )
}

export default Work