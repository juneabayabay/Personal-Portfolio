import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/components/sections/BlogCard";
import { learningPosts } from "@/constants/learning";

const HOME_BLOG_PREVIEW = 3;

export function Learning() {
  const previewPosts = learningPosts.slice(0, HOME_BLOG_PREVIEW);
  const hasMore = learningPosts.length > HOME_BLOG_PREVIEW;

  return (
    <section id="learn" className="section-block scroll-mt-nav">
      <div className="section-inner">
        <div className="section-header gap-3 sm:items-center">
          <div className="min-w-0">
            <h2 className="section-heading">Blog</h2>
            <p className="section-sub">Case studies for the systems behind my projects.</p>
          </div>
          {hasMore ? (
            <Link href="/blog" className="link-arrow shrink-0 self-start text-sm sm:self-auto">
              View all
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        <div className="grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {previewPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
