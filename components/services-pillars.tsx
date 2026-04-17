"use client"

import { useEffect, useRef, useState } from "react"
import { Package, Factory, Shirt, ArrowRight, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

const pillars = [
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    subtitle: "Custom Production",
    description:
      "Full-scale manufacturing capabilities with quality control at every step. From prototyping to mass production, we deliver excellence.",
    features: [
      "Custom product development",
      "Quality assurance testing",
      "Scalable production",
      "Direct warehouse integration",
    ],
    color: "from-[#06a5f4] to-[#0284c7]",
    stat: "Scalable",
    statLabel: "Production",
  },
  {
    id: "printing",
    icon: Shirt,
    title: "Screen Printing in Tijuana",
    subtitle: "Premium Apparel Services",
    description:
      "Professional screen printing and DTG services for t-shirts, hoodies, sweatshirts, and sweatpants. Our Tijuana facility delivers high-quality custom apparel with fast turnaround times. From single samples to bulk orders, we handle all your printing needs.",
    features: [
      "T-shirts & tank tops",
      "Hoodies & sweatshirts",
      "Sweatpants & joggers",
      "Screen print & DTG",
    ],
    color: "from-[#2c3f62] to-[#1e293b]",
    stat: "48hr",
    statLabel: "Turnaround",
  },
  {
    id: "fulfillment",
    icon: Package,
    title: "IMMEX Fulfillment Services",
    subtitle: "Cross-Border Excellence",
    description:
      "End-to-end IMMEX fulfillment with Tijuana logistics expertise. 24-hour package injection and same-day shipping options. B2B and DTC services with real-time inventory management and seamless cross-border logistics to North America.",
    features: [
      "Real-time inventory tracking",
      "Same-day shipping options",
      "B2B & DTC fulfillment",
      "Returns management",
    ],
    color: "from-[#06a5f4] to-[#2c3f62]",
    stat: "99.9%",
    statLabel: "Accuracy",
  },
]

export function ServicesPillars() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

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
    <section ref={sectionRef} id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p
            data-animate
            className="opacity-0 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ animationDelay: "0.1s" }}
          >
            Our Services
          </p>
          <h2
            data-animate
            className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance"
            style={{ animationDelay: "0.2s" }}
          >
            Screen Printing & Fulfillment Solutions in{" "}
            <span className="text-primary">Tijuana</span>
          </h2>
          <p
            data-animate
            className="opacity-0 mt-6 text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Complete fulfillment IMMEX services, screen printing expertise, and manufacturing capabilities designed to streamline your operations, reduce costs, and accelerate growth across North American markets.
          </p>
        </div>

        {/* Desktop: Horizontal Cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              data-animate
              className="opacity-0 group relative"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div
                className={cn(
                  "relative h-full rounded-3xl p-8 transition-all duration-500",
                  "bg-card border border-border",
                  "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2",
                  "overflow-hidden"
                )}
              >
                {/* Background gradient on hover */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                    `bg-gradient-to-br ${pillar.color}`
                  )}
                />

                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex p-4 rounded-2xl mb-6",
                    `bg-gradient-to-br ${pillar.color}`
                  )}
                >
                  <pillar.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <p className="text-sm font-medium text-primary mb-2">{pillar.subtitle}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{pillar.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Stat */}
                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-foreground">{pillar.stat}</div>
                      <p className="text-sm text-muted-foreground">{pillar.statLabel}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 group/btn"
                      asChild
                    >
                      <Link href={`#${pillar.id}`}>
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Tab Interface */}
        <div className="lg:hidden">
          {/* Tab Buttons */}
          <div
            data-animate
            className="opacity-0 flex rounded-2xl bg-muted p-1 mb-8"
            style={{ animationDelay: "0.3s" }}
          >
            {pillars.map((pillar, index) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all",
                  activeIndex === index
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {pillar.title}
              </button>
            ))}
          </div>

          {/* Active Card */}
          <div
            data-animate
            className="opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={cn(
                  "transition-all duration-300",
                  activeIndex === index ? "block" : "hidden"
                )}
              >
                <div className="bg-card rounded-3xl p-6 border border-border">
                  <div className={cn("inline-flex p-4 rounded-2xl mb-6", `bg-gradient-to-br ${pillar.color}`)}>
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>

                  <p className="text-sm font-medium text-primary mb-2">{pillar.subtitle}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{pillar.description}</p>

                  <ul className="space-y-3 mb-6">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-foreground">{pillar.stat}</div>
                      <p className="text-sm text-muted-foreground">{pillar.statLabel}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary" asChild>
                      <Link href={`#${pillar.id}`}>
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
