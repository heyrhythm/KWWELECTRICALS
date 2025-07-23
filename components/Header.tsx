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
      <header className="bg-white px-3 sm:px-4 lg:px-6 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto">
          {/* Main Header Row */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <div className="bg-red-600 rounded-full p-1.5 sm:p-2 mr-2">
                <div className="text-white font-bold text-sm sm:text-xl">kww</div>
              </div>
              <div className="text-red-600 font-bold text-lg sm:text-xl">
                KWW
                <span className="font-normal text-gray-700 text-xs sm:text-sm block">
                  ELECTRICALS
                </span>
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

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Become A Dealer Button */}
              <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
                Become A Dealer
              </button>

              {/* Profile Button */}
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Profile"
              >
                <FaUserCircle className="w-6 h-6 text-gray-600" />
              </button>

              {/* Cart Button */}
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Cart"
              >
                <AiOutlineShoppingCart className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Mobile/Tablet Right Section */}
            <div className="flex lg:hidden items-center gap-1">
              {/* Search Icon for Mobile/Tablet */}
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <FaSearch className="w-5 h-5 text-gray-600" />
              </button>

              {/* Mobile Menu Button */}
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
          </div>

          {/* Mobile Search Row */}
          {isSearchOpen && (
            <div className="lg:hidden mt-3 pb-2">
              <div className="border border-gray-300 rounded-full overflow-hidden relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="w-full px-4 py-2.5 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-red-600/20 bg-white text-gray-700"
                  autoFocus
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <FaSearch className="w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
              </div>
            </div>
          )}

          {/* Mobile/Tablet Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-3 pb-3 border-t border-gray-200 pt-3">
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

                {/* Divider */}
                <div className="border-t border-gray-200 my-3"></div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  {/* Become A Dealer */}
                  <button className="w-full bg-red-700 hover:bg-red-800 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Become A Dealer
                  </button>

                  {/* Profile and Cart Row */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <FaUserCircle className="w-5 h-5" />
                      <span>Profile</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <AiOutlineShoppingCart className="w-5 h-5" />
                      <span>Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

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
