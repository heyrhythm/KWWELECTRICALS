'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  color: string;
  backgroundColor?: string;
}

interface MustPickCardProps {
  images: ImageData[];
  companyName: string;
  // productType: string;
  highlightColor?: string;
  className?: string;
  companyLogo: string; // Added company logo prop
}

const MustPickCard: React.FC<MustPickCardProps> = ({ 
  images = [], // ✅ Default empty array
  companyName = 'COMPANY', // ✅ Default values
  // productType = 'product',
  highlightColor = 'red-600',
  className = '',
  companyLogo = '/placeholder-logo.png' // Default logo
}) => {
  // ✅ Safety check BEFORE useState
  const safeImages = images && images.length > 0 ? images : [
    {
      id: 1,
      src: '/placeholder.jpg',
      alt: 'Placeholder product',
      color: 'Default',
      backgroundColor: '#f0f0f0'
    }
  ];

  const [selectedImage, setSelectedImage] = useState(safeImages[0]);

  // Function to get the correct highlight color class
  const getHighlightColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'red-600': 'text-red-600',
      'blue-600': 'text-blue-600',
      'green-600': 'text-green-600',
      'purple-600': 'text-purple-600',
      'indigo-600': 'text-indigo-600',
      'cyan-600': 'text-cyan-600',
      'orange-600': 'text-orange-600',
      'teal-600': 'text-teal-600',
      'rose-600': 'text-rose-600',
      'violet-600': 'text-violet-600',
      'yellow-600': 'text-yellow-600',
      'pink-600': 'text-pink-600',
      'amber-600': 'text-amber-600',
      'lime-600': 'text-lime-600',
      'emerald-600': 'text-emerald-600',
      'sky-600': 'text-sky-600',
      'fuchsia-600': 'text-fuchsia-600'
    };
    return colorMap[color] || 'text-red-600';
  };

  return (
    <div className={`max-w-sm mx-auto bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${className}`}>
      <div className='flex gap-4'>
        {/* Main larger image frame */}
        <div className="rounded-lg w-2/3 overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200">
          <div className="relative h-64">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>

        {/* Three smaller thumbnail frames */}
        <div className="flex flex-col justify-center gap-2 w-1/3">
          {safeImages.map((image) => (
            <div
              key={image.id}
              className={`cursor-pointer transition-transform duration-300 hover:scale-105 ${
                selectedImage.id === image.id ? 'ring-2 ring-gray-400 ring-offset-1' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden mx-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-2"
                  style={{
                    backgroundColor: image.backgroundColor || '#f0f0f0'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Logo Container - REPLACED TEXT WITH IMAGE */}
      <div className="text-center mt-6">
        <div className="bg-white p-3 rounded-lg flex items-center justify-center h-16 border border-gray-100 shadow-sm">
          <Image 
            src={companyLogo} 
            alt={`${companyName} logo`}
            width={120}
            height={40}
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              // Fallback if logo fails to load
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'block';
              }
            }}
          />
          {/* Fallback text (hidden by default) */}
          <span className="hidden text-sm font-semibold text-gray-700">
            {companyName}
          </span>
        </div>
        {/* Optional: Keep product type as small text below logo */}
        {/* <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">{productType}</p> */}
      </div>
    </div>
  );
};

export default MustPickCard;
