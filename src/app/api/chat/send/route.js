import clientPromise from '../../../../../lib/mongodb'

export async function POST(req) {
  try {
    const { sessionId, name, phone, message } = await req.json()

    if (!sessionId || !message || !message.trim()) {
      return Response.json({ error: 'sessionId and message required' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('sitefy')
    const chats = db.collection('chats')
    const msgMap = db.collection('msgmap')

    const existingChat = await chats.findOne({ sessionId })
    const isFirst = !existingChat

    const newMsg = { sender: 'user', text: message, timestamp: Date.now() }

    await chats.updateOne(
      { sessionId },
      {
        $push: { messages: newMsg },
        $setOnInsert: { sessionId, name, phone, createdAt: Date.now() },
      },
      { upsert: true }
    )

    const tgText = isFirst
      ? `🔔 ახალი ჩატი საიტიდან\n👤 სახელი: ${name || 'უცნობია'}\n📞 ტელეფონი: ${phone || 'უცნობია'}\n\n💬 ${message}`
      : `💬 ${message}`

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
    const tgData = await tgRes.json()

    if (tgData.ok) {
      await msgMap.updateOne(
        { telegramMessageId: tgData.result.message_id },
        { $set: { sessionId, telegramMessageId: tgData.result.message_id } },
        { upsert: true }
      )
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('Chat send error:', err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}