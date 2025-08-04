import React from 'react';
import Image from 'next/image';
import { Gift, ShoppingCart, MapPin } from 'lucide-react';

interface PromoComponentProps {
  className?: string;
}

const PromoComponent: React.FC<PromoComponentProps> = ({ className = '' }) => {
  return (
    <div className={`max-w-4xl mx-auto p-6 ${className}`}>
      {/* Main Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-red-500 rounded-xl p-8 text-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            {/* Offer Badge */}
            <div className="flex items-center space-x-2">
              <Gift className="w-5 h-5" />
              <span className="bg-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                Limited Time Offer
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold">
              Bangkok Trip Scheme
            </h1>

            {/* Description */}
            <p className="text-lg opacity-90 max-w-md">
              Sell ₹10L+ worth of KWW products and win an amazing 4-day trip to Bangkok! 
              Experience luxury, culture, and create memories that last a lifetime.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center">
                View Details
                <span className="ml-2">→</span>
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center justify-center">
                Join Now
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0 lg:ml-8">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="w-80 h-48 bg-gradient-to-br from-yellow-400 to-orange-400 relative">
                {/* Placeholder for the Vietnam/Bangkok image */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">VIETNAM</div>
                    <div className="text-sm opacity-80">Travel Destination</div>
                  </div>
                </div>
                {/* Location Badge */}
                <div className="absolute top-3 right-3 bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Bangkok
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Festival Bonanza Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Gift className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Festival Bonanza
          </h3>
          <p className="text-gray-600 mb-4">
            Get up to 30% off on LED lights and fans during the festive season. Limited time offer!
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
            Learn More
            <span className="ml-1">→</span>
          </button>
        </div>

        {/* Bulk Order Discount Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <ShoppingCart className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Bulk Order Discount
          </h3>
          <p className="text-gray-600 mb-4">
            Special pricing for bulk orders above ₹50,000. Perfect for contractors and builders.
          </p>
          <button className="text-green-600 font-semibold hover:text-green-700 flex items-center">
            Get Quote
            <span className="ml-1">→</span>
          </button>
        </div>

        {/* New Dealers Benefit Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            New Dealers Benefit
          </h3>
          <p className="text-gray-600 mb-4">
            Join our dealer network and get exclusive pricing, marketing support, and training.
          </p>
          <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center">
            Apply Now
            <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoComponent;
