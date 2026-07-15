import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Layers } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getLearningPost,
  getPublishedLearningPosts,
} from "@/constants/learning";
import { formatBlogDate } from "@/lib/format-blog-date";
import { siteConfig } from "@/config/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedLearningPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getLearningPost(slug);

  if (!post?.content) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getLearningPost(slug);

  if (!post?.content) {
    notFound();
  }

  const { content } = post;
  const isCaseStudy = post.kind === "case-study";

  return (
    <article className="section-shell relative z-10 mx-auto max-w-3xl scroll-mt-20 px-4 pt-28 pb-16 sm:max-w-4xl sm:px-6 sm:pt-32 sm:pb-24">
      <Link
        href="/#learn"
        className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground uppercase transition-colors hover:text-accent-2"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        Back to build journal
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.7rem] font-medium tracking-wider text-muted-foreground uppercase sm:text-xs">
          {isCaseStudy ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-2/30 bg-accent-2/10 px-2.5 py-1 font-mono text-[0.6rem] tracking-wider text-accent-2 normal-case">
              <Layers className="h-3 w-3" aria-hidden="true" />
              Full system study
            </span>
          ) : (
            <span className="font-mono text-[0.65rem] tracking-[0.14em] text-accent-2">
              Build note
            </span>
          )}
          <time dateTime={post.publishedAt}>
            {formatBlogDate(post.publishedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5 text-accent-2 normal-case tracking-normal">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readTimeMinutes} min read
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
          {post.title}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.intro}
        </p>

        {content.stack?.length ? (
          <ul
            className="mt-5 flex flex-wrap gap-2"
            aria-label="Technologies used"
          >
            {content.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      {content.interviewPitch ? (
        <aside className="mt-8 rounded-[var(--radius)] border border-accent-2/25 bg-accent-2/[0.06] p-5 sm:p-6">
          <p className="font-mono text-[0.65rem] tracking-[0.16em] text-accent-2 uppercase">
            ~2 min interview pitch
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground sm:text-[0.95rem]">
            {content.interviewPitch}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Practice this out loud. Then stop and let them ask follow-ups.
          </p>
        </aside>
      ) : null}

      <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[var(--radius)] border border-border sm:aspect-[16/9]">
        <Image
          src={post.image}
          alt=""
          fill
          className={
            post.image.startsWith("/projects/")
              ? "object-cover object-top"
              : "object-cover object-center"
          }
          sizes="(max-width: 896px) 100vw, 896px"
          priority
        />
      </div>

      <div className="mt-10 space-y-12">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base"
              >
                {paragraph}
              </p>
            ))}
            {section.bullets?.length ? (
              <ul className="mt-4 space-y-2 border-l border-accent-2/30 pl-4">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
            {section.figures?.length ? (
              <div
                className={`mt-6 grid gap-5 ${
                  section.figures.length > 1 ? "sm:grid-cols-2" : ""
                }`}
              >
                {section.figures.map((figure) => (
                  <figure
                    key={figure.src}
                    className="overflow-hidden rounded-[calc(var(--radius)-4px)] border border-border bg-white/[0.02]"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={figure.src}
                        alt={figure.alt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 420px"
                      />
                    </div>
                    <figcaption className="border-t border-border px-3 py-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {figure.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : null}
          </section>
        ))}

        {content.takeaways?.length ? (
          <section className="rounded-[var(--radius)] border border-border bg-white/[0.03] p-5 sm:p-6">
            <h2 className="font-mono text-xs tracking-[0.16em] text-accent-2 uppercase">
              Takeaways
            </h2>
            <ul className="mt-4 space-y-3">
              {content.takeaways.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-foreground sm:text-[0.95rem]"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <footer className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
        {!isCaseStudy ? (
          <Link
            href="/blog/barnabas-system-study"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-2 transition-colors hover:text-accent-1"
          >
            Read the full Barnabas system study
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : (
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-2 transition-colors hover:text-accent-1"
          >
            Back to featured work
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </footer>
    </article>
  );
}
