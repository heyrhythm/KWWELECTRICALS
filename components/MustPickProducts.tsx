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
  // Product data
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
  const [windowWidth, setWindowWidth] = useState(1024);

  // Touch handling refs and state
  const row1TouchRef = useRef<HTMLDivElement>(null);
  const row2TouchRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
  const [isSwipeActive, setIsSwipeActive] = useState(false);
  const [isHorizontalSwipe, setIsHorizontalSwipe] = useState(false);

  // Live swipe animation state (for desktop)
  const [swipeOffset, setSwipeOffset] = useState({ row1: 0, row2: 0 });
  const [isAnimating, setIsAnimating] = useState({ row1: false, row2: false });

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

  // Check if desktop (lg and above)
  const isDesktop = windowWidth >= 1024;

  // Get visible products based on screen size
  const getVisibleProducts = (products: ProductData[], currentIndex: number) => {
    const visible = [];
    const visibleCount = isDesktop ? 3 : 3; // Always prepare 3 cards
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push(products[index]);
    }
    return visible;
  };

  // Navigation functions
  const goToPrevious = (row: 'row1' | 'row2') => {
    if (isDesktop) {
      setIsAnimating(prev => ({ ...prev, [row]: true }));
    }
    
    if (row === 'row1') {
      setRow1Index(prev => prev === 0 ? row1Products.length - 1 : prev - 1);
    } else {
      setRow2Index(prev => prev === 0 ? row2Products.length - 1 : prev - 1);
    }

    if (isDesktop) {
      setTimeout(() => {
        setIsAnimating(prev => ({ ...prev, [row]: false }));
      }, 500);
    }
  };

  const goToNext = (row: 'row1' | 'row2') => {
    if (isDesktop) {
      setIsAnimating(prev => ({ ...prev, [row]: true }));
    }
    
    if (row === 'row1') {
      setRow1Index(prev => (prev + 1) % row1Products.length);
    } else {
      setRow2Index(prev => (prev + 1) % row2Products.length);
    }

    if (isDesktop) {
      setTimeout(() => {
        setIsAnimating(prev => ({ ...prev, [row]: false }));
      }, 500);
    }
  };

  // Touch event handlers - Mobile optimized vs Desktop advanced
  const handleTouchStart = (e: React.TouchEvent, row?: 'row1' | 'row2') => {
    if (isDesktop && row) {
      // Desktop: Advanced touch handling
      setIsSwipeActive(true);
      setIsHorizontalSwipe(false);
      const touch = e.touches[0];
      setTouchStart({
        x: touch.clientX,
        y: touch.clientY,
      });
      setTouchEnd({ x: 0, y: 0 });
      setSwipeOffset(prev => ({ ...prev, [row]: 0 }));
    } else {
      // Mobile: Simple touch handling
      setTouchEnd({ x: 0, y: 0 });
      setTouchStart({
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent, row?: 'row1' | 'row2') => {
    if (isDesktop && row) {
      // Desktop: Live swipe animation
      if (!isSwipeActive) return;
      
      const touch = e.touches[0];
      const currentX = touch.clientX;
      const currentY = touch.clientY;
      
      setTouchEnd({
        x: currentX,
        y: currentY,
      });

      if (touchStart.x) {
        const distanceX = currentX - touchStart.x;
        const distanceY = Math.abs(currentY - touchStart.y);
        
        if (Math.abs(distanceX) > distanceY && Math.abs(distanceX) > 15) {
          e.preventDefault();
          e.stopPropagation();
          
          setIsHorizontalSwipe(true);
          
          const maxOffset = 120;
          const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, distanceX));
          
          setSwipeOffset(prev => ({
            ...prev,
            [row]: clampedOffset
          }));
        }
      }
    } else {
      // Mobile: Simple touch tracking
      setTouchEnd({
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY,
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent, row: 'row1' | 'row2') => {
    if (isDesktop) {
      // Desktop: Advanced touch end handling
      if (!touchStart.x || !isSwipeActive) {
        setIsSwipeActive(false);
        setIsHorizontalSwipe(false);
        setSwipeOffset(prev => ({ ...prev, [row]: 0 }));
        return;
      }

      const finalX = touchEnd.x || e.changedTouches[0]?.clientX || touchStart.x;
      const distanceX = touchStart.x - finalX;
      const distanceY = Math.abs((touchEnd.y || e.changedTouches[0]?.clientY || touchStart.y) - touchStart.y);
      
      const isLeftSwipe = distanceX > 50;
      const isRightSwipe = distanceX < -50;
      const wasHorizontalSwipe = Math.abs(distanceX) > distanceY && Math.abs(distanceX) > 30;

      setSwipeOffset(prev => ({ ...prev, [row]: 0 }));

      if (wasHorizontalSwipe && isHorizontalSwipe) {
        e.preventDefault();
        
        if (isLeftSwipe) {
          goToNext(row);
        } else if (isRightSwipe) {
          goToPrevious(row);
        }
      }
      
      setIsSwipeActive(false);
      setIsHorizontalSwipe(false);
      setTouchStart({ x: 0, y: 0 });
      setTouchEnd({ x: 0, y: 0 });
    } else {
      // Mobile: Simple swipe detection
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
        ${isDesktop 
          ? 'w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 shadow-2xl border-2 hover:scale-110 active:scale-95 backdrop-blur-sm bg-white/90' 
          : 'w-8 h-8 sm:w-10 sm:h-10 shadow-lg border'
        }
        rounded-full bg-white border-gray-200
        flex items-center justify-center
        hover:bg-gray-50 hover:shadow-xl
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-300
        ${direction === 'left' 
          ? (isDesktop ? 'left-1 sm:left-2 md:left-0 lg:-left-2 xl:-left-4' : '-left-2 sm:-left-4 lg:-left-6')
          : (isDesktop ? 'right-1 sm:right-2 md:right-0 lg:-right-2 xl:-right-4' : '-right-2 sm:-right-4 lg:-right-6')
        }
      `}
    >
      <svg 
        className={`
          ${isDesktop ? 'w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9' : 'w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6'} 
          text-gray-${isDesktop ? '700' : '600'} ${direction === 'right' ? 'rotate-180' : ''}
        `}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        strokeWidth={isDesktop ? 3 : 2}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M15 19l-7-7 7-7" 
        />
      </svg>
    </button>
  );

  // Component for a single row
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
    const currentOffset = isDesktop ? swipeOffset[rowId] : 0;
    const currentAnimating = isDesktop ? isAnimating[rowId] : false;

    return (
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <div className={`relative ${isDesktop ? 'flex justify-center items-center px-2 sm:px-4 md:px-6 lg:px-8 overflow-visible' : 'px-4 sm:px-6 lg:px-8'}`}>
          {/* Left Arrow */}
          <ArrowButton direction="left" onClick={onPrevious} />
          
          {/* Right Arrow */}
          <ArrowButton direction="right" onClick={onNext} />
          
          {/* Cards Container */}
          <div 
            ref={rowId === 'row1' ? row1TouchRef : row2TouchRef}
            className={`
              ${isDesktop 
                ? `cursor-grab active:cursor-grabbing flex justify-center scale-80 md:scale-100 mx-12 sm:mx-14 md:mx-16 lg:mx-18 pl-30 select-none ${isSwipeActive && isHorizontalSwipe ? 'cursor-grabbing' : ''}`
                : 'overflow-hidden cursor-grab active:cursor-grabbing'
              }
            `}
            onTouchStart={(e) => isDesktop ? handleTouchStart(e, rowId) : handleTouchStart(e)}
            onTouchMove={(e) => isDesktop ? handleTouchMove(e, rowId) : handleTouchMove(e)}
            onTouchEnd={(e) => handleTouchEnd(e, rowId)}
            style={isDesktop ? {
              touchAction: 'manipulation',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none'
            } : {}}
          >
            <div className={isDesktop ? "overflow-hidden" : "flex justify-center gap-2 sm:gap-4 lg:gap-6 px-2 sm:px-4 py-2 sm:py-4"} style={isDesktop ? { width: 'fit-content' } : {}}>
              <div 
                className={`
                  ${isDesktop 
                    ? `flex gap-2 sm:gap-4 lg:gap-6 px-2 sm:px-4 py-2 sm:py-4 justify-center ${currentAnimating ? 'transition-transform duration-500 ease-out' : ''}`
                    : ''
                  }
                `}
                style={isDesktop ? {
                  transform: `translateX(${currentOffset}px)`,
                  transition: isSwipeActive ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                } : {}}
              >
                {visibleProducts.map((product, index) => (
                  <div 
                    key={`${rowId}-${product.id}-${currentIndex}-${index}`}
                    className={`
                      flex-shrink-0 transform transition-all duration-500 ease-in-out select-none
                      w-72 sm:w-80 lg:w-80
                      ${!isDesktop && index === 2 ? 'hidden lg:block' : ''}
                      ${!isDesktop && index === 1 ? 'hidden sm:block' : ''}
                    `}
                    style={isDesktop ? {
                      opacity: index === 2 ? 0.8 : 1,
                      transform: `scale(${index === 0 ? 1.02 : index === 1 ? 1.02 : 0.95})`,
                      clipPath: index === 2 ? 'inset(0 50% 0 0)' : 'none',
                      pointerEvents: (isSwipeActive && isHorizontalSwipe) ? 'none' : 'auto'
                    } : {
                      opacity: 1,
                      transform: `translateX(${index * 8}px) scale(${index === 1 ? 1.02 : 0.98})`
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
        </div>

        {/* Slide indicators - Responsive */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isDesktop) {
                  setIsAnimating(prev => ({ ...prev, [rowId]: true }));
                }
                
                if (rowId === 'row1') {
                  setRow1Index(index);
                } else {
                  setRow2Index(index);
                }
                
                if (isDesktop) {
                  setTimeout(() => {
                    setIsAnimating(prev => ({ ...prev, [rowId]: false }));
                  }, 500);
                }
              }}
              className={`
                rounded-full transition-all duration-300 hover:scale-125
                w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2 lg:h-2
                ${index === currentIndex 
                  ? 'bg-white w-4 sm:w-6 lg:w-8' 
                  : 'bg-white hover:bg-gray-400'
                }
                ${isDesktop && Math.abs(currentOffset) > 30 ? 'opacity-60' : ''}
              `}
            />
          ))}
        </div>

        {/* Swipe progress indicator - Desktop only */}
        {isDesktop && Math.abs(currentOffset) > 20 && (
          <div className="flex justify-center mt-3">
            <div className="flex items-center space-x-3 bg-black bg-opacity-20 rounded-full px-4 py-2">
              <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentOffset > 30 ? 'bg-blue-400 animate-pulse' : 'bg-gray-400'
              }`}></div>
              <div className="text-xs text-white font-medium">
                {currentOffset > 30 ? '← Previous' : currentOffset < -30 ? 'Next →' : 'Keep swiping'}
              </div>
              <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentOffset < -30 ? 'bg-blue-400 animate-pulse' : 'bg-gray-400'
              }`}></div>
            </div>
          </div>
        )}
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
    <div className="min-h-screen bg-[#e0cccc] sm:py-6 lg:py-8">
      <div className={`${isDesktop ? 'scale-90 md:scale-100 max-w-7xl' : 'scale-90 md:scale-100'} container mx-auto px-2 sm:px-4 lg:px-6`}>
        {/* Responsive Header */}
        <div className="w-full py-2 sm:py-8 lg:py-12 px-2 sm:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4 leading-tight px-2">
              Must-Have Picks This Season
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-medium leading-relaxed px-4 sm:px-2">
              Tried, tested, and totally trusted — these are the stars of the KWW family.
            </p>
          </div>
        </div>
        
        {/* Cards Container */}
        <div className={isDesktop ? "flex flex-col items-center justify-center" : ""}>
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
    </div>
  );
};

export default MustPickProducts;
