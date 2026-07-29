import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { learningPosts } from "@/constants/learning";
import { formatBlogDate } from "@/lib/format-blog-date";
import { cn } from "@/lib/utils";

function BlogCard({ post }: { post: (typeof learningPosts)[number] }) {
  const isPublished = Boolean(post.url);
  const isInternal = Boolean(post.url?.startsWith("/"));
  const isUiScreenshot = post.image.startsWith("/projects/");

  const cardClassName = cn("media-card group flex h-full flex-col overflow-hidden");

  const inner = (
    <>
      <div
        className={cn(
          "media-image-frame relative aspect-[16/10] shrink-0 overflow-hidden border-b border-border",
          isUiScreenshot && "media-image-frame--screenshot",
          !isUiScreenshot && "bg-surface",
        )}
      >
        {isUiScreenshot ? (
          <div className="absolute inset-2 sm:inset-3">
            <Image
              src={post.image}
              alt=""
              fill
              quality={92}
              className="image-screenshot"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
              loading="lazy"
            />
          </div>
        ) : (
          <Image
            src={post.image}
            alt=""
            fill
            quality={92}
            className="image-ui object-center transition-transform duration-300 group-hover:scale-[1.01]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          <span className="inline-flex items-center gap-1 text-primary">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readTimeMinutes} min
          </span>
        </div>
        <h3 className="mt-2 text-base font-semibold leading-snug text-foreground">{post.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
        {isPublished ? (
          <span className="link-arrow mt-4 text-sm">
            Read
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        ) : null}
      </div>
    </>
  );

  if (isPublished && isInternal && post.url) {
    return <Link href={post.url} className={cardClassName}>{inner}</Link>;
  }
  if (isPublished && post.url) {
    return (
      <a href={post.url} target="_blank" rel="noopener noreferrer" className={cardClassName}>
        {inner}
      </a>
    );
  }
  return <article className={cardClassName}>{inner}</article>;
}

export function Learning() {
  return (
    <section id="learn" className="section-block scroll-mt-nav">
      <div className="section-inner">
        <div className="section-header section-header--simple">
          <div>
            <h2 className="section-heading">Blog</h2>
            <p className="section-sub">Notes and case studies from projects I’m learning through.</p>
          </div>
        </div>

        <div className="grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
          {learningPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
