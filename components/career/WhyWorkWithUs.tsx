"use client";
import React from 'react';

const WhyWorkWithUs: React.FC = () => {
  return (
    <div className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Why Work With Us?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              At KWW Electricals, we believe our people are our greatest asset. We 
              foster an environment of innovation, collaboration, and continuous 
              learning where every team member can thrive and make a meaningful 
              impact.
            </p>
            
            {/* Stats */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-medium">20+ years of industry leadership</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-medium">1000+ employees across India</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-medium">Award-winning workplace culture</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-60 sm:h-72 md:h-80">
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Team collaboration image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;