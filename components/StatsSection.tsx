"use client";
import React, { useState, useEffect } from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '20+',
      label: 'Years Experience',
      color: 'text-blue-600'
    },
    {
      number: '1M+',
      label: 'Happy Customers',
      color: 'text-green-600'
    },
    {
      number: '500+',
      label: 'Dealer Network',
      color: 'text-blue-600'
    },
    {
      number: 'ISO',
      label: 'Certified Products',
      color: 'text-green-600'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slider for mobile only
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % stats.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [stats.length]);

  return (
    <section className="bg-white py-3 sm:py-8 lg:py-10">
      <div className="lg:max-w-7xl lg:mx-auto px-1 sm:px-4 lg:px-6 scale-90 md:scale-100">
        
        {/* Mobile Slider - Only visible on mobile screens with bigger text */}
        <div className="block sm:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${stats.length * 100}%`,
              transform: `translateX(-${(currentSlide * 100) / stats.length}%)`
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-center px-4"
                style={{ width: `${100 / stats.length}%` }}
              >
                <div className="space-y-2">
                  <div className={`text-4xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators for Mobile */}
          {/* <div className="flex justify-center mt-4 space-x-2">
            {stats.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div> */}
        </div>

        {/* Fixed Layout - Hidden on mobile, visible on tablet and above */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1 sm:space-y-2 flex flex-col items-center">
              <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-tight max-w-full">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
