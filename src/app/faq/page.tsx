"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How much can I save with solar panels?",
      answer:
        "Most homeowners save 70-90% on their electricity bills with solar. Your exact savings depend on your current energy usage, roof size, local utility rates, and available incentives. Our team provides a detailed savings analysis during your free consultation to show your potential monthly and annual savings.",
    },
    {
      question: "How long does solar installation take?",
      answer:
        "The typical solar installation process takes 1-3 months from contract signing to system activation. This includes design approval (1-2 weeks), permit acquisition (2-4 weeks), installation day (1-2 days), and utility interconnection (2-6 weeks). We handle all paperwork and coordinate with local authorities to streamline the process.",
    },
    {
      question: "What financing options are available?",
      answer:
        "We offer multiple financing solutions including zero-down solar loans, cash purchases, and leasing options. Our solar loans feature competitive rates from 2.99% APR with terms up to 25 years. We also help you maximize federal tax credits, state rebates, and local incentives to reduce your overall cost.",
    },
    {
      question: "Do solar panels work during cloudy days or winter?",
      answer:
        "Yes! Solar panels generate electricity even on cloudy days, though at reduced capacity. Modern panels are highly efficient and can produce 10-25% of their peak output on overcast days. In winter, panels actually perform better in cold temperatures, and snow typically slides off or melts quickly.",
    },
    {
      question: "What happens if my solar panels need repair?",
      answer:
        "All our installations come with comprehensive warranties covering equipment (25 years) and workmanship (10 years). We provide ongoing maintenance services and 24/7 system monitoring. If issues arise, our certified technicians respond quickly to restore your system to optimal performance.",
    },
    {
      question: "Will solar panels increase my property value?",
      answer:
        "Studies show that homes with solar panels sell for 3-4% more than comparable homes without solar. The National Renewable Energy Laboratory found that for every $1 in annual electricity bill savings, home value increases by $20. Solar is considered a premium home improvement that attracts eco-conscious buyers.",
    },
    {
      question: "How do I know if my roof is suitable for solar?",
      answer:
        "Most roofs are suitable for solar, but ideal conditions include south-facing orientation, minimal shading, and structural integrity. We conduct a comprehensive site assessment using satellite imagery and on-site inspection to evaluate roof condition, angle, shading, and electrical system compatibility before designing your custom solar solution.",
    },
    {
      question: "What maintenance do solar panels require?",
      answer:
        "Solar panels require minimal maintenance. We recommend annual professional cleaning and inspection, though panels are largely self-cleaning in most climates. Our monitoring systems alert us to any performance issues, and we provide preventive maintenance services to ensure your system operates at peak efficiency for decades.",
    },
    {
      question: "Can I add battery storage to my solar system?",
      answer:
        "Absolutely! Battery storage systems can be installed with new solar installations or added to existing systems. Batteries provide backup power during outages, allow you to use solar energy at night, and can help reduce peak-time electricity costs. We offer Tesla Powerwall and other leading battery solutions.",
    },
    {
      question: "What happens to my solar panels at the end of their life?",
      answer:
        "Solar panels last 25-30+ years and are 95% recyclable. We partner with solar recycling programs to ensure responsible disposal and material recovery. Many components like aluminum frames, glass, and silicon can be repurposed for new panels, making solar a truly sustainable energy solution.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[600px]">
          <Image src="/images/faq.jpg" alt="Solar FAQ" fill className="object-cover" priority />
        </div>

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40">
          <div className="w-[90%] md:w-[80%] mx-auto h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-3xl lg:text-5xl font-bold text-amber-400 mb-6 drop-shadow-lg">Your Solar Questions Answered</h1>
              <p className="text-base text-slate-100 drop-shadow-md">
                Get expert answers to common questions about <span className="text-sky-400 font-medium">solar energy</span>,
                <span className="text-green-400 font-medium"> installation</span>, and
                <span className="text-amber-400 font-medium"> financing</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full py-12 md:py-16">
        <div className="w-[90%] md:w-[80%] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-sky-500 mb-4">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-4"></div>
            <p className="lg:text-lg text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about solar energy, our installation process, financing options, and more.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <h3 className="lg:text-lg text-sm font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <svg
                    className={`lg:w-6 lg:h-6 w-3 h-3 text-blue-600 transform transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="lg:text-lg text-sm text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl lg:text-lg text-sm mx-auto">
              Our solar experts are here to help! Contact us for personalized answers about your specific situation and a free solar
              consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@everestsolarinc.com?subject=Service Area Inquiry&body=Hi, I would like to know if you serve my area. My location is:">
                <button className="text-sm xl:text-md bg-blue-500 text-white font-medium py-3 px-6 rounded hover:bg-slate-500 transition-colors">
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
