import type { Project } from "@/types";

/** Additional selected projects shown under the featured capstone */
export const projects: Project[] = [
  {
    slug: "cbc-church-management",
    title: "CBC Church Management System",
    description:
      "Staff portal for Cainta Baptist Church — members, families, events, attendance, and notices with JWT auth and role-based access.",
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
    liveUrl:
      "https://church-management-system-git-main-juneabayabays-projects.vercel.app/",
    caseStudyUrl: "/blog/cbc-church-management-study",
    learned: [
      "JWT authentication and role-based access in UI and API",
      "CRUD for members, families, events, attendance, and notices",
      "Deployed full-stack with Neon, Render, and Vercel",
    ],
  },
  {
    slug: "cainta-baptist-church",
    title: "Cainta Baptist Church Website",
    description:
      "Visitor-friendly church website with welcome flow, service times, directions, giving options, and contact.",
    image: "/projects/cainta-baptist-church/preview.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/juneabayabay/Cainta-Baptist-Church",
    liveUrl: "https://cainta-baptist-church.vercel.app/",
    learned: [
      "Structured long-form church content into scannable sections",
      "Designed clear first-visit and Sunday CTAs",
      "Shipped a responsive marketing site on Next.js",
    ],
  },
];
