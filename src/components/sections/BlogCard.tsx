import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import type { LearningPost } from "@/constants/learning";
import { formatBlogDate } from "@/lib/format-blog-date";
import { cn } from "@/lib/utils";

function isCoverArt(image: string) {
  return image.includes("/cover") || image.includes("-cover");
}

export function BlogCard({ post }: { post: LearningPost }) {
  const isPublished = Boolean(post.url);
  const isInternal = Boolean(post.url?.startsWith("/"));
  const useCover = isCoverArt(post.image);

  const cardClassName = cn("media-card group flex h-full flex-col overflow-hidden");

  const inner = (
    <>
      <div className="media-image-frame relative aspect-[16/10] shrink-0 overflow-hidden border-b border-border bg-surface">
        <Image
          src={post.image}
          alt=""
          fill
          quality={90}
          className={cn(
            useCover ? "image-cover" : "image-ui object-center",
            "transition-transform duration-300 group-hover:scale-[1.02]",
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
          loading="lazy"
        />
        {useCover ? (
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20"
            aria-hidden="true"
          />
        ) : null}
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
    return (
      <Link href={post.url} className={cardClassName}>
        {inner}
      </Link>
    );
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
