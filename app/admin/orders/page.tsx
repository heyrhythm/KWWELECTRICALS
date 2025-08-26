'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../components/ui/select';

// Enums for order status
type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

interface Order {
  id: number;
  orderNumber: string;
  user: string;
  date: string;      // ISO date string
  status: OrderStatus;
  amount: number;
}

const initialOrders: Order[] = [
  {
    id: 1,
    orderNumber: 'ORD-1001',
    user: 'Alice Johnson',
    date: '2025-08-10',
    status: 'pending',
    amount: 89.99,
  },
  {
    id: 2,
    orderNumber: 'ORD-1002',
    user: 'Bob Smith',
    date: '2025-08-09',
    status: 'shipped',
    amount: 156.50,
  },
  {
    id: 3,
    orderNumber: 'ORD-1003',
    user: 'Carol White',
    date: '2025-08-08',
    status: 'delivered',
    amount: 99.99,
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  // Filters state
  const [filterStatus, setFilterStatus] = useState<OrderStatus | 'all'>('all');
  const [filterUser, setFilterUser] = useState('');
  const [filterStartDate,  setFilterStartDate] = useState('');
  const [filterEndDate, setFilterEndDate] = useState('');

  // Load orders from API or use initial mock for this demo
  useEffect(() => {
    setLoading(true);
    // Replace with your API fetch from PostgreSQL backend
    setTimeout(() => {
      setOrders(initialOrders);
      setLoading(false);
    }, 500);
  }, []);

  // Filtered orders memoized
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      if (filterStatus !== 'all' && order.status !== filterStatus) return false;
      if (filterUser && !order.user.toLowerCase().includes(filterUser.toLowerCase())) return false;
      if (filterStartDate && order.date < filterStartDate) return false;
      if (filterEndDate && order.date > filterEndDate) return false;
      return true;
    });
  }, [orders, filterStatus, filterUser, filterStartDate, filterEndDate]);

  // Update order status handler
  const updateOrderStatus = (id: number, status: OrderStatus) => {
    // Here you would call your API to update DB then update frontend on success
    setOrders((prev) =>
      prev.map((order) => (order.id === id ? { ...order, status } : order))
    );
    // Ideally handle errors/loading states here
  };

  // Stub handlers for print & process
  const printInvoice = (orderNumber: string) => alert(`Print invoice for ${orderNumber}`);
  const printShippingLabel = (orderNumber: string) => alert(`Print shipping label for ${orderNumber}`);
  const processReturn = (orderNumber: string) => alert(`Process return for ${orderNumber}`);
  const processRefund = (orderNumber: string) => alert(`Process refund for ${orderNumber}`);

  return (
    <div className="space-y-8 pb-10">
      <h1 className="text-3xl font-bold">Orders</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-end">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="filterStatus">Status</label>
          <Select onValueChange={(val) => setFilterStatus(val as OrderStatus | 'all')} value={filterStatus}>
            <SelectTrigger id="filterStatus" className="w-40 bg-white">
              <SelectValue placeholder="All Statuses" className='bg-white' />
            </SelectTrigger>
            <SelectContent className='bg-white'>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="filterUser">User</label>
          <Input
            id="filterUser"
            placeholder="Search user"
            value={filterUser}
            onChange={(e) => setFilterUser(e.target.value)}
            className="w-40"
          />
        </div>

        <div className='flex flex-col'>
          <div>
          <label className="block text-sm font-medium mb-1" htmlFor="filterStartDate">Start Date</label>
          <Input
            type="date"
            id="filterStartDate"
            value={filterStartDate}
            onChange={(e) => setFilterStartDate(e.target.value)}
            className="w-48 md:w-40"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="filterEndDate">End Date</label>
          <Input
            type="date"
            id="filterEndDate"
            value={filterEndDate}
            onChange={(e) => setFilterEndDate(e.target.value)}
            className="w-48 md:w-40"
          />
        </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto border rounded-lg bg-card shadow-card">
        <table className="min-w-full border-collapse table-auto text-left text-sm">
          <thead className="bg-secondary text-secondary-foreground sticky top-0">
            <tr>
              <th className="p-3">Order #</th>
              <th className="p-3">User</th>
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-4 text-muted-foreground">
                  No orders found.
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id} className="border-t even:bg-secondary">
                  <td className="p-3 font-mono">{order.orderNumber}</td>
                  <td className="p-3">{order.user}</td>
                  <td className="p-3">{new Date(order.date).toLocaleDateString()}</td>
                  <td className="p-3">${order.amount.toFixed(2)}</td>
                  <td className="p-3">
                    <Select
                      onValueChange={(val) => updateOrderStatus(order.id, val as OrderStatus)}
                      value={order.status}
                    >
                      <SelectTrigger className="w-28 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="shipped">Shipped</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="p-3 flex flex-wrap gap-2">
                    <Button size="sm" onClick={() => printInvoice(order.orderNumber)}>
                      Print Invoice
                    </Button>
                    <Button size="sm" onClick={() => printShippingLabel(order.orderNumber)}>
                      Print Shipping Label
                    </Button>
                    <Button size="sm"  onClick={() => processReturn(order.orderNumber)}>
                      Process Return
                    </Button>
                    <Button size="sm"  onClick={() => processRefund(order.orderNumber)}>
                      Process Refund
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
