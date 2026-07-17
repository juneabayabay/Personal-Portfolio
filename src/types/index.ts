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
  githubUrl?: string;
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
  credentialId?: string;
  instructor?: string;
  completedAt?: string;
}

export interface ProfileLink {
  id: string;
  name: string;
  subtitle: string;
  url: string;
  icon: "keyboard" | "linkedin" | "code" | "github" | "trophy" | "type" | "award" | "file";
  /** Placeholder card with no link (e.g. resume before PDF is ready) */
  empty?: boolean;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tier: "featured" | "standard";
  url?: string;
}
