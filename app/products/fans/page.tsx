// app/products/fans/page.tsx
import React from 'react';
// import ProductCard from '@/components/ProductCard';
// import Navbar from '@/components/Navbar';
import HeroSection from '../../../components/fans/HeroSection';
import MainLayout from '../../../components/MainLayout';
import FanCategories from '../../../components/fans/FanCategories';
import PopularPicks from '../../../components/fans/PopularPicks';

const fansData = [
  {
    id: 1,
    name: 'Ceiling Fan Pro 52"',
    image: '/images/fans/ceiling-fan-1.jpg',
    price: 3999,
    originalPrice: 4999,
    rating: 4,
    features: ['Energy Efficient', '5 Speed Control', 'Remote Control', 'LED Light']
  },
  {
    id: 2,
    name: 'Table Fan Deluxe',
    image: '/images/fans/table-fan-1.jpg',
    price: 1299,
    originalPrice: 1599,
    rating: 5,
    features: ['Oscillating', 'Adjustable Height', '3 Speed Settings']
  },
  {
    id: 3,
    name: 'Exhaust Fan Heavy Duty',
    image: '/images/fans/exhaust-fan-1.jpg',
    price: 899,
    rating: 4,
    features: ['High CFM', 'Low Noise', 'Rust Proof']
  },
  {
    id: 4,
    name: 'Pedestal Fan Premium',
    image: '/images/fans/pedestal-fan-1.jpg',
    price: 2199,
    originalPrice: 2699,
    rating: 4,
    features: ['Remote Control', 'Timer Function', 'Oscillating']
  },
  {
    id: 5,
    name: 'Wall Mount Fan',
    image: '/images/fans/wall-fan-1.jpg',
    price: 1799,
    rating: 4,
    features: ['Space Saving', 'Tilt Adjustment', 'High Speed']
  },
  {
    id: 6,
    name: 'Industrial Fan 24"',
    image: '/images/fans/industrial-fan-1.jpg',
    price: 5999,
    rating: 5,
    features: ['Heavy Duty', 'Metal Body', 'High Performance']
  }
];

const page: React.FC = () => {
    
  return (
    <main>
    <MainLayout>
    <HeroSection /> 
    <FanCategories />
    <PopularPicks/>
  </MainLayout>
  </main>
    
  );
};

export default page;
