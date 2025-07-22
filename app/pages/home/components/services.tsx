import { Home, Coins, Utensils } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Cashback Farms",
      tagline: "Own Land. Build Dreams. Live Free.",
      description:
        "Real estate ownership has never been this seamless. Cashback Farms is redefining the way you buy property by giving you direct access to verified plots, homes, and mini-plot booking options—all with transparent pricing and zero hidden costs.",
      features: [
        "Verified plots and homes",
        "Transparent pricing",
        "Fractional land investment",
        "Ready-to-move-in options",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Coins,
      title: "Greenheap Gold",
      tagline: "Your Wealth, Digitized and Growing.",
      description:
        "Why settle for local stores when you can buy, store, and grow your gold with just a tap? Greenheap Gold allows you to purchase gold at live market rates, store it securely in a digital vault, and even earn growth returns by locking your gold.",
      features: ["Live market rates", "Secure digital vault", "Growth returns", "Physical gold delivery"],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Utensils,
      title: "Greenheap Foods",
      tagline: "Nutrition That Fits Your Life.",
      description:
        "Calories count, but balance matters more. Greenheap Foods helps you make smarter choices with personalized, calorie-conscious meal options designed around your body's needs based on your BMI.",
      features: ["Personalized meal plans", "BMI-based recommendations", "Calorie tracking", "Smart food choices"],
      color: "from-green-500 to-green-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Flagship Platforms</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three innovative platforms designed to transform how you invest, live, and thrive
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-green-600 font-semibold mb-4 italic">"{service.tagline}"</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-6 w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
