export const siteConfig = {
  name: "Arjune Abay Abay",
  firstName: "Arjune",
  lastName: "Abay Abay",
  logo: "logo",
  title: "Arjune Abay Abay | Full-Stack Builder",
  description:
    "IT student and full-stack builder who ships real systems — clinic platforms, clean architecture, and relentless problem-solving.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app",
  role: "Full-Stack Builder",
  tagline: "Full-stack builder · Systems thinker · Ships under pressure",
  availability: "Open to opportunities",
  statusLabel: "STATUS",
  statusValue: "ONLINE",
  heroIntro:
    "I build end-to-end web systems with clean architecture, sharp execution, and production-minded detail — from database design to polished UI.",
  email: "hkillua222@gmail.com",
  location: "Cainta, Rizal, Philippines",
  school: "STI College Ortigas-Cainta",
  resumePath: "/resume/resume.pdf",
  linkedinProfile: "https://www.linkedin.com/in/arjune-abay-abay-470138421/",
  social: {
    github: "https://github.com/juneabayabay",
    githubUsername: "juneabayabay",
    linkedin: "https://www.linkedin.com/in/arjune-abay-abay-470138421/",
    facebook: "",
  },
  profiles: {
    monkeytypeUsername: "Strjune",
    monkeytypeSubtitle: "Typing Speed",
    codewarsUsername: "",
    codewarsSubtitle: "Coding Challenges",
  },
  signals: [
    { label: "Capstone", value: "Shipped" },
    { label: "Focus", value: "Full-stack" },
    { label: "Drive", value: "Self-taught edge" },
  ],
} as const;
