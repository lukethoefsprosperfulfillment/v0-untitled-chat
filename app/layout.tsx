import React from "react"
import type { Metadata } from 'next'
import { Blinker, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ProsperChatHelper } from '@/components/prosper-chat-helper'
import './globals.css'

const _blinker = Blinker({ subsets: ["latin"], weight: ["100", "200", "300", "400", "600", "700", "800", "900"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Prosper Manufacturing | Manufacturing, Screen Printing & Fulfillment',
  description: 'End-to-End Apparel Production & Fulfillment. Premium screen printing, manufacturing, and fulfillment services with 99.9% accuracy and fast turnaround.',
  keywords: ['shirt printing', 'screen printing', 'DTG printing', 'fulfillment', 'manufacturing', 'e-commerce', 'warehousing', 'custom apparel'],
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
    title: 'Prosper Manufacturing | Manufacturing, Screen Printing & Fulfillment',
    description: 'End-to-End Apparel Production & Fulfillment. Premium screen printing and manufacturing solutions.',
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
        <ProsperChatHelper />
        <Analytics />
      </body>
    </html>
  )
}
