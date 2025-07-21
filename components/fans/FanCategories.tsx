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
    <div className="relative  bg-gradient-to-b from-white from-50% to-red-600 to-50% lg:py-20">
      {/* Split Background */}
      {/* <div className="absolute inset-0">
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-red-600"></div>
      </div> */}

      {/* Content Layer */}
      <div className="relative z-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Breadcrumb Navigation */}
          

          {/* Section Title */}
          <div className="text-center mb-12 lg:mb-25">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Our Fan Categories
            </h2>
            <p className="text-gray-600 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              Proven performance, unbeatable savings — discover what everyone's buying.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-20 lg:mb-25">
            {fanCategories.map((category, index) => (
              <Link
                key={index}
                href={`/products/fans/${category.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-4 lg:p-6 text-center transition-all duration-300 group-hover:-translate-y-1">
                  <div className="aspect-square mb-3 lg:mb-4 flex items-center justify-center">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                      <Image
                        src={category.image}
                        alt={`${category.name} icon`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                      />
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-200">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Promotional Section - In Red Area */}
          <div className="text-center">
            <p className="text-white text-xl lg:text-2xl xl:text-3xl font-bold leading-relaxed ">
              Proven performance, unbeatable savings — discover what everyone's buying.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanCategories;
