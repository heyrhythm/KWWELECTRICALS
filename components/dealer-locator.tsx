// app/(public)/dealer-locator/page.tsx
'use client';

import { useMemo, useState } from 'react';
import Head from 'next/head';
import DealerLocationCard from '@/components/DealerLocationCard';
import {
  Search,
  LocateFixed,
  List as ListIcon,
  Map as MapIcon,
  ChevronDown,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* DUMMY DATA – dealers                                                */
/* ------------------------------------------------------------------ */
const dealers = [
  {
    id: 1,
    imageSrc: '/images/dealer/delhi-forklift.jpg',
    name: 'KWW Electricals – Connaught Place',
    address:
      'Shop No. 45, Connaught Place, Block A\nNew Delhi, Delhi – 110001',
    phone: '+91 9876543210',
    rating: 4.8,
    reviewCount: 156,
    state: 'Delhi',
    type: 'Dealer',
    hours: {
      monFri: '9:00 AM – 8:30 PM',
      sat: '9:00 AM – 8:00 PM',
      sun: '10:00 AM – 6:00 PM',
    },
    services: ['Sales', 'Installation', 'Warranty Service'],
    specialties: ['LED Lights', 'Smart Products', 'BLDC Fans'],
  },
  {
    id: 2,
    imageSrc: '/images/dealer/mumbai-showroom.jpg',
    name: 'KWW Electricals – Andheri West',
    address: 'Shop 12, Link Road, Andheri W,\nMumbai, Maharashtra – 400053',
    phone: '+91 9822223344',
    rating: 4.7,
    reviewCount: 98,
    state: 'Maharashtra',
    type: 'Dealer',
    hours: {
      monFri: '9:30 AM – 8:00 PM',
      sat: '9:30 AM – 8:00 PM',
      sun: 'Closed',
    },
    services: ['Sales', 'Installation'],
    specialties: ['LED Lights', 'BLDC Fans'],
  },
  {
    id: 3,
    imageSrc: '/images/dealer/kolkata-store.jpg',
    name: 'KWW Electricals – Salt Lake',
    address: 'EC-88, Sector 1, Salt Lake,\nKolkata, West Bengal – 700064',
    phone: '+91 9830098300',
    rating: 4.9,
    reviewCount: 203,
    state: 'West Bengal',
    type: 'Dealer',
    hours: {
      monFri: '10:00 AM – 7:30 PM',
      sat: '10:00 AM – 7:30 PM',
      sun: '11:00 AM – 5:00 PM',
    },
    services: ['Sales', 'Warranty Service'],
    specialties: ['Smart Products', 'BLDC Fans'],
  },
  {
    id: 4,
    imageSrc: '/images/dealer/bangalore-warehouse.jpg',
    name: 'KWW Service Center – Whitefield',
    address:
      'Plot 27, IT PL Road, Whitefield,\nBengaluru, Karnataka – 560066',
    phone: '+91 9900099009',
    rating: 4.5,
    reviewCount: 73,
    state: 'Karnataka',
    type: 'Service Center',
    hours: {
      monFri: '9:00 AM – 6:00 PM',
      sat: '9:00 AM – 1:00 PM',
      sun: 'Closed',
    },
    services: ['Warranty Service', 'Installation'],
    specialties: ['LED Lights'],
  },
  {
    id: 5,
    imageSrc: '/images/dealer/chennai-shop.jpg',
    name: 'KWW Electricals – T Nagar',
    address: 'No. 8, Rangan Street, T Nagar,\nChennai, Tamil Nadu – 600017',
    phone: '+91 9840098400',
    rating: 4.6,
    reviewCount: 110,
    state: 'Tamil Nadu',
    type: 'Dealer',
    hours: {
      monFri: '10:00 AM – 8:30 PM',
      sat: '10:00 AM – 8:30 PM',
      sun: '11:00 AM – 6:00 PM',
    },
    services: ['Sales', 'Installation'],
    specialties: ['LED Lights', 'Smart Products'],
  },
  {
    id: 6,
    imageSrc: '/images/dealer/hyderabad-store.jpg',
    name: 'KWW Electricals – Banjara Hills',
    address:
      'Road No. 10, Banjara Hills,\nHyderabad, Telangana – 500034',
    phone: '+91 9700097000',
    rating: 4.7,
    reviewCount: 142,
    state: 'Telangana',
    type: 'Dealer',
    hours: {
      monFri: '9:30 AM – 8:00 PM',
      sat: '9:30 AM – 8:00 PM',
      sun: '10:00 AM – 5:00 PM',
    },
    services: ['Sales', 'Installation', 'Warranty Service'],
    specialties: ['LED Lights', 'Smart Products', 'BLDC Fans'],
  },
];

/* ------------------------------------------------------------------ */
/* PAGE COMPONENT                                                      */
/* ------------------------------------------------------------------ */
export default function DealerLocator() {
  /* ────────── local UI state ────────── */
  const [query, setQuery] = useState('');
  const [stateFilter, setStateFilter] = useState('All States');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  /* ────────── derived filtered list ─── */
  const filtered = useMemo(
    () =>
      dealers.filter((d) => {
        const q = query.toLowerCase();
        const matchesQuery =
          q === '' ||
          d.name.toLowerCase().includes(q) ||
          d.address.toLowerCase().includes(q);

        const matchesState = stateFilter === 'All States' || d.state === stateFilter;
        const matchesType = typeFilter === 'All Types' || d.type === typeFilter;

        return matchesQuery && matchesState && matchesType;
      }),
    [query, stateFilter, typeFilter],
  );

  /* ─────────── unique dropdown values ─────────── */
  const states = Array.from(new Set(dealers.map((d) => d.state))).sort();
  const types = Array.from(new Set(dealers.map((d) => d.type))).sort();

  /* ------------------------------------------------------------------ */
  return (
    <>
      <Head>
        <title>Dealer Locator | KWW Electricals</title>
      </Head>

      <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        {/* ────────── HEADER ────────── */}
        <div className="max-w-full sm:max-w-3xl lg:max-w-6xl mx-auto mb-8 sm:mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Find a KWW Dealer Near You
          </h1>
          <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base">
            Locate authorised KWW dealers for sales, installation and after-sales support.
          </p>
        </div>

        {/* ────────── FILTER BAR ────────── */}
        <div className="max-w-full sm:max-w-3xl lg:max-w-6xl mx-auto mb-6 sm:mb-8 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by city, area, or store name…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>

            {/* State dropdown */}
            <div className="relative w-full md:w-44">
              <select
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 appearance-none bg-white text-sm"
              >
                <option>All States</option>
                {states.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Type dropdown */}
            <div className="relative w-full md:w-44">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 appearance-none bg-white text-sm"
              >
                <option>All Types</option>
                {types.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Near-me */}
            <button
              onClick={() =>
                navigator.geolocation?.getCurrentPosition(
                  (pos) =>
                    alert(
                      `Latitude: ${pos.coords.latitude}\nLongitude: ${pos.coords.longitude}\n(Implement distance filtering here)`,
                    ),
                  () => alert('Location permission denied.'),
                )
              }
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg md:ml-auto"
            >
              <LocateFixed className="w-4 h-4" />
              Near Me
            </button>
          </div>

          {/* Results count + view toggle */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-gray-600">
              Found <span className="font-medium">{filtered.length}</span>{' '}
              {filtered.length === 1 ? 'store' : 'stores'}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium border ${
                  viewMode === 'list'
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ListIcon className="w-4 h-4" />
                List
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium border ${
                  viewMode === 'map'
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <MapIcon className="w-4 h-4" />
                Map
              </button>
            </div>
          </div>
        </div>

        {/* ────────── RESULTS AREA ────────── */}
        {viewMode === 'list' ? (
          <div className="max-w-full sm:max-w-3xl lg:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
            {filtered.map((d) => (
              <DealerLocationCard
                key={d.id}
                {...d}
                onDirections={() =>
                  window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      d.address,
                    )}`,
                  )
                }
                onCall={() => window.open(`tel:${d.phone.replace(/\s+/g, '')}`)}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-full sm:max-w-3xl lg:max-w-6xl mx-auto h-[420px] sm:h-[500px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-600">
            {/* Replace with real map component */}
            Map view coming soon…
          </div>
        )}
      </main>
    </>
  );
}
