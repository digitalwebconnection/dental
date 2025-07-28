// components/NavBar.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo (2).png'; // put your asset here

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#contact', label: 'Contact' },
];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Header transparency → solid on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent background scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
  }, [drawerOpen]);

  // Close drawer on ESC
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    },
    []
  );

  useEffect(() => {
    if (drawerOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [drawerOpen, handleKey]);

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-white/90 shadow backdrop-blur dark:bg-slate-400/90'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" aria-label="Go to homepage">
            <Image
              src={logo}
              priority
              alt="Site logo"
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden gap-8 md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setDrawerOpen((p) => !p)}
            aria-label="Toggle navigation menu"
            className="relative flex h-10 w-10 flex-col items-center justify-center md:hidden"
          >
            <span
              className={`h-[2px] w-6 bg-current transition-transform duration-300 ${
                drawerOpen ? 'translate-y-1 rotate-45' : ''
              }`}
            />
            <span
              className={`mt-2 h-[2px] w-6 bg-current transition-transform duration-300 ${
                drawerOpen ? '-translate-y-1 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Sliding panel */}
            <motion.nav
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-6 overflow-y-auto bg-white px-8 py-24 shadow-lg dark:bg-slate-900 md:hidden"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setDrawerOpen(false)}
                  className="text-lg font-semibold text-gray-800 outline-none transition-colors hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
                >
                  {label}
                </Link>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
