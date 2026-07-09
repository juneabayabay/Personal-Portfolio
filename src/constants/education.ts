import type { Education } from "@/types";
import { siteConfig } from "@/config/site";

export const education: Education[] = [
  {
    school: siteConfig.school,
    degree: "Bachelor of Science in Information Technology",
    graduationYear: "2026",
    coursework: [
      "Web Development",
      "Database Systems",
      "Software Engineering",
      "Programming",
    ],
  },
];
