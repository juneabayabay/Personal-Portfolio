import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { learningContent, learningPosts } from "@/constants/learning";
import { formatBlogDate } from "@/lib/format-blog-date";
import { cn } from "@/lib/utils";

function BlogCard({
  post,
}: {
  post: (typeof learningPosts)[number];
}) {
  const isPublished = Boolean(post.url);
  const isInternal = Boolean(post.url?.startsWith("/"));
  const isUiScreenshot = post.image.startsWith("/projects/");

  const cardClassName = cn(
    "blog-card group flex h-full flex-col overflow-hidden",
  );

  const inner = (
    <>
      <div className="blog-card-image relative aspect-[16/10] shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt=""
          fill
          className={cn(
            "transition-transform duration-500 group-hover:scale-[1.03]",
            isUiScreenshot ? "object-cover object-top" : "object-cover object-center",
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
          loading="lazy"
        />
        {post.kind === "case-study" ? (
          <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[0.6rem] tracking-wider text-accent-2 uppercase backdrop-blur-md">
            Case study
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-[0.65rem] tracking-wider text-muted-foreground uppercase sm:text-xs">
          <time dateTime={post.publishedAt}>
            {formatBlogDate(post.publishedAt)}
          </time>
          <span className="inline-flex items-center gap-1.5 normal-case tracking-normal text-accent-2">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {post.readTimeMinutes} min
          </span>
        </div>

        <h3 className="mt-3 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-accent-2 sm:text-lg">
          {post.title}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        {isPublished ? (
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-2">
            {post.kind === "case-study" ? "Read full study" : "Read note"}
            <ChevronRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        ) : null}
      </div>
    </>
  );

  if (isPublished && isInternal && post.url) {
    return (
      <Link href={post.url} className={cardClassName}>
        {inner}
      </Link>
    );
  }

  if (isPublished && post.url) {
    return (
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
      >
        {inner}
      </a>
    );
  }

  return <article className={cardClassName}>{inner}</article>;
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
            description="The Barnabas full system study, plus a short note on how this portfolio was built."
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

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 sm:gap-6">
          {learningPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
