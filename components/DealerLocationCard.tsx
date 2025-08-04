// components/DealerLocationCard.tsx
'use client';

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
    <div className="w-full bg-white rounded-xl sm:rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      {/* ─────────── Image ─────────── */}
      <div className="relative h-40 sm:h-44 lg:h-48 w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* ─────────── Content ─────────── */}
      <div className="p-5 sm:p-6 lg:p-7 text-[13px] sm:text-sm">
        {/* Name + verified badge */}
        <div className="flex items-center justify-between mb-1 sm:mb-2">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{name}</h3>
          <BadgeCheck className="w-4 h-4 text-indigo-600" />
        </div>

        {/* Dealer tag */}
        <span className="inline-block bg-indigo-50 text-indigo-600 text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
          KWW Dealer
        </span>

        {/* Address */}
        <div className="flex items-start text-gray-600 gap-2 mb-2 leading-snug">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          {address}
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 text-indigo-600 mb-4">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <a href={`tel:${phone}`} className="hover:underline">
            {phone}
          </a>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i + 1 <= Math.round(rating) ? 'fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-gray-700 ml-1 text-[11px] sm:text-[12px]">
            {rating.toFixed(1)} ({reviewCount})
          </span>
        </div>

        {/* Hours */}
        <div className="text-gray-700 mb-4 space-y-1">
          {[
            { label: 'Mon‒Fri', val: hours.monFri },
            { label: 'Sat', val: hours.sat },
            { label: 'Sun', val: hours.sun },
          ].map(({ label, val }) => (
            <div key={label} className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span>
                <span className="font-medium">{label}: </span>
                {val}
              </span>
            </div>
          ))}
        </div>

        {/* Services */}
        <p className="text-gray-900 font-medium mb-1">Services:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {services.map((service) => (
            <span
              key={service}
              className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-[11px] sm:text-xs"
            >
              {service === 'Sales' && <Truck className="w-3 h-3 mr-1" />}
              {service === 'Installation' && <Wrench className="w-3 h-3 mr-1" />}
              {service === 'Warranty Service' && <BadgeCheck className="w-3 h-3 mr-1" />}
              {service}
            </span>
          ))}
        </div>

        {/* Specialties */}
        <p className="text-gray-900 font-medium mb-1">Specialties:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {specialties.map((spec) => (
            <span
              key={spec}
              className="inline-block bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full text-[11px] sm:text-xs"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* CTA buttons → 1-column on mobile, 2-column ≥ sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={onDirections}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg text-xs sm:text-sm"
          >
            Get Directions
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onCall}
            className="flex items-center justify-center gap-1 sm:gap-2 border border-gray-300 hover:bg-gray-50 font-semibold py-2 rounded-lg text-xs sm:text-sm"
          >
            <Phone className="w-4 h-4" />
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealerLocationCard;
