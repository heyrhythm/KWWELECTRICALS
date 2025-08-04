"use client";
import React, { useState, useEffect } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ------------------------------------------------------------------ */
  /* ⚠️ Replace this array with real data from props or an API response */
  /* ------------------------------------------------------------------ */
  const reviews: Review[] = [
    {
      id: 1,
      quote:
        'KWW LED bulbs have been fantastic! They consume less power and the light quality is excellent. Highly recommend for anyone looking to save on electricity bills.',
      productType: 'LED Smart Bulbs',
      reviewer: {
        name: 'Rajesh Kumar',
        title: 'Homeowner',
        location: 'Delhi',
        avatar: '/api/placeholder/40/40',
      },
      rating: 4,
    },
    {
      id: 2,
      quote:
        'The BLDC ceiling fans are a game changer! Silent operation, great design, and energy efficient. My clients love them and I always recommend KWW products.',
      productType: 'BLDC Ceiling Fans',
      reviewer: {
        name: 'Priya Sharma',
        title: 'Interior Designer',
        location: 'Mumbai',
        avatar: '/api/placeholder/40/40',
      },
      rating: 4,
    },
    {
      id: 3,
      quote:
        'As a contractor, I trust KWW for all my projects. Quality is consistent, pricing is competitive, and customer support is excellent. Been using for 5+ years.',
      productType: 'LED Tube Lights',
      reviewer: {
        name: 'Amit Patel',
        title: 'Electrical Contractor',
        location: 'Ahmedabad',
        avatar: '/api/placeholder/40/40',
      },
      rating: 4,
    },
  ];

  const featuredReview: Review = {
    id: 4,
    quote:
      'Smart switches from KWW have made our home truly modern. Voice control and app integration work flawlessly. Great product innovation!',
    productType: 'Smart Switches',
    reviewer: {
      name: 'Sneha Verma',
      title: 'Homeowner',
      location: 'Bengaluru',
      avatar: '/api/placeholder/40/40',
    },
    rating: 5,
  };

  // Auto-slide functionality for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [reviews.length]);

  /* ------------------ */
  /* ⭐ Star-rating chip */
  /* ------------------ */
  const StarRating = ({ rating }: { rating: number }) => (
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

  /* ------------------ */
  /* Review Card Component */
  /* ------------------ */
  const ReviewCard = ({ review }: { review: Review }) => (
    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
      {/* Quote icon */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>

      {/* Rating */}
      <div className="mb-3">
        <StarRating rating={review.rating} />
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">&ldquo;{review.quote}&rdquo;</p>

      {/* Product Tag */}
      <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-5">
        {review.productType}
      </span>

      {/* Reviewer */}
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
          {review.reviewer.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{review.reviewer.name}</h4>
          <p className="text-gray-500 text-xs">
            {review.reviewer.title}, {review.reviewer.location}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`max-w-full sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {/* ---------- Header ---------- */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Don't just take our word for it—see how real customers across India feel about KWW
          products.
        </p>
      </div>

      {/* ---------- Mobile Slider (visible only on mobile) ---------- */}
      <div className="block sm:hidden mb-10">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0 px-2">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ---------- Desktop Grid (hidden on mobile) ---------- */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* ---------- Featured Review ---------- */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
          {/* Text Block */}
          <div className="flex-1 mb-6 lg:mb-0">
            <StarRating rating={featuredReview.rating} />

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed my-5 sm:my-6">
              &ldquo;{featuredReview.quote}&rdquo;
            </p>

            <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              {featuredReview.productType}
            </span>
          </div>

          {/* Reviewer Block */}
          <div className="flex items-center space-x-3 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-3 lg:min-w-[120px]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
              {featuredReview.reviewer.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <div className="lg:text-center">
              <h4 className="font-semibold text-gray-900 text-sm">{featuredReview.reviewer.name}</h4>
              <p className="text-gray-500 text-xs">
                {featuredReview.reviewer.title}, {featuredReview.reviewer.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Call-to-Action ---------- */}
      <div className="text-center">
        <p className="text-gray-600 mb-5">Join thousands of satisfied customers</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default CustomerTestimonials;