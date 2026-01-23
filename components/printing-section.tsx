"use client"

import { useEffect, useRef } from "react"
import { Shirt, Palette, Layers, Sparkles, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const printingServices = [
  {
    icon: Shirt,
    title: "T-Shirts & Tanks",
    description: "High-quality screen printing and DTG for t-shirts and tank tops, from single pieces to bulk orders.",
  },
  {
    icon: Layers,
    title: "Hoodies & Sweatshirts",
    description: "Keep your brand cozy with custom printed hoodies, crewnecks, and zip-ups.",
  },
  {
    icon: Sparkles,
    title: "Sweatpants & Joggers",
    description: "Complete the look with custom printed sweatpants, joggers, and athletic wear.",
  },
  {
    icon: Palette,
    title: "Screen Print & DTG",
    description: "We use the best method for your order - screen printing for bulk, DTG for detail.",
  },
]

export function PrintingSection() {
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
    <section ref={sectionRef} id="printing" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div
              data-animate
              className="opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              <Shirt className="h-4 w-4" />
              Custom Apparel
            </div>
            
            <h2
              data-animate
              className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance"
              style={{ animationDelay: "0.2s" }}
            >
              Custom{" "}
              <span className="text-primary">Screen Printing</span>
            </h2>
            
            <p
              data-animate
              className="opacity-0 mt-6 text-lg text-muted-foreground leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              Premium screen printing and DTG services for your brand. From single samples to bulk orders, we deliver vibrant, long-lasting prints on quality apparel with fast turnaround times.
            </p>

            {/* Quick Stats */}
            <div
              data-animate
              className="opacity-0 mt-10 grid grid-cols-3 gap-6"
              style={{ animationDelay: "0.4s" }}
            >
              <div>
                <div className="text-3xl font-bold text-foreground">48hr</div>
                <p className="text-sm text-muted-foreground">Turnaround</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <p className="text-sm text-muted-foreground">Quality Check</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">No</div>
                <p className="text-sm text-muted-foreground">Minimums</p>
              </div>
            </div>

            <div
              data-animate
              className="opacity-0 mt-10"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12"
                asChild
              >
                <Link href="#quote">Get a Print Quote</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {printingServices.map((service, index) => (
              <div
                key={service.title}
                data-animate
                className="opacity-0 bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
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
            src="/images/printing.jpg"
            alt="Prosper T-Shirt Printing Facility"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-3xl md:text-4xl font-bold text-primary-foreground text-center px-4">
              Your Design, Our Craft
            </p>
          </div>
        </div>

        {/* Process Timeline */}
        <div
          data-animate
          className="opacity-0 mt-12 bg-card rounded-3xl p-8 lg:p-12 border border-border"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">From Design to Delivery</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Upload", description: "Send us your artwork or let us create a design for you" },
              { step: "02", title: "Proof", description: "Review mockups and approve before we print" },
              { step: "03", title: "Print", description: "Screen print or DTG - we pick the best method for your order" },
              { step: "04", title: "Ship", description: "Direct to you, your warehouse, or straight to customers" },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
