'use client'

import { useEffect } from 'react'

function getTbilisiHour() {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tbilisi',
    hour: 'numeric',
    hour12: false,
  })
  return parseInt(formatter.format(new Date()), 10)
}

export default function ThemeInitializer() {
  useEffect(() => {
    const applyTheme = () => {
      const hour = getTbilisiHour()
      const dark = hour >= 21 || hour < 7
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    }

    applyTheme()
    const interval = setInterval(applyTheme, 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return null
}