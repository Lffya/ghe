import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Greenheap Enterprises – Smart Real Estate, Digital Gold & Calorie-Based Food Apps",
  description:
    "Discover Greenheap Enterprises, the ecosystem simplifying life with innovative apps for property ownership, digital gold investment, and personalized nutrition. Empowering futures through technology and smart automation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
