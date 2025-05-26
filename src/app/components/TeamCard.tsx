"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function TeamCard({ name = "", position = "", description = "", imageSrc = "", imageAlt = "", linkedin = "", email = "" }) {
  const [imageError, setImageError] = useState(false);

  // Default avatar SVG component
  const DefaultAvatar = () => (
    <div className="w-full h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
      <svg className="w-24 h-24 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        {!imageError && imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || `${name} - ${position}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <DefaultAvatar />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Name and Position */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800 mb-1">{name}</h3>
          <p className="text-sky-600 font-semibold text-sm uppercase tracking-wide">{position}</p>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{description}</p>

        {/* Social Links */}
        <div className="flex space-x-3 pt-4 border-t border-slate-100">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-600 hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
