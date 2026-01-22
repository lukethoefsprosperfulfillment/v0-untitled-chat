import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Shirt Printing", href: "#printing" },
    { name: "Fulfillment", href: "#fulfillment" },
    { name: "Manufacturing", href: "#manufacturing" },
    { name: "Warehousing", href: "#services" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Prosper Manufacturing"
                width={160}
                height={40}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-3 text-sm text-accent-foreground/70 leading-relaxed">
              Shirt Printing + Fulfillment + Manufacturing
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-accent-foreground/70">
              <a href="tel:+18134214450" className="flex items-center gap-2 hover:text-accent-foreground transition-colors">
                <Phone className="h-3.5 w-3.5" />
                (813) 421-4450
              </a>
              <a href="mailto:info@prospermfg.com" className="flex items-center gap-2 hover:text-accent-foreground transition-colors">
                <Mail className="h-3.5 w-3.5" />
                info@prospermfg.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3">Services</h3>
            <ul className="space-y-1.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3">Company</h3>
            <ul className="space-y-1.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-3">Legal</h3>
            <ul className="space-y-1.5">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-accent-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-accent-foreground/50">
          <p>&copy; {new Date().getFullYear()} Prosper Manufacturing. All rights reserved.</p>
          <p>Brands <span className="text-primary">Prosper</span>, We <span className="text-primary">Manufacture</span>.</p>
        </div>
      </div>
    </footer>
  )
}
