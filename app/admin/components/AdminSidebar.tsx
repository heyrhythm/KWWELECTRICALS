'use client';

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
  Store
} from 'lucide-react';
import { cn } from '../../admin/lib/utils';

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
  { name: 'Settings', href: '/admin/settings', icon: Settings }
];


export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 min-h-screen bg-card border-r border-border shadow-gentle">
     

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                // Only add hover effect if not active
                !isActive && 'hover:bg-gray-200 hover:text-gray-500',
                isActive
                  ? 'bg-red-600 text-white  shadow-soft'
                  : 'text-muted-foreground'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
