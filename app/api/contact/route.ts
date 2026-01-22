import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, service, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send email using Resend or similar service
    // For now, we'll use a simple fetch to a mail service
    const emailContent = `
New Contact Form Submission from Prosper Manufacturing Website

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || "Not provided"}
Service Interest: ${service || "Not specified"}

Message:
${message || "No message provided"}

---
This email was sent from the contact form at prosper-mfg.com
    `.trim()

    // Using Resend API to send emails
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Prosper Manufacturing <noreply@prosper-mfg.com>",
        to: "luke@prosperfulfillment.com",
        reply_to: email,
        subject: `New Contact: ${firstName} ${lastName} - ${service || "General Inquiry"}`,
        text: emailContent,
      }),
    })

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text()
      console.error("[v0] Resend API error:", errorData)
      
      // Fallback: Log the submission for manual processing
      console.log("[v0] Contact form submission (email failed):", {
        to: "luke@prosperfulfillment.com",
        from: email,
        name: `${firstName} ${lastName}`,
        company,
        service,
        message,
        timestamp: new Date().toISOString(),
      })
      
      // Still return success to user - we've logged the submission
      return NextResponse.json({ success: true, fallback: true })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
