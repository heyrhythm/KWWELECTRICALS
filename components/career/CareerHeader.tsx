"use client";
import React from 'react';

const CareerHeader: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
          Join Our Team at KWW Electricals
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          Be part of a dynamic team that's powering India's future with innovative, sustainable 
          electrical solutions. Grow your career with us!
        </p>
      </div>
    </div>
  );
};

export default CareerHeader;