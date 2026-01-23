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
  { name: "Manufacturing", href: "#manufacturing", description: "Custom product manufacturing" },
  { name: "Screen Printing", href: "#printing", description: "T-shirts, hoodies & apparel" },
  { name: "Fulfillment", href: "#fulfillment", description: "B2B & DTC order fulfillment" },
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
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "top-4 left-4 right-4 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-[10%] lg:right-[10%]"
          : "top-0 left-0 right-0"
      )}
    >
      <div
        className={cn(
          "transition-all duration-500 ease-out",
          isScrolled
            ? "mx-auto rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-1 ring-white/10"
            : "bg-transparent"
        )}
        style={isScrolled ? {
          background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        } : {}}
      >
        <div className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500",
          isScrolled ? "max-w-6xl" : "max-w-7xl"
        )}>
          <nav className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled ? "h-16" : "h-20"
          )}>
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Prosper Manufacturing"
                width={200}
                height={50}
                className={cn(
                  "w-auto transition-all duration-500",
                  isScrolled ? "h-9" : "h-11"
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors outline-none",
                      isScrolled 
                        ? "text-foreground/90 hover:text-foreground" 
                        : "text-foreground/80 hover:text-foreground"
                    )}>
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-64 bg-white/90 backdrop-blur-xl border-white/20">
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
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isScrolled 
                        ? "text-foreground/90 hover:text-foreground" 
                        : "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex lg:items-center">
              <Button 
                size="sm" 
                className={cn(
                  "bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300",
                  isScrolled && "shadow-lg shadow-primary/25"
                )} 
                asChild
              >
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
            <div className={cn(
              "lg:hidden py-6 space-y-4 border-t",
              isScrolled ? "border-white/10" : "border-border"
            )}>
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
              <div className="pt-4">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="#quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
