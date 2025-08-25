import React, { useState } from 'react';
import {
  DollarSign,
  Users,
  Package,
  ShoppingCart,
  TrendingUp,
  AlertTriangle,
  RefreshCw,
  CornerUpLeft
} from 'lucide-react';
import { StatsCard } from './StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

// Sales summary tabs/simulation
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
    icon: Users,
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
  { title: "Returns", value: "97", icon: CornerUpLeft, gradient: "red" }
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
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Admin!</h1>
          <p className="text-muted-foreground mt-2 mb-3">Here's what's happening with your store today.</p>
          <div className="flex space-x-2">
            {salesTrends.map((t) => (
              <button
                key={t.range}
                onClick={() => setSelectedRange(t.range as any)}
                className={`px-3 py-1 rounded-lg font-medium transition ${
                  selectedRange === t.range
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <Button className="bg-gradient-violet hover:opacity-90 text-white shadow-soft self-end">
          <TrendingUp className="w-4 h-4 mr-2" />
          View Analytics
        </Button>
      </div>

      {/* Sales Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">{salesSummaries[selectedRange].revenue}</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">{salesSummaries[selectedRange].orders}</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Refunds</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">{salesSummaries[selectedRange].refunds}</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">{salesSummaries[selectedRange].returns}</p>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Refunds & Returns summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {refundsAndReturns.map((item, i) => (
          <Card key={item.title} className="shadow-card">
            <CardHeader>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-${item.gradient}`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Data Tables and Alerts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Top Products */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                  </div>
                  <p className="font-semibold text-green">{product.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Low Stock Alerts */}
        <Card className="shadow-card xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <AlertTriangle className="text-orange-500" /> Low Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lowStocks.length === 0 ? (
                <p className="text-muted-foreground">No products are low on stock.</p>
              ) : (
                lowStocks.map((item, idx) => (
                  <div key={item.product} className="flex items-center justify-between">
                    <span>{item.product}</span>
                    <span className="font-semibold text-orange-500">{item.stock} left</span>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
