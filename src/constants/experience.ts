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
      "Building a clinic management system as my capstone—learning full-stack work through a real clinic workflow.",
    highlights: [
      "Worked across database, API, and dashboards for patients and staff.",
      "Practiced booking rules so appointments respect procedure length and payment status.",
      "Deployed the stack with React, Django, PostgreSQL, Render, and Vercel.",
    ],
    technologies: ["React", "Django", "PostgreSQL", "Aiven", "Render", "Vercel"],
    liveUrl: "https://barnabas-dental.vercel.app/",
    current: true,
  },
  {
    id: "bible-app",
    company: "Bible App",
    role: "Full-Stack Developer",
    type: "Personal project",
    period: "2026",
    duration: "Project",
    location: "Cainta, Rizal, Philippines",
    description:
      "Building a public Bible reading web app—search, chapters, plans, devotionals, and prayer—while learning Astro and shipping a live product.",
    highlights: [
      "Shipped reading flows for books, chapters, search, and on-device highlights.",
      "Added plans, devotionals, journey tracking, and a prayer wall.",
      "Deployed with Astro, TypeScript, Alpine.js, Tailwind CSS, Supabase, and Vercel.",
    ],
    technologies: [
      "Astro",
      "TypeScript",
      "Alpine.js",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
    ],
    liveUrl: "https://bible-app-ochre.vercel.app/web/",
    githubUrl: "https://github.com/juneabayabay/Bible-app",
    current: true,
  },
  {
    id: "cbc-church-management",
    company: "Cainta Baptist Church",
    role: "Web Developer",
    type: "Client project",
    period: "2025 – 2026",
    duration: "Project",
    location: "Cainta, Rizal, Philippines",
    description:
      "Built a staff portal for church records while learning auth, roles, and CRUD in a real client project.",
    highlights: [
      "Shipped modules for members, families, events, attendance, and notices.",
      "Learned role-based access for Admin, Pastor, Staff, and Volunteer.",
      "Deployed with Neon, Render, and Vercel.",
    ],
    technologies: ["React", "Django REST", "PostgreSQL", "Neon", "Render", "Vercel"],
    liveUrl: "https://church-management-system-sigma-sable.vercel.app/",
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
      "Built the public church website so visitors can find Sunday info and contact details easily.",
    highlights: [
      "Organized welcome, service times, directions, giving, and contact into clear pages.",
      "Practiced responsive layout on Next.js for phone and desktop visitors.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://cainta-baptist-church.vercel.app/",
    githubUrl: "https://github.com/juneabayabay/Cainta-Baptist-Church",
    current: false,
  },
];
