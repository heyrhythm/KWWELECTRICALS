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
  productType: string;
  highlightColor?: string;
  className?: string;
}

const MustPickCard: React.FC<MustPickCardProps> = ({ 
  images = [], // ✅ Default empty array
  companyName = 'COMPANY', // ✅ Default values
  productType = 'product',
  highlightColor = 'red-600',
  className = ''
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
      'pink-600': 'text-pink-600'
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

      {/* Company title */}
      <div className="text-center mt-6">
        <h2 className="text-xl font-bold text-gray-800 tracking-wide">
          <span className={getHighlightColor(highlightColor)}>
            {companyName.charAt(0)}
          </span>
          {companyName.slice(1)}
        </h2>
        <p className="text-sm text-gray-600 mt-1">{productType}</p>
      </div>
    </div>
  );
};

export default MustPickCard;
