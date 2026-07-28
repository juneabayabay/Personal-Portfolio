import type { Project } from "@/types";

/** Selected projects shown under the featured capstone */
export const projects: Project[] = [
  {
    slug: "cbc-church-management",
    title: "CBC Church Management System",
    description:
      "Staff portal for church operations—members, families, events, attendance, and notices—with JWT auth and role-based access.",
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
    liveUrl: "https://church-management-system-sigma-sable.vercel.app/",
    learned: [
      "JWT authentication with role-aware UI and API",
      "CRUD workflows for church records",
      "Full-stack deploy on Neon, Render, and Vercel",
    ],
  },
  {
    slug: "cainta-baptist-church",
    title: "Cainta Baptist Church Website",
    description:
      "Visitor-focused church website with service times, directions, giving options, and contact—built for first-time guests.",
    image: "/projects/cainta-baptist-church/preview.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/juneabayabay/Cainta-Baptist-Church",
    liveUrl: "https://cainta-baptist-church.vercel.app/",
    learned: [
      "Scannable layout for first-time visitors",
      "Clear Sunday and location CTAs",
      "Responsive marketing site on Next.js",
    ],
  },
];
