export const siteConfig = {
  name: "Arjune Abay Abay",
  firstName: "Arjune",
  lastName: "Abay Abay",
  logo: "logo",
  title: "Arjune Abay Abay | IT Student Portfolio",
  description:
    "I'm a curious learner who enjoys building web applications and learning something new every day. Beyond coding, I enjoy reading books, listening to music, and playing sports. I believe growth comes from curiosity, consistency, and a willingness to learn, and I'm always looking for opportunities to improve both my skills and myself.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app",
  role: "Aspiring Web Developer",
  tagline: "IT Student • Aspiring Web Developer",
  availability: "📚 Always Learning",
  /** Short line for the hero — keep the full story in Academic Journey & Learning */
  heroIntro:
    "Curious learner building web applications and exploring something new every day.",
  email: "hkillua222@gmail.com",
  location: "Cainta, Rizal, Philippines",
  school: "STI College Ortigas-Cainta",
  resumePath: "/resume/resume.pdf",
  /** Your LinkedIn profile — used by hero cards, icons, contact, and footer */
  linkedinProfile: "https://www.linkedin.com/in/arjune-abay-abay-470138421/",
  social: {
    github: "https://github.com/juneabayabay",
    githubUsername: "juneabayabay",
    linkedin: "https://www.linkedin.com/in/arjune-abay-abay-470138421/",
    facebook: "",
  },
  profiles: {
    /** Username only — NOT the full URL. Example: "Strjune" */
    monkeytypeUsername: "Strjune",
    monkeytypeSubtitle: "Typing Speed",
    /** CodeWars username — optional */
    codewarsUsername: "",
    codewarsSubtitle: "Coding Challenges",
  },
} as const;
