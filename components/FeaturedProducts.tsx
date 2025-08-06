'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductData {
  id: number;
  name: string;
  image: string;
  badge: {
    text: string;
    color: string;
    bgColor: string;
  };
  features: string[];
  price: number;
  originalPrice: number;
  link: string;
}

const FeaturedProducts = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const products: ProductData[] = [
    {
      id: 1,
      name: "LED Smart Bulb 12W",
      image: "/assets/products/led-light.jpg",
      badge: {
        text: "Best Seller",
        color: "text-white",
        bgColor: "bg-red-600"
      },
      features: ["Smart Control", "Energy Efficient", "Save Energy"],
      price: 299,
      originalPrice: 499,
      link: "#"
    },
    {
      id: 2,
      name: "LED Smart Bulb 12W",
      image: "/assets/products/led-light.jpg",
      badge: {
        text: "New Launch",
        color: "text-white",
        bgColor: "bg-green-600"
      },
      features: ["Smart Control", "Energy Efficient", "Save Energy"],
      price: 299,
      originalPrice: 499,
      link: "#"
    },
    {
      id: 3,
      name: "LED Smart Bulb 12W",
      image: "/assets/products/led-light.jpg",
      badge: {
        text: "Eco Choice",
        color: "text-white",
        bgColor: "bg-green-500"
      },
      features: ["Smart Control", "Energy Efficient", "Save Energy"],
      price: 299,
      originalPrice: 499,
      link: "#"
    },
    {
      id: 4,
      name: "LED Smart Bulb 12W",
      image: "/assets/products/led-light.jpg",
      badge: {
        text: "Popular",
        color: "text-white",
        bgColor: "bg-blue-600"
      },
      features: ["Smart Control", "Energy Efficient", "Save Energy"],
      price: 299,
      originalPrice: 499,
      link: "#"
    }
  ];

  // Auto scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % products.length;
        
        // Scroll to the next product (mobile only)
        if (scrollContainerRef.current && window.innerWidth < 1024) {
          const container = scrollContainerRef.current;
          const cardWidth = container.scrollWidth / products.length;
          container.scrollTo({
            left: nextIndex * cardWidth,
            behavior: 'smooth'
          });
        }
        
        return nextIndex;
      });
    }, 3000); // Auto scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, products.length]);

  // Handle manual scroll (pause auto scroll temporarily)
  const handleScroll = () => {
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000); // Resume after 5 seconds
  };

  // Touch/swipe handling
  const handleTouchStart = () => {
    setIsAutoScrolling(false);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  return (
    <section className="bg-gray-50 py-1  sm:py-16 lg:py-30">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 scale-90 md:scale-100 origin-top">
        {/* Header */}
        <div className="text-center sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured & Best-Selling Products
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular products trusted by thousands of customers across India
          </p>
        </div>

        {/* Mobile: Horizontal Scrolling Container */}
        <div className="lg:hidden mt-10">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 px-4 pb-4 snap-x snap-mandatory"
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              // WebkitScrollbar: { display: 'none' }
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-72 bg-gray-200 rounded-2xl p-4 relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl snap-center"
              >
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badge.bgColor} ${product.badge.color} px-3 py-1 rounded-full text-xs font-semibold z-10`}>
                  {product.badge.text}
                </div>

                {/* Product Image */}
                <div className="relative h-48 mb-4 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="aspect-4/3 group-hover:scale-105 transition-transform duration-300"
                      sizes="128px"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white bg-opacity-10 rounded-full"></div>
                  <div className="absolute top-1/2 right-8 w-4 h-4 bg-white bg-opacity-15 rounded-full"></div>
                </div>

                {/* Product Info */}
                <div className="text-gray-700 mb-4">
                  <h3 className="font-bold text-lg mb-3">
                    {product.name}
                  </h3>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-300 bg-gray-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-800">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={product.link}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center group"
                >
                  View Products
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cardWidth = container.scrollWidth / products.length;
                    container.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout (unchanged) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}  
                className="bg-gray-200 rounded-2xl p-6 relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badge.bgColor} ${product.badge.color} px-3 py-1 rounded-full text-xs font-semibold z-10`}>
                  {product.badge.text}
                </div>

                {/* Product Image */}
                <div className="relative h-52 mb-4 flex items-center justify-center">
                  <div className="relative w-36 h-36">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="144px"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white bg-opacity-10 rounded-full"></div>
                  <div className="absolute top-1/2 right-8 w-4 h-4 bg-white bg-opacity-15 rounded-full"></div>
                </div>

                {/* Product Info */}
                <div className="text-gray-700 mb-4">
                  <h3 className="font-bold text-xl mb-3">
                    {product.name}
                  </h3>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-300 bg-gray-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-800">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={product.link}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center group"
                >
                  View Products
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
