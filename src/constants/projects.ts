import type { Project } from "@/types";

/** Additional selected projects shown under the featured capstone */
export const projects: Project[] = [
  {
    slug: "cainta-baptist-church",
    title: "Cainta Baptist Church Website",
    description:
      "A clear, visitor-friendly church website with welcome flow, service times, directions, giving options, and contact — built for real people finding the church online.",
    image: "/projects/cainta-baptist-church/preview.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/juneabayabay/Cainta-Baptist-Church",
    liveUrl: "https://cainta-baptist-church.vercel.app/",
    learned: [
      "Structured long-form church content into scannable sections",
      "Designed clear first-visit and Sunday CTAs",
      "Shipped a responsive marketing site on Next.js",
    ],
  },
];
