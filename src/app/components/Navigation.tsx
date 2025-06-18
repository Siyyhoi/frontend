'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">MySite</h1>

        {/* Hamburger Button */}
        <button
          className="sm:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {/* Icon: 3 Bars */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Close icon (X)
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <ul
        className={`mt-4 sm:mt-0 sm:flex gap-4 sm:gap-6 list-none text-lg font-medium ${
          isOpen ? 'block' : 'hidden'
        } sm:flex`}
      >
        <li>
          <Link
            href="/"
            className="hover:text-blue-800 transition-colors duration-300"
          >
            หน้าแรก
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            เกี่ยวกับ
          </Link>
        </li>
        <li>
          <Link
            href="/service"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            เซอวิส
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            ติดต่อ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
