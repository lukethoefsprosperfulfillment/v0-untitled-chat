"use client"

import { useEffect, useRef } from "react"
import { Warehouse, Truck, RotateCcw, Sparkles, ArrowDownToLine, Package } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Real-time inventory management and flexible, scalable warehousing solutions tailored to your needs.",
    features: ["Climate-controlled storage", "Real-time monitoring", "Flexible scaling"],
  },
  {
    icon: Package,
    title: "Fulfillment",
    description: "Efficient B2B and DTC order fulfillment with real-time management and 24-hour package injection.",
    features: ["Same-day shipping", "Pick & pack services", "Quality control"],
  },
  {
    icon: RotateCcw,
    title: "Returns Management",
    description: "Efficient returns management for seamless processing and maximum recovery value.",
    features: ["Easy customer returns", "Quick processing", "Value recovery"],
  },
  {
    icon: Truck,
    title: "Shipping",
    description: "Domestic and international shipping with real-time tracking through reliable carriers.",
    features: ["Global coverage", "Live tracking", "Competitive rates"],
  },
  {
    icon: Sparkles,
    title: "Value Added Services",
    description: "Enhance your fulfillment with custom packaging, kitting, and promotional inserts.",
    features: ["Custom packaging", "Kitting services", "Brand inserts"],
  },
  {
    icon: ArrowDownToLine,
    title: "Managed Inbound",
    description: "We manage inbound freight to Tijuana, including customs clearance and documentation.",
    features: ["Freight management", "Customs clearance", "Documentation"],
  },
]

export function ServicesGrid() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            data-animate
            className="opacity-0 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ animationDelay: "0.1s" }}
          >
            Complete Solutions
          </p>
          <h2
            data-animate
            className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance"
            style={{ animationDelay: "0.2s" }}
          >
            Cross-Border Fulfillment Services for{" "}
            <span className="text-primary">E-Commerce Growth</span>
          </h2>
          <p
            data-animate
            className="opacity-0 mt-6 text-lg text-muted-foreground"
            style={{ animationDelay: "0.3s" }}
          >
            Streamline your logistics with efficient, reliable, and scalable services tailored to boost your e-commerce operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-animate
              className={cn(
                "opacity-0 group relative bg-card rounded-2xl p-6 border border-border",
                "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              )}
              style={{ animationDelay: `${0.3 + index * 0.08}s` }}
            >
              {/* Icon */}
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
