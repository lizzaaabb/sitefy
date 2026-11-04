'use client'

/*
  ScrollReveal — one global, lightweight scroll animation layer for every page.
  - a single IntersectionObserver (no scroll listeners, no rAF loops)
  - animates only opacity / translate / scale (GPU), blur only on headings
  - each element animates once, then helper classes are removed
  - elements already visible on load are never hidden (no flash)
  - respects "reduce motion" OS setting
  To animate something new, add a line to RULES (selector → effect).
  Effects: heading | up | card | zoom | left | right   (styles in globals.css)
*/

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const RULES = [
  ['.why-us-header > *', 'heading'],
  ['.work-eyebrow, .work-heading', 'heading'],
  ['.process-eyebrow, .process-heading', 'heading'],
  ['.pricing-eyebrow, .pricing-heading', 'heading'],
  ['.cp-eyebrow, .cp-heading', 'heading'],
  ['.lp-header > *', 'heading'],
  ['.tourism-pricing-header > *', 'heading'],
  ['.tourism-content-header > *', 'heading'],
  ['.oss-header > *', 'heading'],
  ['.why-us-card', 'card'],
  ['.work-row', 'up'],
  ['.work-footer', 'up'],
  ['.pricing-col', 'card'],
  ['.pricing-note', 'up'],
  ['.pl-card', 'card'],
  ['.cp-card', 'card'],
  ['.cp-group', 'up'],
  ['.cp-addon, .cp-extra', 'up'],
  ['.lp-card', 'card'],
  ['.lp-addon, .lp-extra', 'up'],
  ['.osp-grid > *', 'card'],
  ['.osp-addon', 'up'],
  ['.oss-step', 'left'],
  ['.oss-stage', 'zoom'],
  ['.tp-feature-group', 'up'],
  ['.tourism-pricing-addon, .tourism-pricing-extra', 'up'],
  ['.tourism-content-split', 'up'],
  ['.cta-gold-card, .corporate-cta-card, .landing-cta-card, .online-shop-cta-card, .tourism-cta-card', 'zoom'],
  ['.footer-brand, .footer-col, .footer-bottom', 'up'],
]

// never touch these areas (they have their own animations)
const SKIP = '.do-slideshow-wrapper, .process-step, .landing-container, [class*="-hero-container"], .chat-widget-wrap'

const STAGGER = 85
const MAX_STAGGER_STEPS = 7
const DURATION = 1100

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timers = new Set()
    let observer
    let raf1
    let raf2

    const finish = (el) => {
      el.classList.remove('sr-run')
      el.style.removeProperty('--sr-delay')
      delete el.dataset.sr
    }

    const reveal = (el, delay) => {
      el.style.setProperty('--sr-delay', `${delay}ms`)
      el.classList.add('sr-run')
      requestAnimationFrame(() => el.classList.remove('sr-hide'))
      const t = setTimeout(() => {
        timers.delete(t)
        finish(el)
      }, DURATION + delay + 80)
      timers.add(t)
    }

    const setup = () => {
      const vh = window.innerHeight
      const targets = []
      const seen = new Set()

      for (const [selector, effect] of RULES) {
        document.querySelectorAll(selector).forEach((el) => {
          if (seen.has(el) || el.dataset.sr || el.closest(SKIP)) return
          seen.add(el)
          const rect = el.getBoundingClientRect()
          if (rect.top < vh * 0.92 || (rect.width === 0 && rect.height === 0)) return
          el.dataset.sr = effect
          el.classList.add('sr-hide')
          targets.push(el)
        })
      }
      if (!targets.length) return

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .map((e) => e.target)
            .sort((a, b) => {
              const ra = a.getBoundingClientRect()
              const rb = b.getBoundingClientRect()
              return ra.top - rb.top || ra.left - rb.left
            })
          visible.forEach((el, i) => {
            observer.unobserve(el)
            reveal(el, Math.min(i, MAX_STAGGER_STEPS) * STAGGER)
          })
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0 }
      )
      targets.forEach((el) => observer.observe(el))
    }

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(setup)
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      observer?.disconnect()
      timers.forEach(clearTimeout)
      document.querySelectorAll('.sr-hide, .sr-run').forEach((el) => {
        el.classList.remove('sr-hide', 'sr-run')
        el.style.removeProperty('--sr-delay')
        delete el.dataset.sr
      })
    }
  }, [pathname])

  return null
}
