// components/BlogShowcase.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Clock, ArrowRight, User, Mail } from 'lucide-react';

const posts = [
  {
    id: 1,
    tag: 'Energy Savings',
    image: '/images/blog-lamp.jpg',
    author: 'Rajesh Kumar',
    date: 'March 15 2024',
    readTime: '5 min read',
    title: '5 Ways to Save Energy with LED Lighting',
    excerpt:
      'Discover practical tips to reduce your electricity bills while enjoying better lighting quality with modern LED solutions.',
  },
  {
    id: 2,
    tag: 'Technology',
    image: '/images/blog-bldc.jpg',
    author: 'Priya Sharma',
    date: 'March 12 2024',
    readTime: '7 min read',
    title: 'Why BLDC Fans Are the Future',
    excerpt:
      'Learn about the technology behind BLDC fans and why they are becoming the preferred choice for modern homes.',
  },
  {
    id: 3,
    tag: 'Smart Home',
    image: '/images/blog-smart-plant.jpg',
    author: 'Amit Patel',
    date: 'March 10 2024',
    readTime: '6 min read',
    title: 'Smart Home Appliances – Worth the Investment?',
    excerpt:
      'Explore the benefits and ROI of upgrading to smart electrical appliances for your home-automation needs.',
  },
];

const BlogShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posts.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth >= 640) return; // Only for mobile
    
    startXRef.current = e.touches[0].clientX;
    currentXRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || window.innerWidth >= 640) return;
    
    currentXRef.current = e.touches[0].clientX;
    const diff = currentXRef.current - startXRef.current;
    
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(calc(-${currentSlide * 100}% + ${diff}px))`;
    }
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current || window.innerWidth >= 640) return;
    
    const diff = currentXRef.current - startXRef.current;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide > 0) {
        // Swipe right - go to previous slide
        setCurrentSlide(currentSlide - 1);
      } else if (diff < 0 && currentSlide < posts.length - 1) {
        // Swipe left - go to next slide
        setCurrentSlide(currentSlide + 1);
      }
    }
    
    // Reset transform
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    isDraggingRef.current = false;
    
    // Resume auto-play after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Mouse handlers for desktop testing
  const handleMouseDown = (e: React.MouseEvent) => {
    if (window.innerWidth >= 640) return;
    
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;
    isDraggingRef.current = true;
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || window.innerWidth >= 640) return;
    
    currentXRef.current = e.clientX;
    const diff = currentXRef.current - startXRef.current;
    
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(calc(-${currentSlide * 100}% + ${diff}px))`;
    }
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current || window.innerWidth >= 640) return;
    
    const diff = currentXRef.current - startXRef.current;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (diff < 0 && currentSlide < posts.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
    
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    isDraggingRef.current = false;
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <section className="max-w-full sm:max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* ─────────────── 1) HEADER ─────────────── */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
          Latest Blog Posts & Industry News
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Stay updated with the latest trends, tips and insights from the electrical industry.
        </p>
      </div>

      {/* ─────────────── 2) BLOG CARDS ─────────────── */}
      {/* Mobile: Slider */}
      <div className="sm:hidden mb-12">
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {posts.map((post) => (
              <article
                key={post.id}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                  {/* image */}
                  <div className="relative h-48 w-full rounded-t-xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-emerald-50 text-emerald-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.tag}
                    </span>
                  </div>

                  {/* body */}
                  <div className="p-5">
                    {/* meta */}
                    <div className="flex flex-wrap items-center text-xs text-gray-500 gap-x-3 gap-y-2 mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* title */}
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {post.title}
                    </h3>

                    {/* excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <button className="text-indigo-600 font-semibold text-sm inline-flex items-center group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile: Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop/Tablet: Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
          >
            {/* image */}
            <div className="relative h-44 sm:h-52 lg:h-56 w-full rounded-t-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-emerald-50 text-emerald-600 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full">
                {post.tag}
              </span>
            </div>

            {/* body */}
            <div className="p-5 sm:p-6">
              {/* meta */}
              <div className="flex flex-wrap items-center text-[10px] sm:text-xs text-gray-500 gap-x-3 gap-y-2 mb-4">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  {post.author}
                </span>
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              {/* title */}
              <h3 className="font-bold text-base sm:text-lg lg:text-xl text-gray-900 mb-2">
                {post.title}
              </h3>

              {/* excerpt */}
              <p className="text-gray-600 text-[13px] sm:text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <button className="text-indigo-600 font-semibold text-sm inline-flex items-center group">
                Read More
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* ─────────────── 3) NEWSLETTER BAR ─────────────── */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 sm:px-8 py-8 sm:py-10 mb-12 lg:mb-16">
        {/* copy */}
        <div className="mb-6 lg:mb-0 lg:max-w-lg">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
            Stay Updated with Industry Insights
          </h3>
          <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
            <li className="text-green-600">Weekly energy-saving tips</li>
            <li className="text-blue-600">New product announcements</li>
            <li className="text-purple-600">Exclusive offers & promotions</li>
          </ul>
        </div>

        {/* form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row sm:items-center w-full lg:max-w-md gap-4"
        >
          <div className="relative flex-1">
            <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {/* ─────────────── 4) CTA BUTTON ─────────────── */}
      <div className="text-center">
        <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-7 sm:px-8 py-3 rounded-lg">
          Visit Our Blog
        </button>
      </div>
    </section>
  );
};

export default BlogShowcase;