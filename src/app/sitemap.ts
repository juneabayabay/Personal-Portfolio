import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getPublishedLearningPosts } from "@/constants/learning";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedLearningPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...posts,
  ];
}
