"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import generatedImage from "@/public/assets/generated-image.png";

const HeroSection: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(140);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data - 3 identical copies
  const heroSlides = [
    {
      id: 1,
      title: {
        blue: "Stay Cool",
        black1: "with",
        red: "KWW",
        black2: "BLDC Ceiling Fans-",
        black3: "Power Meets Silence"
      },
      description: "Explore our advanced BLDC and high-speed ceiling fans designed for superior air delivery, silent operation, and up to 65% energy savings. Stylish, smart & durable.",
      image: generatedImage
    },
    {
      id: 2,
      title: {
        blue: "Stay Cool",
        black1: "with",
        red: "KWW",
        black2: "BLDC Ceiling Fans-",
        black3: "Power Meets Silence"
      },
      description: "Explore our advanced BLDC and high-speed ceiling fans designed for superior air delivery, silent operation, and up to 65% energy savings. Stylish, smart & durable.",
      image: generatedImage
    },
    {
      id: 3,
      title: {
        blue: "Stay Cool",
        black1: "with",
        red: "KWW",
        black2: "BLDC Ceiling Fans-",
        black3: "Power Meets Silence"
      },
      description: "Explore our advanced BLDC and high-speed ceiling fans designed for superior air delivery, silent operation, and up to 65% energy savings. Stylish, smart & durable.",
      image: generatedImage
    }
  ];

  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector("header");
      const navbar = document.querySelector("nav");

      if (header && navbar) {
        const totalHeight = header.offsetHeight + navbar.offsetHeight;
        setHeaderHeight(totalHeight);
      } else if (header) {
        // For mobile where navbar might be hidden
        setHeaderHeight(header.offsetHeight);
      }
    };

    setTimeout(calculateHeaderHeight, 100);
    window.addEventListener("resize", calculateHeaderHeight);

    return () => window.removeEventListener("resize", calculateHeaderHeight);
  }, []);

  // Automatic slider functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  return (
    <section className="bg-[#e7f4fa] relative overflow-hidden">
      {/* Fixed Slider Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className="w-full flex-shrink-0"
          >
            <div className="scale-92 md:scale-100 lg:max-w-7xl lg:mx-auto pt-1 pb-1 lg:pt-10 lg:pb-10 sm:px-4 lg:px-6">
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-center">
                {/* Left Content */}
                <div className="space-y-4 sm:space-y-6 flex flex-col">
                  <h1 className="text-[15px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="text-blue-600">{slide.title.blue}</span>{" "}
                    <span className="text-black">{slide.title.black1}</span>{" "}
                    <span className="text-red-600">{slide.title.red}</span>
                    <br />
                    <span className="text-black">{slide.title.black2}</span>
                    <br />
                    <span className="text-black">{slide.title.black3}</span>
                  </h1>

                  <p className="text-gray-600 text-[10px] sm:text-base lg:text-lg leading-relaxed max-w-full lg:max-w-lg">
                    {slide.description}
                  </p>

                  <div className="flex gap-2 sm:gap-4 mt-1 scale-70 md:scale-100 origin-left">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center text-xs sm:text-base">
                      <span className="truncate">Explore Products</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg font-semibold flex items-center text-xs sm:text-base">
                      <span className="truncate">Shop Now</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right Content - Image Section */}
                <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[16/12] flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.image}
                      alt="Couple relaxing at home with KWW ceiling fan"
                      fill
                      className="object-contain rounded-lg"
                      priority
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 md:flex space-x-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              currentSlide === index ? 'bg-blue-600' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
