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
      "Clinic management system for scheduling, records, and billing. Featured in Projects.",
    highlights: [],
    technologies: ["React", "Node.js", "Express", "MySQL"],
    current: true,
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
      "Responsive church website for service info and first-time visitors. Featured in Projects.",
    highlights: [],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://cainta-baptist-church.vercel.app/",
    githubUrl: "https://github.com/juneabayabay/Cainta-Baptist-Church",
    current: false,
  },
];
