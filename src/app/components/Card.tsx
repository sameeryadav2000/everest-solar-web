"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  projectType: string;
  title: string;
  location: string;
  systemSize: string;
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
}

export default function Card({ projectType, title, location, systemSize, imageSrc, imageAlt, linkHref }: CardProps) {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {/* Image section */}
      <div className="relative w-full md:w-2/5 h-64 md:h-auto">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>

      {/* Content section */}
      <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
        {/* Project type */}
        <div>
          <span className="text-green-500 font-medium uppercase text-sm">{projectType}</span>

          {/* Project title */}
          <h3 className="text-2xl md:text-3xl text-blue-600 font-bold mt-2 mb-6">{title}</h3>

          {/* Project details */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <p className="text-gray-600 font-medium uppercase text-sm">LOCATION</p>
              <p className="text-gray-800">{location}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium uppercase text-sm">SYSTEM SIZE</p>
              <p className="text-gray-800">{systemSize}</p>
            </div>
          </div>
        </div>

        {/* Learn more link */}
        <div className="mt-6">
          <Link href={linkHref} className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors">
            LEARN MORE
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
