'use server'

import { streamText } from 'ai'

const systemPrompt = `You are a helpful AI assistant for Prosper Manufacturing, a company specializing in screen printing, fulfillment, and manufacturing services. 

Key information about Prosper Manufacturing:
- Services: Screen printing (t-shirts, hoodies, sweatshirts, sweatpants), fulfillment (B2B & DTC order fulfillment), and custom manufacturing
- 99.9% order accuracy
- Fast turnaround times
- Manufacturing + Screen Printing & Fulfillment
- Phone: (813) 421-4450
- Email: hello@prosper-mfg.com

When answering questions:
1. Be friendly and professional
2. Focus on our core services: screen printing, fulfillment, and manufacturing
3. Provide helpful information about what we offer
4. If asked for specific pricing or detailed quotes, direct them to contact us at hello@prosper-mfg.com or (813) 421-4450
5. Keep responses concise and helpful
6. If you don't know something specific about our services, be honest and suggest they contact us`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      )
    }

    const result = streamText({
      model: 'xai/grok-2',
      system: systemPrompt,
      messages: messages as Message[],
      maxTokens: 500,
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}
