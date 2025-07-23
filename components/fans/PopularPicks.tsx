"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  features: string[];
  size?: string;
  colors?: string[];
  isBestSeller?: boolean;
}

interface PopularPicksProps {
  products?: Product[];
  showViewAllButton?: boolean;
  onViewProduct?: (productId: number) => void;
  onBuyNow?: (productId: number) => void;
  onViewAll?: () => void;
}

// Move default data outside component to avoid recreation
const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'KWW AIRCON Ceiling Fan',
    image: '/images/products/ceiling-fan-1.jpg',
    price: 899,
    originalPrice: 1299,
    features: ['Noiseless', 'Save Energy'],
    size: '120 MM',
    colors: ['white', 'cream', 'brown'],
    isBestSeller: true
  },
  {
    id: 2,
    name: 'KWW AIRCON Ceiling Fan',
    image: '/images/products/ceiling-fan-2.jpg',
    price: 899,
    originalPrice: 1299,
    features: ['Save Energy', 'Noiseless'],
    size: '120 MM',
    colors: ['white', 'cream', 'brown'],
    isBestSeller: true
  },
  {
    id: 3,
    name: 'KWW AIRCON Ceiling Fan',
    image: '/images/products/ceiling-fan-3.jpg',
    price: 899,
    originalPrice: 1299,
    features: ['Noiseless', 'Save Energy'],
    size: '120 MM',
    colors: ['white', 'cream', 'brown'],
    isBestSeller: true
  },
  {
    id: 4,
    name: 'KWW AIRCON Ceiling Fan',
    image: '/images/products/ceiling-fan-4.jpg',
    price: 899,
    originalPrice: 1299,
    features: ['Noiseless', 'Save Energy'],
    size: '120 MM',
    colors: ['white', 'cream', 'brown'],
    isBestSeller: true
  },
  {
    id: 5,
    name: 'KWW AIRCON Ceiling Fan',
    image: '/images/products/ceiling-fan-5.jpg',
    price: 899,
    originalPrice: 1299,
    features: ['Save Energy', 'Noiseless'],
    size: '120 MM',
    colors: ['white', 'cream', 'brown'],
    isBestSeller: true
  },
  {
    id: 6,
    name: 'KWW AIRCON Ceiling Fan',
    image: '/images/products/ceiling-fan-6.jpg',
    price: 899,
    originalPrice: 1299,
    features: ['Save Energy', 'Noiseless'],
    size: '120 MM',
    colors: ['white', 'cream', 'brown'],
    isBestSeller: true
  },
  {
    id: 7,
    name: 'KWW AIRCON Ceiling Fan',
    image: '/images/products/ceiling-fan-7.jpg',
    price: 899,
    originalPrice: 1299,
    features: ['Noiseless', 'Save Energy'],
    size: '120 MM',
    colors: ['white', 'cream', 'brown'],
    isBestSeller: true
  },
  {
    id: 8,
    name: 'KWW AIRCON Ceiling Fan',
    image: '/images/products/ceiling-fan-8.jpg',
    price: 899,
    originalPrice: 1299,
    features: ['Noiseless', 'Save Energy'],
    size: '120 MM',
    colors: ['white', 'cream', 'brown'],
    isBestSeller: true
  }
];

// Constants
const PRODUCTS_PER_PAGE = 8; // Show all 8 products (2 rows of 4)
const MOBILE_PRODUCTS_PER_PAGE = 4; // Show 4 products per page on mobile

const PopularPicks: React.FC<PopularPicksProps> = ({
  products: externalProducts,
  showViewAllButton = true,
  onViewProduct,
  onBuyNow,
  onViewAll
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Memoize products to avoid recalculation
  const products = useMemo(() => 
    externalProducts || DEFAULT_PRODUCTS, 
    [externalProducts]
  );

  // Handle mounting and screen size detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set mounted and initial screen size
    setMounted(true);
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Reset to first page when screen size changes
  useEffect(() => {
    if (mounted) {
      setCurrentPage(0);
    }
  }, [isMobile, mounted]);

  // Memoize pagination calculations
  const paginationData = useMemo(() => {
    // Use desktop layout until mounted
    const itemsPerPage = mounted && isMobile ? MOBILE_PRODUCTS_PER_PAGE : PRODUCTS_PER_PAGE;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    return {
      itemsPerPage,
      totalPages,
      showPagination: products.length > itemsPerPage && mounted && isMobile
    };
  }, [products.length, mounted, isMobile]);

  // Memoize current products
  const currentProducts = useMemo(() => {
    const { itemsPerPage } = paginationData;
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
  }, [products, currentPage, paginationData]);

  // Optimized navigation handlers
  const handleNextPage = useCallback(() => {
    setCurrentPage(prev => (prev + 1) % paginationData.totalPages);
  }, [paginationData.totalPages]);

  const handlePrevPage = useCallback(() => {
    setCurrentPage(prev => (prev - 1 + paginationData.totalPages) % paginationData.totalPages);
  }, [paginationData.totalPages]);

  const handlePageSelect = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
            Popular Picks
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-xl max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            These high-performing, energy-efficient picks are ruling the charts for a reason.
          </p>
        </div>

        {/* Mobile Navigation - Only show when mounted and mobile */}
        {paginationData.showPagination && (
          <div className="flex justify-between items-center mb-4 sm:mb-6 lg:hidden">
            <button
              onClick={handlePrevPage}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              aria-label="Previous page"
            >
              <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
            
            <span className="text-xs sm:text-sm text-gray-500">
              Page {currentPage + 1} of {paginationData.totalPages}
            </span>
            
            <button
              onClick={handleNextPage}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              aria-label="Next page"
            >
              <FaArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6 mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          {currentProducts.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              onViewProduct={onViewProduct}
              onBuyNow={onBuyNow}
            />
          ))}
        </div>

        {/* Mobile Pagination Dots - Only show when mounted and mobile */}
        {paginationData.showPagination && (
          <div className="flex justify-center mb-6 sm:mb-8 lg:hidden">
            <div className="flex space-x-2">
              {Array.from({ length: paginationData.totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageSelect(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                    index === currentPage 
                      ? 'bg-red-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* View All Products Button */}
        {showViewAllButton && (
          <div className="text-center">
            <button 
              onClick={onViewAll}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm sm:text-base"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularPicks;
