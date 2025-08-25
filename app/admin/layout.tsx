'use client';

import React from 'react';
import { AdminSidebar } from './components/AdminSidebar';
import { AdminHeader } from './components/AdminHeader';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header stays fixed */}
      <header className="w-full">
        <AdminHeader />
      </header>

      {/* Sidebar + content */}
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r border-border">
          <AdminSidebar />
        </aside>

        {/* This part changes when clicking sidebar links */}
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
