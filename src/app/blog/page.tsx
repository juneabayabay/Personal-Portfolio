import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogCard } from "@/components/sections/BlogCard";
import { learningPosts } from "@/constants/learning";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Case studies and notes by ${siteConfig.name} on the systems behind the projects.`,
};

export default function BlogIndexPage() {
  return (
    <section className="section scroll-mt-nav page-top pb-16 sm:pb-24">
      <div className="section-inner">
        <Link
          href="/#learn"
          className="link-arrow text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to home
        </Link>

        <header className="mt-8 mb-8 sm:mb-10">
          <h1 className="section-heading">All case studies</h1>
          <p className="section-sub mt-2 max-w-2xl">
            Longer write-ups on how each system was built—problem, approach, and takeaways.
          </p>
        </header>

        <div className="grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
