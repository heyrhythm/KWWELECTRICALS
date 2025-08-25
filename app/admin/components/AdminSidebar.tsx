'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Tags,
  Warehouse,
  CreditCard,
  Truck,
  Star,
  FileText,
  BarChart3,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

const navigationItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Categories', href: '/admin/categories', icon: Tags },
  { name: 'Inventory', href: '/admin/inventory', icon: Warehouse },
  { name: 'Payments', href: '/admin/payments', icon: CreditCard },
  { name: 'Shipping', href: '/admin/shipping', icon: Truck },
  { name: 'Reviews', href: '/admin/reviews', icon: Star },
  { name: 'Content', href: '/admin/content', icon: FileText },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Notifications', href: '/admin/notifications', icon: Bell },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

interface AdminSidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AdminSidebar({ collapsed, setCollapsed }: AdminSidebarProps) {
  const pathname = usePathname();
  
  return (
    <>
      {/* Sidebar Container */}
      <div
        className={cn(
          'fixed mt-4 left-0 h-full bg-card border-r border-border shadow-lg transition-all duration-300',
          collapsed ? 'w-10' : 'w-64',
          'flex flex-col',
          'z-40'
        )}
      >
        {/* Toggle button in the top-left corner */}
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {collapsed ? (
            <ChevronRight className="w-6 h-6" />
          ) : (
            <ChevronLeft className="w-6 h-6" />
          )}
        </button>

        {/* Navigation */}
        <nav className="mt-12 flex flex-col space-y-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center transition-colors duration-200 p-3 rounded-r-lg',
                  isActive
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-muted-foreground hover:text-gray-900 hover:bg-gray-100',
                  collapsed ? 'justify-center' : 'pl-5 space-x-3'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <item.icon className="w-6 h-6 flex-shrink-0" />
                {!collapsed && <span className="flex-grow">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Content Wrapper: shifts right when sidebar is open */}
      <div
        className={cn(
          'transition-all duration-300',
          collapsed ? '-ml-3' : 'ml-52',
          'flex-1 min-h-screen bg-background p-6'
        )}
      >
        {/* The rest of dashboard/content can be rendered here or in parent */}
      </div>
    </>
  );
}
