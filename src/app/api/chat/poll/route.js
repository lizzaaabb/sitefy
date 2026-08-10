import clientPromise from '../../../../../lib/mongodb'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const sessionId = searchParams.get('sessionId')
    console.log('[poll] incoming request, sessionId:', sessionId)

    if (!sessionId) {
      console.log('[poll] missing sessionId, returning 400')
      return Response.json({ error: 'sessionId required' }, { status: 400 })
    }

    console.log('[poll] connecting to mongo...')
    const client = await clientPromise
    const db = client.db('sitefy')
    console.log('[poll] connected, querying chats collection')

    const chat = await db.collection('chats').findOne({ sessionId })
    console.log('[poll] chat found?', !!chat, 'messages count:', chat?.messages?.length || 0)

    return Response.json({ messages: chat?.messages || [] })
  } catch (err) {
    console.error('[poll] ERROR:', err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}