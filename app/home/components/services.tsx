import Image from "next/image"
import Link from "next/link"

const platforms = [
  {
    title: "Greenheap Gold",
    image: "/gold.jpg",
    borderColor: "border-purple-500",
    description: "Invest in gold smartly and securely with Greenheap Gold. Maximize returns with minimal effort.",
    link: "https://greenheapgold.com",
  },
  {
    title: "Cashback Farms",
    image: "/farm.jpg",
    borderColor: "border-blue-500",
    description: "Empowering sustainable agriculture through cashback and rewards for every farm purchase.",
    link: "https://cashbackfarms.com",
  },
  {
    title: "Greenheap Foods",
    image: "/food.jpg",
    borderColor: "border-orange-500",
    description: "Healthy, organic, and delicious — Greenheap Foods delivers nourishment you can trust.",
    link: "https://greenheapfoods.com",
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Our Flagship{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Platforms
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Three innovative platforms designed to transform how you invest, live, and thrive in the modern world.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 justify-center">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className={`rounded-3xl border-2 ${platform.borderColor} bg-white shadow-lg flex flex-col overflow-hidden`}
            >
              <div className="w-full h-60 relative">
                <Image
                  src={platform.image}
                  alt={platform.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-full text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{platform.title}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <Link href={platform.link} target="_blank" rel="noopener noreferrer">
                  <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:opacity-90 transition">
                    Visit Website
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
