"use client";
import React from 'react';
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
    image: '/assets/icons/Fan Icon below Menu Bar_ImgID1.png',
    route: '/products/ceiling-fans',
    bgColor: 'bg-red-100'
  },
  {
    id: 'table-fan',
    name: 'Table Fan',
    image: '/assets/icons/Table Fan Icon Below Menu Bar_ImgID1.png',
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
  }
];

const ProductCategoryGrid: React.FC<ProductCategoryGridProps> = ({
  categories = DEFAULT_CATEGORIES,
  onCategoryClick,
  className = ''
}) => {
  const handleCategoryClick = (category: CategoryItem) => {
    if (onCategoryClick) onCategoryClick(category);
  };

  return (
    <div
      className={`lg:max-w-7xl lg:mx-auto w-full flex justify-center items-center lg:pb-5 overflow-x-auto lg:overflow-x-hidden pt-5 lg:pt-0 ${className}`}
    >
      <div
        className={`pl-35 sm:pl-30 lg:pl-0 
          grid grid-cols-8 gap-30 lg:gap-17
          transform
          scale-70
          sm:scale-90
          md:scale-100
          transition-transform duration-300
        `}
        style={{ minWidth: 800, maxWidth: "100%" }}
      >
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

interface CategoryCardProps {
  category: CategoryItem;
  onClick?: (category: CategoryItem) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick(category);
  };

  return (
    <Link
      href={category.route}
      className="block"
      onClick={handleClick}
    >
      <div className="group cursor-pointer text-center transition-all duration-300 w-[92px] mx-auto">
        <div className={`
          relative mx-auto mb-3 rounded-full overflow-hidden shadow-sm
          w-20 h-20
          ${category.bgColor || "bg-gray-100"}
          group-hover:shadow-md group-hover:scale-105 
          transition-all duration-300
        `}>
          {/* Updated image container with better fitting */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-30 h-30"> {/* Increased from implicit size to w-14 h-14 */}
              <Image
                src={category.image}
                alt={`${category.name} icon`}
                fill
                className="object-contain scale-136" // Added scale-110 to zoom the image
                sizes="64px" // Updated to match w-14 (56px)
              />
            </div>
          </div>
        </div>
        <h3 className="
          text-[13px] sm:text-sm lg:text-[13px] font-medium text-gray-700
          group-hover:text-gray-900 transition-colors duration-200
          leading-tight
          truncate whitespace-nowrap overflow-hidden
          w-full
        ">
          {category.name}
        </h3>
      </div>
    </Link>
  );
};

export default ProductCategoryGrid;
