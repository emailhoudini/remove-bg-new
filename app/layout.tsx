import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wipe BG - AI-Powered Background Removal Tool",
  description:
    "Remove backgrounds from images instantly with our AI-powered tool. Professional results in seconds. No signup required, free to try.",
  keywords: "background removal, AI, image editing, photo editing, remove background, transparent background",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.png?v=robot2025', sizes: 'any' },
      { url: '/images/favicon.png?v=robot2025', sizes: 'any' }
    ]
  },
  metadataBase: new URL('https://www.wipebg.ai'),
  openGraph: {
    title: 'Wipe BG - AI-Powered Background Removal Tool',
    description: 'Remove backgrounds from images instantly with our AI-powered tool. Professional results in seconds.',
    url: 'https://www.wipebg.ai',
    siteName: 'Wipe BG',
    images: [
      {
        url: '/images/hero-before-after.png',
        width: 1200,
        height: 630,
        alt: 'Wipe BG - Before and After Example',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wipe BG - AI-Powered Background Removal',
    description: 'Remove image backgrounds in seconds with AI precision',
    images: ['/images/hero-before-after.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png?v=robot2025" />
        <link rel="shortcut icon" href="/favicon.png?v=robot2025" />
        <link rel="icon" href="/images/favicon.png?v=robot2025" />
        <link rel="shortcut icon" href="/images/favicon.png?v=robot2025" />
        <link rel="apple-touch-icon" href="/favicon.png?v=robot2025" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4169E1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
