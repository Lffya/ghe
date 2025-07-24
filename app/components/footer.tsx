"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Send, Leaf, Users, Award, Globe } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" }
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Company", href: "/#services" },
    { name: "Contact Us", href: "/#contact-us" }
  ]

  const platforms = [
    { name: "Cashback Farms", href: "https://www.cashbackfarms.com/" },
    { name: "Greenheap Gold", href: "https://www.greenheapgold.com/" },
    { name: "Greenheap Foods", href: "https://www.greenheapfoods.com/" }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-400/5 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Leaf className="h-10 w-10 text-green-400 transform transition-transform duration-500 hover:rotate-12" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500">
                  GreenHeap Enterprises
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg max-w-md">
                Empowering futures through technology and smart automation. Building a lifestyle revolution that
                simplifies everyday living for millions worldwide.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="group relative w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full mr-3"></div>
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center group hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      {link.name}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-green-500 rounded-full mr-3"></div>
                Our Platforms
              </h4>
              <ul className="space-y-4">
                {platforms.map((platform) => (
                  <li key={platform.name}>
                    <Link 
                      href={platform.href}
                      className="text-gray-300 hover:text-emerald-400 transition-all duration-300 flex items-center group hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      {platform.name}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full mr-4"></div>
                  Get in Touch
                </h4>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email us</p>
                      <p className="text-white font-semibold group-hover:text-green-400 transition-colors">info@greenheap.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Call us</p>
                      <p className="text-white font-semibold group-hover:text-green-400 transition-colors">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Visit us</p>
                      <p className="text-white font-semibold group-hover:text-green-400 transition-colors">Innovation Hub, Tech City</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600/30 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h5 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Send className="w-5 h-5 mr-2 text-green-400" />
                    Stay Updated
                  </h5>
                  <p className="text-gray-400 mb-6">Get the latest news and updates from GreenHeap Enterprises</p>
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="flex gap-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 bg-gray-700/50 text-white rounded-xl border border-gray-600/50 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                        required
                      />
                      <button 
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                        disabled={isSubscribed}
                      >
                        {isSubscribed ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Subscribed!</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Subscribe</span>
                          </>
                        )}
                      </button>
                    </div>
                    {isSubscribed && (
                      <p className="text-green-400 text-sm animate-fade-in">✓ Successfully subscribed to our newsletter!</p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700/50 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-lg text-center md:text-left">
                © {new Date().getFullYear()} GreenHeap Enterprises. All rights reserved.
              </p>
              <p className="text-green-400 font-semibold text-center md:text-right flex items-center">
                <Leaf className="w-4 h-4 mr-2 animate-pulse" />
                Built by THE BOT
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
