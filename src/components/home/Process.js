'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import '../../styles/home/Process.css'

const STEPS = [
  {
    number: '01',
    titleGeo: 'კვლევა და საჭიროების განსაზღვრა',
    titleEng: 'Research & Defining Needs',
    textGeo: 'ვსწავლობთ თქვენს ბიზნესს — რა პრობლემის გადაჭრა გჭირდებათ და რას ელოდებით საბოლოო პროდუქტისგან.',
    textEng: 'We study your business — what problem you need solved and what you expect from the final product.',
  },
  {
    number: '02',
    titleGeo: 'დიზაინის შერჩევა',
    titleEng: 'Design Selection',
    textGeo: 'ერთად ვირჩევთ ვიზუალურ მიმართულებას — ისეთს, რომელიც შეესაბამება თქვენს ბრენდსა და აუდიტორიას.',
    textEng: 'Together we choose a visual direction — one that fits your brand and your audience.',
  },
  {
    number: '03',
    titleGeo: 'ბიუჯეტი და გეგმა',
    titleEng: 'Budget & Plan',
    textGeo: 'ვათანხმებთ ბიუჯეტს და ვგეგმავთ სამუშაო პროცესს — გამჭვირვალედ, უსიურპრიზოდ.',
    textEng: 'We agree on the budget and plan the workflow — transparently, with no surprises.',
  },
  {
    number: '04',
    titleGeo: 'დეველოპმენტი',
    titleEng: 'Development',
    textGeo: 'შაბლონებზე არ ვმუშაობთ — ყველაფერი იწერება კოდში, პროექტის საჭიროებისამებრ (Next.js, React, Node.js, .NET და სხვა თანამედროვე ტექნოლოგიები).',
    textEng: 'We don\u2019t work with templates — everything is custom-coded to fit the project\u2019s needs (Next.js, React, Node.js, .NET, and other modern technologies).',
  },
  {
    number: '05',
    titleGeo: 'გაშვება და ჰოსტინგი',
    titleEng: 'Launch & Hosting',
    textGeo: 'ვასრულებთ და ვათავსებთ პროექტს — თქვენ მხოლოდ დომენი გჭირდებათ, დანარჩენს ჩვენ ვმართავთ.',
    textEng: 'We finish and deploy the project — all you need is a domain, we handle the rest.',
  },
]

function Process() {
  const locale = useLocale()
  const isGeo = locale === 'ka'

  const containerRef = useRef(null)
  const stepRefs = useRef([])
  const [lineProgress, setLineProgress] = useState(0)
  const [visibleSteps, setVisibleSteps] = useState(new Set())

  // fade-in per step, once visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index)
            setVisibleSteps((prev) => new Set(prev).add(idx))
          }
        })
      },
      { threshold: 0.35 }
    )

    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // vertical line fill progress based on scroll — smoothed with lerp
  useEffect(() => {
    let rafId
    let currentProgress = 0
    let targetProgress = 0

    const updateTarget = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const viewportH = window.innerHeight

      const total = rect.height + viewportH
      const covered = viewportH - rect.top
      targetProgress = Math.min(Math.max(covered / total, 0), 1)
    }

    const tick = () => {
      updateTarget()
      currentProgress += (targetProgress - currentProgress) * 0.08
      setLineProgress(currentProgress)
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section className="process-container" ref={containerRef}>
      <div className="process-header">
        <p className={`process-eyebrow ${isGeo ? 'geo' : 'eng'}`}>
          {isGeo ? 'როგორ ვმუშაობთ' : 'How We Work'}
        </p>
        <h2 className={`process-heading ${isGeo ? 'geo' : 'eng'}`}>
          {isGeo ? 'ხუთი ეტაპი, ერთი მკაფიო პროცესი' : 'Five Steps, One Clear Process'}
        </h2>
      </div>

      <div className="process-timeline">
        <div className="process-line-track">
          <div
            className="process-line-fill"
            style={{ transform: `scaleY(${lineProgress})` }}
          />
        </div>

        {STEPS.map((step, i) => (
          <div
            key={step.number}
            ref={(el) => (stepRefs.current[i] = el)}
            data-index={i}
            className={`process-step ${i % 2 === 0 ? 'process-step-left' : 'process-step-right'} ${
              visibleSteps.has(i) ? 'process-step-visible' : ''
            }`}
          >
            <div className="process-dot" />
            <div className="process-content">
              <span className="process-number">{step.number}</span>
              <h3 className={`process-title ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? step.titleGeo : step.titleEng}
              </h3>
              <p className={`process-desc ${isGeo ? 'geo' : 'eng'}`}>
                {isGeo ? step.textGeo : step.textEng}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process