'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-3xl font-light tracking-wide">
              LYRAE <span className="text-sm font-sans text-brown">ATELIER</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/shop" 
              className="text-sm tracking-wider font-sans text-charcoal hover:text-brown transition-colors duration-300"
            >
              EXPLORE THE ATELIER
            </Link>
            <Link 
              href="/about" 
              className="text-sm tracking-wider font-sans text-charcoal hover:text-brown transition-colors duration-300"
            >
              ABOUT
            </Link>
            <Link 
              href="/cart" 
              className="relative text-sm tracking-wider font-sans text-charcoal hover:text-brown transition-colors duration-300"
            >
              CART
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-charcoal text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link
              href="/shop"
              className="block text-sm tracking-wider font-sans text-charcoal hover:text-brown transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              EXPLORE THE ATELIER
            </Link>
            <Link
              href="/about"
              className="block text-sm tracking-wider font-sans text-charcoal hover:text-brown transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/cart"
              className="block text-sm tracking-wider font-sans text-charcoal hover:text-brown transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              CART {itemCount > 0 && `(${itemCount})`}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
