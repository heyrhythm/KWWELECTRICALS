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
// import Footer from '@/components/Footer';
import FeaturedProducts from '@/components/FeaturedProducts';
import PromoComponent from '@/components/PromoComponent';
import CustomerTestimonials from '@/components/CustomerTestimonials';
import CertificationsBadges from '@/components/CertificationsBadges';
import BlogShowcase from '@/components/BlogShowcase';
import DealerPartner from '@/components/DealerPartner';
import DealerLocator from '@/components/dealer-locator';
import NoStoreBanner from '@/components/NoStoreBanner';
import SocialMediaSection from '@/components/SocialMediaSection';
import KWWElectricalsCareerPage from '@/components/KWWElectricalsCareerPage';
import Career from '@/components/career/career';


export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden ">
      {/* <Header />
      <Navbar /> */}
      
      {/* <Head /> */}
      <ProductCategoryGrid />
      <HeroSection />
      {/* <ProductCatalog /> */}
      <StatsSection />
      <ProductCategories />
      {/* <AboutKWW /> */}
      <MustPickProducts />
      
      <WhyChooseKWW />
      <FeaturedProducts />
      <PromoComponent />
      <CustomerTestimonials />
      <CertificationsBadges />
      <BlogShowcase />
      <DealerPartner />
      <DealerLocator />
      <NoStoreBanner />
      <SocialMediaSection />
      <Career/>
      {/* <KWWElectricalsCareerPage /> */}
      {/* <Footer /> */}
      
    </main>
  );
}
