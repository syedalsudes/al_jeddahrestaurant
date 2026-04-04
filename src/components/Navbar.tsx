"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'BBQ PIT', href: '#bbq' },
    { name: 'BURGERS', href: '#burgers' },
    { name: 'ROLLS', href: '#rolls' },
    { name: 'DEALS', href: '#deals' },
    { name: 'LOCATION', href: '#location' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-maroon/90 backdrop-blur-sm lg:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex flex-col items-center">
            <Link href="/" className="group">
              <span className="text-accent-gold font-bold text-xl tracking-widest leading-none block">
                AL-JEDDAH
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-accent-gold hover:text-brand-light transition-colors duration-300 text-sm font-semibold tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-5">
            <Link href="/cart" className="text-accent-gold hover:text-brand-light relative">
              <ShoppingCart size={22} />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-red text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] flex items-center justify-center shadow-lg">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link 
              href="#order" 
              className="bg-accent-red hover:bg-maroon-light text-brand-light px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-lg border border-maroon-light"
            >
              ORDER NOW
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-light p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-maroon border-t border-maroon-light">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-brand-light hover:bg-accent-red px-3 py-4 text-base font-bold tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="py-4">
               <Link 
                href="#order" 
                className="inline-block bg-accent-red text-brand-light px-10 py-3 rounded-full font-extrabold"
              >
                ORDER NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;