import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info - Left Section */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <div className="w-15 h-15 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold lg:text-lg">KWW</span>
              </div>
              <div>
                <h3 className="text-red-500 font-bold  lg:text-xl">KWW</h3>
                <p className="text-gray-400 text-sm">ELECTRICALS</p>
              </div>
            </div>
            
            {/* Company Description */}
            <p className="text-gray-400 text-[14px] lg:text-sm mb-6 leading-relaxed">
              Leading manufacturer of energy-efficient electrical products in India. 
              <br />
              Trusted by millions for quality, innovation, and sustainability.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div className="text-sm">
                  <p>JALAN INDUSTRIAL COMPLEX</p>
                  <p>ARGORI, ANDUL MOURI, SANKRAIL</p>
                  <p>Howrah, West Bengal - 711302</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.813a11.037 11.037 0 006.105 6.105l.813-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm">+91-9073966363</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm">marketing@kwwelectricals.com</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.223.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.84-.282 1.098-1.016 2.717-1.4 3.651 1.391.432 2.861.655 4.381.655 6.619 0 11.99-5.367 11.99-11.987C24.007 5.367 18.636.001 12.017.001z"/>
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className='lg:flex grid grid-cols-2 lg:flex-col-2 lg:gap-10 space-y-6'>
          {/* Our Products */}
<div>
  <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
    Our Products
  </h4>
  <ul className="space-y-3 sm:space-y-2">
    <li>
      <Link 
        href="#" 
        className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
      >
        LED Bulbs & Tubes
      </Link>
    </li>
    <li>
      <Link 
        href="#" 
        className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
      >
        Ceiling Fans
      </Link>
    </li>
    <li>
      <Link 
        href="#" 
        className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
      >
        Table Fans
      </Link>
    </li>
    <li>
      <Link 
        href="#" 
        className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
      >
        Panel Lights
      </Link>
    </li>
    <li>
      <Link 
        href="#" 
        className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
      >
        Street Lights
      </Link>
    </li>
    <li>
      <Link 
        href="#" 
        className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
      >
        Flood Lights
      </Link>
    </li>
    <li>
      <Link 
        href="#" 
        className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
      >
        Smart Switches
      </Link>
    </li>
    <li>
      <Link 
        href="#" 
        className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
      >
        Home Appliances
      </Link>
    </li>
  </ul>
</div>

          {/* Quick Links & Support */}
<div>
  <div className="mb-6 sm:mb-8">
    <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
      Quick Links
    </h4>
    <ul className="space-y-3 sm:space-y-2">
      <li>
        <Link 
          href="#" 
          className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link 
          href="#" 
          className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
        >
          Our Products
        </Link>
      </li>
      <li>
        <Link 
          href="#" 
          className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
        >
          Quality Assurance
        </Link>
      </li>
      <li>
        <Link 
          href="#" 
          className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
        >
          Certifications
        </Link>
      </li>
      <li>
        <Link 
          href="#" 
          className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
        >
          Dealer Network
        </Link>
      </li>
      <li>
        <Link 
          href="#" 
          className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
        >
          Career Opportunities
        </Link>
      </li>
    </ul>
  </div>
  
  <div>
    <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
      Support
    </h4>
    <ul className="space-y-3 sm:space-y-2">
      <li>
        <Link 
          href="#" 
          className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
        >
          Contact Support
        </Link>
      </li>
      <li>
        <Link 
          href="#" 
          className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
        >
          Product Manuals
        </Link>
      </li>
      <li>
        <Link 
          href="#" 
          className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
        >
          Warranty Information
        </Link>
      </li>
      <li>
        <Link 
          href="#" 
          className="text-gray-400 hover:text-red-500 transition-colors text-sm block py-1 sm:py-0"
        >
          Installation Guides
        </Link>
      </li>
    </ul>
  </div>
</div>
</div>

          
          {/* Stay Updated & Certifications */}
          <div>
            <div className="mb-8">
              <h4 className="text-white font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Subscribe to our newsletter for the latest products, offers, and energy-saving tips.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white text-sm rounded-l-md border border-gray-600 focus:outline-none focus:border-red-500"
                />
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 transition-colors rounded-r-md">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Certifications</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-blue-400 font-semibold text-sm">ISO</div>
                  <div className="text-xs text-gray-400">9001:2015</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-green-400 font-semibold text-sm">BIS</div>
                  <div className="text-xs text-gray-400">Certified</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-green-400 font-semibold text-sm">RoHS</div>
                  <div className="text-xs text-gray-400">Compliant</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-yellow-400 font-semibold text-sm">Energy</div>
                  <div className="text-xs text-gray-400">Star</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-[11px] lg:text-sm mb-4 md:mb-0">
              © 2024 KWW Electricals. All rights reserved. | Made in India 🇮🇳
            </p>
            <div className="flex flex-wrap gap-4 text-[11px] lg:text-sm">
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">Return Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">Shipping Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">Warranty Terms</Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">Disclaimer</Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
