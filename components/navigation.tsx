"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const services = [
  { name: "Fulfillment", href: "#fulfillment", description: "B2B & DTC order fulfillment" },
  { name: "Manufacturing", href: "#manufacturing", description: "Custom product manufacturing" },
  { name: "Shirt Printing", href: "#printing", description: "T-shirts, hoodies & apparel" },
  { name: "Warehousing", href: "#services", description: "Scalable storage solutions" },
  { name: "Shipping", href: "#services", description: "Domestic & international" },
  { name: "Returns Management", href: "#services", description: "Seamless processing" },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Prosper Fulfillment"
              width={200}
              height={50}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors outline-none">
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-64">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link href={service.href} className="flex flex-col items-start gap-1 p-3">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-xs text-muted-foreground">{service.description}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#login">Login</Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="#quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div className="space-y-2">
                      <span className="block text-sm font-medium text-foreground">{link.name}</span>
                      <div className="pl-4 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-sm font-medium text-foreground/80 hover:text-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                  <Link href="#login">Login</Link>
                </Button>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="#quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
