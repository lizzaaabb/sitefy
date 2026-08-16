'use client'

import React, { useEffect, useRef, useState } from 'react'
import '../../styles/home/Process.css'

const STEPS = [
  {
    number: '01',
    title: 'კვლევა და საჭიროების განსაზღვრა',
    text: 'ვსწავლობთ თქვენს ბიზნესს — რა პრობლემის გადაჭრა გჭირდებათ და რას ელოდებით საბოლოო პროდუქტისგან.',
  },
  {
    number: '02',
    title: 'დიზაინის შერჩევა',
    text: 'ერთად ვირჩევთ ვიზუალურ მიმართულებას — ისეთს, რომელიც შეესაბამება თქვენს ბრენდსა და აუდიტორიას.',
  },
  {
    number: '03',
    title: 'ბიუჯეტი და გეგმა',
    text: 'ვათანხმებთ ბიუჯეტს და ვგეგმავთ სამუშაო პროცესს — გამჭვირვალედ, უსიურპრიზოდ.',
  },
  {
    number: '04',
    title: 'დეველოპმენტი',
    text: 'შაბლონებზე არ ვმუშაობთ — ყველაფერი იწერება კოდში, პროექტის საჭიროებისამებრ (Next.js, React, Node.js, .NET და სხვა თანამედროვე ტექნოლოგიები).',
  },
  {
    number: '05',
    title: 'გაშვება და ჰოსტინგი',
    text: 'ვასრულებთ და ვათავსებთ პროექტს — თქვენ მხოლოდ დომენი გჭირდებათ, დანარჩენს ჩვენ ვმართავთ.',
  },
]

function Process() {
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
        <p className="process-eyebrow">როგორ ვმუშაობთ</p>
        <h2 className="process-heading">ხუთი ეტაპი, ერთი მკაფიო პროცესი</h2>
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
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process