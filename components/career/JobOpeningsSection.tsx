"use client";
import React from 'react';

interface JobOpeningsSectionProps {
  className?: string;
}

const JobOpeningsSection: React.FC<JobOpeningsSectionProps> = ({ className = '' }) => {
  return (
    <div className={`pt-7 md:pt-16 px-4 sm:px-6 lg:px-8 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
            Current Job Openings
          </h2>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8">
          {/* Senior Electrical Engineer */}
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {/* Title and Salary */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                  Senior Electrical Engineer
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-semibold text-sm sm:text-base md:text-lg">
                    ₹8-12 LPA
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    5-8 years
                  </div>
                </div>
              </div>
              
              {/* Job Details */}
              <div className="flex flex-col space-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2 sm:space-y-0 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-gray-600">Engineering</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">New Delhi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Full-time</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Lead product development and design of energy-efficient electrical solutions. Work with cross-functional teams to bring innovative products to market.
              </p>
              
              {/* Button */}
              <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors mt-2 sm:mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Regional Sales Manager */}
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="flex flex-col space-y-2">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                  Regional Sales Manager
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-semibold text-sm sm:text-base md:text-lg">
                    ₹6-10 LPA
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    3-6 years
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2 sm:space-y-0 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="text-gray-600">Sales</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Mumbai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Full-time</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Drive sales growth in the western region, manage dealer relationships, and expand market presence for KWW products.
              </p>
              
              <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors mt-2 sm:mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Quality Assurance Specialist */}
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="flex flex-col space-y-2">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                  Quality Assurance Specialist
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-semibold text-sm sm:text-base md:text-lg">
                    ₹4-7 LPA
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    2-4 years
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2 sm:space-y-0 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Bangalore</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Full-time</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Ensure product quality meets international standards through rigorous testing and quality control processes.
              </p>
              
              <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors mt-2 sm:mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Digital Marketing Executive */}
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="flex flex-col space-y-2">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                  Digital Marketing Executive
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-semibold text-sm sm:text-base md:text-lg">
                    ₹3-5 LPA
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    1-3 years
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2 sm:space-y-0 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                  <span className="text-gray-600">Marketing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Gurgaon</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Full-time</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Drive digital marketing initiatives, manage social media presence, and create engaging content for KWW brand.
              </p>
              
              <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors mt-2 sm:mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* Production Supervisor */}
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="flex flex-col space-y-2">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                  Production Supervisor
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-semibold text-sm sm:text-base md:text-lg">
                    ₹5-8 LPA
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    4-7 years
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2 sm:space-y-0 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  <span className="text-gray-600">Manufacturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Chennai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Full-time</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Oversee manufacturing operations, ensure production targets are met, and maintain safety standards in the facility.
              </p>
              
              <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors mt-2 sm:mt-4">
                View Details
              </button>
            </div>
          </div>

          {/* HR Business Partner */}
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="flex flex-col space-y-2">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                  HR Business Partner
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-blue-600 font-semibold text-sm sm:text-base md:text-lg">
                    ₹5-8 LPA
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    3-5 years
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2 sm:space-y-0 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-gray-600">Human Resources</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">New Delhi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Full-time</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Support business growth through strategic HR initiatives, talent acquisition, and employee development programs.
              </p>
              
              <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors mt-2 sm:mt-4">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpeningsSection;
