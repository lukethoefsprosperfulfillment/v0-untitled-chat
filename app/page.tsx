import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ServicesPillars } from "@/components/services-pillars"
import { AboutSection } from "@/components/about-section"
import { ManufacturingSection } from "@/components/manufacturing-section"
import { PrintingSection } from "@/components/printing-section"
import { ServicesGrid } from "@/components/services-grid"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesPillars />
      <AboutSection />
      <ManufacturingSection />
      <PrintingSection />
      <ServicesGrid />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
