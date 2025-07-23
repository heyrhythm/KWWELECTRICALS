'use client';

import React from 'react';
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
  const products: ProductData[] = [
    {
      id: 1,
      name: "LED Smart Bulb 12W",
      image: "/api/placeholder/200/200",
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
      image: "/api/placeholder/200/200",
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
      image: "/api/placeholder/200/200",
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
      image: "/api/placeholder/200/200",
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

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured & Best-Selling Products
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular products trusted by thousands of customers across India
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
              <div className="relative h-48 sm:h-52 mb-4 flex items-center justify-center">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 144px"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute top-1/2 right-8 w-4 h-4 bg-white bg-opacity-15 rounded-full"></div>
              </div>

              {/* Product Info */}
              <div className="text-gray-700 mb-4">
                <h3 className="font-bold text-lg sm:text-xl mb-3">
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

        {/* View All Products Button */}
        {/* <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            View All Products
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
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProducts;
