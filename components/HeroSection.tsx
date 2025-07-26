"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import generatedImage from "@/public/assets/generated-image.png";

const HeroSection: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(140);

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

  return (
    <section className="bg-[#e7f4fa]">
      <div className="scale-92 md:scale-100 lg:max-w-7xl lg:mx-auto pt-1 pb-1 lg:pt-10 lg:pb-10 sm:px-4 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 flex flex-col">
            <h1 className="text-[15px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-blue-600">Stay Cool</span>{" "}
              <span className="text-black">with</span>{" "}
              <span className="text-red-600">KWW</span>
              <br />
              <span className="text-black">BLDC Ceiling Fans-</span>
              <br />
              <span className="text-black">Power Meets Silence</span>
            </h1>

            <p className="text-gray-600 text-[10px] sm:text-base lg:text-lg leading-relaxed max-w-full lg:max-w-lg">
              Explore our advanced BLDC and high-speed ceiling fans designed for
              superior air delivery, silent operation, and up to 65% energy
              savings. Stylish, smart & durable.
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

          {/* Right Content - Image Section - FIXED */}
          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[16/12] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={generatedImage}
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
    </section>
  );
};

export default HeroSection;
