"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-700 to-emerald-800 text-white">
      <div className="md:w-[80%] w-[90%] mx-auto py-8">
        {/* Top section with logo and navigation links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and contact information */}
          <div className="space-y-10">
            <div className="mb-4">
              <Link href="/">
                <Image src="/logo/logo.png" alt="Everest Solar Inc." width={240} height={60} className="h-16 w-auto" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm lg:text-base">(332) 250-2109</span>
              </div>

              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm lg:text-base">contact@everestsolarinc.com</span>
              </div>

              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-sm lg:text-base">500 Unicorn Park Drive</p>
                  <p className="text-sm lg:text-base">Woburn, MA 01801</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation Links */}
          <div className="lg:col-span-3 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 md:max-w-md md:mx-auto lg:ml-40 lg:mr-8">
              {/* Column 1 */}
              <div className="space-y-3">
                <Link href="/commercial" className="block text-base font-medium hover:text-emerald-300 transition-colors">
                  COMMERCIAL
                </Link>
                <Link href="/residential" className="block text-base font-medium hover:text-emerald-300 transition-colors">
                  RESIDENTIAL
                </Link>
                <Link href="/financing" className="block text-base font-medium hover:text-emerald-300 transition-colors">
                  FINANCING
                </Link>
                <Link href="/contact-us" className="block text-base font-medium hover:text-emerald-300 transition-colors">
                  CONTACT US
                </Link>
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                <Link href="/areas-we-serve" className="block text-base font-medium hover:text-emerald-300 transition-colors">
                  AREAS WE SERVE
                </Link>
                <Link href="/about" className="block text-base font-medium hover:text-emerald-300 transition-colors">
                  ABOUT
                </Link>
                <Link href="/faq" className="block text-base font-medium hover:text-emerald-300 transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-12 pt-4 border-t border-slate-600">
          <p className="text-sm text-slate-300">© {new Date().getFullYear()} EVEREST SOLAR INC.</p>
        </div>
      </div>
    </footer>
  );
}
