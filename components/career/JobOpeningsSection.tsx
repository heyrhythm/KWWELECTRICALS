"use client";
import React from 'react';

interface JobOpeningsSectionProps {
  className?: string;
}

const JobOpeningsSection: React.FC<JobOpeningsSectionProps> = ({ className = '' }) => {
  return (
    <div className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Current Job Openings
          </h2>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Senior Electrical Engineer */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Senior Electrical Engineer
              </h3>
              <div className="text-left sm:text-right">
                <div className="text-blue-600 font-semibold text-base sm:text-lg">₹8-12 LPA</div>
                <div className="text-gray-500 text-sm">5-8 years</div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-gray-600">Engineering</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">New Delhi</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Full-time</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Lead product development and design of energy-efficient electrical solutions. Work with cross-functional teams to bring innovative products to market.
            </p>
            
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </div>

          {/* Regional Sales Manager */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Regional Sales Manager
              </h3>
              <div className="text-left sm:text-right">
                <div className="text-blue-600 font-semibold text-base sm:text-lg">₹6-10 LPA</div>
                <div className="text-gray-500 text-sm">3-6 years</div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-gray-600">Sales</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">Mumbai</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Full-time</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Drive sales growth in the western region, manage dealer relationships, and expand market presence for KWW products.
            </p>
            
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </div>

          {/* Quality Assurance Specialist */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Quality Assurance Specialist
              </h3>
              <div className="text-left sm:text-right">
                <div className="text-blue-600 font-semibold text-base sm:text-lg">₹4-7 LPA</div>
                <div className="text-gray-500 text-sm">2-4 years</div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Quality</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">Bangalore</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Full-time</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Ensure product quality meets international standards through rigorous testing and quality control processes.
            </p>
            
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </div>

          {/* Digital Marketing Executive */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Digital Marketing Executive
              </h3>
              <div className="text-left sm:text-right">
                <div className="text-blue-600 font-semibold text-base sm:text-lg">₹3-5 LPA</div>
                <div className="text-gray-500 text-sm">1-3 years</div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                <span className="text-gray-600">Marketing</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">Gurgaon</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Full-time</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Drive digital marketing initiatives, manage social media presence, and create engaging content for KWW brand.
            </p>
            
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </div>

          {/* Production Supervisor */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Production Supervisor
              </h3>
              <div className="text-left sm:text-right">
                <div className="text-blue-600 font-semibold text-base sm:text-lg">₹5-8 LPA</div>
                <div className="text-gray-500 text-sm">4-7 years</div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <span className="text-gray-600">Manufacturing</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">Chennai</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Full-time</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Oversee manufacturing operations, ensure production targets are met, and maintain safety standards in the facility.
            </p>
            
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </div>

          {/* HR Business Partner */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                HR Business Partner
              </h3>
              <div className="text-left sm:text-right">
                <div className="text-blue-600 font-semibold text-base sm:text-lg">₹5-8 LPA</div>
                <div className="text-gray-500 text-sm">3-5 years</div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-600">Human Resources</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">New Delhi</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Full-time</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Support business growth through strategic HR initiatives, talent acquisition, and employee development programs.
            </p>
            
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpeningsSection;
