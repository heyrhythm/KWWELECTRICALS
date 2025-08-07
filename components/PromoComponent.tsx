import React from 'react';
import Image from 'next/image';
import { Gift, ShoppingCart, MapPin } from 'lucide-react';

interface PromoComponentProps {
  className?: string;
}

const PromoComponent: React.FC<PromoComponentProps> = ({ className = '' }) => {
  return (
    <div className={`-mt-14 md:-mt-0 scale-90 md:scale-100 max-w-full sm:max-w-3xl lg:max-w-4xl xl:max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Main Banner */}
      <div className=" bg-gradient-to-r from-orange-600 to-red-500 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 space-y-4 sm:space-y-5 lg:space-y-6 text-center md:text-left">
            {/* Offer Badge */}
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="bg-orange-700 px-2 py-1 sm:px-3 rounded-full text-xs font-semibold">
                Limited Time Offer
              </span>
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Bangkok Trip Scheme
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg opacity-90 max-w-md mx-auto md:mx-0">
              Sell ₹10L+ worth of KWW products and win an amazing 4-day trip to Bangkok! 
              Experience luxury, culture, and create memories that last a lifetime.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button className="bg-white text-orange-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center text-sm sm:text-base">
                View Details
                <span className="ml-2">→</span>
              </button>
              <button className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center justify-center text-sm sm:text-base">
                Join Now
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full md:w-auto md:flex-shrink-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl mx-auto max-w-sm md:max-w-none">
              <div className="w-full h-48 sm:h-52 md:w-72 md:h-44 lg:w-80 lg:h-48 bg-gradient-to-br from-yellow-400 to-orange-400 relative">
                {/* Placeholder for the Vietnam/Bangkok image */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">VIETNAM</div>
                    <div className="text-xs sm:text-sm opacity-80">Travel Destination</div>
                  </div>
                </div>
                {/* Location Badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white text-orange-600 px-2 py-1 sm:px-3 rounded-full text-xs font-semibold flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Bangkok
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-8">
        {/* Festival Bonanza Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
            Festival Bonanza
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
            Get up to 30% off on LED lights and fans during the festive season. Limited time offer!
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center text-sm sm:text-base transition-colors">
            Learn More
            <span className="ml-1">→</span>
          </button>
        </div>

        {/* Bulk Order Discount Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
            Bulk Order Discount
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
            Special pricing for bulk orders above ₹50,000. Perfect for contractors and builders.
          </p>
          <button className="text-green-600 font-semibold hover:text-green-700 flex items-center text-sm sm:text-base transition-colors">
            Get Quote
            <span className="ml-1">→</span>
          </button>
        </div>

        {/* New Dealers Benefit Card */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 border border-gray-100 hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
          <div className="bg-purple-100 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
            New Dealers Benefit
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
            Join our dealer network and get exclusive pricing, marketing support, and training.
          </p>
          <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center text-sm sm:text-base transition-colors">
            Apply Now
            <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoComponent;
