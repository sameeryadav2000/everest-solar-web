import React from "react";
import Image from "next/image";
import TeamCard from "@/src/app/components/TeamCard";
import { teamMembers } from "@/src/app/data/projects";
import Link from "next/link";

export const metadata = {
  title: "About Us | Everest Solar Inc.",
  description:
    "Learn about Everest Solar's mission to make clean energy accessible through innovative solar solutions and exceptional service.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[600px]">
          <Image src="/images/about.jpg" alt="About Everest Solar" fill className="object-cover" priority />
        </div>

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40">
          <div className="w-[90%] md:w-[80%] mx-auto h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-3xl lg:text-5xl font-bold text-amber-400 mb-6 drop-shadow-lg">ABOUT EVEREST SOLAR</h1>
              <p className="text-base text-gray-200 drop-shadow-md">
                <span className="text-green-400 font-semibold">Everest Solar</span> is a community-based, leading residential solar company
                serving homeowners and businesses across Massachusetts (MA), New Hampshire (NH), Rhode Island (RI), Connecticut (CT), New
                York (NY), North Carolina (NC), Maryland (MD), Colorado (CO), Texas (TX) and growing. We specialize in delivering
                cutting-edge <span className="text-sky-400 font-medium">solar energy solutions</span> that help reduce energy costs,
                increase property value, and contribute to a cleaner, greener planet. Our mission is to harness the limitless potential of
                the sun, empowering families, businesses, and communities to{" "}
                <span className="text-amber-400 font-medium">thrive sustainably</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="w-full py-12 md:py-16">
        <div className="w-[90%] md:w-[80%] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-sky-500 mb-4">WHO WE ARE</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
            <p className="lg:text-lg text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Everest Solar, we believe that clean energy should be accessible to everyone. Founded with a passion for environmental
              sustainability and technological innovation, we're transforming how homes and businesses power their future.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-blue-600 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="lg:w-16 lg:h-16 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="lg:w-8 lg:h-8 w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text:lg font-bold text-blue-600">Our Mission</h3>
              </div>

              <p className="text-gray-700 leading-relaxed lg:text-lg text:sm mb-6">
                Our mission is to harness the limitless potential of the sun, empowering families, businesses, and communities to thrive
                sustainably.
              </p>

              <div className="space-y-4">
                <h4 className="lg:text-2xl text:lg font-semibold text-blue-600 mb-3">At Everest Solar, we are dedicated to:</h4>

                <div className="flex items-start space-x-3">
                  <div className="lg:w-6 lg:h-6 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1 text-sm lg:text-base">Excellence</h5>
                    <p className="text-gray-700 text-sm lg:text-base">
                      Designing and installing top-quality solar panel systems tailored to your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="lg:w-6 lg:h-6 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1 text-sm lg:text-base">Innovation</h5>
                    <p className="text-gray-700 text-sm lg:text-base">
                      Staying at the forefront of solar technology for maximum efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="lg:w-6 lg:h-6 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="lg:w-4 lg:h-4 w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1 text-sm lg:text-base">Environmental Stewardship</h5>
                    <p className="text-gray-700 text-sm lg:text-base">Promoting clean energy alternatives to reduce carbon footprints.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-l-4 border-green-600 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="lg:w-16 lg:h-16 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="lg:w-8 lg:h-8 w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                <h3 className="lg:text-2xl text:lg font-bold text-green-600">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed lg:text-lg text:sm">
                To create a sustainable future where renewable energy is the primary power source for communities worldwide. We envision a
                world where every home and business harnesses the power of the sun, contributing to a cleaner planet and energy-secure
                society for future generations.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="lg:text-2xl text:lg font-bold text-center text-gray-800 mb-8">Our Core Values</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Integrity */}
              <div className="text-center">
                <div className="lg:w-16 lg:h-16 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="lg:w-8 lg:h-8 w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="lg:text-2xl text:lg font-semibold text-gray-800 mb-2">Integrity</h4>
                <p className="text-gray-600 lg:text-lg text:sm">
                  Transparent communication, honest pricing, and ethical business practices in every interaction.
                </p>
              </div>

              {/* Innovation */}
              <div className="text-center">
                <div className="lg:w-16 lg:h-16 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="lg:w-8 lg:h-8 w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="lg:text-2xl text:lg font-semibold text-gray-800 mb-2">Innovation</h4>
                <p className="text-gray-600 lg:text-lg text:sm">
                  Embracing cutting-edge technology and continuously improving our solar solutions.
                </p>
              </div>

              {/* Excellence */}
              <div className="text-center">
                <div className="lg:w-16 lg:h-16 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="lg:w-8 lg:h-8 w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h4 className="lg:text-2xl text:lg font-semibold text-gray-800 mb-2">Excellence</h4>
                <p className="text-gray-600 lg:text-lg text:sm">
                  Delivering superior quality installations and exceptional customer service every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="w-full py-12 md:py-16 bg-gray-50">
        <div className="w-[90%] md:w-[80%] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-sky-500 mb-4">OUR TEAM</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-6"></div>
            <p className="lg:text-lg text-sm max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who make Accord Power's mission possible. Our team combines decades of experience in solar
              energy, engineering, and customer service.
            </p>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                position={member.position}
                description={member.description}
                imageSrc={member.imageSrc}
                imageAlt={member.imageAlt}
                linkedin={member.linkedin}
                email={member.email}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
