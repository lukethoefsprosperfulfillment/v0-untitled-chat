"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@prosper-mfg.com",
    href: "mailto:hello@prosper-mfg.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(813) 421-4450",
    href: "tel:+18134214450",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tijuana, Mexico",
    href: "#",
  },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        }
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Contact form error:", error)
      alert("Failed to send message. Please try again or email us directly at luke@prosperfulfillment.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <p
              data-animate
              className="opacity-0 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ animationDelay: "0.1s" }}
            >
              Contact Us
            </p>
            <h2
              data-animate
              className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance"
              style={{ animationDelay: "0.2s" }}
            >
              Let&apos;s Start{" "}
              <span className="text-primary">Planning</span>
            </h2>
            <p
              data-animate
              className="opacity-0 mt-6 text-lg text-muted-foreground leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              Ready to transform your e-commerce operations? Get in touch with our team to discuss your fulfillment, manufacturing, and printing needs.
            </p>

            {/* Contact Info */}
            <div
              data-animate
              className="opacity-0 mt-10 space-y-6"
              style={{ animationDelay: "0.4s" }}
            >
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div
              data-animate
              className="opacity-0 mt-10 pt-10 border-t border-border"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-sm text-muted-foreground mb-4">Follow us</p>
              <div className="flex gap-4">
                {["LinkedIn", "Instagram", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div
            data-animate
            className="opacity-0 bg-card rounded-3xl p-8 border border-border shadow-sm"
            style={{ animationDelay: "0.4s" }}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    name="service"
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="fulfillment">Fulfillment</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="printing">Printing</option>
                    <option value="all">All Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your needs..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
