// components/SocialMediaSection.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Heart,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: <Instagram className="w-7 h-7 text-pink-600" />,
    count: '45.2K',
    label: 'Instagram Followers',
  },
  {
    id: 2,
    icon: <Facebook className="w-7 h-7 text-blue-600" />,
    count: '32.8K',
    label: 'Facebook Followers',
  },
  {
    id: 3,
    icon: <Twitter className="w-7 h-7 text-sky-500" />,
    count: '18.5K',
    label: 'Twitter Followers',
  },
  {
    id: 4,
    icon: <Youtube className="w-7 h-7 text-red-600" />,
    count: '12.3K',
    label: 'YouTube Followers',
  },
];

const posts = [
  {
    id: 1,
    platform: 'instagram',
    img: '/images/social/led-lamp.jpg',
    title:
      'New LED collection now available! Energy-efficient and stylish. #LEDlights #EnergyEfficient',
    likes: 234,
    time: '2 hours ago',
  },
  {
    id: 2,
    platform: 'facebook',
    img: '/images/social/bldc-gradient.jpg',
    title:
      'BLDC fans – the future of cooling technology. Silent, efficient, and smart!',
    likes: 156,
    time: '1 day ago',
  },
  {
    id: 3,
    platform: 'instagram',
    img: '/images/social/smart-plant.jpg',
    title:
      'Smart home automation made simple with KWW smart switches. Control from anywhere!',
    likes: 189,
    time: '2 days ago',
  },
  {
    id: 4,
    platform: 'facebook',
    img: '/images/social/factory-qc.jpg',
    title:
      'Quality testing in progress at our manufacturing facility. Your safety is our priority.',
    likes: 298,
    time: '3 days ago',
  },
  {
    id: 5,
    platform: 'instagram',
    img: '/images/social/led-lamp.jpg',
    title:
      'Another amazing LED product showcase! Perfect for modern homes.',
    likes: 167,
    time: '4 days ago',
  },
  {
    id: 6,
    platform: 'facebook',
    img: '/images/social/bldc-gradient.jpg',
    title:
      'Customer testimonials keep pouring in for our BLDC fan range!',
    likes: 203,
    time: '5 days ago',
  },
];

const SocialMediaSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % posts.length);
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length);
    }

    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
          Follow Us on Social Media
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
          Stay connected with KWW Electricals for the latest updates, tips, and
          exclusive offers
        </p>
      </div>

      {/* Social Media Stats - Responsive Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8 text-center space-y-3 sm:space-y-4"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-100 flex items-center justify-center mx-auto">
              {s.icon}
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-gray-900">{s.count}</p>
            <p className="text-xs sm:text-sm text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Latest Posts Section */}
      <div className="space-y-6 sm:space-y-8">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 text-center">
          Latest Posts
        </h3>

        {/* Mobile Carousel */}
        <div className="block lg:hidden">
          <div className="relative">
            {/* Carousel Container */}
            <div
              ref={sliderRef}
              className="overflow-hidden rounded-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {posts.map((p) => (
                  <article
                    key={p.id}
                    className="w-full flex-shrink-0 bg-white shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <div className="relative h-48 sm:h-56 w-full">
                      <Image
                        src={p.img}
                        alt={p.title}
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                      <div className="absolute top-3 left-3 bg-white/90 rounded-full p-2">
                        {p.platform === 'instagram' ? (
                          <Instagram className="w-4 h-4 text-pink-600" />
                        ) : (
                          <Facebook className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <p className="text-sm sm:text-base text-gray-800 mb-4 line-clamp-3">
                        {p.title}
                      </p>
                      <div className="flex items-center justify-between text-gray-500 text-xs sm:text-sm">
                        <span className="inline-flex items-center gap-1.5">
                          <Heart className="w-4 h-4" /> {p.likes} likes
                        </span>
                        <span>{p.time}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
              aria-label="Previous post"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
              aria-label="Next post"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-indigo-600 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {posts.slice(0, 4).map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={p.img}
                  alt={p.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute top-2 left-2 bg-white/80 rounded-full p-1">
                  {p.platform === 'instagram' ? (
                    <Instagram className="w-4 h-4 text-pink-600" />
                  ) : (
                    <Facebook className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </div>

              <div className="p-4 text-xs">
                <p className="line-clamp-3 text-gray-800 mb-3">{p.title}</p>
                <div className="flex items-center justify-between text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Heart className="w-3 h-3" /> {p.likes} likes
                  </span>
                  <span>{p.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Join Community Banner */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white text-center py-8 sm:py-12 px-4 sm:px-6 space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold">
            Join Our Social Community
          </h3>
          <p className="max-w-3xl mx-auto text-sm sm:text-base opacity-90 px-2">
            Follow us for energy-saving tips, product updates, special offers,
            and behind-the-scenes content from KWW Electricals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md hover:bg-indigo-50 transition-colors text-sm sm:text-base"
          >
            <Instagram className="w-4 h-4" />
            Follow on Instagram
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md hover:bg-blue-50 transition-colors text-sm sm:text-base"
          >
            <Facebook className="w-4 h-4" />
            Like on Facebook
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md hover:bg-gray-50 transition-colors text-sm sm:text-base"
          >
            <MessageCircle className="w-4 h-4" />
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;