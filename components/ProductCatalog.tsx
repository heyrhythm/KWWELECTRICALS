"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  name: string;
  url: string;
}

interface Category {
  id: string;
  name: string;
  image: string;
  products: Product[];
  bgColor: string;
}

interface ProductCatalogProps {
  onClose?: () => void;
}

const categories: Category[] = [
  {
    id: 'led-lights',
    name: 'LED Lights',
    image: '/assets/Led_Lights_Menu.jpg',
    bgColor: 'bg-amber-50',
    products: [
      { name: 'Panel Light', url: '/products/led-lights/panel-light' },
      { name: 'Down Light', url: '/products/led-lights/down-light' },
      { name: 'LED Lamp', url: '/products/led-lights/led-lamp' },
      { name: 'Batten Light', url: '/products/led-lights/batten-light' },
      { name: 'Spot Light', url: '/products/led-lights/spot-light' },
      { name: 'Track Light', url: '/products/led-lights/track-light' },
      { name: 'Flood Light', url: '/products/led-lights/flood-light' },
      { name: 'Street Light', url: '/products/led-lights/street-light' },
      { name: 'High Bay Light', url: '/products/led-lights/high-bay-light' },
      { name: 'Outdoor Light', url: '/products/led-lights/outdoor-light' },
      { name: 'Strip Light', url: '/products/led-lights/strip-light' }
    ]
  },
  {
    id: 'fans',
    name: 'Fans',
    image: '/assets/Fans_Menu.JPG',
    bgColor: 'bg-orange-50',
    products: [
      { name: 'Ceiling Fan', url: '/products/fans/ceiling-fan' },
      { name: 'Table Fan', url: '/products/fans/table-fan' },
      { name: 'Wall Fan', url: '/products/fans/wall-fan' },
      { name: 'Pedestal Fan', url: '/products/fans/pedestal-fan' },
      { name: 'Exhaust Fan', url: '/products/fans/exhaust-fan' },
      { name: 'Cabin Fan', url: '/products/fans/cabin-fan' }
    ]
  },
  {
    id: 'appliances',
    name: 'Appliances',
    image: '/assets/Appliances_Menu.JPG',
    bgColor: 'bg-red-50',
    products: [
      { name: 'Water Heater', url: '/products/appliances/water-heater' },
      { name: 'Geyser', url: '/products/appliances/geyser' },
      { name: 'Immersion Water Heater', url: '/products/appliances/immersion-water-heater' },
      { name: 'Infrared Cooktop', url: '/products/appliances/infrared-cooktop' },
      { name: 'Induction Cooker', url: '/products/appliances/induction-cooker' },
      { name: 'Steam Iron', url: '/products/appliances/steam-iron' },
      { name: 'Dry Iron', url: '/products/appliances/dry-iron' },
      { name: 'Mixer Grinder', url: '/products/appliances/mixer-grinder' },
      { name: 'Blender', url: '/products/appliances/blender' },
      { name: 'Electric Kettle', url: '/products/appliances/electric-kettle' },
      { name: 'Room Heater', url: '/products/appliances/room-heater' },
      { name: 'Quartz Heater', url: '/products/appliances/quartz-heater' },
      { name: 'Fan Heater', url: '/products/appliances/fan-heater' }
    ]
  },
  {
    id: 'coolers',
    name: 'Coolers',
    image: '/assets/Air Cooler.JPG',
    bgColor: 'bg-slate-50',
    products: [
      { name: 'Aria', url: '/products/coolers/aria' },
      { name: 'Breeza', url: '/products/coolers/breeza' },
      { name: 'Windsor', url: '/products/coolers/windsor' }
    ]
  }
];

const ProductCatalog: React.FC<ProductCatalogProps> = ({ onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(categories[0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleProductClick = (url: string) => {
    window.location.href = url;
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  if (!mounted) {
    return (
      <div 
        className=" max-w-4xl h-screen shadow-2xl overflow-hidden flex"
        onMouseLeave={onClose}
      >
        {/* Loading Categories */}
        <div className="w-64 border-r border-gray-200 bg-gray-50 overflow-y-auto">
          <div className="p-4 space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-4 p-4">
                <div className="w-16 h-16 rounded-lg bg-gray-200 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Loading Products */}
        <div className="flex-1 bg-white p-6">
          <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className=" max-w-7xl h-screen shadow-2xl overflow-hidden flex"
      onMouseLeave={onClose}
    >
      {/* Left Side - Categories Strip */}
      <div className="w-150 border-r border-gray-200 bg-gray-50 overflow-y-auto custom-scrollbar flex-shrink-0">
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4 sticky top-0 bg-gray-50 pb-2">
            Categories
          </h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`flex items-center space-x-10 w-full p-4 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-sm ${
                  selectedCategory?.id === category.id 
                    ? 'bg-white shadow-md border border-blue-200 ring-1 ring-blue-100' 
                    : 'hover:scale-[1.02]'
                }`}
              >
                {/* Category Image */}
                <div className="w-36 h-30 rounded-lg overflow-hidden bg-white shadow-sm flex-shrink-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={150}
                    height={70}
                    className="w-full h-full object-cover"
                    priority={false}
                  />
                </div>
                
                {/* Category Name */}
                <span className={`text-lg font-medium ${
                  selectedCategory?.id === category.id 
                    ? 'text-blue-700' 
                    : 'text-gray-700'
                }`}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Products Strip */}
      <div className="flex-1 bg-white overflow-y-auto custom-scrollbar">
        {selectedCategory && (
          <div className="p-6">
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white pb-4 mb-4 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">
                {selectedCategory.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {selectedCategory.products.length} products available
              </p>
            </div>
            
            {/* Products Grid */}
            <div className="space-y-2">
              {selectedCategory.products.map((product, index) => (
                <button
                  key={index}
                  onClick={() => handleProductClick(product.url)}
                  className="group block w-full text-left p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:shadow-sm hover:scale-[1.01]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {product.name}
                    </span>
                    <svg 
                      className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" 
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
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default ProductCatalog;