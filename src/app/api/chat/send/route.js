import clientPromise from '../../../../../lib/mongodb'

export async function POST(req) {
  try {
    const body = await req.json()
    console.log('[send] incoming body:', body)

    const { sessionId, name, phone, message } = body

    if (!sessionId || !message || !message.trim()) {
      console.log('[send] validation failed - sessionId or message missing')
      return Response.json({ error: 'sessionId and message required' }, { status: 400 })
    }

    console.log('[send] connecting to mongo...')
    const client = await clientPromise
    const db = client.db('sitefy')
    const chats = db.collection('chats')
    const msgMap = db.collection('msgmap')
    console.log('[send] connected to mongo')

    const existingChat = await chats.findOne({ sessionId })
    const isFirst = !existingChat
    console.log('[send] isFirst:', isFirst)

    const newMsg = { sender: 'user', text: message, timestamp: Date.now() }

    const updateResult = await chats.updateOne(
      { sessionId },
      {
        $push: { messages: newMsg },
        $setOnInsert: { sessionId, name, phone, createdAt: Date.now() },
      },
      { upsert: true }
    )
    console.log('[send] mongo updateOne result:', JSON.stringify(updateResult))

    const tgText = isFirst
      ? `🔔 ახალი ჩატი საიტიდან\n👤 სახელი: ${name || 'უცნობია'}\n📞 ტელეფონი: ${phone || 'უცნობია'}\n\n💬 ${message}`
      : `💬 ${message}`

    console.log('[send] TELEGRAM_BOT_TOKEN present?', !!process.env.TELEGRAM_BOT_TOKEN)
    console.log('[send] TELEGRAM_CHAT_ID:', process.env.TELEGRAM_CHAT_ID)
    console.log('[send] sending to telegram, text:', tgText)

    const tgRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: tgText,
        }),
      }
    )

    console.log('[send] telegram HTTP status:', tgRes.status)

    const tgData = await tgRes.json()
    console.log('[send] telegram response body:', JSON.stringify(tgData))

    if (tgData.ok) {
      console.log('[send] telegram send OK, message_id:', tgData.result.message_id)
      const mapResult = await msgMap.updateOne(
        { telegramMessageId: tgData.result.message_id },
        { $set: { sessionId, telegramMessageId: tgData.result.message_id } },
        { upsert: true }
      )
      console.log('[send] msgmap updateOne result:', JSON.stringify(mapResult))
    } else {
      console.error('[send] TELEGRAM SEND FAILED:', tgData.description || tgData)
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('[send] ERROR:', err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}