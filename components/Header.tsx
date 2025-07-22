import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header: React.FC = () => {
  return (
    <header className="bg-white px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-red-600 rounded-full p-2 mr-2">
            <div className="text-white font-bold text-xl">kww</div>
          </div>
          <div className="text-red-600 font-bold text-xl">
            KWW
            <span className="font-normal text-gray-700 text-sm block">
              ELECTRICALS
            </span>
          </div>
        </div>

        {/* Search Box */}
        <div className="flex-1 max-w-md mx-8 border border-gray-300 rounded-full overflow-hidden relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full px-4 py-2 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/90 text-gray-700"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Become A Dealer + Icons */}
        <div className="flex items-center gap-2">
          <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
            Become A Dealer
          </button>
          {/* Profile Button */}
          <button
            className="ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="Profile"
          >
            <FaUserCircle className="w-6 h-6 text-gray-600" />
          </button>
          {/* Cart Button */}
          <button
            className="ml-1 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="Cart"
          >
            <AiOutlineShoppingCart className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
