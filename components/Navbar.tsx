'use client';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Home');

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

  return (
    <nav className="bg-[#f2eeed] shadow-[inset_0_8px_8px_-4px_rgba(0,0,0,0.1),inset_0_4px_4px_-2px_rgba(0,0,0,0.06),inset_0_2px_2px_-1px_rgba(0,0,0,0.03)] ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center px-4 ">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveItem(item)}
              className={`py-4 px-5 relative transition-colors duration-200 ${
                activeItem === item
                  ? 'text-red-600 font-semibold'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              {item}
              {item === 'Products' && (
                <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
