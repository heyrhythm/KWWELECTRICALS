import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface Product {
  name: string;
  url: string;
}

interface Category {
  id: string;
  name: string;
  image: string;
  bgColor: string;
  products: Product[];
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

const ProductCatalogMobile: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(
      expandedCategory === categoryId ? null : categoryId
    );
  };

  const handleProductClick = (url: string) => {
    // Navigate to product page
    window.location.href = url;
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white">
      {categories.map((category) => (
        <div key={category.id} className="border-b border-gray-200">
          {/* Category Header */}
          <div
            className={`${category.bgColor} px-4 py-4 flex items-center justify-between cursor-pointer transition-colors hover:opacity-80`}
            onClick={() => toggleCategory(category.id)}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white shadow-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gray-800 font-medium text-lg">
                {category.name}
              </span>
            </div>
            <div className="transition-transform duration-200">
              {expandedCategory === category.id ? (
                <ChevronDownIcon className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronRightIcon className="w-5 h-5 text-gray-600" />
              )}
            </div>
          </div>

          {/* Expanded Products List */}
          {expandedCategory === category.id && (
            <div className="bg-white">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="px-4 py-3 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handleProductClick(product.url)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-base">
                      {product.name}
                    </span>
                    <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductCatalogMobile;
