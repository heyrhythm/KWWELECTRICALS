import React from 'react';

const EmployeeBenefits: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Employee Benefits & Perks
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Health & Wellness */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="mb-6">
              {/* Heart Icon */}
              <div className="w-10 h-10 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-blue-500" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Health & Wellness
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive medical insurance for you and your family
              </p>
            </div>
          </div>

          {/* Career Growth */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="mb-6">
              {/* Trending Up Icon */}
              <div className="w-10 h-10 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-purple-500" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Career Growth
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear career progression paths and skill development programs
              </p>
            </div>
          </div>

          {/* Performance Rewards */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="mb-6">
              {/* Award Icon */}
              <div className="w-10 h-10 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-yellow-500" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.28 25.28 0 012.916.52 6.003 6.003 0 00-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Performance Rewards
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Merit-based bonuses and recognition programs
              </p>
            </div>
          </div>

          {/* Learning & Development */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="mb-6">
              {/* Academic Cap Icon */}
              <div className="w-10 h-10 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-teal-500" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Learning & Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Continuous learning opportunities and certification support
              </p>
            </div>
          </div>

          {/* Work-Life Balance */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="mb-6">
              {/* Coffee Icon */}
              <div className="w-10 h-10 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-indigo-500" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Work-Life Balance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Flexible working hours and recreational facilities
              </p>
            </div>
          </div>

          {/* Modern Workplace */}
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="mb-6">
              {/* Building Office Icon */}
              <div className="w-10 h-10 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-gray-600" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18m2.25-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Modern Workplace
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                State-of-the-art facilities and collaborative work environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeBenefits;