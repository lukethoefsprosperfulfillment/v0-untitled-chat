"use client"

import { useEffect, useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqCategories = [
  {
    title: "About Prosper Manufacturing",
    faqs: [
      {
        question: "What is Prosper Manufacturing's expertise?",
        answer: "Prosper Manufacturing specializes in custom shirt printing, fulfillment, and manufacturing services. We help e-commerce businesses with screen printing, DTG printing, inventory management, and seamless order fulfillment for a complete solution.",
      },
      {
        question: "What types of e-commerce businesses benefit most from your services?",
        answer: "Businesses specializing in apparel, electronics, cosmetics, and consumer goods often benefit most from our efficient logistics and fulfillment solutions. We serve both small DTC brands and large B2B operations.",
      },
      {
        question: "How can Prosper Manufacturing reduce costs?",
        answer: "By combining shirt printing, fulfillment, and manufacturing under one roof, we eliminate middlemen and streamline your supply chain. Our integrated services and real-time inventory tracking help reduce operational costs significantly.",
      },
    ],
  },
  
  {
    title: "Services & Operations",
    faqs: [
      {
        question: "What is included in your warehousing solutions?",
        answer: "We provide flexible and scalable warehousing solutions, including inventory management, climate-controlled storage, and real-time monitoring. Our facilities are strategically located for optimal distribution.",
      },
      {
        question: "How do you manage B2B and DTC order fulfillment?",
        answer: "We ensure efficient B2B and DTC order processing with fast pick-and-pack services and same-day shipping options. Our 24-hour package injection means your orders are processed and shipped quickly.",
      },
      {
        question: "What printing services do you offer?",
        answer: "Our printing division handles custom packaging, labels, marketing collateral, product inserts, and branded merchandise. We offer fast turnaround times with state-of-the-art printing technology.",
      },
      {
        question: "What manufacturing capabilities do you have?",
        answer: "We offer full-scale manufacturing from prototyping to mass production. Our facilities integrate directly with our fulfillment operations for seamless product development and distribution.",
      },
    ],
  },
]

export function FAQSection() {
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
    <section ref={sectionRef} id="faq" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            data-animate
            className="opacity-0 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            style={{ animationDelay: "0.1s" }}
          >
            FAQ
          </p>
          <h2
            data-animate
            className="opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance"
            style={{ animationDelay: "0.2s" }}
          >
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p
            data-animate
            className="opacity-0 mt-6 text-lg text-muted-foreground"
            style={{ animationDelay: "0.3s" }}
          >
            Everything you need to know about our fulfillment, manufacturing, and printing services.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              data-animate
              className="opacity-0"
              style={{ animationDelay: `${0.3 + categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                {category.title}
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faq.question}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
