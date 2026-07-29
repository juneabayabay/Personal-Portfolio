function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "https://your-portfolio.vercel.app";
}

export const siteConfig = {
  name: "Arjune Abay Abay",
  firstName: "Arjune",
  lastName: "Abay Abay",
  logo: "logo",
  title: "Arjune Abay Abay | IT Student & Aspiring Software Engineer",
  description:
    "IT student learning full-stack web development through school and client projects. Open to internships.",
  url: resolveSiteUrl(),
  role: "IT Student",
  headline: "IT Student · Aspiring Software Engineer",
  tagline: "BS Information Technology · STI College · Class of 2027",
  availability: "Open to internships",
  heroIntro:
    "Curious IT student building web apps for school and real clients. I enjoy exploring new ideas, learning from each project, and growing into software engineering.",
  lookingFor:
    "Looking for a software engineering or web development internship where I can learn from a team and contribute to real features.",
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
