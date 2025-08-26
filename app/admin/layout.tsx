'use client';

import React, { useState } from 'react';
import { AdminSidebar } from './components/AdminSidebar';
import { AdminHeader } from './components/AdminHeader';

const HEADER_HEIGHT = 64; // px, adjust if header height changes

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      {/* Fixed header */}
      <header className="  sticky top-0 left-0 right-0 w-auto h-16 border-b border-border bg-white z-50">
        <AdminHeader />
      </header>

      {/* Body container with padding for header */}
      <div className="flex overflow-x-hidden" >
        {/* Sidebar receives collapsed state and setter */}
        <aside
          className=" sticky top-16 h-[calc(100vh-64px)] border-r border-border bg-white"
          
        >
          <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </aside>

        {/* Main content slides right when sidebar expands */}
        <main
          className="flex-1 p-7 md:p-10 max-w-full transition-all duration-300 scale-90 md:scale-100 -ml-5 -mt-5 md:-m-0"
          style={{
            height: `calc(100vh - ${HEADER_HEIGHT}px)`,
            marginRight: collapsed ? '-1.5rem' : '-16rem', // 10 or 64 px * 4 = 40px/256px
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
