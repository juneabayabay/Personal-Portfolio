export const siteConfig = {
  name: "Arjune Abay abay",
  firstName: "Arjune",
  lastName: "Abay abay",
  logo: "A",
  title: "Arjune Abay abay | IT Student Portfolio",
  description:
    "I build responsive web apps with React and Next.js. Open to internship opportunities.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app",
  role: "IT Student",
  tagline: "IT Student · Web Development",
  availability: "Open to internships",
  email: "hkillua222@gmail.com",
  location: "Cainta, Rizal, Philippines",
  school: "STI College Ortigas-Cainta",
  resumePath: "/resume/resume.pdf",
  social: {
    github: "https://github.com/hkillua222",
    githubUsername: "hkillua222",
    linkedin: "",
    facebook: "",
  },
  about: [
    "I'm Arjune Abay abay — an IT student at STI College Ortigas-Cainta. I enjoy exploring and learning new things in web development, including React, Next.js, TypeScript, and Supabase.",
    "I build responsive web applications and I'm open to internship opportunities where I can learn, contribute, and grow as a developer.",
    "When I'm not coding, I spend time reading books, playing sports, and learning musical instruments.",
  ],
  stats: [
    { value: "3", label: "Projects Built", color: "text-blue-400" },
    { value: "STI", label: "Student", color: "text-purple-400" },
    { value: "15", label: "Technologies", color: "text-green-400" },
    { value: "2026", label: "Graduation", color: "text-amber-400" },
  ],
} as const;
