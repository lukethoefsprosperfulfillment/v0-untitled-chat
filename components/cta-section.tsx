"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section ref={sectionRef} id="quote" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          data-animate
          className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight text-balance"
          style={{ animationDelay: "0.1s" }}
        >
          Ready to Prosper?
        </h2>
        <p
          data-animate
          className="opacity-0 mt-6 text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          Get a free quote and discover how our fulfillment, manufacturing, and printing services can transform your e-commerce operations.
        </p>

        <div
          data-animate
          className="opacity-0 mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-14 px-8 text-base font-semibold"
            asChild
          >
            <Link href="#contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent h-14 px-8 text-base"
            asChild
          >
            <Link href="#contact">Book a Call</Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div
          data-animate
          className="opacity-0 mt-16 pt-12 border-t border-primary-foreground/20"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Brands Served" },
              { value: "10M+", label: "Packages Shipped" },
              { value: "30%", label: "Avg. Cost Savings" },
              { value: "99.9%", label: "Accuracy Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground">{stat.value}</div>
                <p className="text-sm text-primary-foreground/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
