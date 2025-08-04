// components/DealerLocationCard.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Star,
  ArrowRight,
  Calendar,
  Truck,
  Wrench,
  BadgeCheck,
} from 'lucide-react';

interface DealerLocationCardProps {
  imageSrc: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  hours: {
    monFri: string;
    sat: string;
    sun: string;
  };
  services: string[];
  specialties: string[];
  onDirections?: () => void;
  onCall?: () => void;
}

const DealerLocationCard: React.FC<DealerLocationCardProps> = ({
  imageSrc,
  name,
  address,
  phone,
  rating,
  reviewCount,
  hours,
  services,
  specialties,
  onDirections,
  onCall,
}) => {
  return (
    <div className=" w-full bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      {/* Top Image */}
      <div className="relative h-40 w-full">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-6 text-sm">
        {/* Name & Badge */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <BadgeCheck className="w-4 h-4 text-indigo-600" />
        </div>

        {/* Dealer Tag */}
        <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-4">
          KWW Dealer
        </span>

        {/* Address */}
        <div className="flex items-start text-gray-600 space-x-2 mb-2">
          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{address}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center text-indigo-600 space-x-2 mb-4">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <a href={`tel:${phone}`} className="hover:underline">
            {phone}
          </a>
        </div>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i + 1 <= Math.round(rating)
                  ? 'fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-gray-700 ml-2">
            {rating.toFixed(1)} ({reviewCount} reviews)
          </span>
        </div>

        {/* Hours */}
        <div className="text-gray-700 mb-4 space-y-1 leading-normal">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span>
              <span className="font-medium">Mon‒Fri: </span>
              {hours.monFri}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span>
              <span className="font-medium">Sat: </span>
              {hours.sat}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span>
              <span className="font-medium">Sun: </span>
              {hours.sun}
            </span>
          </div>
        </div>

        {/* Services */}
        <p className="text-gray-900 font-medium mb-2">Services:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {services.map((service) => (
            <span
              key={service}
              className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs"
            >
              {service === 'Sales' && <Truck className="w-3 h-3 mr-1" />}
              {service === 'Installation' && <Wrench className="w-3 h-3 mr-1" />}
              {service === 'Warranty Service' && (
                <BadgeCheck className="w-3 h-3 mr-1" />
              )}
              {service}
            </span>
          ))}
        </div>

        {/* Specialties */}
        <p className="text-gray-900 font-medium mb-2">Specialties:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {specialties.map((spec) => (
            <span
              key={spec}
              className="inline-block bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full text-xs"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onDirections}
            className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg"
          >
            <span>Get Directions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onCall}
            className="flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-50 font-semibold py-2 rounded-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealerLocationCard;

