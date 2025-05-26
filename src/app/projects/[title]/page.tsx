import React from "react";
import Image from "next/image";
import Link from "next/link";
import { activeCommercialProjects, completedCommercialProjects, residentialProjects } from "@/src/app/data/projects";

export const metadata = {
  title: "Project Details | Everest Solar Inc.",
  description: "View details about our solar installation projects.",
};

export default function ProjectPage({ params }: { params: { title: string } }) {
  // Get the project ID from the URL
  const projectId = params.title;

  // Find the project in the data
  // Since we're displaying cards from these data sources, the project must exist in one of them
  const project =
    activeCommercialProjects.find((p) => p.id === projectId) ||
    completedCommercialProjects.find((p) => p.id === projectId) ||
    residentialProjects.find((p) => p.id === projectId);

  // If for some reason we can't find it (though we shouldn't reach this point)
  if (!project) {
    return (
      <div className="w-[90%] md:w-[80%] mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Project Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the project you're looking for.</p>
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Project Details */}
      <div className="w-[90%] md:w-[80%] mx-auto py-12">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-sky-500 mb-4">{project.title}</h1>
          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm text-gray-500 font-medium">LOCATION</p>
              <p className="text-lg text-gray-700">{project.location}</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <p className="text-sm text-gray-500 font-medium">SYSTEM SIZE</p>
              <p className="text-lg text-gray-700">{project.systemSize}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">PROJECT TYPE</p>
              <p className="text-lg text-gray-700">{project.projectType}</p>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <Image src={project.imageSrc} alt={project.imageAlt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
