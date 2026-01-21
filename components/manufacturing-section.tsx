"use client"

import { useEffect, useRef } from "react"
import { Factory, Cog, CheckCircle, ArrowRight, Shield, Zap, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const capabilities = [
  {
    icon: Cog,
    title: "Product Development",
    description: "From concept to prototype, we bring your ideas to life with expert engineering.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and QC at every stage ensures consistent, high-quality products.",
  },
  {
    icon: Zap,
    title: "Scalable Production",
    description: "Flexible manufacturing capacity that grows with your business demands.",
  },
  {
    icon: Package,
    title: "Direct Integration",
    description: "Seamless connection to our fulfillment network for immediate distribution.",
  },
]

const benefits = [
  "Custom product development",
  "Low minimum order quantities",
  "Quality control certifications",
  "Direct warehouse integration",
  "Competitive pricing",
  "Fast turnaround times",
]

export function ManufacturingSection() {
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
    <section ref={sectionRef} id="manufacturing" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div
              data-animate
              className="opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              <Factory className="h-4 w-4" />
              Manufacturing
            </div>
            
            <h2
              data-animate
              className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance"
              style={{ animationDelay: "0.2s" }}
            >
              Full-Scale{" "}
              <span className="text-primary">Manufacturing</span> Solutions
            </h2>
            
            <p
              data-animate
              className="opacity-0 mt-6 text-lg text-muted-foreground leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              From prototyping to mass production, our manufacturing facilities deliver excellence at every step. Quality control, competitive pricing, and direct integration with our fulfillment network.
            </p>

            {/* Benefits List */}
            <div
              data-animate
              className="opacity-0 mt-10 grid grid-cols-2 gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>

            <div
              data-animate
              className="opacity-0 mt-10"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-12"
                asChild
              >
                <Link href="#contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                data-animate
                className={cn(
                  "opacity-0 bg-card rounded-2xl p-6 border border-border",
                  "hover:shadow-lg hover:border-accent/30 transition-all",
                  index % 2 === 1 && "sm:translate-y-6"
                )}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <capability.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{capability.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Banner */}
        <div
          data-animate
          className="opacity-0 mt-20 relative h-64 md:h-80 rounded-3xl overflow-hidden"
          style={{ animationDelay: "0.55s" }}
        >
          <Image
            src="/images/manufacturing.jpg"
            alt="Prosper Manufacturing Facility"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-accent/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-3xl md:text-4xl font-bold text-accent-foreground text-center px-4">
              Excellence in Every Product
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          data-animate
          className="opacity-0 mt-12 bg-accent rounded-3xl p-8 lg:p-12"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100K+", label: "Units per Month" },
              { value: "50+", label: "Product Categories" },
              { value: "99%", label: "Quality Rate" },
              { value: "14", label: "Day Avg. Lead Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-accent-foreground">{stat.value}</div>
                <p className="text-sm text-accent-foreground/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
