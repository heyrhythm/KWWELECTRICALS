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
        className="w-full py-8 z-50"
        onMouseLeave={onClose}
      >
        <div className="flex h-96">
          {/* Loading state */}
          <div className="w-1/3 border-r border-gray-200 pr-6">
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-3 p-3">
                  <div className="w-12 h-12 rounded-lg bg-gray-100"></div>
                  <span className="text-gray-400">Loading...</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/3 pl-6">
            <div className="text-gray-400">Loading products...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="max-w-7xl mx-auto py-8 z-50"
      onMouseLeave={onClose}
    >
      <div className="flex h-96 px-6">
        {/* Left Side - Categories */}
        <div className="w-1/3 border-r border-gray-200 pr-6">
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all duration-200 hover:bg-gray-50 ${
                  selectedCategory?.id === category.id 
                    ? 'bg-blue-50 border border-blue-200' 
                    : 'hover:shadow-sm'
                }`}
              >
                {/* Category Image */}
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm flex-shrink-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    priority={false}
                  />
                </div>
                
                {/* Category Name */}
                <span className={`text-sm font-medium ${
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

        {/* Right Side - Products with Scroll */}
        <div className="w-2/3 pl-6">
          {selectedCategory && (
            <>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {selectedCategory.name}
              </h3>
              
              {/* Scrollable Product List */}
              <div className="h-80 overflow-y-auto pr-2 custom-scrollbar">
                <div className="space-y-2">
                  {selectedCategory.products.map((product, index) => (
                    <button
                      key={index}
                      onClick={() => handleProductClick(product.url)}
                      className="block w-full text-left text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-lg hover:shadow-sm"
                    >
                      {product.name}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
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
