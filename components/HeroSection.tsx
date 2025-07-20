"use client";
import React from "react";
import Image from "next/image";
import generatedImage from "../public/generated-image.png"; // Properly import the image

const HeroSection: React.FC = () => {
  return (
    <section className="  bg-[#e7f4fa] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-blue-600">Stay Cool</span>{" "}
              <span className="text-black">with</span>{" "}
              <span className="text-red-600">KWW</span>
              <br />
              <span className="text-black">BLDC Ceiling Fans-</span>
              <br />
              <span className="text-black">Power Meets Silence</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Explore our advanced BLDC and high-speed ceiling fans designed for
              superior air delivery, silent operation, and up to 65% energy
              savings. Stylish, smart & durable.
            </p>

            <div className="flex space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center">
                Explore Products
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center">
                Shop Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Fixed Image Section */}
          
            <div className="relative min-w-80 h-80 lg:h-96">
  <Image
    src={generatedImage}
    alt="Couple relaxing at home with KWW ceiling fan"
    fill
    className="object-contain rounded-lg"
    priority
  />
</div>

          </div>
        </div>
     
    </section>
  );
};

export default HeroSection;
