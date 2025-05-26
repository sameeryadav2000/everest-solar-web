import React from "react";
import Image from "next/image";
import Card from "@/src/app/components/Card";
import { residentialProjects } from "@/src/app/data/projects";

export const metadata = {
  title: "Residential Solar Solutions | Everest Solar Inc.",
  description: "Professional residential solar installation services for homeowners across New York.",
};

export default function ResidentialPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[600px]">
          <Image src="/images/residential.jpg" alt="Residential" fill className="object-cover" priority />
        </div>

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40">
          <div className="w-[90%] md:w-[80%] mx-auto h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-3xl lg:text-5xl font-bold text-emerald-400 mb-6 drop-shadow-lg">Transform Your Home with Solar</h1>
              <p className="text-lg text-slate-100 mb-4 drop-shadow-md">
                <span className="text-orange-400 font-semibold">Everest Solar</span> brings
                <span className="text-blue-400 font-medium"> residential solar solutions</span> directly to your doorstep with expert
                installation and unmatched customer care.
              </p>
              <p className="text-base text-slate-200 drop-shadow-md">
                Experience the benefits of <span className="text-yellow-400 font-medium">home solar energy</span> and join your neighbors
                who've already started <span className="text-emerald-400 font-medium">saving money</span> while protecting the environment
                with <span className="text-cyan-400 font-medium">sustainable power</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Residential Projects Section */}
      <div className="w-full py-8 md:py-12">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-sky-500 mb-2 md:mb-4">RESIDENTIAL PROJECTS</h2>
          <div className="w-full h-0.5 bg-sky-500 mt-3 md:mt-4"></div>

          {/* Residential Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            {residentialProjects.map((project) => (
              <Card
                key={project.id}
                projectType={project.projectType}
                title={project.title}
                location={project.location}
                systemSize={project.systemSize}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                linkHref={project.linkHref}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Residential Benefits Section */}
      <div className="w-full py-12 bg-gray-100">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-sky-500 mb-2 md:mb-4">BENEFITS OF RESIDENTIAL SOLAR</h2>
          <div className="w-full h-0.5 bg-sky-500 mt-3 md:mt-4 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-14 md:h-14 w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-8 md:w-8 h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="md:text-xl text-md font-semibold mb-2">Lower Electric Bills</h3>
              <p className="text-gray-600 md:text-md text-sm">
                Dramatically reduce or eliminate your monthly electricity costs with a custom solar solution designed for your home's needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-14 md:h-14 w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-8 md:w-8 h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="md:text-xl text-md font-semibold mb-2">Tax Incentives</h3>
              <p className="text-gray-600 md:text-md text-sm">
                Take advantage of federal tax credits, state rebates, and local incentives that significantly reduce the cost of going
                solar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-14 md:h-14 w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-8 md:w-8 h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="md:text-xl text-md font-semibold mb-2">Increased Home Value</h3>
              <p className="text-gray-600 md:text-md text-sm">
                Solar installations typically increase property values, with studies showing homes with solar sell for more than comparable
                non-solar homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
