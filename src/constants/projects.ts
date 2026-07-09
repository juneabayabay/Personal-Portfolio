import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "student-management-system",
    title: "Student Management System",
    description:
      "A web application for managing student records with CRUD operations and role-based access.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&crop=center&auto=format",
    technologies: ["React", "Node.js", "MySQL", "Express"],
    githubUrl: "https://github.com/hkillua222",
    liveUrl: "",
    learned: [
      "Built REST APIs and connected them to a frontend",
      "Implemented database relationships and basic authentication",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&crop=center&auto=format",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/hkillua222",
    liveUrl: "",
    learned: [
      "Practiced component-based architecture and responsive design",
      "Deployed a production app to Vercel",
    ],
  },
  {
    slug: "todo-app",
    title: "To-Do App",
    description:
      "A simple task manager with add, edit, delete, and local storage persistence.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&crop=center&auto=format",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/hkillua222",
    learned: [
      "Managed client-side state and DOM updates",
      "Improved JavaScript fundamentals through a focused project",
    ],
  },
];
