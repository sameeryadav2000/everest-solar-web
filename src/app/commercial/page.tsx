import React from "react";
import Image from "next/image";
import Link from "next/link";
import { activeCommercialProjects, completedCommercialProjects } from "@/src/app/data/projects";
import Card from "@/src/app/components/Card";

export const metadata = {
  title: "Commercial Solar | Everest Solar Inc.",
  description: "Professional commercial solar installation services for businesses.",
};

export default function CommercialPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[600px]">
          <Image src="/images/commercial.jpg" alt="Commercial" fill className="object-cover" priority />
        </div>

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40">
          <div className="w-[90%] md:w-[80%] mx-auto h-full flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-6 drop-shadow-lg">Commercial Solar Solutions</h1>
              <p className="text-lg text-slate-100 mb-4 drop-shadow-md">
                <span className="text-orange-400 font-semibold">Everest Solar</span> helps businesses reduce operating costs with
                <span className="text-yellow-400 font-medium"> scalable commercial solar systems</span> designed for maximum efficiency.
              </p>
              <p className="text-base text-slate-200 drop-shadow-md">
                Transform your <span className="text-cyan-400 font-medium">business operations</span> with sustainable energy solutions that
                deliver <span className="text-green-400 font-medium">long-term savings</span> and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Projects Section */}
      <div className="w-full py-8 md:py-12">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-sky-500 mb-2 md:mb-4">ACTIVE PROJECTS</h2>
          <div className="w-full h-0.5 bg-sky-500 mt-3 md:mt-4"></div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            {activeCommercialProjects.map((project) => (
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

      {/* Completed Projects Section */}
      <div className="w-full py-8 md:py-12 bg-gray-100">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-sky-500 mb-2 md:mb-4">COMPLETED PROJECTS</h2>
          <div className="w-full h-0.5 bg-sky-500 mt-3 md:mt-4"></div>

          {/* Completed Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            {completedCommercialProjects.map((project) => (
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
    </>
  );
}
