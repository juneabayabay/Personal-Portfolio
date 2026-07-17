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
      "Full-stack clinic system that replaced paper records and Messenger-based booking.",
    highlights: [
      "Owned scheduling, patient records, billing, and role-based dashboards (patient, receptionist, dentist, admin).",
      "Modeled appointment rules for procedure length, conflict prevention, and pencil booking until payment is verified.",
      "Shipped a live deployment on React, Django, PostgreSQL (Aiven), Render, and Vercel.",
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
      "Staff portal for church records with JWT auth and role-based permissions.",
    highlights: [
      "Built members, families, events, attendance, and notices with Admin / Pastor / Staff / Volunteer roles.",
      "Secured staff access with JWT login and role checks in both the UI and API.",
      "Deployed the full stack with Neon (PostgreSQL), Render (API), and Vercel (frontend).",
    ],
    technologies: ["React", "Django REST", "PostgreSQL", "Neon", "Render", "Vercel"],
    liveUrl:
      "https://church-management-system-git-main-juneabayabays-projects.vercel.app/",
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
      "Public church website for first-time visitors and Sunday information.",
    highlights: [
      "Designed a clear visitor journey: welcome, service times, directions, giving, and contact.",
      "Built a responsive marketing site so content stays readable on phone, tablet, and desktop.",
      "Published a live production site for real church visitors.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://cainta-baptist-church.vercel.app/",
    githubUrl: "https://github.com/juneabayabay/Cainta-Baptist-Church",
    current: false,
  },
];
