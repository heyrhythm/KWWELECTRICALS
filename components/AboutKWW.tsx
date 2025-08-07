"use client";
import React from "react";
import Image from "next/image";
import { FaAward, FaLeaf, FaUsers, FaGlobe } from "react-icons/fa";

const features = [
  {
    title: "ISO Certified",
    subtitle: "Quality Standards",
    icon: <FaAward className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-700" />,
  },
  {
    title: "Eco-Friendly",
    subtitle: "Sustainable Products",
    icon: <FaLeaf className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-700" />,
  },
  {
    title: "Expert Team",
    subtitle: "Skilled Professionals",
    icon: <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-700" />,
  },
  {
    title: "Pan-India",
    subtitle: "Nationwide Reach",
    icon: <FaGlobe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-700" />,
  },
];

const AboutKWW: React.FC = () => (
  <section className="bg-gray-50 py-3 sm:py-12 lg:py-0 px-3 sm:px-4 lg:px-6 h-100 lg:h-200">
    <div className="scale-92 md:scale-100 lg:max-w-7xl lg:mx-auto pt-1 pb-1 lg:pt-10 lg:pb-10 sm:px-4 lg:px-6">
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-center">
        {/* Left Content (Text) */}
        <div className="flex flex-col space-y-1 lg:space-y-6">
          <h2 className="text-[13px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight truncate">
            <span className="text-black">About</span>{" "}
            <span className="text-black">KWW Electricals</span>
          </h2>
          <p className="text-gray-600 text-[10px] sm:text-base lg:text-lg leading-tight max-w-full lg:max-w-lg">
            With over 20 years of expertise, KWW Electricals manufactures eco-friendly and high-performance electrical goods across India. We are committed to powering homes and businesses with sustainable, energy-efficient solutions.
          </p>
          <p className="text-gray-600 text-[10px] sm:text-base lg:text-lg leading-tight max-w-full lg:max-w-lg">
            Our journey began with a simple mission: to make quality electrical products accessible to everyone while contributing to a greener planet. Today, we are proud to be trusted by millions of customers nationwide.
          </p>
          {/* Features Grid */}
          <div className=" grid grid-cols-2 gap-5 sm:gap-7 md:gap-8 lg:gap-2 lg:mt-4 scale-75 md:scale-100 w-60 lg:w-120 origin-left ">

            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2  p-2">
                <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-700 text-[12px] sm:text-base lg:text-lg truncate">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-[8px] sm:text-xs lg:text-sm truncate">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* CTA Button */}
          <div className="flex gap-2 sm:gap-4 lg:mt-5 scale-70 md:scale-100 origin-left">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 lg:px-4 lg:py-5 rounded-lg font-semibold flex items-center text-xs sm:text-base">
              <span className="truncate">Learn More About Us</span>
             
            </button>
          </div>
        </div>
        {/* Right Content (Image) */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center">
          <Image
            src="/images/kww-building.jpg" // Update the actual image path as needed
            alt="KWW Electricals building with company logo"
            fill
            className="object-contain rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutKWW;
