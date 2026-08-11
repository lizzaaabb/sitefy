'use client'

import React, { useState, useEffect, useRef } from 'react'
import './ChatWidget.css'

function getSessionId() {
  if (typeof window === 'undefined') return null
  let id = localStorage.getItem('sitefy_chat_session')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('sitefy_chat_session', id)
  }
  return id
}

function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [sessionId, setSessionId] = useState(null)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [sending, setSending] = useState(false)
  const scrollRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    setSessionId(getSessionId())
  }, [])

  useEffect(() => {
    if (!open || !sessionId) return

    const fetchMessages = async () => {
      try {
        const res = await fetch(`/api/chat/poll?sessionId=${sessionId}`)
        const data = await res.json()
        setMessages(data.messages || [])
      } catch (err) {
        console.error(err)
      }
    }

    fetchMessages()
    const interval = setInterval(fetchMessages, 3000)
    return () => clearInterval(interval)
  }, [open, sessionId])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 90)}px`
    }
  }, [input])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim() || !sessionId) return

    setSending(true)
    const textToSend = input
    setInput('')

    setMessages((prev) => [...prev, { sender: 'user', text: textToSend, timestamp: Date.now() }])

    try {
      await fetch('/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          message: textToSend,
        }),
      })
    } catch (err) {
      console.error(err)
    }
    setSending(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend(e)
    }
  }

  return (
    <div className="chat-widget-wrap">
      {open && (
        <div className="chat-widget-panel">
        <div className="chat-widget-header">
  <div className="chat-widget-status">
    <span className="status-dot" />
    Online
  </div>
  <button className="chat-widget-close" onClick={() => setOpen(false)} aria-label="დახურვა">
    <svg viewBox="0 0 24 24" width="15" height="15">
      <path
        d="M6 6L18 18M6 18L18 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </button>
</div>

          <div className="chat-widget-messages" ref={scrollRef}>
            {messages.length === 0 && (
              <div className="chat-widget-empty">
                <span className="chat-widget-empty-icon">👋</span>
                დაგვიწერეთ, სიამოვნებით დაგეხმარებით
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chat-bubble ${m.sender === 'admin' ? 'chat-bubble-admin' : 'chat-bubble-user'}`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form className="chat-widget-form" onSubmit={handleSend}>
            <div className="chat-input-wrap">
              <textarea
                ref={textareaRef}
                className="chat-input-textarea"
                placeholder="დაწერეთ შეტყობინება..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                required
              />
              <button type="submit" className="chat-send-btn" disabled={sending} aria-label="გაგზავნა">
                <svg viewBox="0 0 512 512" width="15" height="15">
                  <path
                    fill="currentColor"
                    d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {!open && (
        <button className="chat-widget-toggle" onClick={() => setOpen(true)} aria-label="ჩატის გახსნა">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <span className="chat-widget-toggle-ring" />
        </button>
      )}
    </div>
  )
}

export default ChatWidget