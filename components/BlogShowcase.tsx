// components/BlogShowcase.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import {
  Clock,
  ArrowRight,
  User,
  Mail
} from 'lucide-react';

const posts = [
  {
    id: 1,
    tag: 'Energy Savings',
    image: '/images/blog-lamp.jpg',           // replace with real paths
    author: 'Rajesh Kumar',
    date: 'March 15, 2024',
    readTime: '5 min read',
    title: '5 Ways to Save Energy with LED Lighting',
    excerpt:
      'Discover practical tips to reduce your electricity bills while enjoying better lighting quality with modern LED solutions.'
  },
  {
    id: 2,
    tag: 'Technology',
    image: '/images/blog-bldc.jpg',
    author: 'Priya Sharma',
    date: 'March 12, 2024',
    readTime: '7 min read',
    title: 'Why BLDC Fans Are the Future',
    excerpt:
      'Learn about the technology behind BLDC fans and why they are becoming the preferred choice for modern homes.'
  },
  {
    id: 3,
    tag: 'Smart Home',
    image: '/images/blog-smart-plant.jpg',
    author: 'Amit Patel',
    date: 'March 10, 2024',
    readTime: '6 min read',
    title: 'Smart Home Appliances – Worth the Investment?',
    excerpt:
      'Explore the benefits and ROI of upgrading to smart electrical appliances for your home automation needs.'
  }
];

const BlogShowcase: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* ─────────────────────────────────────────────────────────── */}
      {/* 1) HEADER TEXT */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Latest Blog Posts &amp; Industry News
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Stay updated with the latest trends, tips, and insights from the electrical industry
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 2) THREE BLOG CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {posts.map(post => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
          >
            {/* image */}
            <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                priority
              />
              <span className="absolute top-4 left-4 bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full">
                {post.tag}
              </span>
            </div>

            {/* body */}
            <div className="p-6">
              {/* meta */}
              <div className="flex items-center text-xs text-gray-500 space-x-3 mb-4">
                <span className="flex items-center space-x-1">
                  <User className="w-3.5 h-3.5" />
                  <span>{post.author}</span>
                </span>
                <span>{post.date}</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              {/* title */}
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {post.title}
              </h3>

              {/* excerpt */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <button className="text-indigo-600 font-semibold text-sm inline-flex items-center group">
                Read More
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 3) NEWSLETTER BAR */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row lg:items-center lg:justify-between px-8 py-10 mb-16">
        {/* left copy */}
        <div className="mb-8 lg:mb-0">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with Industry Insights
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li className="text-green-600">Weekly energy-saving tips</li>
            <li className="text-blue-600">New product announcements</li>
            <li className="text-purple-600">Exclusive offers and promotions</li>
          </ul>
        </div>

        {/* form */}
        <form
          onSubmit={e => e.preventDefault()}
          className="flex flex-col sm:flex-row sm:items-center w-full max-w-lg space-y-4 sm:space-y-0 sm:space-x-4"
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

      {/* ─────────────────────────────────────────────────────────── */}
      {/* 4) VISIT BLOG BUTTON */}
      <div className="text-center">
        <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg">
          Visit Our Blog
        </button>
      </div>
    </section>
  );
};

export default BlogShowcase;
