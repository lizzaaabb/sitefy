'use client'

import React, { useState, useEffect } from 'react'

function TypewriterText({ staticLine, cyclingLines, typingSpeed = 60, deletingSpeed = 30, pauseAfterTyping = 1800, pauseAfterDeleting = 400 }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [phase, setPhase] = useState('typing') // 'typing' | 'deleting'

  useEffect(() => {
    const currentLine = cyclingLines[lineIndex]

    if (phase === 'typing') {
      if (displayedText.length < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentLine.slice(0, displayedText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setPhase('deleting'), pauseAfterTyping)
        return () => clearTimeout(timeout)
      }
    }

    if (phase === 'deleting') {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentLine.slice(0, displayedText.length - 1))
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % cyclingLines.length)
          setPhase('typing')
        }, pauseAfterDeleting)
        return () => clearTimeout(timeout)
      }
    }
  }, [displayedText, phase, lineIndex, cyclingLines, typingSpeed, deletingSpeed, pauseAfterTyping, pauseAfterDeleting])

 return (
  <div className="typewriter-stack">
    <p className="description">{staticLine}</p>
    <p className="description typewriter gradient-text">
      {displayedText}
      <span className="typewriter-cursor">|</span>
    </p>
  </div>
)}

export default TypewriterText