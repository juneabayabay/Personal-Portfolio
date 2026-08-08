import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Code2 } from "lucide-react";
import { capstoneProject } from "@/constants/capstone";

export function CapstoneProject() {
  const {
    title,
    badge,
    tagline,
    overview,
    featuredImage,
    liveUrl,
    githubUrl,
    technologies,
    caseStudyUrl,
  } = capstoneProject;

  return (
    <article className="media-card media-card--project grid w-full min-w-0 grid-cols-1 overflow-hidden lg:grid-cols-2">
      <div className="media-image-frame relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:min-h-[280px] xl:min-h-[320px]">
        <Image
          src={featuredImage.src}
          alt={featuredImage.alt}
          fill
          className="image-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={85}
          priority
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25"
          aria-hidden="true"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-center gap-3 p-4 sm:gap-4 sm:p-5 lg:p-6 xl:p-8">
        <div className="min-w-0">
          <span className="tag tag-gold">{badge}</span>
          <h3 className="mt-2.5 text-base font-bold leading-snug break-words text-foreground sm:text-lg lg:text-xl">
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

        <div className="mt-1 flex flex-wrap items-center gap-x-1 gap-y-1">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow min-h-11 items-center px-1 py-2"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          ) : null}
          {caseStudyUrl ? (
            <Link
              href={caseStudyUrl}
              className="inline-flex min-h-11 items-center gap-1.5 px-1 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
              Case study
            </Link>
          ) : null}
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 px-1 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Code2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
