import clientPromise from '../../../../../lib/mongodb'

export async function POST(req) {
  try {
    const update = await req.json()
    console.log('[webhook] incoming update:', JSON.stringify(update))

    const msg = update.message

    if (!msg) {
      console.log('[webhook] no message field in update, ignoring')
      return Response.json({ ok: true })
    }

    if (!msg.reply_to_message) {
      console.log('[webhook] message is not a reply, ignoring. text was:', msg.text)
      return Response.json({ ok: true })
    }

    console.log('[webhook] reply detected, reply_to_message.message_id:', msg.reply_to_message.message_id)
    console.log('[webhook] reply text:', msg.text)

    console.log('[webhook] connecting to mongo...')
    const client = await clientPromise
    const db = client.db('sitefy')
    console.log('[webhook] connected to mongo')

    const mapping = await db
      .collection('msgmap')
      .findOne({ telegramMessageId: msg.reply_to_message.message_id })

    console.log('[webhook] mapping found?', !!mapping, mapping)

    if (!mapping) {
      console.log('[webhook] NO MAPPING FOUND for this telegramMessageId - cannot route reply to a session')
      return Response.json({ ok: true })
    }

    console.log('[webhook] pushing admin message to sessionId:', mapping.sessionId)

    const updateResult = await db.collection('chats').updateOne(
      { sessionId: mapping.sessionId },
      { $push: { messages: { sender: 'admin', text: msg.text || '', timestamp: Date.now() } } }
    )

    console.log('[webhook] chats updateOne result:', JSON.stringify(updateResult))

    return Response.json({ ok: true })
  } catch (err) {
    console.error('[webhook] ERROR:', err)
    return Response.json({ ok: false }, { status: 500 })
  }
}