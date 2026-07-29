import type { Project } from "@/types";

/** Selected projects shown under the featured capstone */
export const projects: Project[] = [
  {
    slug: "cbc-church-management",
    title: "CBC Church Management System",
    description:
      "Staff portal for church records—members, families, events, attendance, and notices—with login and role-based access. Built as a client learning project.",
    image: "/projects/cbc-church-management/cover.png",
    technologies: [
      "React",
      "Django REST",
      "PostgreSQL",
      "Neon",
      "Render",
      "Vercel",
    ],
    liveUrl: "https://church-management-system-sigma-sable.vercel.app/",
    caseStudyUrl: "/blog/cbc-system-study",
    learned: [
      "JWT login and role-aware screens",
      "CRUD workflows for church records",
      "Deploying with Neon, Render, and Vercel",
    ],
  },
  {
    slug: "cainta-baptist-church",
    title: "Cainta Baptist Church Website",
    description:
      "Visitor-focused church website with service times, directions, giving options, and contact—built for first-time guests.",
    image: "/projects/cainta-baptist-church/cover.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/juneabayabay/Cainta-Baptist-Church",
    liveUrl: "https://cainta-baptist-church.vercel.app/",
    caseStudyUrl: "/blog/cainta-church-website-study",
    learned: [
      "Clear layout for first-time visitors",
      "Simple Sunday and location CTAs",
      "Responsive pages on Next.js",
    ],
  },
];
