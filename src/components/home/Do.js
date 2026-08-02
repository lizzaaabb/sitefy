'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import '../../styles/home/Do.css'

const services = [
  {
    titleGeo: 'ვებსაიტები',
    descriptionGeo:
      'ნებისმიერი სირთულის ვებსაიტები - თანამედროვე ტექნოლოგიებზე აგებული, ელვისებური სისწრაფით და გამორჩეული დიზაინით.',
    icon: '/scroll/l1.png'
  },
  {
    titleGeo: 'SaaS პლატფორმები',
    descriptionGeo:
      'ვაქცევთ იდეებს ციფრულ პროდუქტებად - ონლაინ პლატფორმები პროდუქტებით, სერვისებით და ფუნქციებით, რომლებიც მომხმარებლებს რეალურ ღირებულებას სთავაზობს.',
    icon: '/scroll/l2.png'
  },
  {
    titleGeo: 'ვებ აპლიკაციები',
    descriptionGeo:
      'ვქმნით მორგებულ ვებ სისტემებს, რომლებიც ამარტივებს პროცესებს და ეხმარება თქვენს ბიზნესს უფრო სწრაფად და ეფექტურად მუშაობაში.',
    icon: '/scroll/l3.png'
  }
]

// GAP = სქროლის წილი, სადაც არცერთი ბარათი არ ჩანს (ნამდვილი "დაცლა")
const GAP = 0.12

function Do() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const total = services.length
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const seg = 1 / total
    let next = -1

    for (let i = 0; i < total; i++) {
      const segStart = i * seg
      const segEnd = (i + 1) * seg
      const visStart = i === 0 ? 0 : segStart + GAP / 2
      const visEnd = i === total - 1 ? 1 : segEnd - GAP / 2

      if (v >= visStart && v <= visEnd) {
        next = i
        break
      }
    }

    setActiveIndex((prev) => (prev !== next ? next : prev))
  })

  return (
    <div className="do-slideshow-wrapper">
      <div
        ref={containerRef}
        className="do-scroll-container"
        style={{ '--card-count': total }}
      >
        <div className="do-sticky-container">
          <div className="do-progress-line-container">
            <motion.div className="do-progress-line" style={{ height: progressHeight }} />
          </div>

          <div className="do-body">
            <h2 className="do-fixed-title geo">რას ვაკეთებთ</h2>

            <div className="do-cards-area">
              {services.map((service, index) => (
                <div
                  key={service.titleGeo}
                  className={`do-inner ${index === activeIndex ? 'is-active' : ''}`}
                >
                  <div className="do-content">
                    <div className="do-icon-container">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.icon}
                        alt={service.titleGeo}
                        className="do-icon"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                    <h3 className="do-title geo">{service.titleGeo}</h3>
                    <p className="do-description geo">{service.descriptionGeo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Do