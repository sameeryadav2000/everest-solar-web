"use client";

import React from "react";

export default function StartConversation() {
  return (
    <div className="w-full py-16 bg-gray-800">
      <div className="w-[80%] w-[90%] mx-auto">
        {/* Main heading */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-5xl md:text-5xl font-bold text-white mb-6">POWER YOUR FUTURE</h2>
          <div className="w-24 h-1 bg-white mb-8"></div>
        </div>

        {/* Content */}
        <div className="w-full text-white">
          <p className="text-lg leading-relaxed mb-8">
            Ready to slash your energy bills and gain energy independence? Our solar experts will analyze your property's potential and
            design a custom clean energy solution that maximizes your savings. Get a comprehensive energy assessment with zero pressure and
            discover how much you could save with solar technology.
          </p>

          <button
            onClick={() => window.open("https://calendly.com/everest_solar/30min", "_blank")}
            className="bg-transparent hover:bg-white hover:text-gray-800 border-2 border-white text-white font-semibold py-3 px-8 transition-colors duration-300 rounded"
          >
            GET YOUR FREE ANALYSIS
          </button>
        </div>
      </div>
    </div>
  );
}
