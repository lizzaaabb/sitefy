import clientPromise from '../../../../../lib/mongodb'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const sessionId = searchParams.get('sessionId')

    if (!sessionId) {
      return Response.json({ error: 'sessionId required' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db('sitefy')
    const chat = await db.collection('chats').findOne({ sessionId })

    return Response.json({ messages: chat?.messages || [] })
  } catch (err) {
    console.error('Poll error:', err)
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}