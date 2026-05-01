import React from 'react';


const Hero = () => {
  return (
    <section className="hero-gradient relative min-h-[90vh] flex items-center overflow-hidden px-6">
      {/* Background Glows */}
      <div className="glow-point top-10 -left-10"></div>
      <div className="glow-point bottom-10 -right-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Elevate Your <span className="text-blue-500">Digital Identity</span>
          </h1>
          
          <p className="text-gray-400 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
            We combine high-quality materials with professional expertise to ensure 
            your projects deliver maximum returns and long-term reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20">
              Start Your Project
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all backdrop-blur-sm">
              View Case Studies
            </button>
          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start space-x-6 text-gray-500 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gray-800 flex items-center justify-center">
                   <span className="text-[10px]">User</span>
                </div>
              ))}
            </div>
            <p>Trusted by 500+ global partners</p>
          </div>
        </div>

        {/* Visual Element / Card */}
        <div className="hidden lg:block relative">
          <div className="animate-float relative z-20 bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-4">
              <div className="h-4 w-3/4 bg-white/10 rounded"></div>
              <div className="h-4 w-full bg-white/10 rounded"></div>
              <div className="h-4 w-5/6 bg-white/10 rounded"></div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="h-20 bg-blue-500/20 rounded-xl border border-blue-500/30"></div>
                <div className="h-20 bg-white/5 rounded-xl"></div>
                <div className="h-20 bg-white/5 rounded-xl"></div>
              </div>
            </div>
          </div>
          {/* Decorative Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;