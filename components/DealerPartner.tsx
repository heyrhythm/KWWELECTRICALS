// components/DealerPartner.tsx
'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const DealerPartner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#ecf2ff] to-[#e8efff] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* ─────────── 1) HEADER ─────────── */}
      <div className="max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
          Become a KWW Dealer Partner
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Join our growing network of successful dealers across India. Get exclusive
          benefits, competitive pricing and comprehensive support to grow your business.
        </p>
      </div>

      {/* ─────────── 2) MAIN GRID (FORM / INFO) ─────────── */}
      <div className="max-w-full sm:max-w-3xl lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* LEFT: FORM */}
        <div className="bg-white rounded-xl sm:rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Dealer Inquiry Form</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-5 text-sm">
            {/* Name */}
            <div>
              <label className="font-medium">Full Name *</label>
              <input
                required
                placeholder="Enter your full name"
                className="mt-2 w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-medium">Email Address *</label>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="mt-2 w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="font-medium">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                className="mt-2 w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* State */}
            <div>
              <label className="font-medium">State *</label>
              <select
                required
                className="mt-2 w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select your state</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>West Bengal</option>
              </select>
            </div>

            {/* Product */}
            <div>
              <label className="font-medium">Product Interest *</label>
              <select
                required
                className="mt-2 w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select product category</option>
                <option>LED Lighting</option>
                <option>BLDC Fans</option>
                <option>Smart Switches</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="font-medium">Additional Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your business or any specific requirements..."
                className="mt-2 w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
            >
              Submit Inquiry
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M21 12H3" />
              </svg>
            </button>
          </form>
        </div>

        {/* RIGHT: BENEFITS + CONTACT */}
        <div className="flex flex-col gap-6">
          {/* Benefits */}
          <div className="flex-1 bg-white rounded-xl sm:rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5">Dealer Benefits</h3>

            <ul className="space-y-5 text-gray-700 text-sm">
              {[
                {
                  num: '1',
                  title: 'Competitive Pricing',
                  desc: 'Best-in-market dealer rates with attractive margins on all categories.',
                },
                {
                  num: '2',
                  title: 'Marketing Support',
                  desc: 'Printed collaterals, digital assets and promotional campaigns to boost sales.',
                },
                {
                  num: '3',
                  title: 'Training & Support',
                  desc: 'Comprehensive product training and ongoing technical assistance.',
                },
                {
                  num: '4',
                  title: 'Territory Protection',
                  desc: 'Exclusive territory rights to protect your business interests.',
                },
              ].map(({ num, title, desc }) => (
                <li key={num} className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full grid place-content-center text-white text-sm font-semibold
                    ${num === '1' ? 'bg-blue-500' : num === '2' ? 'bg-green-500' : num === '3' ? 'bg-purple-500' : 'bg-orange-500'}`}
                  >
                    {num}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
                    <p>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-xl sm:rounded-3xl p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold mb-5">Get in Touch</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91-9876543210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> dealers@kwwelectricals.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="leading-tight">
                  Jalan Industrial Complex<br />
                  Argori, Andul Mouri, Santragachi<br />
                  Howrah, West Bengal – 711302
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerPartner;
