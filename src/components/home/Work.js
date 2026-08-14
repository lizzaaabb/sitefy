'use client'

import React from 'react'
import '../../styles/home/Work.css'

const mockup = '/mockups/mockup.png'

const PROJECTS = [
  {
    number: '01',
    title: 'Valore Real Estate',
    tag: 'უძრავი ქონება · ვებ პლატფორმა',
    text: 'უძრავი ქონების სრული ციფრული ეკოსისტემა — ბინების, სახლების და კომერციული ფართების საძიებო პლატფორმა ადმინ პანელით, ორენოვანი ინტერფეისითა და SEO-ზე მორგებული არქიტექტურით.',
    image: mockup,
    href: '#',
  },
  {
    number: '02',
    title: 'Sitefy',
    tag: 'ვებ სააგენტო · ბრენდინგი',
    text: 'მინიმალისტური, მაღალი კონვერსიის სააგენტო საიტი — 3D tilt ეფექტებით, სრულ ეკრანზე ვიდეო hero-თი და ცოცხალი chat ვიჯეტით, პირდაპირ Telegram-ში ინტეგრირებული.',
    image: mockup,
    href: '#',
  },
  {
    number: '03',
    title: 'Greeter Transfer',
    tag: 'ტურიზმი · ბუკინგ პლატფორმა',
    text: 'ტრანსფერების დაჯავშნის სისტემა რეალურ დროში მარშრუტის კალკულაციით, სამენოვანი კალენდრით და მძღოლების/მანქანების სრული მართვის პანელით.',
    image: mockup,
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
        {PROJECTS.map((project, i) => (
          
           <a href={project.href}
            className={`work-row ${i % 2 === 1 ? 'work-row-reverse' : ''}`}
            key={project.number}
          >
            <div className="work-image-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="work-image"
              />
            </div>

            <div className="work-text">
              <span className="work-number">{project.number}</span>
              <p className="work-tag">{project.tag}</p>
              <h3 className="work-title">{project.title}</h3>
              <p className="work-desc">{project.text}</p>
              <span className="work-link">
                ნახე პროექტი <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Work