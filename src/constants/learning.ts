export interface LearningPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  readTimeMinutes: number;
  /** Set when published (external link or /blog/slug later) */
  url?: string;
}

export const learningContent = {
  title: "Blogs",
  /** Link for "View All Blogs" — set when you add a /blog page or external blog */
  viewAllHref: "",
} as const;

/** Add posts here as you write them. Leave url empty for draft cards. */
export const learningPosts: LearningPost[] = [
  {
    slug: "portfolio-with-nextjs",
    title: "Building This Portfolio with Next.js",
    excerpt:
      "How I set up React, TypeScript, Tailwind, and a 3D background — and what I'd do differently next time.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=360&fit=crop&crop=center&auto=format",
    publishedAt: "2026-07-01",
    readTimeMinutes: 5,
  },
  {
    slug: "django-first-steps",
    title: "My First Steps with Python & Django",
    excerpt:
      "What I'm learning about backends, models, and connecting a database to a real app.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=360&fit=crop&crop=center&auto=format",
    publishedAt: "2026-06-15",
    readTimeMinutes: 4,
  },
  {
    slug: "beyond-the-screen",
    title: "Beyond the Screen: Books, Music & Sports",
    excerpt:
      "Why reading, music, and sports help me stay curious and consistent as a developer.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=360&fit=crop&crop=center&auto=format",
    publishedAt: "2026-05-20",
    readTimeMinutes: 3,
  },
];
