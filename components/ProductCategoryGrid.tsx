"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  route: string;
  bgColor?: string;
}

interface ProductCategoryGridProps {
  categories?: CategoryItem[];
  onCategoryClick?: (category: CategoryItem) => void;
  className?: string;
}

const DEFAULT_CATEGORIES: CategoryItem[] = [
  {
    id: 'ceiling-fan',
    name: 'Ceiling Fan',
    image: '/assets/icons/Ceiling Fan Icon below Menu Bar.svg',
    route: '/products/ceiling-fans',
    bgColor: 'bg-red-100'
  },
  {
    id: 'table-fan',
    name: 'Table Fan',
    image: '/assets/icons/Table Fan Icon Below Menu Bar_ImgID1.svg',
    route: '/products/table-fans',
    bgColor: 'bg-blue-100'
  },
  {
    id: 'led-bulb',
    name: 'LED Lights',
    image: '/assets/icons/LED Lamp Icon below Menu Bar.svg',
    route: '/products/led-bulbs',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 'panel-light',
    name: 'Panel Light',
    image: '/assets/icons/Panel Light Icon below Menu Bar.svg',
    route: '/products/panel-lights',
    bgColor: 'bg-purple-100'
  },
  {
    id: 'cooler',
    name: 'Cooler',
    image: '/assets/icons/Cooler Icon below Menu Bar.svg',
    route: '/products/coolers',
    bgColor: 'bg-cyan-100'
  },
  {
    id: 'induction',
    name: 'Induction',
    image: '/assets/icons/Induction Icon below Menu Bar.svg',
    route: '/products/induction',
    bgColor: 'bg-gray-100'
  },
  {
    id: 'mixer-grinder',
    name: 'Mixer Grinder',
    image: '/assets/icons/Mixer Grinder Icon below Menu Bar.svg',
    route: '/products/mixer-grinder',
    bgColor: 'bg-green-100'
  },
  {
    id: 'iron',
    name: 'Iron',
    image: '/assets/icons/Iron Icon below Menu Bar.svg',
    route: '/products/iron',
    bgColor: 'bg-orange-100'
  },
  // Second slide products
  {
    id: 'air-conditioner',
    name: 'Air Conditioner',
    image: '/assets/icons/AC Icon below Menu Bar.svg',
    route: '/products/air-conditioner',
    bgColor: 'bg-indigo-100'
  },
  {
    id: 'refrigerator',
    name: 'Refrigerator',
    image: '/assets/icons/Fridge Icon below Menu Bar.svg',
    route: '/products/refrigerator',
    bgColor: 'bg-pink-100'
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine',
    image: '/assets/icons/Washing Machine Icon below Menu Bar.svg',
    route: '/products/washing-machine',
    bgColor: 'bg-teal-100'
  },
  {
    id: 'microwave',
    name: 'Microwave',
    image: '/assets/icons/Microwave Icon below Menu Bar.svg',
    route: '/products/microwave',
    bgColor: 'bg-amber-100'
  },
  {
    id: 'water-heater',
    name: 'Water Heater',
    image: '/assets/icons/Water Heater Icon below Menu Bar.svg',
    route: '/products/water-heater',
    bgColor: 'bg-rose-100'
  },
  {
    id: 'tv',
    name: 'Television',
    image: '/assets/icons/TV Icon below Menu Bar.svg',
    route: '/products/television',
    bgColor: 'bg-slate-100'
  },
  {
    id: 'speaker',
    name: 'Speaker',
    image: '/assets/icons/Speaker Icon below Menu Bar.svg',
    route: '/products/speaker',
    bgColor: 'bg-emerald-100'
  },
  {
    id: 'vacuum-cleaner',
    name: 'Vacuum Cleaner',
    image: '/assets/icons/Vacuum Icon below Menu Bar.svg',
    route: '/products/vacuum-cleaner',
    bgColor: 'bg-violet-100'
  },
  // Third slide products
  {
    id: 'dishwasher',
    name: 'Dishwasher',
    image: '/assets/icons/Dishwasher Icon below Menu Bar.svg',
    route: '/products/dishwasher',
    bgColor: 'bg-sky-100'
  },
  {
    id: 'coffee-maker',
    name: 'Coffee Maker',
    image: '/assets/icons/Coffee Maker Icon below Menu Bar.svg',
    route: '/products/coffee-maker',
    bgColor: 'bg-orange-200'
  },
  {
    id: 'toaster',
    name: 'Toaster',
    image: '/assets/icons/Toaster Icon below Menu Bar.svg',
    route: '/products/toaster',
    bgColor: 'bg-red-200'
  },
  {
    id: 'blender',
    name: 'Blender',
    image: '/assets/icons/Blender Icon below Menu Bar.svg',
    route: '/products/blender',
    bgColor: 'bg-blue-200'
  },
  {
    id: 'rice-cooker',
    name: 'Rice Cooker',
    image: '/assets/icons/Rice Cooker Icon below Menu Bar.svg',
    route: '/products/rice-cooker',
    bgColor: 'bg-yellow-200'
  },
  {
    id: 'kettle',
    name: 'Electric Kettle',
    image: '/assets/icons/Kettle Icon below Menu Bar.svg',
    route: '/products/kettle',
    bgColor: 'bg-purple-200'
  },
  {
    id: 'air-fryer',
    name: 'Air Fryer',
    image: '/assets/icons/Air Fryer Icon below Menu Bar.svg',
    route: '/products/air-fryer',
    bgColor: 'bg-cyan-200'
  },
  {
    id: 'food-processor',
    name: 'Food Processor',
    image: '/assets/icons/Food Processor Icon below Menu Bar.svg',
    route: '/products/food-processor',
    bgColor: 'bg-gray-200'
  }
];

