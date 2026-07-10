import Image from "next/image";
import { ChevronRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { learningContent, learningPosts } from "@/constants/learning";
import { formatBlogDate } from "@/lib/format-blog-date";

function BlogCard({
  post,
}: {
  post: (typeof learningPosts)[number];
}) {
  const isPublished = Boolean(post.url);
  const CardTag = isPublished ? "a" : "article";
  const cardProps = isPublished
    ? {
        href: post.url,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  const showUpdated =
    post.updatedAt && post.updatedAt !== post.publishedAt;

  return (
    <CardTag
      {...cardProps}
      className="blog-card group flex h-full flex-col overflow-hidden"
    >
      <div className="blog-card-image aspect-[5/3] overflow-hidden">
        <Image
          src={post.image}
          alt=""
          width={600}
          height={360}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[0.65rem] font-medium tracking-wider text-muted-foreground uppercase sm:text-xs">
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          {showUpdated ? (
            <span>Updated: {formatBlogDate(post.updatedAt!)}</span>
          ) : null}
        </div>

        <h3 className="mt-2 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-accent-2 sm:text-lg">
          {post.title}
        </h3>

        <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent-2 sm:text-sm">
          <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {post.readTimeMinutes} min read
        </p>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
      </div>
    </CardTag>
  );
}

export function Learning() {
  const { viewAllHref } = learningContent;

  return (
    <section
      id="learn"
      className="section-shell relative z-10 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <SectionHeading
            index="04"
            eyebrow="Field notes"
            title="Build journal"
            description="Notes from shipping — patterns learned, bugs fixed, and decisions that stuck."
            centered={false}
            className="mb-0 sm:mb-0"
          />

          {viewAllHref ? (
            <a
              href={viewAllHref}
              className="inline-flex shrink-0 items-center gap-1 pb-1 text-sm font-semibold text-accent-2 transition-colors hover:text-accent-1"
            >
              View all
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {learningPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
