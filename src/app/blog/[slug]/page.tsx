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
    <article className="section scroll-mt-nav page-top pb-16 sm:pb-24">
      <div className="section-inner mx-auto max-w-3xl sm:max-w-4xl">
        <Link href="/#learn" className="link-arrow text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to blog
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground sm:text-sm">
            {isCaseStudy ? (
              <span className="tag tag-gold inline-flex items-center gap-1.5">
                <Layers className="h-3 w-3" aria-hidden="true" />
                Case study
              </span>
            ) : (
              <span className="text-primary">Note</span>
            )}
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5 text-primary">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readTimeMinutes} min read
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {content.intro}
          </p>

          {content.stack?.length ? (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
              {content.stack.map((tech) => (
                <li key={tech}>
                  <span className="tag">{tech}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </header>

        {content.interviewPitch ? (
          <aside className="panel mt-8 border-primary/20 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Interview pitch</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground sm:text-base">{content.interviewPitch}</p>
          </aside>
        ) : null}

        <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] border border-border sm:aspect-[16/9]">
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
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul className="mt-4 space-y-2 border-l-2 border-primary/30 pl-4">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.figures?.length ? (
                <div className={`mt-6 grid gap-5 ${section.figures.length > 1 ? "sm:grid-cols-2" : ""}`}>
                  {section.figures.map((figure) => (
                    <figure key={figure.src} className="media-card overflow-hidden">
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
            <section className="panel-solid p-5 sm:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Key takeaways</h2>
              <ul className="mt-4 space-y-3">
                {content.takeaways.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <footer className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
          {!isCaseStudy ? (
            <Link href="/blog/barnabas-system-study" className="link-arrow">
              Read the Barnabas case study
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : (
            <Link href="/#work" className="link-arrow">
              View all projects
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </footer>
      </div>
    </article>
  );
}
