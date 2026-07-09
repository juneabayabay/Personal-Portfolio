export type SkillLevel = "Learning" | "Comfortable" | "Familiar";

export interface Skill {
  name: string;
  level?: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  learned: string[];
}

export interface Education {
  school: string;
  degree: string;
  graduationYear: string;
  coursework?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface ProfileLink {
  id: string;
  name: string;
  subtitle: string;
  url: string;
  icon: "keyboard" | "linkedin" | "code" | "github" | "trophy" | "type";
}
