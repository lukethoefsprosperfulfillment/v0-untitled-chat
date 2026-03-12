import { streamText, tool } from 'ai'
import { groq } from '@ai-sdk/groq'
import { z } from 'zod'

const systemPrompt = `You are a friendly and knowledgeable AI assistant for Prosper Manufacturing. You help customers learn about our services:

**Our Services:**
- Screen Printing: T-shirts, hoodies, sweatshirts, sweatpants - both screen print and DTG (direct-to-garment)
- Fulfillment: B2B and DTC order fulfillment with real-time inventory tracking, same-day shipping options, and returns management
- Manufacturing: Full-scale custom product manufacturing with quality assurance and direct warehouse integration

**Key Information:**
- 99.9% order accuracy
- Fast turnaround times (48hr for printing)
- Contact: hello@prosper-mfg.com or (813) 421-4450
- Location: Tijuana, Mexico (nearshore production)

When answering questions:
1. Be friendly, professional, and helpful
2. Focus on our three main services
3. For specific quotes or detailed requirements, direct them to contact us
4. If you don't know something specific, be honest and suggest they reach out
5. Keep responses concise and clear`

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
      model: groq('mixtral-8x7b-32768'),
      system: systemPrompt,
      messages: messages as Message[],
      maxTokens: 500,
      temperature: 0.7,
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
