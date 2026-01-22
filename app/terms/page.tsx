import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service | Prosper Manufacturing",
  description: "Terms of Service for Prosper Manufacturing - Read our terms and conditions for using our services.",
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: January 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Prosper Manufacturing&apos;s services, including shirt printing, fulfillment, and manufacturing, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prosper Manufacturing provides:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Shirt Printing:</strong> Screen printing and DTG services for t-shirts, hoodies, sweatshirts, and sweatpants</li>
                <li><strong>Fulfillment:</strong> B2B and DTC order fulfillment, warehousing, pick and pack, and shipping services</li>
                <li><strong>Manufacturing:</strong> Custom product manufacturing and quality control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete information for orders and shipments</li>
                <li>Ensure all products and designs comply with applicable laws and do not infringe on third-party rights</li>
                <li>Pay all fees and charges according to the agreed payment terms</li>
                <li>Maintain adequate insurance for inventory stored at our facilities</li>
                <li>Comply with all applicable shipping and export regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Pricing and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                All prices are subject to change with notice. Payment terms will be established in your service agreement. Late payments may result in service suspension and may incur additional fees. We reserve the right to hold shipments until outstanding balances are paid.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain all rights to your designs, logos, and branding. By submitting designs for printing, you warrant that you have the right to use such designs and that they do not infringe on any third-party intellectual property rights. You agree to indemnify Prosper Manufacturing against any claims arising from your designs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prosper Manufacturing&apos;s liability is limited to the value of the services provided. We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, regardless of the cause of action. Our total liability shall not exceed the fees paid by you in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate services with 30 days written notice. Upon termination, you are responsible for all outstanding fees and must arrange for removal of inventory within 30 days. Inventory not claimed may be subject to storage fees or disposal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground font-medium">Prosper Manufacturing</p>
                <p className="text-muted-foreground">Phone: (813) 421-4450</p>
                <p className="text-muted-foreground">Email: info@prospermfg.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
