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
      { name: "Node.js", level: "Familiar" },
      { name: "Express", level: "Familiar" },
    ],
  },
  {
    category: "Database & Services",
    skills: [
      { name: "MySQL", level: "Familiar" },
      { name: "PostgreSQL", level: "Learning" },
      { name: "Supabase", level: "Learning" },
      { name: "Aiven", level: "Learning" },
      { name: "Render", level: "Learning" },
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

/** Shown when "Current Focus" is selected */
export const currentFocusStack = [
  "Python",
  "Django",
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "Aiven",
  "Render",
  "PostgreSQL",
] as const;

/** Flat list of every skill in Full Arsenal */
export const fullArchiveStack = [
  ...new Set([
    ...skillCategories.flatMap((category) => category.skills.map((skill) => skill.name)),
    ...currentFocusStack,
  ]),
].sort((a, b) => a.localeCompare(b));
