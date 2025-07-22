"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="GreenHeap Logo"
                className="h-10 w-auto"
              />
              <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-transparent bg-clip-text tracking-tight hover:brightness-110 transition duration-300">
                GreenHeap <span className="font-bold opacity-100">Enterprises</span>
              </div>
            </Link>
          </div>



          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
            <Link href="/" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
