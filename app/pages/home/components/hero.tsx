"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-64 h-64 bg-green-300/25 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Moving Gradient Orbs */}
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-green-400/30 to-emerald-500/30 rounded-full blur-lg transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-emerald-300/20 to-green-400/20 rounded-full blur-xl transition-transform duration-1500 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}
        ></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(34,197,94,0.3)_25px,rgba(34,197,94,0.3)_26px,transparent_27px,transparent_49px,rgba(34,197,94,0.3)_50px,rgba(34,197,94,0.3)_51px,transparent_52px),linear-gradient(rgba(34,197,94,0.3)_24px,transparent_25px,transparent_26px,rgba(34,197,94,0.3)_27px,rgba(34,197,94,0.3)_49px,transparent_50px,transparent_51px,rgba(34,197,94,0.3)_52px)] bg-[length:50px_50px] animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                GreenHeap
              </span>
              <br />
              <span className="text-4xl md:text-6xl">Enterprises</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A forward-thinking ecosystem designed to simplify and enrich everyday living by merging innovation with
              accessibility
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Empowering individuals and families to achieve their dreams through our three flagship platforms:
              <span className="font-semibold text-green-600"> Cashback Farms</span>,
              <span className="font-semibold text-green-600"> Greenheap Gold</span>, and
              <span className="font-semibold text-green-600"> Greenheap Foods</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Our Platforms
                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-green-600">3</div>
              <div className="text-gray-700 font-medium">Innovative Platforms</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-green-600">∞</div>
              <div className="text-gray-700 font-medium">Possibilities</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-green-600">1</div>
              <div className="text-gray-700 font-medium">Unified Ecosystem</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
