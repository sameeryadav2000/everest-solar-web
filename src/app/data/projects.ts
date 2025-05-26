// Project data type definition
export interface ProjectData {
  id: string;
  projectType: string;
  title: string;
  location: string;
  systemSize: string;
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
}

// Team data type definition
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkedin?: string;
  email?: string;
}

// Active projects data
export const activeCommercialProjects: ProjectData[] = [
  {
    id: "heritage-hills",
    projectType: "PRIVATE PROJECT",
    title: "Heritage Hills",
    location: "Somers, NY",
    systemSize: "33.8 kW DC",
    imageSrc: "/back_image.jpg",
    imageAlt: "Heritage Hills Solar Installation",
    linkHref: "/projects/heritage-hills",
  },
  {
    id: "woodbury-commons",
    projectType: "COMMERCIAL PROJECT",
    title: "Woodbury Commons",
    location: "Central Valley, NY",
    systemSize: "150.2 kW DC",
    imageSrc: "/images/projects/woodbury-commons.jpg",
    imageAlt: "Woodbury Commons Commercial Solar Installation",
    linkHref: "/projects/woodbury-commons",
  },
  {
    id: "white-plains-hospital",
    projectType: "HEALTHCARE PROJECT",
    title: "White Plains Hospital",
    location: "White Plains, NY",
    systemSize: "87.5 kW DC",
    imageSrc: "/images/projects/white-plains-hospital.jpg",
    imageAlt: "White Plains Hospital Solar Installation",
    linkHref: "/projects/white-plains-hospital",
  },
  {
    id: "montauk-point",
    projectType: "GOVERNMENT PROJECT",
    title: "Montauk Point Lighthouse",
    location: "Montauk, NY",
    systemSize: "42.3 kW DC",
    imageSrc: "/images/projects/montauk-point.jpg",
    imageAlt: "Montauk Point Lighthouse Solar Installation",
    linkHref: "/projects/montauk-point",
  },
];

// Completed projects data
export const completedCommercialProjects: ProjectData[] = [
  {
    id: "nyc-public-school-127",
    projectType: "EDUCATION PROJECT",
    title: "NYC Public School 127",
    location: "East Elmhurst, NY",
    systemSize: "120.5 kW DC",
    imageSrc: "/back_image.jpg",
    imageAlt: "NYC Public School 127 Solar Installation",
    linkHref: "/projects/nyc-public-school-127",
  },
  {
    id: "riverdale-community-center",
    projectType: "COMMUNITY PROJECT",
    title: "Riverdale Community Center",
    location: "Bronx, NY",
    systemSize: "56.2 kW DC",
    imageSrc: "/images/projects/riverdale-community.jpg",
    imageAlt: "Riverdale Community Center Solar Installation",
    linkHref: "/projects/riverdale-community-center",
  },
  {
    id: "hudson-valley-farm",
    projectType: "AGRICULTURAL PROJECT",
    title: "Hudson Valley Farm",
    location: "New Paltz, NY",
    systemSize: "78.4 kW DC",
    imageSrc: "/images/projects/hudson-valley-farm.jpg",
    imageAlt: "Hudson Valley Farm Solar Installation",
    linkHref: "/projects/hudson-valley-farm",
  },
  {
    id: "tarrytown-municipal-building",
    projectType: "MUNICIPAL PROJECT",
    title: "Tarrytown Municipal Building",
    location: "Tarrytown, NY",
    systemSize: "64.9 kW DC",
    imageSrc: "/images/projects/tarrytown-municipal.jpg",
    imageAlt: "Tarrytown Municipal Building Solar Installation",
    linkHref: "/projects/tarrytown-municipal-building",
  },
];

// Residential projects data
export const residentialProjects: ProjectData[] = [
  {
    id: "park-slope-brownstone",
    projectType: "RESIDENTIAL PROJECT",
    title: "Park Slope Brownstone",
    location: "Brooklyn, NY",
    systemSize: "12.4 kW DC",
    imageSrc: "/back_image.jpg",
    imageAlt: "Park Slope Brownstone Solar Installation",
    linkHref: "/projects/park-slope-brownstone",
  },
  {
    id: "westchester-modern-home",
    projectType: "RESIDENTIAL PROJECT",
    title: "Westchester Modern Home",
    location: "Scarsdale, NY",
    systemSize: "15.6 kW DC",
    imageSrc: "/images/projects/westchester-home.jpg",
    imageAlt: "Westchester Modern Home Solar Installation",
    linkHref: "/projects/westchester-modern-home",
  },
  {
    id: "hamptons-beach-house",
    projectType: "RESIDENTIAL PROJECT",
    title: "Hamptons Beach House",
    location: "Southampton, NY",
    systemSize: "18.2 kW DC",
    imageSrc: "/images/projects/hamptons-house.jpg",
    imageAlt: "Hamptons Beach House Solar Installation",
    linkHref: "/projects/hamptons-house",
  },
  {
    id: "riverdale-townhouse",
    projectType: "RESIDENTIAL PROJECT",
    title: "Riverdale Townhouse",
    location: "Bronx, NY",
    systemSize: "10.8 kW DC",
    imageSrc: "/images/projects/riverdale-townhouse.jpg",
    imageAlt: "Riverdale Townhouse Solar Installation",
    linkHref: "/projects/riverdale-townhouse",
  },
  {
    id: "garden-city-colonial",
    projectType: "RESIDENTIAL PROJECT",
    title: "Garden City Colonial",
    location: "Garden City, NY",
    systemSize: "14.5 kW DC",
    imageSrc: "/images/projects/garden-city.jpg",
    imageAlt: "Garden City Colonial Solar Installation",
    linkHref: "/projects/garden-city",
  },
  {
    id: "long-island-ranch",
    projectType: "RESIDENTIAL PROJECT",
    title: "Long Island Ranch Home",
    location: "Smithtown, NY",
    systemSize: "11.2 kW DC",
    imageSrc: "/images/projects/long-island-ranch.jpg",
    imageAlt: "Long Island Ranch Home Solar Installation",
    linkHref: "/projects/long-island-ranch",
  },
];

// Team members data
export const teamMembers: TeamMember[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    description:
      "With over 15 years in renewable energy, Sarah leads Everest Solar's vision to make solar accessible for everyone. She previously managed large-scale solar projects at Fortune 500 companies and holds an MBA in Sustainable Business.",
    imageSrc: "/team/sarah-johnson.jpg",
    imageAlt: "Sarah Johnson - CEO of EverestSolar",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    email: "sarah@everestsolar.com",
  },
];
