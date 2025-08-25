"use client";
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

  // Remove padding if on /admin or subpaths
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      <Head />
      <main className={`${isAdminRoute ? "" : "pt-20 lg:pt-32"} ${className}`}>
        {children}
      </main>
      <BottomNavigation />
      <Footer />
    </>
  );
};

export default MainLayout;
