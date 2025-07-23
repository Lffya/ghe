import React from 'react';
import { Shield, Zap, Star, Lock, ChevronRight, Play, Award, TrendingUp } from 'lucide-react';
import Link from "next/link"

const GreenHeapHero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#1e293b' }}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-[41.5%] object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={(e) => console.log('Video failed to load:', e)}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
        >
          <source src="/video.mp4" type="video/mp4" />
          <source src="./video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        {/* Minimal overlay for text readability only */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-400/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/12 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-500/8 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-32 text-center">
        {/* Brand Name with Animation */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
            GreenHeap
          </h1>
          <h1 className="text-4xl md:text-6xl font-light text-white mt-2">
            Enterprises
          </h1>
        </div>

        {/* Primary Headline */}
        <div className="mb-10 animate-fade-in-up delay-200">

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Smart Living Starts Here.
          </h2>
        </div>

        {/* Mission Statement */}
        <div className="mb-12 animate-fade-in-up delay-300">
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl leading-relaxed">
            Empowering your future with land, gold, and nutrition—all in one ecosystem.
          </p>
        </div>

        {/* Supporting Subtext */}
        <div className="mb-16 animate-fade-in-up delay-400">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-lg text-gray-300">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
              Where innovation meets intuition
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse delay-500"></span>
              Where dreams take flight
            </span>
          </div>
        </div>

        {/* Enhanced Revolutionary Stats - Only 3 Cards */}
        <div className="mb-16 animate-fade-in-up delay-500">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
            <span className="text-blue-300 text-sm font-medium tracking-wider uppercase">Revolutionary Stats</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            <div className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent mb-4">03</div>
                <div className="text-xl font-bold text-white mb-2">Revolutionary Platforms</div>
                <div className="text-gray-300">Redefining industries</div>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"></div>
              </div>
            </div>

            <div className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-teal-500/30 hover:border-teal-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-4">∞</div>
                <div className="text-xl font-bold text-white mb-2">Infinite Potential</div>
                <div className="text-gray-300">Boundless opportunities</div>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full"></div>
              </div>
            </div>

            <div className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent mb-4">01</div>
                <div className="text-xl font-bold text-white mb-2">Unified Ecosystem</div>
                <div className="text-gray-300">Seamless integration</div>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Trust Indicators - Non-card Design */}
        <div className="mb-16 animate-fade-in-up delay-600">
          <div className="flex items-center justify-center mb-8">
            <Lock className="w-6 h-6 text-green-400 mr-3" />
            <span className="text-green-300 text-sm font-medium tracking-wider uppercase">Trust Indicators</span>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Enterprise Security</h4>
                <p className="text-gray-400 text-center max-w-xs">Bank-grade protection with advanced encryption</p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Lightning Fast</h4>
                <p className="text-gray-400 text-center max-w-xs">Optimized performance for instant results</p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Award Winning</h4>
                <p className="text-gray-400 text-center max-w-xs">Industry recognition and excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Calls to Action */}
        <div className="animate-fade-in-up delay-700">

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a href="#services">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 animate-pulse-slow">
                <span className="relative z-10 flex items-center">
                  Explore Platforms
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </a>


            <Link href="/#about">
              <button className="group relative px-10 py-5 bg-white/10 backdrop-blur-lg text-white font-bold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <span className="flex items-center">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  About Us
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default GreenHeapHero;