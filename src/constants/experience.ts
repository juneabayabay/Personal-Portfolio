import type { ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "barnabas-capstone",
    company: "Barnabas Dental Clinic",
    role: "Capstone Developer",
    type: "School project",
    period: "2025 – Present",
    duration: "Capstone",
    location: "Cainta, Rizal, Philippines",
    description:
      "Lead full-stack development for a clinic management system used for scheduling, records, and billing.",
    highlights: [
      "Owned end-to-end features across database, API, and staff/patient dashboards.",
      "Defined booking rules so appointments respect procedure length and payment status.",
      "Deployed the full stack with React, Django, PostgreSQL, Render, and Vercel.",
    ],
    technologies: ["React", "Django", "PostgreSQL", "Aiven", "Render", "Vercel"],
    liveUrl: "https://barnabas-dental.vercel.app/",
    current: true,
  },
  {
    id: "cbc-church-management",
    company: "Cainta Baptist Church",
    role: "Full-Stack Developer",
    type: "Client project",
    period: "2025 – 2026",
    duration: "Project",
    location: "Cainta, Rizal, Philippines",
    description:
      "Delivered a staff portal so church teams can manage records with clear role-based access.",
    highlights: [
      "Shipped modules for members, families, events, attendance, and notices.",
      "Implemented Admin, Pastor, Staff, and Volunteer permissions in UI and API.",
      "Deployed with Neon, Render, and Vercel.",
    ],
    technologies: ["React", "Django REST", "PostgreSQL", "Neon", "Render", "Vercel"],
    liveUrl: "https://church-management-system-sigma-sable.vercel.app/",
    githubUrl: "https://github.com/juneabayabay/ChurchManagementSystem",
    current: false,
  },
  {
    id: "cainta-church",
    company: "Cainta Baptist Church",
    role: "Web Developer",
    type: "Client project",
    period: "2024 – 2025",
    duration: "Project",
    location: "Cainta, Rizal, Philippines",
    description:
      "Built the public church website for first-time visitors and Sunday information.",
    highlights: [
      "Organized welcome, service times, directions, giving, and contact into clear pages.",
      "Shipped a responsive Next.js site for real church visitors.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://cainta-baptist-church.vercel.app/",
    githubUrl: "https://github.com/juneabayabay/Cainta-Baptist-Church",
    current: false,
  },
];
