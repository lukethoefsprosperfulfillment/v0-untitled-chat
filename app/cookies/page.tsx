import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Cookie Policy | Prosper Manufacturing",
  description: "Cookie Policy for Prosper Manufacturing - Learn how we use cookies on our website.",
}

export default function CookiePolicy() {
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
          
          <h1 className="text-4xl font-bold text-foreground mb-2">Cookie Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: January 2026</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help us improve your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prosper Manufacturing uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly, including navigation and access to secure areas</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings to enhance your experience</li>
                <li><strong>Marketing Cookies:</strong> Track your visit across websites to deliver relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Cookie Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Purpose</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3">Session</td>
                      <td className="px-4 py-3">Maintain your session while browsing</td>
                      <td className="px-4 py-3">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Preferences</td>
                      <td className="px-4 py-3">Remember your settings and choices</td>
                      <td className="px-4 py-3">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Analytics</td>
                      <td className="px-4 py-3">Track website usage and performance</td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use third-party services that place cookies on your device. These include analytics providers (such as Google Analytics) and social media platforms. These third parties have their own privacy policies governing the use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through settings</li>
                <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools like the Digital Advertising Alliance&apos;s opt-out page</li>
                <li><strong>Device Settings:</strong> Mobile devices may have settings to limit ad tracking</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please note that disabling cookies may affect the functionality of our website and limit your ability to use certain features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We encourage you to review this page periodically for the latest information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies, please contact us:
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
