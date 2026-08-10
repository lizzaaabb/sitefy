import clientPromise from '../../../../../lib/mongodb'

export async function POST(req) {
  try {
    const update = await req.json()
    const msg = update.message

    if (!msg || !msg.reply_to_message) {
      return Response.json({ ok: true })
    }

    const client = await clientPromise
    const db = client.db('sitefy')

    const mapping = await db
      .collection('msgmap')
      .findOne({ telegramMessageId: msg.reply_to_message.message_id })

    if (!mapping) {
      return Response.json({ ok: true })
    }

    await db.collection('chats').updateOne(
      { sessionId: mapping.sessionId },
      { $push: { messages: { sender: 'admin', text: msg.text || '', timestamp: Date.now() } } }
    )

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Webhook error:', err)
    return Response.json({ ok: false }, { status: 500 })
  }
}