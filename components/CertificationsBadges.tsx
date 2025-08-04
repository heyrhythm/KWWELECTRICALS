import React from 'react';
import Image from 'next/image';
import { Shield, Award, Leaf, Globe, CheckCircle, Target, TrendingUp, Users } from 'lucide-react';

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

const CertificationsBadges: React.FC<CertificationsBadgesProps> = ({ className = '' }) => {
  const certifications: Certification[] = [
    {
      id: 1,
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "ISO 9001:2015",
      description: "Quality Management System",
      color: "text-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      id: 2,
      icon: <Award className="w-8 h-8 text-white" />,
      title: "BIS Certified",
      description: "Bureau of Indian Standards",
      color: "text-green-600",
      bgColor: "bg-green-500"
    },
    {
      id: 3,
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "RoHS Compliant",
      description: "Environmentally Safe",
      color: "text-emerald-600",
      bgColor: "bg-emerald-500"
    },
    {
      id: 4,
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Energy Star",
      description: "Energy Efficiency Program",
      color: "text-orange-600",
      bgColor: "bg-orange-500"
    }
  ];

  const features: Feature[] = [
    {
      id: 1,
      icon: <Leaf className="w-5 h-5" />,
      title: "Eco-Friendly Manufacturing",
      color: "text-green-600"
    },
    {
      id: 2,
      icon: <Shield className="w-5 h-5" />,
      title: "Safety First Approach",
      color: "text-blue-600"
    },
    {
      id: 3,
      icon: <TrendingUp className="w-5 h-5" />,
      title: "International Standards",
      color: "text-orange-600"
    },
    {
      id: 4,
      icon: <Target className="w-5 h-5" />,
      title: "Global Quality Benchmarks",
      color: "text-purple-600"
    }
  ];

  return (
    <div className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Green Badges
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Committed to sustainability and safety through internationally recognized standards and certifications
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              {/* Icon Container */}
              <div className={`w-20 h-20 ${cert.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                {cert.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {cert.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-green-50 to-blue-50">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Our Commitment to Quality & Environment
              </h3>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                At KWW Electricals, we believe in responsible manufacturing that protects both our customers and the environment. Our products meet the highest international standards for quality, safety, and environmental compliance.
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Every product undergoes rigorous testing and quality checks to ensure it meets our stringent standards before reaching your home or business.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-center space-x-3">
                    <div className={`${feature.color}`}>
                      {feature.icon}
                    </div>
                    <span className="text-gray-800 font-medium text-sm">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[400px] lg:min-h-[500px]">
              {/* Placeholder for the electrical panel image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-12 h-12 text-gray-400" />
                  </div>
                  <p className="font-medium">Quality Control Image</p>
                  <p className="text-sm">Electrical Panel Testing</p>
                </div>
              </div>
              
              {/* Quality Badge Overlay */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Quality Tested</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsBadges;
