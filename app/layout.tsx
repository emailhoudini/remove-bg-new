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
    icon: '/favicon.png?v=12345'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png?v=12345" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
