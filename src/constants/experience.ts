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
      "Built a clinic web system to replace paper records and Messenger booking.",
    highlights: [
      "Built scheduling, patient records, billing, and dashboards for patients and staff.",
      "Added booking rules so appointments do not overlap and payment can be confirmed later.",
      "Deployed with React, Django, PostgreSQL (Aiven), Render, and Vercel.",
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
      "Built a staff portal for church records with login and roles.",
    highlights: [
      "Built modules for members, families, events, attendance, and notices.",
      "Added roles so Admin, Pastor, Staff, and Volunteer see only what they need.",
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
      "Built the public church website for visitors and Sunday info.",
    highlights: [
      "Added clear pages for welcome, service times, directions, giving, and contact.",
      "Made the site easy to read on phone, tablet, and desktop.",
      "Published a live site for real church visitors.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://cainta-baptist-church.vercel.app/",
    githubUrl: "https://github.com/juneabayabay/Cainta-Baptist-Church",
    current: false,
  },
];
