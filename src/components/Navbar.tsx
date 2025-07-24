// components/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/benefits", label: "Benefits" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Animate menu open
  useEffect(() => {
    if (open && overlayRef.current) {
      gsap.set(overlayRef.current, { autoAlpha: 0 });
      gsap.set(itemsRef.current, { y: 20, autoAlpha: 0 });
      gsap
        .timeline()
        .to(overlayRef.current, { autoAlpha: 1, duration: 0.3, ease: "power2.out" })
        .to(itemsRef.current, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.12,
          duration: 0.5,
          ease: "power3.out",
        }, "-=0.1");
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#070d23]/90 backdrop-blur-sm shadow" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6 lg:px-0">
          <Link
            href="/"
            className="text-white font-[Times_New_Roman] text-3xl tracking-wide select-none"
          >
            Seves
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="relative w-10 h-10 flex flex-col justify-center items-center group"
          >
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white mt-2 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-gradient-to-br from-[#1d2d74] to-[#070d23]"
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-white text-sm tracking-wide hover:underline"
          >
            Close
          </button>

          <nav className="flex flex-col items-center gap-6 font-[Times_New_Roman] text-4xl">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
                onClick={() => setOpen(false)}
                className="hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
