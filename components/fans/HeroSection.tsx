// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-100 to-blue-50 py-2 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-16 lg:pt-15 sm:pt-10 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">
            <div >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-800">
                  Powerful Performance,
                </span>
                <br />
                <span className="text-gray-800">
                  Minimal Consumption -
                </span>
                <br />
                <span className="text-red-600">
                  KWW Energy-Efficient
                </span>
                <br />
                <span className="text-red-600">
                  Fans
                </span>
              </h1>
            </div>
            
            <p className="text-gray-600  text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
              Switch to next-gen cooling with BLDC motor technology and low wattage operation. Good for comfort, great for your bill.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-1 lg:pt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center text-sm sm:text-base">
                Shop Now
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:ml-8">
            <div className="relative bg-gradient-to-br from-orange-200 to-amber-300 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/hero/kww-fan-living-room.jpg"
                  alt="Man relaxing in living room with KWW ceiling fan"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                
                
                {/* Decorative fan icon overlay */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
                  
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full opacity-40 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
