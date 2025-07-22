import Image from "next/image"

const platforms = [
  {
    title: "Greenheap Gold",
    image: "/gold.jpg",
    borderColor: "border-purple-500",
    rotate: "-rotate-[6deg]",
    align: "self-start",
  },
  {
    title: "Cashback Farms",
    image: "/farm.jpg",
    borderColor: "border-blue-500",
    rotate: "rotate-0",
    align: "self-center",
  },
  {
    title: "Greenheap Foods",
    image: "/food.jpg",
    borderColor: "border-orange-500",
    rotate: "rotate-[6deg]",
    align: "self-end",
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
            Three innovative platforms designed to transform how you invest, live, and thrive in the modern world
          </p>
        </div>

        {/* Platform Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 overflow-visible">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className={`relative w-[360px] md:w-[380px] overflow-visible ${platform.align
                } ${platform.title === "Cashback Farms" ? "-mt-6" : ""}`}
            >
              <div
                className={`rounded-3xl border-4 ${platform.borderColor} bg-white transform ${platform.rotate} transition-transform duration-500`}
                style={{ padding: "12px" }}
              >
                <Image
                  src={platform.image}
                  alt={platform.title}
                  width={600}
                  height={350}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
              <h3
                className={`mt-4 text-xl font-semibold text-center transform ${platform.rotate}`}
              >
                {platform.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
