"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/benefits", label: "Benefits" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 w-full z-40">
        <div className="mx-auto flex items-center justify-between px-6 h-14 bg-[#070d23] bg-gradient-to-b from-[#0c122a] to-[#070d23]">
          <Link
            href="/"
            className="text-white font-[Times_New_Roman] text-2xl tracking-wide"
          >
            Seves
          </Link>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="group relative w-8 h-8 flex flex-col items-center justify-center gap-[6px]"
          >
            <span className="h-[2px] w-full bg-white transition-all group-hover:w-3/4" />
            <span className="h-[2px] w-full bg-white transition-all group-hover:w-3/4" />
          </button>
        </div>
      </header>

      {/* Overlay Menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center bg-[#1d2d74] text-white animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpen(false)}
            className="mt-2 text-sm hover:underline"
            aria-label="Close menu"
          >
            Close
          </button>

            <nav className="mt-6 flex-1 flex flex-col items-center justify-start gap-5 font-[Times_New_Roman] text-3xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-gray-300"
                  onClick={() => setOpen(false)}
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
