import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              GreenHeap Enterprises
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg max-w-md">
              Empowering futures through technology and smart automation. Building a lifestyle revolution that
              simplifies everyday living for millions worldwide.
            </p>
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center transition-colors">
                <span className="text-white font-bold">f</span>
              </button>
              <button className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center transition-colors">
                <span className="text-white font-bold">t</span>
              </button>
              <button className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center transition-colors">
                <span className="text-white font-bold">in</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Contact", "Blog", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center group">
                    {link}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Platforms */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Our Platforms</h4>
            <ul className="space-y-4">
              {["Cashback Farms", "Greenheap Gold", "Greenheap Foods"].map((platform) => (
                <li key={platform}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex items-center group">
                    {platform}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email us</p>
                    <p className="text-white font-semibold">info@greenheap.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call us</p>
                    <p className="text-white font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Visit us</p>
                    <p className="text-white font-semibold">Innovation Hub, Tech City</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h5 className="text-xl font-bold text-white mb-4">Stay Updated</h5>
              <p className="text-gray-400 mb-6">Get the latest news and updates from GreenHeap Enterprises</p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-green-500 focus:outline-none"
                />
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © {new Date().getFullYear()} GreenHeap Enterprises. All rights reserved.{" "}
            <span className="text-green-400 font-semibold">Building the future, one innovation at a time.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
