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

  return (
    <div className="chat-widget-wrap">
      {open && (
        <div className="chat-widget-panel">
          <div className="chat-widget-header">
            <span>დაგვიკავშირდით</span>
            <button className="chat-widget-close" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chat-widget-messages" ref={scrollRef}>
            {messages.length === 0 && (
              <div className="chat-widget-empty">დაგვიწერეთ, სიამოვნებით დაგეხმარებით 👋</div>
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
            <input
              type="text"
              placeholder="დაწერეთ შეტყობინება..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button type="submit" disabled={sending}>
              ➤
            </button>
          </form>
        </div>
      )}

      <button className="chat-widget-toggle" onClick={() => setOpen(!open)}>
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}

export default ChatWidget