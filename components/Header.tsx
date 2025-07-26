'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaUserCircle, FaSearch, FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
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
    setIsMobileProductsOpen(false);
    setIsMobileMenuOpen(false);
    router.push(route);
  };

  const handleNavItemClick = (item: string) => {
    setActiveItem(item);
    if (item !== 'Products') {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Header with shadow */}
      <header className="bg-white px-3 sm:px-4 lg:px-6 py-3 shadow-md relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Header Row */}
          <div className="flex items-center justify-between">
            
            {/* Left Section: Hamburger Menu + Logo (Mobile) / Logo Only (Desktop) */}
            <div className="flex items-center gap-2">
              {/* Mobile Menu Button - Only on mobile */}
              <div className="lg:hidden">
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Menu"
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="w-5 h-5 text-gray-600" />
                  ) : (
                    <FaBars className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>

              {/* Logo - Always present */}
              <div className="flex items-center flex-shrink-0">
                <div className="bg-red-600 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-1">
                  <div className="text-white font-bold text-sm sm:text-base">KWW</div>
                </div>
                <div className="text-red-600 font-bold text-base sm:text-lg lg:text-xl">
                  KWW
                  <span className="font-normal text-gray-700 text-xs sm:text-sm block">
                    ELECTRICALS
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Search Box - Hidden on mobile/tablet */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="w-full border border-gray-300 rounded-full overflow-hidden relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="w-full px-4 py-2 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-red-600/20 bg-white text-gray-700"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <FaSearch className="w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Right Section: Dealer + Profile + Cart */}
            <div className="flex items-center gap-1 lg:gap-2">
              {/* Become A Dealer Button */}
              <button className="bg-red-700 hover:bg-red-800 text-white px-2 py-1.5 lg:px-6 lg:py-2 rounded text-xs lg:text-sm lg:rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
                <span className="lg:hidden">Dealer</span>
                <span className="hidden lg:inline">Become A Dealer</span>
              </button>
              
              {/* Profile Button */}
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 scale-85 lg:scale-100"
                aria-label="Profile"
              >
                <FaUserCircle className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
              </button>
              
              {/* Cart Button */}
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 scale-85 lg:scale-100"
                aria-label="Cart"
              >
                <AiOutlineShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Bar - Separate section with top shadow */}
      <div className="lg:hidden bg-white px-3 sm:px-4 py-3 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1)] relative">
        <div className="max-w-7xl mx-auto">
          <div className="border border-gray-300 rounded-full overflow-hidden relative">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full px-4 py-2.5 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-red-600/20 bg-white text-gray-700"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <FaSearch className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white px-3 sm:px-4 pb-3 shadow-md relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="border-t border-gray-200 pt-3">
              <div className="flex flex-col space-y-1">
                {/* Navigation Items */}
                {navItems.map((item) => (
                  <div key={item}>
                    {item === 'Products' ? (
                      <div>
                        <button
                          onClick={() => {
                            handleNavItemClick(item);
                            setIsMobileProductsOpen(!isMobileProductsOpen);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                            activeItem === item
                              ? 'text-red-600 bg-red-50 font-semibold'
                              : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                          }`}
                        >
                          <span>{item}</span>
                          <FaChevronDown 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isMobileProductsOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {/* Products Submenu */}
                        {isMobileProductsOpen && (
                          <div className="ml-4 mt-1 space-y-1">
                            {productCategories.map((category) => (
                              <button
                                key={category.name}
                                onClick={() => handleCategoryClick(category.route)}
                                className="w-full text-left px-4 py-2.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                              >
                                {category.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavItemClick(item)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                          activeItem === item
                            ? 'text-red-600 bg-red-50 font-semibold'
                            : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                        }`}
                      >
                        {item}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar - Only visible on large screens */}
      <nav className="hidden lg:block bg-[#f2eeed] shadow-[inset_0_8px_8px_-4px_rgba(0,0,0,0.1),inset_0_4px_4px_-2px_rgba(0,0,0,0.06),inset_0_2px_2px_-1px_rgba(0,0,0,0.03)] relative">
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
                    <FaChevronDown 
                      className={`w-4 h-4 inline ml-1 transition-transform duration-200 ${
                        isProductsDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  {item === 'Services' && (
                    <FaChevronDown className="w-4 h-4 inline ml-1" />
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
    </>
  );
};

export default Header;
