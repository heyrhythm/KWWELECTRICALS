import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Bell, User, LogOut } from 'lucide-react';
import { Button } from '../../admin/components/ui/button';
import { Input } from '../../admin/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../../admin/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../admin/components/ui/dropdown-menu';

export function AdminHeader() {
  return (
    <header className="h-16 bg-card border-b border-border shadow-soft px-10 py-10 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center flex-shrink-0">
        <Link href="/" prefetch={true} className="flex items-center scale-150 lg:scale-160 cursor-pointer">
          <Image
            src="/assets/icons/KWW Logo.svg"
            alt="KWW Electricals Logo"
            width={80}
            height={40}
            className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12"
            priority
          />
        </Link>
      </div>

      {/* Search */}
      {/* <div className="flex-1 max-w-md mx-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search products, orders, users..."
            className="pl-10 bg-secondary border-0 focus:ring-1 focus:ring-ring"
          />
        </div>
      </div> */}

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-red rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">3</span>
          </span>
        </Button>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt="Admin" />
                <AvatarFallback className="bg-gradient-violet text-white">AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                <p className="font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@spree.com</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
