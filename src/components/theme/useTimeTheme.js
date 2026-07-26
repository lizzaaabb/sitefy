'use client'

import { useEffect, useState } from 'react'

function getTbilisiHour() {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tbilisi',
    hour: 'numeric',
    hour12: false,
  })
  return parseInt(formatter.format(new Date()), 10)
}

export default function useTimeTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const check = () => {
      const hour = getTbilisiHour()
      setIsDark(hour >= 21 || hour < 7)
    }
    check()
    const interval = setInterval(check, 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return isDark
}