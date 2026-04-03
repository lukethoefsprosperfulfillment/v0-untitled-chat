import React from "react"
import type { Metadata } from 'next'
import Script from 'next/script'
import { Blinker, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _blinker = Blinker({ subsets: ["latin"], weight: ["100", "200", "300", "400", "600", "700", "800", "900"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Screen Printing & Fulfillment in Tijuana | Prosper Manufacturing',
  description: 'Leading screen printing and fulfillment services in Tijuana with IMMEX certification. 99.9% accuracy, fast turnaround, and cross-border expertise. B2B & DTC fulfillment solutions.',
  keywords: ['screen printing tijuana', 'fulfillment immex tijuana', 'fulfillment services tijuana', 'screen printing and fulfillment', 'IMMEX fulfillment', 'cross-border fulfillment', 'apparel manufacturing', 'shirt printing'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'Screen Printing & Fulfillment in Tijuana | Prosper Manufacturing',
    description: 'Premium screen printing and cross-border fulfillment services with IMMEX expertise in Tijuana. 99.9% accuracy guaranteed.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://prosper-mfg.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Prosper Manufacturing",
              "description": "Premium screen printing and fulfillment services in Tijuana with IMMEX certification",
              "url": "https://prosper-mfg.com",
              "telephone": "(813) 421-4450",
              "email": "hello@prosper-mfg.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tijuana",
                "addressRegion": "Baja California",
                "addressCountry": "MX"
              },
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Tijuana"
                },
                {
                  "@type": "Place",
                  "name": "United States"
                }
              ],
              "serviceType": ["Screen Printing", "Fulfillment", "Manufacturing", "IMMEX Services"],
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <Script
          src="https://prosper-chat.odpkye.easypanel.host/widget.js"
          data-api-base="https://prosper-chat.odpkye.easypanel.host"
          defer
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
