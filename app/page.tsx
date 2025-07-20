import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ProductCategories from '@/components/ProductCategories';
import AboutKWW from '@/components/AboutKWW';
import WhyChooseKWW from '@/components/WhyChooseKWW';

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProductCategories />
      <AboutKWW />
      <WhyChooseKWW />
    </main>
  );
}
