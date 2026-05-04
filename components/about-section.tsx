"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2, Globe2, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Seamless cross-border logistics connecting your products to customers worldwide.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "24-hour package injection with same-day shipping options available.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Full customs compliance with Section 321 expertise and secure handling.",
  },
]

const highlights = [
  "Real-time inventory management",
  "Flexible, scalable warehousing",
  "Efficient B2B and DTC fulfillment",
  "Seamless returns management",
  "Domestic & international shipping",
  "Value-added services & support",
]

export function AboutSection() {
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
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p
              data-animate
              className="opacity-0 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ animationDelay: "0.1s" }}
            >
              About Prosper Manufacturing
            </p>
            <h2
              data-animate
              className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance"
              style={{ animationDelay: "0.2s" }}
            >
              We&apos;re the{" "}
              <span className="text-primary">Gold Standard</span> in Cross-Border Fulfillment
            </h2>
            <p
              data-animate
              className="opacity-0 mt-6 text-lg text-muted-foreground leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              At Prosper Manufacturing, we redefine supply chain management through innovation, efficiency, and a customer-first approach. Our mission is to empower businesses with premium shirt printing, streamlined fulfillment, and manufacturing solutions that reduce costs and boost customer satisfaction.
            </p>

            {/* Highlights Grid */}
            <div
              data-animate
              className="opacity-0 mt-10 grid grid-cols-2 gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground/80">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                data-animate
                className="opacity-0 bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex gap-5">
                  <div className="shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
