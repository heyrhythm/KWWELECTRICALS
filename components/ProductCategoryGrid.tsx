"use client";
// components/ProductCategoryGrid.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
    image: '/images/categories/ceiling-fan.png',
    route: '/products/ceiling-fans',
    bgColor: 'bg-red-100'
  },
  {
    id: 'table-fan',
    name: 'Table Fan',
    image: '/images/categories/table-fan.png',
    route: '/products/table-fans',
    bgColor: 'bg-blue-100'
  },
  {
    id: 'led-bulb',
    name: 'LED Bulb',
    image: '/images/categories/led-bulb.png',
    route: '/products/led-bulbs',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 'panel-light',
    name: 'Panel Light',
    image: '/images/categories/panel-light.png',
    route: '/products/panel-lights',
    bgColor: 'bg-purple-100'
  },
  {
    id: 'cooler',
    name: 'Cooler',
    image: '/images/categories/cooler.png',
    route: '/products/coolers',
    bgColor: 'bg-cyan-100'
  },
  {
    id: 'induction',
    name: 'Induction',
    image: '/images/categories/induction.png',
    route: '/products/induction',
    bgColor: 'bg-gray-100'
  },
  {
    id: 'mixer-grinder',
    name: 'Mixer Grinder',
    image: '/images/categories/mixer-grinder.png',
    route: '/products/mixer-grinder',
    bgColor: 'bg-green-100'
  },
  {
    id: 'iron',
    name: 'Iron',
    image: '/images/categories/iron.png',
    route: '/products/iron',
    bgColor: 'bg-orange-100'
  }
];

const ProductCategoryGrid: React.FC<ProductCategoryGridProps> = ({
  categories = DEFAULT_CATEGORIES,
  onCategoryClick,
  className = ''
}) => {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const handleCategoryClick = (category: CategoryItem) => {
    // Call the optional callback if provided (for analytics, etc.)
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  const toggleMobileExpansion = () => {
    setIsMobileExpanded(!isMobileExpanded);
  };

  // Split categories for mobile display
  const firstRowCategories = categories.slice(0, 2);
  const secondRowCategories = categories.slice(2, 4);
  const remainingCategories = categories.slice(4);

  return (
    <div className={`max-w-6xl pt-3 pb-3 mx-auto ${className}`}>
      {/* Mobile View with See More functionality */}
      <div className="block sm:hidden">
        {/* First Row - Always Visible */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {firstRowCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={handleCategoryClick}
            />
          ))}
        </div>

        {/* Second Row - Partially Visible when collapsed */}
        <div className={`relative ${!isMobileExpanded ? 'overflow-hidden' : ''}`}>
          {!isMobileExpanded && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10 pointer-events-none" />
          )}
          
          <div className={`grid grid-cols-2 gap-4 transition-all duration-500 ease-in-out ${
            !isMobileExpanded ? 'opacity-50 scale-95 -translate-y-2' : 'opacity-100 scale-100 translate-y-0'
          }`}>
            {secondRowCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={handleCategoryClick}
                isPartiallyVisible={!isMobileExpanded}
              />
            ))}
          </div>
        </div>

        {/* Remaining Categories - Hidden when collapsed */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileExpanded 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="grid grid-cols-2 gap-4">
            {remainingCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>

        {/* See More / See Less Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleMobileExpansion}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span className="text-sm">
              {isMobileExpanded ? 'Show Less' : 'See More Products'}
            </span>
            {isMobileExpanded ? (
              <FaChevronUp className="w-4 h-4 transition-transform duration-200" />
            ) : (
              <FaChevronDown className="w-4 h-4 transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Tablet: 4x2 Grid */}
      <div className="hidden sm:grid md:hidden grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={handleCategoryClick}
          />
        ))}
      </div>

      {/* Desktop: Single Row */}
      <div className="hidden md:grid grid-cols-8 gap-8 lg:gap-9">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

// Individual Category Card Component
interface CategoryCardProps {
  category: CategoryItem;
  onClick?: (category: CategoryItem) => void;
  isPartiallyVisible?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  category, 
  onClick, 
  isPartiallyVisible = false 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(category);
    }
  };

  const CardContent = (
    <div className={`group cursor-pointer text-center transition-all duration-300 ${
      isPartiallyVisible ? 'transform scale-95' : ''
    }`}>
      {/* Icon Container */}
      <div className={`
        relative mx-auto mb-3 rounded-full overflow-hidden shadow-sm
        w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-22 lg:h-22
        ${category.bgColor || 'bg-gray-100'}
        group-hover:shadow-md group-hover:scale-105 
        transition-all duration-300 ease-in-out
        ${isPartiallyVisible ? 'shadow-none' : ''}
      `}>
        <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-5">
          <Image
            src={category.image}
            alt={`${category.name} icon`}
            fill
            className="object-contain p-2"
            sizes="(max-width: 640px) 48px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
          />
        </div>
      </div>

      {/* Label */}
      <h3 className={`
        text-xs sm:text-sm font-medium text-gray-700
        group-hover:text-gray-900 transition-colors duration-200
        leading-tight
        ${isPartiallyVisible ? 'text-gray-500' : ''}
      `}>
        {category.name}
      </h3>
    </div>
  );

  // Always use Link for navigation when route is available
  if (category.route && !isPartiallyVisible) {
    return (
      <Link 
        href={category.route} 
        className="block "
        onClick={handleClick} // Optional callback for analytics
      >
        {CardContent}
      </Link>
    );
  }

  // Use button for partially visible items or when no route
  return (
    <button
      onClick={!isPartiallyVisible ? handleClick : undefined}
      className={`
        block w-full
        ${isPartiallyVisible ? 'pointer-events-none cursor-default' : 'cursor-pointer'}
      `}
      type="button"
      disabled={isPartiallyVisible}
    >
      {CardContent}
    </button>
  );
};

export default ProductCategoryGrid;
