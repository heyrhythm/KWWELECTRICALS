// components/MainLayout.tsx
import React from 'react';
import Head from './Head';
import BottomNavigation from './BottomNavigation';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className = "" }) => {
  return (
    <>
      <Head />
      <main className={`pt-20 lg:pt-40 ${className}`}> {/* Adjust based on your head height */}
        {children}
      </main>
      <BottomNavigation />
      <Footer />
    </>
  );
};

export default MainLayout;
