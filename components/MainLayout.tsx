// components/MainLayout.tsx
import React from 'react';
import Head from './Head';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className = "" }) => {
  return (
    <>
      <Head />
      <main className={`pt-22 lg:pt-35 ${className}`}> {/* Adjust based on your head height */}
        {children}
      </main>
    </>
  );
};

export default MainLayout;
