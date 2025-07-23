// components/FanCategories.tsx (Tailwind CSS Version)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FanCategories: React.FC = () => {
  const fanCategories = [
    { name: 'Ceiling Fan', image: '/images/categories/ceiling-fan.png', slug: 'ceiling-fans' },
    { name: 'Cabin Fan', image: '/images/categories/cabin-fan.png', slug: 'cabin-fans' },
    { name: 'Table Fan', image: '/images/categories/table-fan.png', slug: 'table-fans' },
    { name: 'Pedestal Fan', image: '/images/categories/pedestal-fan.png', slug: 'pedestal-fans' },
    { name: 'Wall Fan', image: '/images/categories/wall-fan.png', slug: 'wall-fans' },
    { name: 'Exhaust Fan', image: '/images/categories/exhaust-fan.png', slug: 'exhaust-fans' }
  ];

  return (
    <div className="relative bg-gradient-to-b from-white from-50% to-red-600 to-50% py-8 sm:py-12 lg:py-16 xl:py-20">
      {/* Content Layer */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Our Fan Categories
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Proven performance, unbeatable savings — discover what everyone's buying.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 xl:gap-6 mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
            {fanCategories.map((category, index) => (
              <Link
                key={index}
                href={`/products/fans/${category.slug}`}
                className="group block"
              >
                <div className="bg-gray-100 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md border border-gray-300 p-3 sm:p-4 lg:p-5 xl:p-6 text-center transition-all duration-300 group-hover:-translate-y-1">
                  <div className="aspect-square mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20">
                      <Image
                        src={category.image}
                        alt={`${category.name} icon`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 64px, 80px"
                      />
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-200 leading-tight">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Promotional Section - In Red Area */}
          <div className="text-center px-2 sm:px-4">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-relaxed max-w-4xl mx-auto">
              Proven performance, unbeatable savings — discover what everyone's buying.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanCategories;
