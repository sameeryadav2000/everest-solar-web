import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Areas We Serve | Everest Solar Inc.",
  description:
    "Discover the locations where Everest Solar provides professional solar installation services. Find out if we serve your area for residential and commercial solar solutions.",
};

export default function AreasWeServe() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[600px]">
          <Image src="/images/areas-we-serve.jpg" alt="Areas-We-Serve" fill className="object-cover" priority />
        </div>

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40">
          <div className="w-[90%] md:w-[80%] mx-auto h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-3xl lg:text-5xl font-bold text-sky-400 mb-6 drop-shadow-lg">Solar Solutions Across Your Region</h1>
              <p className="text-lg text-slate-100 mb-4 drop-shadow-md">
                <span className="text-green-400 font-semibold">Everest Solar</span> proudly serves communities throughout the area with
                <span className="text-amber-400 font-medium"> professional solar installations</span> and exceptional service.
              </p>
              <p className="text-base text-slate-200 drop-shadow-md">
                Discover if we serve your <span className="text-emerald-400 font-medium">neighborhood</span> and join thousands of satisfied
                customers who've made the switch to <span className="text-sky-400 font-medium">clean, renewable energy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Areas We Serve Section */}
      <div className="w-full py-12 md:py-16 bg-slate-50">
        <div className="w-[90%] md:w-[80%] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-sky-500 mb-4">WHERE WE BRING SOLAR POWER</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-4"></div>
            <p className="lg:text-lg text-sm text-slate-600 max-w-2xl mx-auto">
              Serving homeowners and businesses across multiple states with reliable solar installations and comprehensive support services.
            </p>
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* California */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-sky-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sky-600 font-bold text-lg">CA</span>
                </div>
                <div>
                  <h3 className="text:lg lg:text-xl font-bold text-slate-800">California</h3>
                  <p className="text-sm text-slate-500">Primary Service Area</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Los Angeles, San Diego, San Francisco, Sacramento, Fresno, and surrounding metropolitan areas.
              </p>
            </div>

            {/* Nevada */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-emerald-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 font-bold text-lg">NV</span>
                </div>
                <div>
                  <h3 className="text:lg lg:text-xl font-bold text-slate-800">Nevada</h3>
                  <p className="text-sm text-slate-500">Expanding Coverage</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Las Vegas, Reno, Henderson, and Clark County with excellent solar incentive programs.
              </p>
            </div>

            {/* Arizona */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-600 font-bold text-lg">AZ</span>
                </div>
                <div>
                  <h3 className="text:lg lg:text-xl font-bold text-slate-800">Arizona</h3>
                  <p className="text-sm text-slate-500">High Solar Potential</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Phoenix, Tucson, Mesa, Chandler, and Scottsdale - ideal climate for maximum solar efficiency.
              </p>
            </div>

            {/* Texas */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-rose-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-rose-600 font-bold text-lg">TX</span>
                </div>
                <div>
                  <h3 className="text:lg lg:text-xl font-bold text-slate-800">Texas</h3>
                  <p className="text-sm text-slate-500">Growing Market</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Austin, Dallas, Houston, San Antonio with strong renewable energy initiatives and rebates.
              </p>
            </div>

            {/* Florida */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold text-lg">FL</span>
                </div>
                <div>
                  <h3 className="text:lg lg:text-xl font-bold text-slate-800">Florida</h3>
                  <p className="text-sm text-slate-500">Sunshine State</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Miami, Tampa, Orlando, Jacksonville - year-round solar generation with net metering benefits.
              </p>
            </div>

            {/* New York */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-bold text-lg">NY</span>
                </div>
                <div>
                  <h3 className="text:lg lg:text-xl font-bold text-slate-800">New York</h3>
                  <p className="text-sm text-slate-500">Green Incentives</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">NYC, Albany, Buffalo, Syracuse with NY-Sun incentive program and NYSERDA rebates.</p>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-sky-500 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Don't See Your Area?</h3>
            <p className="lg:text-lg text-sm mb-6 opacity-90">
              We're rapidly expanding our service coverage. Contact us to see if we can serve your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@everestsolarinc.com?subject=Service Area Inquiry&body=Hi, I would like to know if you serve my area. My location is:">
                <button className="text-sm xl:text-md bg-white text-sky-600 font-medium py-3 px-6 rounded hover:bg-slate-100 transition-colors">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
