"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";

interface User {
  id: number;
  name: string;
  email: string;
  status: "active" | "blocked";
  orders: number;
}
// Mock user data example
const initialUsers: User[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@email.com",
    status: "active",
    orders: 8,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@email.com",
    status: "active",
    orders: 2,
  },
  {
    id: 3,
    name: "Carol White",
    email: "carol@email.com",
    status: "active",
    orders: 12,
  },
];

// Filter helper functions
function matchesFilter(
  user: User,
  filter: { name: string; email: string; status: string }
) {
  return (
    (filter.name === "" ||
      user.name.toLowerCase().includes(filter.name.toLowerCase())) &&
    (filter.email === "" ||
      user.email.toLowerCase().includes(filter.email.toLowerCase())) &&
    (filter.status === "all" || user.status === filter.status)
  );
}

export default function UsersPage() {
  const [filter, setFilter] = useState({
    name: "",
    email: "",
    status: "all",
  });
  const [users, setUsers] = useState(initialUsers);

  const handleBlockToggle = (id: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "active" ? "blocked" : "active",
            }
          : user
      )
    );
  };

  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);

  const filteredUsers = users.filter((u) => matchesFilter(u, filter));

  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      <p className="text-muted-foreground mt-2 mb-6">Manage your users here.</p>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap mb-4">
        <input
          placeholder="Search name"
          className="border px-3 py-2 rounded-lg"
          value={filter.name}
          onChange={(e) => setFilter((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          placeholder="Search email"
          className="border px-3 py-2 rounded-lg"
          value={filter.email}
          onChange={(e) => setFilter((f) => ({ ...f, email: e.target.value }))}
        />
        <select
          className="border px-3 py-2 rounded-lg"
          value={filter.status}
          onChange={(e) => setFilter((f) => ({ ...f, status: e.target.value }))}
        >
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-card rounded-lg shadow-card text-left">
          <thead>
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Orders</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 text-center text-muted-foreground"
                >
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="py-2 px-3">{user.name}</td>
                  <td className="py-2 px-3">{user.email}</td>
                  <td className="py-2 px-3">
                    <span
                      className={
                        user.status === "active"
                          ? "text-green-600 font-medium"
                          : "text-red-600 font-medium"
                      } 
                    >
                      {user.status === "active" ? "Active" : "Blocked"}
                    </span>
                  </td>
                  <td className="py-2 px-3 text-center">{user.orders}</td>
                  <td className="py-2 px-3 flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => setSelectedUser(user)}
                      variant="outline"
                      className="min-w-[70px]" // Fix min width
                    >
                      View
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleBlockToggle(user.id)}
                      className={`min-w-[70px] ${
                        user.status === "active"
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {user.status === "active" ? "Block" : "Unblock"}
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* User Profile Modal (simple implementation) */}
      {selectedUser && (
        <div className="fixed inset-0 z-40 flex justify-center items-center bg-black/30">
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl"
              onClick={() => setSelectedUser(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-2">
              {selectedUser.name}'s Profile
            </h2>
            <p className="mb-1">
              Email: <span className="font-mono">{selectedUser.email}</span>
            </p>
            <p className="mb-1">
              Status:{" "}
              <span
                className={
                  selectedUser.status === "active"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {selectedUser.status}
              </span>
            </p>
            <p className="mb-1">Total Orders: {selectedUser.orders}</p>
            <div className="mt-4">
              <h3 className="font-semibold">Order History</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                <li>Order #1 - 2024-05-10 - $89.99</li>
                <li>Order #2 - 2024-04-25 - $156.50</li>
                {/* Add more mock orders or fetch real data */}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
