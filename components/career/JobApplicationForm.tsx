"use client";
import React, { useState } from 'react';

interface JobApplicationFormProps {
  className?: string;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    location: '',
    coverLetter: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`pb-10 md:pb-25 px-3 sm:px-4 lg:px-8 ${className}`}>
      <div className="w-full max-w-5xl mx-auto bg-blue-50 rounded-lg sm:rounded-xl py-6 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
              Apply for a Position
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed px-2 max-w-2xl mx-auto">
              Ready to join our team? Fill out the application form below and we&apos;ll get back to you soon.
            </p>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Mobile: Full Name (full width) */}
            <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-6">
              {/* Full Name */}
              <div className="w-full">
                <label htmlFor="fullName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="w-full">
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Phone and Position */}
            <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-6">
              {/* Phone Number */}
              <div className="w-full">
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>

              {/* Position Applied For */}
              <div className="w-full">
                <label htmlFor="position" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Position Applied For *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-white appearance-none"
                  required
                >
                  <option value="">Select a position</option>
                  <option value="senior-electrical-engineer">Senior Electrical Engineer</option>
                  <option value="regional-sales-manager">Regional Sales Manager</option>
                  <option value="quality-assurance-specialist">Quality Assurance Specialist</option>
                  <option value="digital-marketing-executive">Digital Marketing Executive</option>
                  <option value="production-supervisor">Production Supervisor</option>
                  <option value="hr-business-partner">HR Business Partner</option>
                </select>
              </div>
            </div>

            {/* Experience and Location */}
            <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-6">
              {/* Years of Experience */}
              <div className="w-full">
                <label htmlFor="experience" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-white appearance-none"
                  required
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-8">5-8 years</option>
                  <option value="8+">8+ years</option>
                </select>
              </div>

              {/* Preferred Location */}
              <div className="w-full">
                <label htmlFor="location" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Preferred Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-white appearance-none"
                >
                  <option value="">Select location</option>
                  <option value="new-delhi">New Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="gurgaon">Gurgaon</option>
                  <option value="any">Any Location</option>
                </select>
              </div>
            </div>

            {/* Upload Resume */}
            <div className="w-full">
              <label htmlFor="resume" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Upload Resume *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-blue-400 transition-colors">
                <div className="mb-2 sm:mb-3 md:mb-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  required
                />
                <label htmlFor="resume" className="cursor-pointer block">
                  <span className="text-gray-500 text-xs sm:text-sm block mb-1">
                    {formData.resume ? formData.resume.name : 'PDF, DOC, DOCX up to 5MB'}
                  </span>
                  <span className="text-blue-600 font-medium text-xs sm:text-sm inline-block">
                    Click to browse files
                  </span>
                </label>
              </div>
            </div>

            {/* Cover Letter */}
            <div className="w-full">
              <label htmlFor="coverLetter" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 sm:py-3.5 md:py-4 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Submit Application</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
