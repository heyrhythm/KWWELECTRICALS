'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    'Home',
    'Products',
    'About',
    'Services',
    'Store Locator',
    'Dealers',
    'Blog',
    'Careers',
    'Contacts'
  ];

  const productCategories = [
    { name: 'Fans', route: '/products/fans' },
    { name: 'LED Lights', route: '/products/led-lights' },
    { name: 'Home Appliances', route: '/products/home-appliances' },
    { name: 'Air Coolers', route: '/products/air-coolers' }
  ];

  const handleCategoryClick = (route: string) => {
    setActiveItem('Products');
    setIsProductsDropdownOpen(false);
    router.push(route);
  };

  return (
    <nav className="bg-[#f2eeed] shadow-[inset_0_8px_8px_-4px_rgba(0,0,0,0.1),inset_0_4px_4px_-2px_rgba(0,0,0,0.06),inset_0_2px_2px_-1px_rgba(0,0,0,0.03)] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4">
          {navItems.map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => item === 'Products' && setIsProductsDropdownOpen(true)}
              onMouseLeave={() => item === 'Products' && setIsProductsDropdownOpen(false)}
            >
              <button
                onClick={() => setActiveItem(item)}
                className={`py-4 px-5 relative transition-colors duration-200 ${
                  activeItem === item
                    ? 'text-red-600 font-semibold'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {item}
                {item === 'Products' && (
                  <svg 
                    className={`w-4 h-4 inline ml-1 transition-transform duration-200 ${
                      isProductsDropdownOpen ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {item === 'Services' && (
                  <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {activeItem === item && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 rounded-t"></div>
                )}
              </button>

              {/* Products Dropdown Menu */}
              {item === 'Products' && isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-b-md border border-gray-200 z-50">
                  <div className="py-2">
                    {productCategories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => handleCategoryClick(category.route)}
                        className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
