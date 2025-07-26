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
    image: '/assets/Led_lights_Menu.jpg',
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
    image: '/assets/Appliances_Menu.jpg',
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
    image: '/assets/Air Cooler.jpg',
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

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleProductClick = (url: string) => {
    window.location.href = url;
  };

  if (!mounted) {
    return (
      <div 
        className="w-full py-8 z-50" // Removed px-4 sm:px-6 lg:px-8 and max-w-7xl mx-auto
        onMouseLeave={onClose}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6"> {/* Added px-6 only to the grid */}
          {categories.map((category) => (
            <div key={category.id} className={` rounded-3xl p-6 shadow-sm`}>
              <div className="w-full h-32 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-gray-400">Loading...</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {category.name}
              </h3>
              <div className="space-y-2">
                {category.products.slice(0, 5).map((product, index) => (
                  <div key={index} className="text-sm text-gray-700">
                    {product.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div 
      className="max-w-7xl mx-auto py-8 z-50" // Removed all side padding and max-width constraints
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-1"> {/* Minimal padding only on the grid */}
        {categories.map((category) => (
          <div key={category.id} className={`rounded-3xl p-6 `}>
            {/* Category Image */}
            <div className="w-full h-32 rounded-2xl overflow-hidden mb-4 bg-white shadow-sm">
              <Image
                src={category.image}
                alt={category.name}
                width={280}
                height={128}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
            
            {/* Category Name */}
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {category.name}
            </h3>

            {/* Product List */}
            <div className="space-y-2">
              {category.products.map((product, index) => (
                <button
                  key={index}
                  onClick={() => handleProductClick(product.url)}
                  className="block w-full text-left text-sm text-gray-700 hover:text-gray-900 hover:font-medium transition-all duration-200 py-1"
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
