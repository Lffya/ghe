"use client"

import { ChevronRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Floating Animations and Style Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-10px); opacity: 0.6; }
          100% { transform: translateY(0); opacity: 0.4; }
        }

        @keyframes slowSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .animate-slowSpin {
          animation: slowSpin 60s linear infinite;
        }

        @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(40px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .animate-fadeUp {
    animation: fadeUp 0.8s ease-out forwards;
  }

  .animate-delay-1 {
    animation-delay: 0.2s;
  }

  .animate-delay-2 {
    animation-delay: 0.5s;
  }

  .animate-delay-3 {
    animation-delay: 0.8s;
  }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-green-400 rounded-full opacity-40 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random()}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Rotating Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="absolute w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2)_0%,transparent_70%)] rounded-full animate-slowSpin"></div>
      </div>

      {/* Blobs and Orbs */}
      <div className="absolute inset-0 z-0">
        {/* Main Gradient Blobs */}
        <div className="absolute top-32 left-16 w-80 h-80 bg-gradient-to-r from-green-200/40 to-emerald-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-48 right-24 w-96 h-96 bg-gradient-to-r from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl animate-bounce" style={{ animationDuration: "4s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-r from-green-300/35 to-emerald-400/35 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(34,197,94,0.4)_25px,rgba(34,197,94,0.4)_26px,transparent_27px,transparent_49px,rgba(34,197,94,0.4)_50px,rgba(34,197,94,0.4)_51px,transparent_52px),linear-gradient(rgba(34,197,94,0.4)_24px,transparent_25px,transparent_26px,rgba(34,197,94,0.4)_27px,rgba(34,197,94,0.4)_49px,transparent_50px,transparent_51px,rgba(34,197,94,0.4)_52px)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16">
        <div className="text-center space-y-12">
          {/* Title */}
          <div className="space-y-8">
            

            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-[0.9] tracking-tight text-center">
              <span className="block opacity-0 animate-fadeUp animate-delay-1">
                Welcome to
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 animate-gradient opacity-0 animate-fadeUp animate-delay-2">
                GreenHeap
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 mt-2 opacity-0 animate-fadeUp animate-delay-3">
                Enterprises
              </span>
            </h1>


            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium leading-relaxed">
                A forward-thinking ecosystem designed to{" "}
                <span className="text-green-600 font-semibold">simplify and enrich</span> everyday living
              </p>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Merging innovation with accessibility to empower your dreams
              </p>
            </div>
          </div>

          {/* Platform Badges */}
          <div className="max-w-5xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              Empowering individuals and families through our three flagship platforms:
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
              {[
                { label: "Cashback Farms", glow: "from-lime-400 via-green-400 to-emerald-500" },
                { label: "Greenheap Gold", glow: "from-yellow-300 via-amber-400 to-orange-500" },
                { label: "Greenheap Foods", glow: "from-emerald-300 via-teal-400 to-green-500" },
              ].map(({ label, glow }) => (
                <span
                  key={label}
                  className={`inline-flex items-center px-6 py-3 rounded-full font-semibold text-lg text-white shadow-xl transition-transform duration-300 hover:scale-105
        bg-gradient-to-r ${glow}
        backdrop-blur-md relative`}
                >
                  <span className="z-10 relative">{label}</span>
                  {/* Glowing ring effect */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${glow} opacity-25 blur-xl`}
                  ></div>
                </span>
              ))}
            </div>


          </div>

          {/* CTA Buttons */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <button className="group relative w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-green-300">
                <span className="flex items-center justify-center">
                  Explore Our Platforms
                  <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </button>

              <button className="group relative w-full sm:w-auto bg-white/90 backdrop-blur-sm border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  About Us
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              {["Trusted by thousands", "Secure & Verified", "24/7 Support"].map((text, i) => (
                <div key={text} className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  ></div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: "3", label: "Innovative Platforms", sub: "Transforming industries" },
              { value: "∞", label: "Endless Possibilities", sub: "For your future" },
              { value: "1", label: "Unified Ecosystem", sub: "Seamless integration" },
            ].map((item) => (
              <div
                key={item.label}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-300"
              >
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2">
                  {item.value}
                </div>
                <div className="text-gray-700 font-semibold text-lg">{item.label}</div>
                <div className="text-gray-500 text-sm mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}
