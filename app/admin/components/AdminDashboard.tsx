import React, { useState } from 'react';
import {
  DollarSign,
  Users as UsersIcon,
  Package,
  ShoppingCart,
  TrendingUp,
  AlertTriangle,
  RefreshCw,
  CornerLeftUp,
} from 'lucide-react';
import { StatsCard } from './StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

// (Your existing static data arrays unchanged here)
const salesSummaries = {
  daily: { revenue: "$8,400", orders: 120, refunds: "$210", returns: "5" },
  weekly: { revenue: "$52,300", orders: 780, refunds: "$1,280", returns: "28" },
  monthly: { revenue: "$210,700", orders: 3120, refunds: "$4,320", returns: "97" }
};
const salesTrends = [
  { range: 'daily', label: 'Daily' },
  { range: 'weekly', label: 'Weekly' },
  { range: 'monthly', label: 'Monthly' }
];

// Main metrics
const statsData = [
  {
    title: 'Total Revenue',
    value: '$210,700',
    change: '+6.1% from last month',
    trend: 'up' as const,
    icon: DollarSign,
    gradient: 'green' as const
  },
  {
    title: 'Total Users',
    value: '23,456',
    change: '+1,200 from last month',
    trend: 'up' as const,
    icon: UsersIcon,
    gradient: 'blue' as const
  },
  {
    title: 'Total Orders',
    value: '3,847',
    change: '+520 from last month',
    trend: 'up' as const,
    icon: ShoppingCart,
    gradient: 'violet' as const
  },
  {
    title: 'Products',
    value: '1,234',
    change: '+35 this month',
    trend: 'up' as const,
    icon: Package,
    gradient: 'orange' as const
  }
];

const refundsAndReturns = [
  { title: "Refunds", value: "$4,320", icon: RefreshCw, gradient: "blue" },
  { title: "Returns", value: "97", icon: CornerLeftUp, gradient: "red" }
];

const topProducts = [
  { name: 'Wireless Headphones', sales: 1234, revenue: '$123,400' },
  { name: 'Smart Watch', sales: 987, revenue: '$98,700' },
  { name: 'Laptop Stand', sales: 856, revenue: '$42,800' },
  { name: 'USB-C Cable', sales: 745, revenue: '$14,900' },
  { name: 'Phone Case', sales: 623, revenue: '$18,690' }
];

const lowStocks = [
  { product: "USB-C Cable", stock: 6 },
  { product: "Laptop Stand", stock: 12 },
  { product: "Smart Watch", stock: 18 }
];

export function AdminDashboard() {
  const [selectedRange, setSelectedRange] = useState<'daily' | 'weekly' | 'monthly'>('monthly');

  return (
    <div className="space-y-8 pb-10   ">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Admin!</h1>
          <p className="text-muted-foreground mt-2 mb-3 max-w-md">
            Here's what's happening with your store today.
          </p>
          <div className="flex flex-wrap gap-2">
            {salesTrends.map(({ range, label }) => (
              <button
                key={range}
                onClick={() => setSelectedRange(range as 'daily' | 'weekly' | 'monthly')}
                className={`px-3 py-1 rounded-lg font-medium transition ${
                  selectedRange === range
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <Button className="mt-4 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <TrendingUp className="w-4 h-4" /> View Analytics
        </Button>
      </div>

      {/* Sales Summary Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.entries(salesSummaries[selectedRange]).map(([key, val]) => (
          <Card key={key} className="shadow">
            <CardHeader>
              <CardTitle className="capitalize">{key}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">{val}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsData.map(({ title, value, change, trend, icon: Icon, gradient }) => (
          <StatsCard
            key={title}
            title={title}
            value={value}
            change={change}
            trend={trend}
            icon={Icon}
            gradient={gradient}
          />
        ))}
      </div>

      {/* Refunds and Returns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {refundsAndReturns.map(({ title, value, icon: Icon, gradient }) => (
          <Card key={title} className="shadow">
            <CardHeader>
              <div className={`w-10 h-10 rounded bg-gradient-to-br from-${gradient}-400 to-${gradient}-600 flex items-center justify-center`}>
                <Icon className="text-white w-6 h-6" />
              </div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Section: Top Products and Low Stock */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Top Selling Products */}
        <Card className="shadow">
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {topProducts.map(({ name }, i) => (
                <li key={i} className="text-sm font-medium truncate">{name}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Low Stock Alerts */}
        <Card className="shadow xl:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="text-yellow-600" /> Low Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            {lowStocks.length === 0 ? (
              <p className="text-sm text-muted-foreground">No products are low on stock.</p>
            ) : (
              <ul className="space-y-2">
                {lowStocks.map(({ product, stock }, i) => (
                  <li key={i} className="flex justify-between text-sm">
                    <span>{product}</span>
                    <span className="font-semibold text-yellow-600">{stock} left</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
