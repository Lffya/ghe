export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              GreenHeap
            </span>{" "}
            Enterprises
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building the future of everyday living through innovation and accessibility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                GreenHeap Enterprises is a forward-thinking ecosystem designed to simplify and enrich everyday living by
                merging innovation with accessibility. Our mission is to empower individuals and families to achieve
                their dreams—whether it's owning property, growing wealth, or leading a healthier lifestyle.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our three flagship platforms—Cashback Farms, Greenheap Gold, and Greenheap Foods—we're
                transforming how people invest, live, and thrive. From making property ownership as seamless as online
                shopping, to offering secure, growth-driven digital gold investments, and helping people make
                calorie-conscious food choices tailored to their bodies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                We're not just offering services; we're creating a lifestyle revolution.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Innovation
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Accessibility
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Empowerment
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">Growth</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 shadow-2xl border border-green-100">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Innovation First</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Cutting-edge technology solutions that transform traditional industries
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">User-Centric Design</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Simple, intuitive platforms that anyone can use with confidence
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Sustainable Growth</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Building tools that empower long-term success and prosperity
                    </p>
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
