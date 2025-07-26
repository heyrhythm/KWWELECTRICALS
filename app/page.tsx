import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ProductCategories from '@/components/ProductCategories';
import AboutKWW from '@/components/AboutKWW';
import WhyChooseKWW from '@/components/WhyChooseKWW';
import Head from '@/components/Head';
import MainLayout from '@/components/MainLayout';
import ProductCategoryGrid from '@/components/ProductCategoryGrid';
import MustPickProducts from '@/components/MustPickProducts';
import Footer from '@/components/Footer';
import FeaturedProducts from '@/components/FeaturedProducts';

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden ">
      {/* <Header />
      <Navbar /> */}
      <MainLayout>
      {/* <Head /> */}
      <ProductCategoryGrid />
      <HeroSection />
      <StatsSection />
      <ProductCategories />
      <AboutKWW />
      <MustPickProducts />
      
      <WhyChooseKWW />
      <FeaturedProducts />
      <Footer />
      </MainLayout>
    </main>
  );
}
