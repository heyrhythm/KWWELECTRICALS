import React from 'react';
import {
  Shield,
  Award,
  Leaf,
  Globe,
  CheckCircle,
  Target,
  TrendingUp,
} from 'lucide-react';

interface Certification {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  color: string;
}

interface CertificationsBadgesProps {
  className?: string;
}

const CertificationsBadges: React.FC<CertificationsBadgesProps> = ({
  className = '',
}) => {
  /* ------------------------------------------------------------------ */
  /* ⚠️ Replace dummy data with real API data or props when available   */
  /* ------------------------------------------------------------------ */
  const certifications: Certification[] = [
    {
      id: 1,
      icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
      title: 'ISO 9001:2015',
      description: 'Quality Management System',
      color: 'text-blue-600',
      bgColor: 'bg-blue-500',
    },
    {
      id: 2,
      icon: <Award className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
      title: 'BIS Certified',
      description: 'Bureau of Indian Standards',
      color: 'text-green-600',
      bgColor: 'bg-green-500',
    },
    {
      id: 3,
      icon: <Leaf className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
      title: 'RoHS Compliant',
      description: 'Environmentally Safe',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-500',
    },
    {
      id: 4,
      icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
      title: 'Energy Star',
      description: 'Energy Efficiency Program',
      color: 'text-orange-600',
      bgColor: 'bg-orange-500',
    },
  ];

  const features: Feature[] = [
    {
      id: 1,
      icon: <Leaf className="w-4 h-4" />,
      title: 'Eco-Friendly Manufacturing',
      color: 'text-green-600',
    },
    {
      id: 2,
      icon: <Shield className="w-4 h-4" />,
      title: 'Safety-First Approach',
      color: 'text-blue-600',
    },
    {
      id: 3,
      icon: <TrendingUp className="w-4 h-4" />,
      title: 'International Standards',
      color: 'text-orange-600',
    },
    {
      id: 4,
      icon: <Target className="w-4 h-4" />,
      title: 'Global Quality Benchmarks',
      color: 'text-purple-600',
    },
  ];

  return (
    <div className={`py-10 sm:py-14 lg:py-20 bg-gray-50 ${className}`}>
      <div className="max-w-full sm:max-w-3xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------- Header ---------- */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Certifications & Green Badges
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Committed to sustainability and safety through internationally
            recognized standards and certifications
          </p>
        </div>

        {/* ---------- Certifications Grid ---------- */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 lg:mb-20">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              {/* Icon container */}
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 ${cert.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl`}
              >
                {cert.icon}
              </div>

              {/* Title + description */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* ---------- Commitment Block ---------- */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left text content */}
            <div className="p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-green-50 to-blue-50">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-5 sm:mb-6">
                Our Commitment to Quality & Environment
              </h3>

              <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                At KWW Electricals, we believe in responsible manufacturing that
                protects both our customers and the planet. Our products meet
                the highest international standards for quality, safety, and
                environmental compliance.
              </p>

              <p className="text-gray-700 text-sm sm:text-base mb-8 leading-relaxed">
                Every unit undergoes rigorous testing and quality checks before
                it reaches your home or business.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="flex items-center space-x-2 sm:space-x-3"
                  >
                    <span className={`${feature.color}`}>{feature.icon}</span>
                    <span className="text-gray-800 font-medium text-sm">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual / placeholder */}
            <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[460px]">
              {/* Placeholder image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
                  </div>
                  <p className="font-medium text-xs sm:text-sm">
                    Quality Control Image
                  </p>
                  <p className="text-[10px] sm:text-xs">Electrical Panel Testing</p>
                </div>
              </div>

              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-gray-900">
                      100%
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      Quality Tested
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Right visual */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsBadges;
