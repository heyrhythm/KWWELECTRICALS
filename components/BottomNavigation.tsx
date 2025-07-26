'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  BuildingStorefrontIcon, 
  FunnelIcon, 
  GiftIcon, 
  UserIcon 
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeIconSolid,
  BuildingStorefrontIcon as BuildingStorefrontIconSolid,
  FunnelIcon as FunnelIconSolid,
  GiftIcon as GiftIconSolid,
  UserIcon as UserIconSolid
} from '@heroicons/react/24/solid'

interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  activeIcon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: HomeIcon,
    activeIcon: HomeIconSolid
  },
  {
    label: 'Stores',
    href: '/stores',
    icon: BuildingStorefrontIcon,
    activeIcon: BuildingStorefrontIconSolid
  },
  {
    label: 'Categories',
    href: '/categories',
    icon: FunnelIcon,
    activeIcon: FunnelIconSolid
  },
  {
    label: 'Offers',
    href: '/offers',
    icon: GiftIcon,
    activeIcon: GiftIconSolid
  },
  {
    label: 'Account',
    href: '/account',
    icon: UserIcon,
    activeIcon: UserIconSolid
  }
]

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 rounded-t-2xl 
    shadow-sm shadow-gray-900/30 safe-area-pb">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const IconComponent = isActive ? item.activeIcon : item.icon
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center px-2 py-1 transition-colors duration-200 hover:bg-gray-50 first:rounded-tl-2xl last:rounded-tr-2xl"
            >
              <IconComponent 
                className={`w-6 h-6 mb-1 ${
                  isActive 
                    ? 'text-red-500' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              />
              <span 
                className={`text-xs font-medium ${
                  isActive 
                    ? 'text-red-500' 
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
