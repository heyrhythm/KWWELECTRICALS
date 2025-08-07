"use client";
import React from 'react';

const CareerHeader: React.FC = () => {
  return (
    <div className="bg-white pt-16 md:pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
          Join Our Team at KWW Electricals
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          Be part of a dynamic team that's powering India's future with innovative, sustainable 
          electrical solutions. Grow your career with us!
        </p>
      </div>
    </div>
  );
};

export default CareerHeader;