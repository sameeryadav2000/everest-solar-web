import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Solar Financing | Everest Solar Inc.",
  description: "Flexible financing options for your solar installation. Make solar affordable with our financing solutions.",
};

export default function FinancingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[600px]">
          <Image src="/images/financing.jpg" alt="Commercial" fill className="object-cover" priority />
        </div>

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40">
          <div className="w-[90%] md:w-[80%] mx-auto h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-3xl lg:text-5xl font-bold text-amber-400 mb-6 drop-shadow-lg">Affordable Solar Financing</h1>
              <p className="text-lg text-slate-100 mb-4 drop-shadow-md">
                <span className="text-emerald-400 font-semibold">Everest Solar</span> makes solar accessible with
                <span className="text-purple-400 font-medium"> flexible financing options</span> including zero-down programs and
                competitive rates.
              </p>
              <p className="text-base text-slate-200 drop-shadow-md">
                Start saving from <span className="text-lime-400 font-medium">day one</span> with solar loans, leases, and
                <span className="text-rose-400 font-medium"> power purchase agreements</span> tailored to fit your budget and maximize your{" "}
                <span className="text-teal-400 font-medium">energy savings</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full py-12 md:py-16 bg-gray-50">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Flexible Terms */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <svg className="md:w-16 md:h-16 w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14c-3.314 0-6-1.343-6-3s2.686-3 6-3 6 1.343 6 3-2.686 3-6 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 20c-3.314 0-6-1.343-6-3s2.686-3 6-3 6 1.343 6 3-2.686 3-6 3z"
                  />
                </svg>
              </div>
              <h3 className="md:text-xl text-md font-bold text-blue-600 mb-4">Flexible Terms</h3>
              <p className="md:text-md text-sm text-gray-600 leading-relaxed">
                Choose from a variety of financing options tailored to your budget. We offer terms from 5 to 25 years with competitive
                interest rates. Our flexible payment plans ensure that going solar fits comfortably within your financial goals, making
                clean energy accessible for every homeowner.
              </p>
            </div>

            {/* Zero Down Payment */}
            <div className="text-center border-l border-r border-gray-300 px-8">
              <div className="flex justify-center mb-6">
                <svg className="md:w-16 md:h-16 w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="md:text-xl text-md font-bold text-blue-600 mb-4">Zero Down Payment</h3>
              <p className="md:text-md text-sm text-gray-600 leading-relaxed">
                Start saving immediately with our zero down payment options. No upfront costs means you can begin generating clean energy
                and reducing your electricity bills from day one. Our financing solutions are designed to make your monthly solar payment
                less than your current utility bill, creating instant savings.
              </p>
            </div>

            {/* Quick Approval */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <svg className="md:w-16 md:h-16 w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <h3 className="md:text-xl text-md font-bold text-blue-600 mb-4">Quick Approval</h3>
              <p className="md:text-md text-sm text-gray-600 leading-relaxed">
                Get approved in minutes with our streamlined application process. Our partnerships with leading solar financing companies
                ensure fast decisions and competitive rates. Most applications are processed within 24 hours, so you can move forward with
                your solar installation without delay.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 relative overflow-visible">
        <div className="md:w-[70%] relative">
          <div className="relative h-[40vh]">
            <Image src="/images/financing_banner.jpg" alt="enterprise solutions" fill className="object-cover rounded-lg" priority />

            {/* Content section positioned absolutely within the image */}
            <div className="absolute inset-4 flex items-center justify-center md:top-1/2 md:right-0 md:transform md:translate-x-1/2 md:-translate-y-1/2 z-10">
              <div className="bg-white/95 backdrop-blur-sm p-4 md:p-8 rounded-lg shadow-lg max-w-sm lg:max-w-md">
                <h1 className="text-base md:text-2xl font-bold text-sky-500 mb-3">FLEXIBLE SOLAR FINANCING OPTIONS</h1>
                <div className="w-12 md:w-16 h-1 bg-sky-500 mb-3"></div>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3">
                  Make solar affordable with our comprehensive financing solutions. From zero-down solar loans to lease programs and PPAs,
                  our financial experts will find the perfect payment plan that fits your budget and maximizes your savings.
                </p>
                <button className="text-xs md:text-sm bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-3 md:px-6 py-2 md:py-3 rounded-md font-semibold transition-colors">
                  SOLAR FINANCING
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financing Process Section */}
      <div className="w-full pb-12 md:pb-16">
        <div className="w-[90%] md:w-[80%] mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-sky-500 mb-4">OUR FINANCING PROCESS</h2>
            <div className="w-32 h-1 bg-sky-500"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="text-green-500 font-semibold text-sm mb-2">STEP 01</div>
              <h3 className="md:text-xl text-md font-bold text-blue-600 mb-4">Complete Application</h3>
              <p className="md:text-md text-sm text-gray-600 leading-relaxed">
                Begin your solar financing journey with our simple online application. Provide basic information about your home, income,
                and energy usage. Our secure platform protects your data while connecting you with the best financing options available for
                your specific situation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative border-l-2 border-gray-200 pl-8 md:pl-6">
              <div className="text-green-500 font-semibold text-sm mb-2">STEP 02</div>
              <h3 className="md:text-xl text-md font-bold text-blue-600 mb-4">Instant Pre-Approval</h3>
              <p className="md:text-md text-sm text-gray-600 leading-relaxed">
                Receive your financing decision within minutes through our advanced approval system. We'll present multiple loan options
                with different terms and rates, allowing you to choose the payment plan that best fits your budget and financial goals.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="border-t border-gray-200 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 3 */}
              <div>
                <div className="text-green-500 font-semibold text-sm mb-2">STEP 03</div>
                <h3 className="md:text-xl text-md font-bold text-blue-600 mb-4">Contract Finalization</h3>
                <p className="md:text-md text-sm text-gray-600 leading-relaxed">
                  Review and sign your financing agreement with transparent terms and no hidden fees. Our team will guide you through every
                  detail to ensure you understand your loan structure, payment schedule, and benefits.
                </p>
              </div>

              {/* Step 4 */}
              <div className="border-l-2 border-blue-200 pl-6">
                <div className="text-green-500 font-semibold text-sm mb-2">STEP 04</div>
                <h3 className="md:text-xl text-md font-bold text-blue-600 mb-4">Solar Installation Begins</h3>
                <p className="md:text-md text-sm text-gray-600 leading-relaxed">
                  With financing secured, your solar installation can commence immediately. Our certified installers will begin work on your
                  system while your loan funds are disbursed according to project milestones.
                </p>
              </div>

              {/* Step 5 */}
              <div className="border-l-2 border-blue-200 pl-6">
                <div className="text-green-500 font-semibold text-sm mb-2">STEP 05</div>
                <h3 className="md:text-xl text-md font-bold text-blue-600 mb-4">Start Saving Money</h3>
                <p className="md:text-md text-sm text-gray-600 leading-relaxed">
                  Once your system is activated, begin enjoying immediate savings on your electricity bills. Your solar loan payments are
                  typically lower than your previous utility costs, creating positive cash flow from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
