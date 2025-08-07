'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
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
  companyLogo: string; // Added company logo field
}

const MustPickProducts = () => {
  // Product data with your actual image paths and company logos
  const allProducts: ProductData[] = [
    {
      id: 1,
      images: [
        { id: 1, src: '/assets/products/havells-ceiling-fan-brown.jpg', alt: 'White ceiling fan', color: 'White', backgroundColor: '#ffffff' },
        { id: 2, src: '/assets/products/havells-ceiling-fan-brown.jpg', alt: 'Brown ceiling fan', color: 'Brown', backgroundColor: '#f5f5dc' },
        { id: 3, src: '/assets/products/havells-ceilling-fan-black.webp', alt: 'Black ceiling fan', color: 'Black', backgroundColor: '#2d3748' }
      ],
      companyName: 'HAVELLS',
      productType: 'ceiling fan',
      highlightColor: 'blue-600',
      companyLogo: '/assets/logos/havells-logo.png'
    },
    {
      id: 2,
      images: [
        { id: 1, src: '/assets/products/orient-table-fan-blue.webp', alt: 'Blue table fan', color: 'Blue', backgroundColor: '#dbeafe' },
        { id: 2, src: '/assets/products/orient-table-fan.jpg', alt: 'White table fan', color: 'White', backgroundColor: '#ffffff' },
        { id: 3, src: '/assets/products/orient-table-fan-red.webp', alt: 'Red table fan', color: 'Red', backgroundColor: '#fee2e2' }
      ],
      companyName: 'ORIENT',
      productType: 'table fan',
      highlightColor: 'green-600',
      companyLogo: '/assets/logos/orient-logo.png'
    },
    {
      id: 3,
      images: [
        { id: 1, src: '/assets/products/phillips-led-bulb-warm.webp', alt: 'Warm white LED bulb', color: 'Warm White', backgroundColor: '#fef7cd' },
        { id: 2, src: '/assets/products/phillips-led-bulb-cool.webp', alt: 'Cool white LED bulb', color: 'Cool White', backgroundColor: '#f0f9ff' },
        { id: 3, src: '/assets/products/phillips-led-bulb-rgb.webp', alt: 'RGB LED bulb', color: 'RGB', backgroundColor: '#e0e7ff' }
      ],
      companyName: 'PHILIPS',
      productType: 'LED bulb',
      highlightColor: 'yellow-600',
      companyLogo: '/assets/logos/philips-logo.svg'
    },
    {
      id: 4,
      images: [
        { id: 1, src: '/assets/products/syska-panel-light-square.jpg', alt: 'Square panel light', color: 'Square', backgroundColor: '#f8fafc' },
        { id: 2, src: '/assets/products/syska-led-panel-light-round.webp', alt: 'Round panel light', color: 'Round', backgroundColor: '#f1f5f9' },
        { id: 3, src: '/assets/products/syska-panel-light-rectangle.jpg', alt: 'Rectangular panel light', color: 'Rectangle', backgroundColor: '#f8fafc' }
      ],
      companyName: 'SYSKA',
      productType: 'panel light',
      highlightColor: 'indigo-600',
      companyLogo: '/assets/logos/syska-logo.jpg'
    },
    {
      id: 5,
      images: [
        { id: 1, src: '/assets/products/air-cooler.jpg', alt: 'Desert cooler', color: 'Beige', backgroundColor: '#fef3c7' },
        { id: 2, src: '/assets/products/Bajaj-cooler-1.webp', alt: 'Personal cooler', color: 'White', backgroundColor: '#ffffff' },
        { id: 3, src: '/assets/products/Bajaj-cooler-2.jpg', alt: 'Tower cooler', color: 'Grey', backgroundColor: '#f3f4f6' }
      ],
      companyName: 'BAJAJ',
      productType: 'cooler',
      highlightColor: 'cyan-600',
      companyLogo: '/assets/logos/bajaj-logo.png'
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
      highlightColor: 'purple-600',
      companyLogo: '/assets/logos/prestige-logo.svg'
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
      highlightColor: 'orange-600',
      companyLogo: '/assets/logos/preethi-logo.png'
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
      highlightColor: 'rose-600',
      companyLogo: '/assets/logos/morphy-logo.jpg'
    },
    {
      id: 9,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Air fryer black', color: 'Black', backgroundColor: '#1f2937' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Air fryer white', color: 'White', backgroundColor: '#ffffff' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Air fryer steel', color: 'Steel', backgroundColor: '#e2e8f0' }
      ],
      companyName: 'KENT',
      productType: 'air fryer',
      highlightColor: 'red-600',
      companyLogo: '/assets/logos/kent-logo.png'
    },
    {
      id: 10,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Water purifier', color: 'White', backgroundColor: '#ffffff' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'RO purifier', color: 'Blue', backgroundColor: '#dbeafe' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'UV purifier', color: 'Grey', backgroundColor: '#f3f4f6' }
      ],
      companyName: 'AQUAGUARD',
      productType: 'water purifier',
      highlightColor: 'teal-600',
      companyLogo: '/assets/logos/aquaguard-logo.svg'
    },
    {
      id: 11,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Microwave oven', color: 'Black', backgroundColor: '#1f2937' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Convection oven', color: 'Silver', backgroundColor: '#f8fafc' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Solo microwave', color: 'White', backgroundColor: '#ffffff' }
      ],
      companyName: 'LG',
      productType: 'microwave',
      highlightColor: 'pink-600',
      companyLogo: '/assets/logos/lg-logo.png'
    },
    {
      id: 12,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Vacuum cleaner', color: 'Red', backgroundColor: '#fee2e2' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Cordless vacuum', color: 'Blue', backgroundColor: '#dbeafe' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Robot vacuum', color: 'Black', backgroundColor: '#1f2937' }
      ],
      companyName: 'EUREKA',
      productType: 'vacuum cleaner',
      highlightColor: 'emerald-600',
      companyLogo: '/assets/logos/eureka-logo.jpg'
    },
    {
      id: 13,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Electric kettle', color: 'Steel', backgroundColor: '#e2e8f0' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Glass kettle', color: 'Clear', backgroundColor: '#f0f9ff' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Ceramic kettle', color: 'White', backgroundColor: '#ffffff' }
      ],
      companyName: 'PRESTIGE',
      productType: 'electric kettle',
      highlightColor: 'amber-600',
      companyLogo: '/assets/logos/prestige-logo.svg'
    },
    {
      id: 14,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Food processor', color: 'White', backgroundColor: '#ffffff' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Mini processor', color: 'Red', backgroundColor: '#fee2e2' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Multi processor', color: 'Black', backgroundColor: '#1f2937' }
      ],
      companyName: 'PHILIPS',
      productType: 'food processor',
      highlightColor: 'lime-600',
      companyLogo: '/assets/logos/philips-logo.svg'
    },
    {
      id: 15,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Hair dryer', color: 'Pink', backgroundColor: '#fce7f3' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Professional dryer', color: 'Black', backgroundColor: '#1f2937' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Compact dryer', color: 'White', backgroundColor: '#ffffff' }
      ],
      companyName: 'DYSON',
      productType: 'hair dryer',
      highlightColor: 'fuchsia-600',
      companyLogo: '/assets/logos/dyson-logo.png'
    },
    {
      id: 16,
      images: [
        { id: 1, src: '/api/placeholder/200/200', alt: 'Smart speaker', color: 'Black', backgroundColor: '#1f2937' },
        { id: 2, src: '/api/placeholder/200/200', alt: 'Mini speaker', color: 'White', backgroundColor: '#ffffff' },
        { id: 3, src: '/api/placeholder/200/200', alt: 'Portable speaker', color: 'Blue', backgroundColor: '#dbeafe' }
      ],
      companyName: 'AMAZON',
      productType: 'smart speaker',
      highlightColor: 'sky-600',
      companyLogo: '/assets/logos/amazon-logo.svg'
    }
  ];

  // Memoize split products to prevent unnecessary recalculations
  const row1Products = useMemo(() => allProducts.slice(0, 8), []);
  const row2Products = useMemo(() => allProducts.slice(8, 16), []);

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

  // Live swipe animation state (for desktop) - Isolated per row
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

  // Memoized function to get visible products - now shows 4 cards (3 full + 1 half)
  const getVisibleProducts = useCallback((products: ProductData[], currentIndex: number) => {
    const visible = [];
    const visibleCount = 4; // Show 4 cards total (3 full + 1 half)
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push(products[index]);
    }
    return visible;
  }, []);

  // Optimized navigation functions with useCallback
  const goToPrevious = useCallback((row: 'row1' | 'row2') => {
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
  }, [isDesktop, row1Products.length, row2Products.length]);

  const goToNext = useCallback((row: 'row1' | 'row2') => {
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
  }, [isDesktop, row1Products.length, row2Products.length]);

  // Touch event handlers - Mobile optimized vs Desktop advanced
  const handleTouchStart = useCallback((e: React.TouchEvent, row?: 'row1' | 'row2') => {
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
  }, [isDesktop]);

  const handleTouchMove = useCallback((e: React.TouchEvent, row?: 'row1' | 'row2') => {
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
  }, [isDesktop, isSwipeActive, touchStart.x]);

  const handleTouchEnd = useCallback((e: React.TouchEvent, row: 'row1' | 'row2') => {
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
  }, [isDesktop, touchStart, touchEnd, isSwipeActive, isHorizontalSwipe, goToNext, goToPrevious]);

  // Updated Arrow Button Component with proper event handling (fixes scroll issue)
  const ArrowButton = React.memo(({ 
    direction, 
    onClick, 
    disabled = false 
  }: { 
    direction: 'left' | 'right'; 
    onClick: () => void;
    disabled?: boolean;
  }) => (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      onFocus={(e) => {
        e.preventDefault();
      }}
      disabled={disabled}
      className={`
        absolute top-1/2 transform -translate-y-1/2 z-20
        ${isDesktop 
          ? 'w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 shadow-2xl border-2 hover:scale-110 active:scale-95 backdrop-blur-sm bg-white/90' 
          : 'w-8 h-8 sm:w-10 sm:h-10 shadow-lg border'
        }
        rounded-full bg-white border-gray-200
        flex items-center justify-center
        hover:bg-gray-50 hover:shadow-xl
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-300
        focus:outline-none focus:ring-0
        ${direction === 'left' 
          ? (isDesktop ? 'left-6 sm:left-8 md:left-10 lg:left-12 xl:left-16' : 'left-0 sm:left-2 lg:left-4')
          : (isDesktop ? 'right-6 sm:right-8 md:right-10 lg:right-12 xl:right-16' : 'right-0 sm:right-2 lg:right-4')
        }
      `}
      style={{ 
        WebkitTapHighlightColor: 'transparent',
        outline: 'none',
        border: 'none'
      }}
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
  ));

  // Component for a single row - Memoized to prevent unnecessary re-renders
  const SlideRow = React.memo(({ 
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
    const visibleProducts = useMemo(() => getVisibleProducts(products, currentIndex), [products, currentIndex, getVisibleProducts]);
    const currentOffset = isDesktop ? swipeOffset[rowId] : 0;
    const currentAnimating = isDesktop ? isAnimating[rowId] : false;

    return (
      <div className="mb-8 sm:mb-10 lg:mb-12">
        {/* Updated container with proper relative positioning and min-height */}
        <div className={`relative ${isDesktop ? 'flex justify-center items-center px-2 sm:px-4 md:px-6 lg:px-8 overflow-visible' : 'px-4 sm:px-6 lg:px-8'} min-h-[400px]`}>
          {/* Left Arrow */}
          <ArrowButton direction="left" onClick={onPrevious} />
          
          {/* Right Arrow */}
          <ArrowButton direction="right" onClick={onNext} />
          
          {/* Cards Container */}
          <div 
            ref={rowId === 'row1' ? row1TouchRef : row2TouchRef}
            className={`
              ${isDesktop 
                ? `pl-20 cursor-grab active:cursor-grabbing flex justify-center scale-80 md:scale-100 mx-8 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-20 select-none ${isSwipeActive && isHorizontalSwipe ? 'cursor-grabbing' : ''}`
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
                    key={`${rowId}-${product.id}-${index}`} // Optimized key without currentIndex
                    className={`
                      flex-shrink-0 transform transition-all duration-500 ease-in-out select-none
                      w-72 sm:w-80 lg:w-80
                      ${!isDesktop && index === 3 ? 'hidden lg:block' : ''}
                      ${!isDesktop && index === 2 ? 'hidden sm:block' : ''}
                      ${!isDesktop && index === 1 ? 'hidden xs:block' : ''}
                    `}
                    style={isDesktop ? {
                      opacity: index === 3 ? 0.7 : 1, // Fourth card (half-visible) has reduced opacity
                      transform: `scale(${index === 0 ? 1.02 : index === 1 ? 1.02 : index === 2 ? 1.02 : 0.95})`, // First 3 cards full scale, 4th smaller
                      clipPath: index === 3 ? 'inset(0 50% 0 0)' : 'none', // Half-visible effect for 4th card
                      pointerEvents: (isSwipeActive && isHorizontalSwipe) ? 'none' : 'auto'
                    } : {
                      opacity: index === 3 ? 0.6 : 1,
                      transform: `translateX(${index * 8}px) scale(${index === 1 ? 1.02 : index === 2 ? 1.0 : index === 3 ? 0.9 : 0.98})`
                    }}
                  >
                    <MustPickCard
                      images={product.images}
                      companyName={product.companyName}
                      // productType={product.productType}
                      highlightColor={product.highlightColor}
                      companyLogo={product.companyLogo} // Pass the logo prop
                      className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators with fixed event handling */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
          {products.map((_, index) => (
            <button
              key={`${rowId}-indicator-${index}`} // Stable key for indicators
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
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
                focus:outline-none focus:ring-0
              `}
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                outline: 'none'
              }}
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
  });

  // Memoize navigation callbacks for each row to prevent re-renders
  const row1Previous = useCallback(() => goToPrevious('row1'), [goToPrevious]);
  const row1Next = useCallback(() => goToNext('row1'), [goToNext]);
  const row2Previous = useCallback(() => goToPrevious('row2'), [goToPrevious]);
  const row2Next = useCallback(() => goToNext('row2'), [goToNext]);

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
          {/* Row 1 - First 8 products */}
          <SlideRow 
            products={row1Products} 
            currentIndex={row1Index} 
            rowId="row1"
            onPrevious={row1Previous}
            onNext={row1Next}
          />
          
          {/* Row 2 - Last 8 products */}
          <SlideRow 
            products={row2Products} 
            currentIndex={row2Index} 
            rowId="row2"
            onPrevious={row2Previous}
            onNext={row2Next}
          />
        </div>
      </div>
    </div>
  );
};

export default MustPickProducts;
