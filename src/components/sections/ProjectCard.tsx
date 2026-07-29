import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Code2 } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const IMAGE_QUALITY = 90;

type ProjectCardProps = {
  project: Project;
  layout?: "vertical" | "horizontal";
};

function isCoverArt(image: string) {
  return image.includes("/cover.");
}

export function ProjectCard({ project, layout = "vertical" }: ProjectCardProps) {
  const isHorizontal = layout === "horizontal";
  const useCover = isCoverArt(project.image);

  return (
    <article
      className={cn(
        "media-card media-card--project flex h-full w-full min-w-0",
        isHorizontal ? "flex-col lg:flex-row" : "flex-col",
      )}
    >
      <div
        className={cn(
          "media-image-frame relative aspect-[16/10] w-full shrink-0 overflow-hidden",
          isHorizontal && "lg:aspect-auto lg:w-[min(46%,380px)] lg:min-h-[240px]",
        )}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          quality={IMAGE_QUALITY}
          className={useCover ? "image-cover" : "image-ui object-center"}
          sizes={
            isHorizontal
              ? "(max-width: 1024px) 100vw, 380px"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
          }
          loading="lazy"
        />
        {useCover ? (
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20"
            aria-hidden="true"
          />
        ) : null}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4 sm:gap-3.5 sm:p-5 lg:p-6">
        <div className="min-w-0">
          <h3 className="text-base font-bold leading-snug break-words text-foreground sm:text-lg">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5 sm:gap-2" aria-label="Tech stack">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <span className="tag">{tech}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-1 gap-y-1 pt-1">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow min-h-11 items-center px-1 py-2"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          ) : null}
          {project.caseStudyUrl ? (
            <Link
              href={project.caseStudyUrl}
              className="inline-flex min-h-11 items-center gap-1.5 px-1 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
              Case study
            </Link>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 px-1 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Code2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
