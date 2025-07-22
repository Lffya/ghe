import { Target, Lightbulb, Users, Zap } from "lucide-react";

export default function Vision() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Vision & Mission
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Vision */}
          <div className="space-y-8">
            <div className="flex items-center space-x-6 mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">Our Vision</h3>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-10 shadow-xl border border-purple-100">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create sustainable employment opportunities while leveraging technology to automate life's everyday
                  essentials.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Greenheap Enterprises, we believe in building systems that free people from repetitive
                  tasks—whether it's buying property, growing wealth, or managing nutrition—so they can focus on what
                  truly matters.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  By blending human potential with smart automation, we aim to empower communities, drive economic
                  growth, and simplify living for millions.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/60 rounded-xl">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-700">Community Focus</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl">
                  <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-700">Smart Automation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-8">
            <div className="flex items-center space-x-6 mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">Our Mission</h3>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-10 shadow-xl border border-green-100">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower individuals and communities by creating innovative platforms that simplify property
                  ownership, wealth growth, and healthy living.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  We are committed to building scalable solutions that not only make life easier but also generate
                  employment and foster economic growth through technology-driven innovation.
                </p>
              </div>

              {/* ✅ Cards stacked vertically */}
              <div className="mt-10 space-y-6">
                {[
                  { title: "Simplify", subtitle: "Complex Processes" },
                  { title: "Empower", subtitle: "Communities" },
                  { title: "Innovate", subtitle: "Solutions" },
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-6 bg-white/90 rounded-2xl shadow-lg w-full">
                    <div className="text-3xl font-black text-green-600 mb-2">{item.title}</div>
                    <div className="text-sm font-semibold text-gray-700">{item.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
