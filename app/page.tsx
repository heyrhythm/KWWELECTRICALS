import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ProductCategories from '@/components/ProductCategories';
import AboutKWW from '@/components/AboutKWW';
import WhyChooseKWW from '@/components/WhyChooseKWW';
import Head from '@/components/Head';
import MainLayout from '@/components/MainLayout';

export default function Home() {
  return (
    <main className="min-h-screen ">
      {/* <Header />
      <Navbar /> */}
      <MainLayout>
      {/* <Head /> */}
      <HeroSection />
      <StatsSection />
      <ProductCategories />
      <AboutKWW />
      <WhyChooseKWW />
      </MainLayout>
    </main>
  );
}
