"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative">
      {/* Logo positioned absolutely to overlap both sections */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[80%] z-10 pointer-events-none">
        <div className="px-4 pt-4 lg:pt-2">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Company Logo"
              width={400}
              height={96}
              className="h-14 lg:h-24 w-auto pointer-events-auto cursor-pointer"
              priority
            />
          </Link>
        </div>
      </div>

      <nav className="bg-slate-200 text-slate-900 shadow-md">
        <div className="w-[80%] mx-auto px-4">
          {/* Top section with phone and areas we serve - Hidden on mobile and tablet */}
          <div className="hidden lg:flex justify-end items-center py-2 text-xs xl:text-sm">
            <div className="flex items-center space-x-3 lg:space-x-6">
              <a
                href="https://wa.me/13322502109"
                className="font-medium text-slate-700 hover:text-green-400 transition-colors flex items-center gap-2 lg:pointer-events-none lg:hover:text-slate-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* WhatsApp Icon */}
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                </svg>
                (332) 250-2109
              </a>
              <Link href="/areas-we-serve" className="text-slate-600 hover:text-sky-500 transition-colors">
                AREAS WE SERVE
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-sky-500 transition-colors">
                ABOUT
              </Link>
              <Link href="/faq" className="text-slate-600 hover:text-sky-500 transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Main navbar section - with space for logo */}
          <div className="flex items-center justify-between py-5 lg:py-4">
            {/* Empty space for logo */}
            <div className="w-48 lg:w-64"></div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/commercial"
                className="text-base xl:text-lg font-medium text-slate-700 hover:text-sky-500 hover:border-sky-500 transition-colors border-b-2 border-transparent pb-1"
              >
                COMMERCIAL
              </Link>
              <Link
                href="/residential"
                className="text-base xl:text-lg font-medium text-slate-700 hover:text-sky-500 hover:border-sky-500 transition-colors border-b-2 border-transparent pb-1"
              >
                RESIDENTIAL
              </Link>
              <Link
                href="/financing"
                className="text-base xl:text-lg font-medium text-slate-700 hover:text-sky-500 hover:border-sky-500 transition-colors border-b-2 border-transparent pb-1"
              >
                FINANCING
              </Link>

              {/* Get Started Button */}
              <button
                onClick={() => window.open("https://calendly.com/everest_solar/30min", "_blank")}
                className="text-sm xl:text-md px-4 xl:px-6 py-2 rounded font-medium bg-sky-500 text-white hover:bg-sky-600 hover:scale-105 transition-all duration-300 border-none"
              >
                GET STARTED
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md bg-sky-500/20 hover:bg-sky-500/30 transition-colors relative z-20"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-slate-700 transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-slate-700 transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden fixed inset-0 z-50 bg-gradient-to-br from-slate-600 to-slate-500 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Mobile header with logo and close button */}
            <div className="flex items-center justify-between p-4 border-b border-slate-400">
              <Image src="/logo.png" alt="Company Logo" width={200} height={32} className="h-14 w-auto" />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md bg-sky-500/30 hover:bg-sky-500/40 transition-colors"
                aria-label="Close mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="block w-5 h-0.5 bg-white transform rotate-45 translate-y-1"></span>
                  <span className="block w-5 h-0.5 bg-white opacity-0"></span>
                  <span className="block w-5 h-0.5 bg-white transform -rotate-45 -translate-y-1"></span>
                </div>
              </button>
            </div>

            <div className="flex flex-col h-full p-6 pb-20 space-y-8">
              {/* Mobile phone number */}
              <div className="pb-2 border-b border-slate-400">
                <a
                  href="https://wa.me/13322502109"
                  className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* WhatsApp Icon */}
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                  </svg>
                  (332) 250-2109
                </a>
              </div>

              {/* Main navigation links */}
              <Link
                href="/commercial"
                className="block text-base font-medium text-white hover:text-sky-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                COMMERCIAL
              </Link>
              <Link
                href="/residential"
                className="block text-base font-medium text-white hover:text-sky-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                RESIDENTIAL
              </Link>
              <Link
                href="/financing"
                className="block text-base font-medium text-white hover:text-sky-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FINANCING
              </Link>

              {/* Secondary links */}
              <div className="pt-2 space-y-3 border-t border-slate-400">
                <Link
                  href="/areas-we-serve"
                  className="block text-sm text-slate-200 hover:text-sky-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AREAS WE SERVE
                </Link>
                <Link
                  href="/about"
                  className="block text-sm text-slate-200 hover:text-sky-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link
                  href="/faq"
                  className="block text-sm text-slate-200 hover:text-sky-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </div>

              {/* Mobile Get Started Button */}
              <div className="pt-4">
                <Link href="/get-started" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full px-6 py-3 rounded font-medium bg-sky-500 text-white hover:bg-sky-600 hover:scale-102 transition-all duration-300 border-none">
                    GET STARTED
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
