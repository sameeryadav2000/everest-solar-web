"use client";

import Reviews from "@/src/app/components/Reviews";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <video autoPlay loop muted playsInline className="w-full h-[70vh] object-cover">
          <source src="/videos/home_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40">
          <div className="w-[90%] md:w-[80%] mx-auto h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-3xl lg:text-5xl font-bold text-sky-400 mb-6 drop-shadow-lg">
                Everest Solar: <span className="text-green-400">Your Trusted Solar Energy Partner</span>
              </h1>
              <button
                onClick={() => window.open("https://calendly.com/everest_solar/30min", "_blank")}
                className="text-md xl:text-lg px-4 xl:px-6 py-2 rounded font-medium bg-sky-500 text-white hover:bg-sky-600 hover:scale-105 transition-all duration-300 border-none"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16">
        <div className="w-[90%] md:w-[80%] mx-auto px-4">
          {/* Main heading */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-sky-500 mb-6">WHY EVEREST SOLAR?</h2>
            <div className="w-24 h-1 bg-sky-500 mb-4"></div>
            <p className="text-gray-700 lg:text-lg text-sm leading-relaxed max-w-4xl">
              Everest Solar stands out because of their comprehensive approach to making solar accessible and affordable for everyone. With
              flexible financing options including zero-down programs, experienced in-house specialists, and exceptional customer service,
              they've built a strong reputation serving local communities. Their turn-key solutions handle everything from initial
              consultation to installation and ongoing support, allowing customers to start saving on energy costs from day one while
              contributing to a cleaner environment.
            </p>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Zero Down Options */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="lg:text-2xl text-xl font-bold text-blue-600 mb-6">Zero Down Options</h3>
              <p className="text-gray-700 lg:text-md text-sm leading-relaxed mb-6">
                Start your solar journey without any upfront costs. Our zero-down solar loans and lease programs let you begin saving on
                electricity bills immediately while paying for your system over time with affordable monthly payments that are often lower
                than your current utility bill.
              </p>
              <Link
                href="/financing"
                className="lg:text-md text-sm inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                LEARN MORE
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Flexible Payment Plans */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="lg:text-2xl text-xl font-bold text-blue-600 mb-6">Flexible Payment Plans</h3>
              <p className="text-gray-700 lg:text-md text-sm leading-relaxed mb-6">
                Choose from a variety of payment structures designed to fit your budget. Whether you prefer traditional solar loans, lease
                agreements, or power purchase agreements (PPAs), our financing specialists will help you find the perfect solution that
                maximizes your savings and cash flow.
              </p>
              <Link
                href="/financing"
                className="lg:text-md text-sm inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                LEARN MORE
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Tax Benefits & Incentives */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="lg:text-2xl text-xl font-bold text-blue-600 mb-6">Tax Benefits & Incentives</h3>
              <p className="text-gray-700 lg:text-md text-sm leading-relaxed mb-6">
                Take advantage of federal tax credits, state rebates, and local incentives that can significantly reduce your solar
                investment. Our team stays current with all available programs and will help you navigate the paperwork to ensure you
                receive every benefit you're entitled to.
              </p>
              <Link
                href="/financing"
                className="lg:text-md text-sm inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                LEARN MORE
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16">
        <div className="w-[90%] md:w-[80%] mx-auto px-4">
          {/* Main heading */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-sky-500 mb-6">SOLAR ENERGY FOR SOCIAL IMPACT</h2>
            <div className="w-24 h-1 bg-sky-500 mb-8"></div>
          </div>

          {/* Video element */}
          <div className="w-full">
            <video controls controlsList="nodownload" className="w-full h-auto rounded-lg shadow-lg">
              <source src="/videos/home_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="w-full py-16 relative overflow-visible">
        <div className="md:w-[70%] relative">
          <div className="relative h-[40vh]">
            <Image src="/images/home_page1.jpg" alt="enterprise solutions" fill className="object-cover rounded-lg" priority />

            {/* Content section positioned absolutely within the image */}
            <div className="absolute inset-4 flex items-center justify-center md:top-1/2 md:right-0 md:transform md:translate-x-1/2 md:-translate-y-1/2 z-10">
              <div className="bg-white/95 backdrop-blur-sm p-4 md:p-8 rounded-lg shadow-lg max-w-sm lg:max-w-md">
                <h1 className="text-base md:text-2xl font-bold text-sky-500 mb-3">RESIDENTIAL SOLAR SOLUTIONS</h1>
                <div className="w-12 md:w-16 h-1 bg-sky-500 mb-3"></div>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3">
                  Power your home with clean energy while dramatically reducing your monthly electricity bills. Our expert solar technicians
                  provide seamless installation and ongoing support, helping homeowners achieve energy independence with premium solar panel
                  systems designed to last decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 relative overflow-visible">
        <div className="md:w-[70%] md:ml-auto relative">
          <div className="relative h-[40vh]">
            <Image src="/images/home_page2.jpg" alt="enterprise solutions" fill className="object-cover rounded-lg" priority />

            {/* Content section positioned absolutely within the image */}
            <div className="absolute inset-4 flex items-center justify-center md:top-1/2 md:left-0 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10">
              <div className="bg-white/95 backdrop-blur-sm p-4 md:p-8 rounded-lg shadow-lg max-w-sm lg:max-w-md">
                <h1 className="text-base md:text-2xl font-bold text-sky-500 mb-3">SOLAR MAINTENANCE</h1>
                <div className="w-12 md:w-16 h-1 bg-sky-500 mb-3"></div>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3">
                  Protect your solar investment with professional maintenance services that keep your system running at peak performance.
                  Our certified technicians provide thorough cleaning, monitoring, and repairs to ensure maximum energy production and
                  extend your system's lifespan for decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Reviews />
    </>
  );
}
