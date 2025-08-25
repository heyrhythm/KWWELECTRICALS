"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export function ProfileDropdown({ profileName = "Admin User" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="p-2 rounded-full hover:bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-600"
        type="button"
      >
        <FaUserCircle className="w-6 h-6 text-gray-700" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          tabIndex={-1}
        >
          <div className="py-1">
            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              tabIndex={0}
              className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 cursor-pointer"
            >
              {profileName}
            </Link>
            <div className="border-t border-gray-200 my-1" />
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              tabIndex={0}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              tabIndex={0}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Sign Up
            </Link>
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              tabIndex={0}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
