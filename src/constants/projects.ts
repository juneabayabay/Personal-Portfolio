import type { Project } from "@/types";

/** Selected projects shown under the featured capstone */
export const projects: Project[] = [
  {
    slug: "cbc-church-management",
    title: "CBC Church Management System",
    description:
      "Staff portal for church records — members, families, events, attendance, and notices. Includes login and role-based access.",
    image: "/projects/cbc-church-management/login.png",
    technologies: [
      "React",
      "Django REST",
      "PostgreSQL",
      "Neon",
      "Render",
      "Vercel",
    ],
    githubUrl: "https://github.com/juneabayabay/ChurchManagementSystem",
    liveUrl: "https://church-management-system.vercel.app/",
    learned: [
      "JWT login and role-based access",
      "CRUD for church records",
      "Deployed with Neon, Render, and Vercel",
    ],
  },
  {
    slug: "cainta-baptist-church",
    title: "Cainta Baptist Church Website",
    description:
      "Church website for visitors — service times, directions, giving options, and contact.",
    image: "/projects/cainta-baptist-church/preview.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/juneabayabay/Cainta-Baptist-Church",
    liveUrl: "https://cainta-baptist-church.vercel.app/",
    learned: [
      "Clear layout for first-time visitors",
      "Simple Sunday and location info",
      "Responsive site on Next.js",
    ],
  },
];
