export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      )
    }

    // Extract the latest user message
    const lastMessage = messages[messages.length - 1]
    
    console.log('[v0] Received chat payload:', { messages })

    // Forward to your chatbot service
    const response = await fetch('https://prosper-chat.odpkye.easypanel.host/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })

    if (!response.ok) {
      throw new Error('Failed to get response from chatbot service')
    }

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error('[v0] Chat API error:', error)
    return Response.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}
