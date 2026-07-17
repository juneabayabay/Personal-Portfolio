import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { capstoneProject } from "@/constants/capstone";

const CASE_STUDY_HREF = "/blog/barnabas-system-study";

export function CapstoneProject() {
  const { title, badge, tagline, overview, featuredImage, liveUrl, technologies } =
    capstoneProject;

  return (
    <article className="media-card media-card--project grid w-full min-w-0 grid-cols-1 overflow-hidden lg:grid-cols-2">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface lg:aspect-auto lg:min-h-[280px]">
        <Image
          src={featuredImage.src}
          alt={featuredImage.alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={75}
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--surface-solid)]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[var(--surface-solid)]/40" />
        <span className="absolute top-3 left-3 tag tag-gold sm:top-4 sm:left-4">
          {badge}
        </span>
      </div>

      <div className="flex min-w-0 flex-col justify-center gap-3 p-4 sm:gap-4 sm:p-5 lg:p-6 xl:p-8">
        <div className="min-w-0">
          <h3 className="text-base font-bold leading-snug break-words text-foreground sm:text-lg lg:text-xl">
            {title}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-primary">{tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
          {overview}
        </p>

        <ul className="flex flex-wrap gap-1.5 sm:gap-2" aria-label="Tech stack">
          {technologies.map((tech) => (
            <li key={tech}>
              <span className="tag">{tech}</span>
            </li>
          ))}
        </ul>

        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          ) : null}
          <Link
            href={CASE_STUDY_HREF}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
            Case study
          </Link>
        </div>
      </div>
    </article>
  );
}
