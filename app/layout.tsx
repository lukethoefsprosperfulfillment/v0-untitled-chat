import React from "react"
import type { Metadata } from 'next'
import { Blinker, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _blinker = Blinker({ subsets: ["latin"], weight: ["100", "200", "300", "400", "600", "700", "800", "900"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Prosper Fulfillment | Cross-Border Fulfillment, Manufacturing & Printing',
  description: 'Your Partner in E-Commerce Success. Dynamic cross-border fulfillment solutions, manufacturing, and printing services with 30% cost savings and 99.9% accuracy.',
  keywords: ['fulfillment', 'cross-border logistics', 'e-commerce', 'manufacturing', 'printing', 'Section 321', 'warehousing', 'shipping'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'Prosper Fulfillment | Cross-Border Fulfillment, Manufacturing & Printing',
    description: 'Your Partner in E-Commerce Success. Dynamic cross-border fulfillment solutions with 30% cost savings.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