const ProductCategoryGrid: React.FC<ProductCategoryGridProps> = ({
  categories = DEFAULT_CATEGORIES,
  onCategoryClick,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(8);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const handleCategoryClick = (category: CategoryItem) => {
    if (onCategoryClick) onCategoryClick(category);
  };

  // Update items per slide based on screen size
  const updateItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1280) setItemsPerSlide(8); // xl
      else if (width >= 1024) setItemsPerSlide(6); // lg
      else if (width >= 768) setItemsPerSlide(4); // md
      else setItemsPerSlide(3); // sm and below
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(categories.length / itemsPerSlide);
  const maxSlides = Math.max(0, totalSlides - 1);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(Math.max(0, Math.min(slideIndex, maxSlides)));
  };

  return (
    <div className={`lg:max-w-7xl lg:mx-auto w-full flex justify-center items-center lg:pb-5 pt-5 lg:pt-0 ${className}`}>
      {/* Mobile: Horizontal scroll - Fixed scaling and alignment issues */}
      <div className="block lg:hidden w-full">
        <div className="overflow-x-auto">
          <div className="flex gap-3 sm:gap-4 px-4 py-2" style={{ minWidth: 'fit-content' }}>
            {categories.map((category) => (
              <div key={category.id} className="flex-shrink-0">
                <CategoryCard
                  category={category}
                  onClick={handleCategoryClick}
                  isMobile={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Laptop/Desktop: Fixed Slider */}
      <div className="hidden lg:block w-full relative">
        <div className="flex items-center justify-between">
          {/* Left Navigation Button */}
          <button
            onClick={prevSlide}
            disabled={maxSlides === 0}
            className={`
              flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
              bg-white shadow-lg border border-gray-200 z-10
              transition-all duration-200 hover:scale-105
              ${maxSlides === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-50 hover:shadow-xl active:scale-95'
              }
            `}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Container - Completely Fixed */}
          <div className="flex-1 mx-4 overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(currentSlide * 100)}%)`,
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => {
                const startIdx = slideIndex * itemsPerSlide;
                const slideCategories = categories.slice(startIdx, startIdx + itemsPerSlide);
                
                return (
                  <div
                    key={slideIndex}
                    className="flex-shrink-0 w-full"
                  >
                    <div className={`
                      grid gap-4 px-4 justify-items-center
                      ${itemsPerSlide === 8 ? 'grid-cols-8' : 
                        itemsPerSlide === 6 ? 'grid-cols-6' : 
                        itemsPerSlide === 4 ? 'grid-cols-4' : 'grid-cols-3'}
                    `}>
                      {slideCategories.map((category) => (
                        <CategoryCard
                          key={category.id}
                          category={category}
                          onClick={handleCategoryClick}
                          isMobile={false}
                        />
                      ))}
                      {/* Fill empty slots for incomplete slides */}
                      {slideCategories.length < itemsPerSlide && 
                        Array.from({ length: itemsPerSlide - slideCategories.length }, (_, emptyIndex) => (
                          <div key={`empty-${slideIndex}-${emptyIndex}`} className="w-[92px]"></div>
                        ))
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            disabled={maxSlides === 0}
            className={`
              flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
              bg-white shadow-lg border border-gray-200 z-10
              transition-all duration-200 hover:scale-105
              ${maxSlides === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-50 hover:shadow-xl active:scale-95'
              }
            `}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        {/* {maxSlides > 0 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

interface CategoryCardProps {
  category: CategoryItem;
  onClick?: (category: CategoryItem) => void;
  isMobile?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, isMobile = false }) => {
  const handleClick = () => {
    if (onClick) onClick(category);
  };

  return (
    <Link
      href={category.route}
      className="block"
      onClick={handleClick}
    >
      <div className={`group cursor-pointer text-center transition-all duration-300 mx-auto ${
        isMobile ? 'w-[70px]' : 'w-[92px]'
      }`}>
        <div className={`
          relative mx-auto mb-3 rounded-full overflow-hidden shadow-sm
          ${isMobile ? 'w-14 h-14' : 'w-20 h-20'}
         
          group-hover:shadow-md group-hover:scale-105 
          transition-all duration-300
        `}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`relative ${isMobile ? 'w-24 h-24' : 'w-36 h-36'}`}>
              <Image
                src={category.image}
                alt={`${category.name} icon`}
                fill
                className="object-contain scale-150 md:scale-130"
                sizes={isMobile ? "24px" : "32px"}
              />
            </div>
          </div>
        </div>
        <h3 className={`
          font-medium text-gray-700
          group-hover:text-gray-900 transition-colors duration-200
          leading-tight
          truncate whitespace-nowrap overflow-hidden
          w-full
          ${isMobile ? 'text-[11px]' : 'text-[13px] sm:text-sm lg:text-[13px]'}
        `}>
          {category.name}
        </h3>
      </div>
    </Link>
  );
};

export default ProductCategoryGrid;
