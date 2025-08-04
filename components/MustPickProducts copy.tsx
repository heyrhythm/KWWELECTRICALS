'use client';

import React, { useState, useRef, useEffect } from 'react';
import MustPickCard from './MustPickCard';

interface ProductData {
  id: number;
  images: Array<{
    id: number;
    src: string;
    alt: string;
    color: string;
    backgroundColor?: string;
  }>;
  companyName: string;
  productType: string;
  highlightColor: string;
}

const MustPickProducts = () => {
  // Updated products based on the image categories
  const allProducts: ProductData[] = [
    {
      id: 1,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'White ceiling fan', color: 'White', backgroundColor: '#ffffff' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Brown ceiling fan', color: 'Brown', backgroundColor: '#f5f5dc' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Black ceiling fan', color: 'Black', backgroundColor: '#2d3748' }
      ],
      companyName: 'HAVELLS',
      productType: 'ceiling fan',
      highlightColor: 'blue-600'
    },
    {
      id: 2,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Blue table fan', color: 'Blue', backgroundColor: '#dbeafe' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'White table fan', color: 'White', backgroundColor: '#ffffff' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Red table fan', color: 'Red', backgroundColor: '#fee2e2' }
      ],
      companyName: 'ORIENT',
      productType: 'table fan',
      highlightColor: 'green-600'
    },
    {
      id: 3,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Warm white LED bulb', color: 'Warm White', backgroundColor: '#fef7cd' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Cool white LED bulb', color: 'Cool White', backgroundColor: '#f0f9ff' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'RGB LED bulb', color: 'RGB', backgroundColor: '#e0e7ff' }
      ],
      companyName: 'PHILIPS',
      productType: 'LED bulb',
      highlightColor: 'yellow-600'
    },
    {
      id: 4,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Square panel light', color: 'Square', backgroundColor: '#f8fafc' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Round panel light', color: 'Round', backgroundColor: '#f1f5f9' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Rectangular panel light', color: 'Rectangle', backgroundColor: '#f8fafc' }
      ],
      companyName: 'SYSKA',
      productType: 'panel light',
      highlightColor: 'indigo-600'
    },
    {
      id: 5,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Desert cooler', color: 'Beige', backgroundColor: '#fef3c7' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Personal cooler', color: 'White', backgroundColor: '#ffffff' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Tower cooler', color: 'Grey', backgroundColor: '#f3f4f6' }
      ],
      companyName: 'BAJAJ',
      productType: 'cooler',
      highlightColor: 'cyan-600'
    },
    {
      id: 6,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Induction cooktop', color: 'Black', backgroundColor: '#1f2937' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Touch induction', color: 'Silver', backgroundColor: '#f8fafc' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Portable induction', color: 'White', backgroundColor: '#ffffff' }
      ],
      companyName: 'PRESTIGE',
      productType: 'induction',
      highlightColor: 'purple-600'
    },
    {
      id: 7,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Wet grinder', color: 'White', backgroundColor: '#ffffff' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Dry grinder', color: 'Steel', backgroundColor: '#e2e8f0' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Multi grinder', color: 'Black', backgroundColor: '#374151' }
      ],
      companyName: 'PREETHI',
      productType: 'mixer grinder',
      highlightColor: 'orange-600'
    },
    {
      id: 8,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Steam iron', color: 'Blue', backgroundColor: '#dbeafe' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Dry iron', color: 'Red', backgroundColor: '#fee2e2' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Cordless iron', color: 'White', backgroundColor: '#ffffff' }
      ],
      companyName: 'MORPHY',
      productType: 'iron',
      highlightColor: 'rose-600'
    }
  ];

  // Split products into two rows
  const row1Products = allProducts.slice(0, 4);
  const row2Products = allProducts.slice(4, 8);

  // State for current visible cards
  const [row1Index, setRow1Index] = useState(0);
  const [row2Index, setRow2Index] = useState(0);

  // Client-side rendering state
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024); // Default to desktop

  // Touch handling refs and state
  const row1TouchRef = useRef<HTMLDivElement>(null);
  const row2TouchRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });

  // Handle client-side rendering and window resize
  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // Get responsive translate value
  const getTranslateValue = (index: number) => {
    if (!isClient) return 8; // Default value for SSR
    
    if (windowWidth < 640) return 2;      // Mobile
    if (windowWidth < 1024) return 4;     // Tablet
    return 8;                             // Desktop
  };

  // Get visible products based on screen size
  const getVisibleProducts = (products: ProductData[], currentIndex: number) => {
    const visible = [];
    const visibleCount = 3; // Always prepare 3 cards, hide with CSS
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push(products[index]);
    }
    return visible;
  };

  // Navigation functions
  const goToPrevious = (row: 'row1' | 'row2') => {
    if (row === 'row1') {
      setRow1Index(prev => prev === 0 ? row1Products.length - 1 : prev - 1);
    } else {
      setRow2Index(prev => prev === 0 ? row2Products.length - 1 : prev - 1);
    }
  };

  const goToNext = (row: 'row1' | 'row2') => {
    if (row === 'row1') {
      setRow1Index(prev => (prev + 1) % row1Products.length);
    } else {
      setRow2Index(prev => (prev + 1) % row2Products.length);
    }
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd({ x: 0, y: 0 });
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchEnd = (row: 'row1' | 'row2') => {
    if (!touchStart.x || !touchEnd.x) return;

    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    const isLeftSwipe = distanceX > 50;
    const isRightSwipe = distanceX < -50;
    const isVerticalSwipe = Math.abs(distanceY) > Math.abs(distanceX);

    if (!isVerticalSwipe) {
      if (isLeftSwipe) {
        goToNext(row);
      } else if (isRightSwipe) {
        goToPrevious(row);
      }
    }
  };

  // Arrow Button Component - Responsive
  const ArrowButton = ({ 
    direction, 
    onClick, 
    disabled = false 
  }: { 
    direction: 'left' | 'right'; 
    onClick: () => void;
    disabled?: boolean;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute top-1/2 transform -translate-y-1/2 z-10
        w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 
        rounded-full bg-white shadow-lg border border-gray-200
        flex items-center justify-center
        hover:bg-gray-50 hover:shadow-xl
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-300
        ${direction === 'left' 
          ? '-left-2 sm:-left-4 lg:-left-6' 
          : '-right-2 sm:-right-4 lg:-right-6'
        }
      `}
    >
      <svg 
        className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600 ${direction === 'right' ? 'rotate-180' : ''}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M15 19l-7-7 7-7" 
        />
      </svg>
    </button>
  );

  // Component for a single row with responsive controls
  const SlideRow = ({ 
    products, 
    currentIndex, 
    rowId,
    onPrevious,
    onNext
  }: { 
    products: ProductData[], 
    currentIndex: number, 
    rowId: 'row1' | 'row2',
    onPrevious: () => void,
    onNext: () => void
  }) => {
    const visibleProducts = getVisibleProducts(products, currentIndex);

    return (
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <div className="relative px-4 sm:px-6 lg:px-8">
          {/* Left Arrow */}
          <ArrowButton direction="left" onClick={onPrevious} />
          
          {/* Right Arrow */}
          <ArrowButton direction="right" onClick={onNext} />
          
          {/* Cards Container with Touch Support */}
          <div 
            ref={rowId === 'row1' ? row1TouchRef : row2TouchRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => handleTouchEnd(rowId)}
          >
            <div className="flex justify-center gap-2 sm:gap-4 lg:gap-6 px-2 sm:px-4 py-2 sm:py-4">
              {visibleProducts.map((product, index) => (
                <div 
                  key={`${rowId}-${product.id}-${currentIndex}-${index}`}
                  className={`
                    flex-shrink-0 transform transition-all duration-500 ease-in-out select-none
                    w-72 sm:w-80 lg:w-80
                    ${index === 2 ? 'hidden lg:block' : ''}
                    ${index === 1 ? 'hidden sm:block' : ''}
                  `}
                  style={{
                    opacity: 1,
                    transform: `translateX(${index * getTranslateValue(index)}px) scale(${index === 1 ? 1.02 : 0.98})`
                  }}
                >
                  <MustPickCard
                    images={product.images}
                    companyName={product.companyName}
                    productType={product.productType}
                    highlightColor={product.highlightColor}
                    className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide indicators - Responsive */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (rowId === 'row1') {
                  setRow1Index(index);
                } else {
                  setRow2Index(index);
                }
              }}
              className={`
                rounded-full transition-all duration-300 hover:scale-125
                w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2 lg:h-2
                ${index === currentIndex 
                  ? 'bg-white w-4 sm:w-6 lg:w-8' 
                  : 'bg-white hover:bg-gray-400'
                }
              `}
            />
          ))}
        </div>
      </div>
    );
  };

  // Don't render until client-side to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="min-h-screen bg-[#e0cccc] py-4 sm:py-6 lg:py-8">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="w-full py-6 sm:py-8 lg:py-12 px-2 sm:px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 sm:mb-4 leading-tight px-2">
                Must-Have Picks This Season
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-medium leading-relaxed px-4 sm:px-2">
                Tried, tested, and totally trusted — these are the stars of the KWW family.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-600">Loading products...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e0cccc]  sm:py-6 lg:py-8">
      <div className="scale-90 md:scale-100 container mx-auto px-2 sm:px-4 lg:px-6">
        {/* Responsive Header */}
        <div className="w-full py-2 sm:py-8 lg:py-12 px-2 sm:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold text-gray-800 mb-2 sm:mb-4 leading-tight px-2">
              Must-Have Picks This Season
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-medium leading-relaxed px-4 sm:px-2">
              Tried, tested, and totally trusted — these are the stars of the KWW family.
            </p>
          </div>
        </div>
        
        {/* Row 1 - First 4 products */}
        <SlideRow 
          products={row1Products} 
          currentIndex={row1Index} 
          rowId="row1"
          onPrevious={() => goToPrevious('row1')}
          onNext={() => goToNext('row1')}
        />
        
        {/* Row 2 - Last 4 products */}
        <SlideRow 
          products={row2Products} 
          currentIndex={row2Index} 
          rowId="row2"
          onPrevious={() => goToPrevious('row2')}
          onNext={() => goToNext('row2')}
        />
      </div>
    </div>
  );
};

export default MustPickProducts;