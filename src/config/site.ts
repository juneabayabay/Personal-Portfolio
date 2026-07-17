export const siteConfig = {
  name: "Arjune Abay Abay",
  firstName: "Arjune",
  lastName: "Abay Abay",
  logo: "logo",
  title: "Arjune Abay Abay | IT Student & Aspiring Software Engineer",
  description:
    "IT student building web apps. Open to internships.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app",
  role: "IT Student",
  headline: "Aspiring Software Engineer",
  tagline: "BS Information Technology · STI College · Class of 2027",
  availability: "Open to internships",
  heroIntro:
    "I build web apps through school projects, client work, and online courses. I focus on clear structure and finishing what I start.",
  email: "hkillua222@gmail.com",
  location: "Cainta, Rizal, Philippines",
  school: "STI College Ortigas-Cainta",
  graduationYear: "2027",
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
} as const;
