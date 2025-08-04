// components/DealerPartner.tsx
"use client";
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const DealerPartner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#ecf2ff] to-[#e8efff] py-16 px-6">
      {/* ────────────────────────────────────────────── */}
      {/* 1) HEADER  (1st top-level DIV)                 */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Become a KWW Dealer Partner
        </h2>
        <p className="text-gray-600">
          Join our growing network of successful dealers across India. Get
          exclusive benefits, competitive pricing, and comprehensive support to
          grow your business.
        </p>
      </div>

      {/* ────────────────────────────────────────────── */}
      {/* 2) MAIN GRID (form + benefits / contact)       */}
      {/*    (2nd top-level DIV)                         */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ───────── LEFT: DEALER INQUIRY FORM ──────── */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            Dealer Inquiry Form
          </h3>
          <p className="text-sm text-gray-500 mb-8">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 text-sm"
          >
            <div>
              <label className="font-medium">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="font-medium">Email Address *</label>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="font-medium">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="font-medium">State *</label>
              <select
                required
                className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select your state</option>
                {/* Add real state options here */}
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>West Bengal</option>
              </select>
            </div>

            <div>
              <label className="font-medium">Product Interest *</label>
              <select
                required
                className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select product category</option>
                <option>LED Lighting</option>
                <option>BLDC Fans</option>
                <option>Smart Switches</option>
              </select>
            </div>

            <div>
              <label className="font-medium">Additional Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your business, experience, or any specific requirements..."
                className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2"
            >
              <span>Submit Inquiry</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* ───────── RIGHT: BENEFITS + CONTACT ───────── */}
        <div className="flex flex-col space-y-8">
          {/* Dealer Benefits */}
          <div  className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Dealer Benefits
            </h3>

            <ul className="space-y-6 text-gray-700 text-sm">
              {[
                {
                  num: '1',
                  title: 'Competitive Pricing',
                  desc:
                    'Get best-in-market dealer rates with attractive margins on all product categories.'
                },
                {
                  num: '2',
                  title: 'Marketing Support',
                  desc:
                    'Complete marketing collaterals, digital assets, and promotional support for your business.'
                },
                {
                  num: '3',
                  title: 'Training & Support',
                  desc:
                    'Comprehensive product training and ongoing technical support from our expert team.'
                },
                {
                  num: '4',
                  title: 'Territory Protection',
                  desc:
                    'Exclusive territory rights to protect your business interests and ensure healthy growth.'
                }
              ].map(({ num, title, desc }) => (
                <li key={num} className="flex items-start space-x-4">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full grid place-content-center text-white font-semibold
                      ${
                        num === '1'
                          ? 'bg-blue-500'
                          : num === '2'
                          ? 'bg-green-500'
                          : num === '3'
                          ? 'bg-purple-500'
                          : 'bg-orange-500'
                      }`}
                  >
                    {num}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {title}
                    </h4>
                    <p>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-3xl p-8">
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+91-9876543210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>dealers@kwwelectricals.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  JALAN INDUSTRIAL COMPLEX<br />
                  ARGORI, ANDUL MOURI, SANTRAGACHI<br />
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
