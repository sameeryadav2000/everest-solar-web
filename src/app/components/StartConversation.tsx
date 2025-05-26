"use client";

import React from "react";

export default function StartConversation() {
  return (
    <div className="w-full py-16 bg-gray-800">
      <div className="w-[80%] w-[90%] mx-auto">
        {/* Main heading */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-5xl md:text-5xl font-bold text-white mb-6">START THE CONVERSATION</h2>
          <div className="w-24 h-1 bg-white mb-8"></div>
        </div>

        {/* Content */}
        <div className="w-full text-white">
          <p className="text-lg leading-relaxed mb-8">
            Thinking about solar? Allow us to assess your electricity usage and tailor a solar (and storage) solution for you, all without
            any commitments. You'll quickly find out if solar is right for your business or home. Please let us know more about your
            objectives by filling out the form and one of our professionals will contact you with more details.
          </p>

          <button 
            onClick={() => window.open('https://calendly.com/everest_solar/30min', '_blank')}
            className="bg-transparent hover:bg-white hover:text-gray-800 border-2 border-white text-white font-semibold py-3 px-8 transition-colors duration-300 rounded"
          >
            SCHEDULE FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
}