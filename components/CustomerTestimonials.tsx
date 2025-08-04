import React from 'react';
import Image from 'next/image';
import { MessageSquare, Star } from 'lucide-react';

interface Review {
  id: number;
  quote: string;
  productType: string;
  reviewer: {
    name: string;
    title: string;
    location: string;
    avatar: string;
  };
  rating: number;
}

interface CustomerTestimonialsProps {
  className?: string;
}

const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({ className = '' }) => {
  // Sample data - you can replace this with props or API data
  const reviews: Review[] = [
    {
      id: 1,
      quote: "KWW LED bulbs have been fantastic! They consume less power and the light quality is excellent. Highly recommend for anyone looking to save on electricity bills.",
      productType: "LED Smart Bulbs",
      reviewer: {
        name: "Rajesh Kumar",
        title: "Homeowner",
        location: "Delhi",
        avatar: "/api/placeholder/40/40"
      },
      rating: 4
    },
    {
      id: 2,
      quote: "The BLDC ceiling fans are a game changer! Silent operation, great design, and energy efficient. My clients love them and I always recommend KWW products.",
      productType: "BLDC Ceiling Fans",
      reviewer: {
        name: "Priya Sharma",
        title: "Interior Designer",
        location: "Mumbai",
        avatar: "/api/placeholder/40/40"
      },
      rating: 4
    },
    {
      id: 3,
      quote: "As a contractor, I trust KWW for all my projects. Quality is consistent, pricing is competitive, and customer support is excellent. Been using for 5+ years.",
      productType: "LED Tube Lights",
      reviewer: {
        name: "Amit Patel",
        title: "Electrical Contractor",
        location: "Ahmedabad",
        avatar: "/api/placeholder/40/40"
      },
      rating: 4
    }
  ];

  const featuredReview: Review = {
    id: 4,
    quote: "Smart switches from KWW have made our home truly modern. Voice control and app integration work flawlessly. Great product innovation!",
    productType: "LED Smart Bulbs",
    reviewer: {
      name: "Rajesh Kumar",
      title: "Homeowner",
      location: "Delhi",
      avatar: "/api/placeholder/40/40"
    },
    rating: 4
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`max-w-6xl mx-auto px-6 py-12 ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Don't just take our word for it. Here's what real customers across India have to say about KWW products
        </p>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            {/* Quote Icon */}
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>

            {/* Star Rating */}
            <div className="mb-4">
              <StarRating rating={review.rating} />
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              "{review.quote}"
            </p>

            {/* Product Type */}
            <div className="mb-4">
              <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {review.productType}
              </span>
            </div>

            {/* Reviewer Info */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                  {review.reviewer.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {review.reviewer.name}
                </h4>
                <p className="text-gray-500 text-xs">
                  {review.reviewer.title}, {review.reviewer.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Review */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
          <div className="flex-1">
            {/* Star Rating */}
            <div className="mb-4">
              <StarRating rating={featuredReview.rating} />
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              "{featuredReview.quote}"
            </p>

            {/* Product Type */}
            <div className="mb-4 lg:mb-0">
              <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {featuredReview.productType}
              </span>
            </div>
          </div>

          {/* Reviewer Info */}
          <div className="flex items-center space-x-3 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-3 lg:min-w-[120px]">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                {featuredReview.reviewer.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div className="lg:text-center">
              <h4 className="font-semibold text-gray-900 text-sm">
                {featuredReview.reviewer.name}
              </h4>
              <p className="text-gray-500 text-xs">
                {featuredReview.reviewer.title}, {featuredReview.reviewer.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-gray-600 mb-6">
          Join thousands of satisfied customers
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
