import Image from "next/image"
import Link from "next/link"

const platforms = [
  {
    title: "Greenheap Gold",
    image: "/gold.jpg",
    borderColor: "border-amber-400",
    description: "Invest in gold smartly and securely with Greenheap Gold. Maximize returns with minimal effort.",
    link: "https://greenheapgold.com",
    accent: "from-amber-400 to-yellow-500",
    icon: "💰"
  },
  {
    title: "Cashback Farms",
    image: "/farm.jpg", 
    borderColor: "border-emerald-400",
    description: "Empowering sustainable agriculture through cashback and rewards for every farm purchase.",
    link: "https://cashbackfarms.com",
    accent: "from-emerald-400 to-green-500",
    icon: "🌾"
  },
  {
    title: "Greenheap Foods",
    image: "/food.jpg",
    borderColor: "border-orange-400", 
    description: "Healthy, organic, and delicious — Greenheap Foods delivers nourishment you can trust.",
    link: "https://greenheapfoods.com",
    accent: "from-orange-400 to-red-500",
    icon: "🍃"
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-400 text-sm font-medium">Our Platforms</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
              Ecosystems
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of investment, agriculture, and nutrition through our cutting-edge platforms
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 justify-center">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
            >
              {/* Floating Icon */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl border border-white/20 group-hover:rotate-12 transition-transform duration-500">
                {platform.icon}
              </div>
              
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <Image
                  src={platform.image}
                  alt={platform.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Floating Orb */}
                <div className={`absolute top-4 left-4 w-3 h-3 bg-gradient-to-r ${platform.accent} rounded-full shadow-lg animate-pulse`}></div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {platform.title}
                  </h3>
                  <div className={`w-12 h-1 bg-gradient-to-r ${platform.accent} rounded-full`}></div>
                </div>
                
                <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {platform.description}
                </p>
                
                <Link href={platform.link} target="_blank" rel="noopener noreferrer">
                  <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${platform.accent} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-current/25 transition-all duration-300 group-hover:scale-105`}>
                    <span>Explore Platform</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
              
              {/* Subtle Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${platform.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  )
}