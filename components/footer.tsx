import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  services: [
    { name: "Shirt Printing", href: "#printing" },
    { name: "Fulfillment", href: "#fulfillment" },
    { name: "Manufacturing", href: "#manufacturing" },
    { name: "Warehousing", href: "#services" },
    { name: "Shipping", href: "#services" },
    { name: "Returns Management", href: "#services" },
    { name: "Value Added Services", href: "#services" },
    { name: "Managed Inbound", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Prosper Fulfillment"
                width={180}
                height={45}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 text-accent-foreground/70 max-w-sm leading-relaxed">
              Your Partner in E-Commerce Success. Dynamic cross-border fulfillment, manufacturing, and printing solutions.
            </p>
            <p className="mt-6 text-2xl font-bold">
              Brands <span className="text-primary">Prosper</span>, We <span className="text-primary">Fulfill</span>.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-3">
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
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
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

          {/* Legal & Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
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

            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-accent-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-accent-foreground/60">
            &copy; {new Date().getFullYear()} Prosper Fulfillment. All rights reserved.
          </p>
          <p className="text-sm text-accent-foreground/60">
            Your Partner in E-Commerce Success
          </p>
        </div>
      </div>
    </footer>
  )
}
