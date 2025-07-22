import { Target, Lightbulb } from "lucide-react"

export default function Vision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To create sustainable employment opportunities while leveraging technology to automate life's everyday
                essentials.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Greenheap Enterprises, we believe in building systems that free people from repetitive tasks—whether
                it's buying property, growing wealth, or managing nutrition—so they can focus on what truly matters.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By blending human potential with smart automation, we aim to empower communities, drive economic growth,
                and simplify living for millions.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To empower individuals and communities by creating innovative platforms that simplify property
                ownership, wealth growth, and healthy living.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to building scalable solutions that not only make life easier but also generate
                employment and foster economic growth through technology-driven innovation.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">Simplify</div>
                  <div className="text-sm text-gray-600">Complex Processes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">Empower</div>
                  <div className="text-sm text-gray-600">Communities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">Innovate</div>
                  <div className="text-sm text-gray-600">Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
