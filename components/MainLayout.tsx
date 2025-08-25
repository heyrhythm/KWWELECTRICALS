'use client';
import React from 'react';
import Head from './Head';
import BottomNavigation from './BottomNavigation';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className = "" }) => {
  const pathname = usePathname();

  // Detect if current route is /admin or any subpath
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      <Head />
      <main className={`${isAdminRoute ? '' : 'pt-20 lg:pt-32'} ${className}`}>
        {children}
      </main>
      {/* Conditionally render BottomNavigation and Footer */}
      {!isAdminRoute && (
        <>
          <BottomNavigation />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
