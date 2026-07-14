export const siteConfig = {
  name: "Arjune Abay Abay",
  firstName: "Arjune",
  lastName: "Abay Abay",
  logo: "logo",
  title: "Arjune Abay Abay | Full-Stack Developer",
  description:
    "IT student and full-stack developer. I build web apps from backend to UI.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app",
  role: "Full-Stack Developer",
  tagline: "Full-stack developer · Web apps · Open to opportunities",
  availability: "Open to opportunities",
  statusLabel: "STATUS",
  statusValue: "ONLINE",
  heroIntro:
    "I build web apps from the database to the screen. I focus on clear structure and finishing projects I start.",
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
    monkeytypeUsername: "arjune_abay-abay",
    monkeytypeSubtitle: "70+ WPM",
    codewarsUsername: "",
    codewarsSubtitle: "Coding Challenges",
  },
  signals: [
    { label: "Stack", value: "Full-stack" },
    { label: "Capstone", value: "Completed" },
    { label: "Location", value: "Cainta, Rizal" },
  ],
} as const;
