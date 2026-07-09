import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: "Comfortable" },
      { name: "CSS", level: "Comfortable" },
      { name: "JavaScript", level: "Comfortable" },
      { name: "TypeScript", level: "Learning" },
      { name: "React", level: "Comfortable" },
      { name: "Next.js", level: "Learning" },
      { name: "Tailwind CSS", level: "Comfortable" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: "Learning" },
      { name: "Django", level: "Learning" },
      { name: "Java", level: "Familiar" },
    ],
  },
  {
    category: "Database & Services",
    skills: [
      { name: "MySQL", level: "Familiar" },
      { name: "Supabase", level: "Learning" },
    ],
  },
  {
    category: "Mobile & Tools",
    skills: [
      { name: "Android Studio", level: "Familiar" },
      { name: "Git", level: "Comfortable" },
      { name: "Postman", level: "Familiar" },
    ],
  },
];
