export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About GreenHeap Enterprises</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              GreenHeap Enterprises is a forward-thinking ecosystem designed to simplify and enrich everyday living by
              merging innovation with accessibility. Our mission is to empower individuals and families to achieve their
              dreams—whether it's owning property, growing wealth, or leading a healthier lifestyle.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through our three flagship platforms—Cashback Farms, Greenheap Gold, and Greenheap Foods—we're
              transforming how people invest, live, and thrive. From making property ownership as seamless as online
              shopping, to offering secure, growth-driven digital gold investments, and helping people make
              calorie-conscious food choices tailored to their bodies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're not just offering services; we're creating a lifestyle revolution.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation</h3>
                    <p className="text-gray-600">Cutting-edge technology solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Accessibility</h3>
                    <p className="text-gray-600">Simple, user-friendly platforms</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Empowerment</h3>
                    <p className="text-gray-600">Tools to achieve your dreams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
