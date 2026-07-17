import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  layout?: "vertical" | "horizontal";
};

export function ProjectCard({ project, layout = "vertical" }: ProjectCardProps) {
  const isHorizontal = layout === "horizontal";
  const isLoginShot = project.image.includes("/login.");
  const isDashboardShot =
    project.image.includes("cbc-church-management") && !isLoginShot;

  return (
    <article
      className={cn(
        "media-card media-card--project flex h-full w-full min-w-0",
        isHorizontal ? "flex-col lg:flex-row" : "flex-col",
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-surface",
          isHorizontal && "lg:aspect-auto lg:w-[min(42%,320px)] lg:min-h-[220px]",
        )}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={cn(
            "object-cover",
            isLoginShot ? "object-center" : isDashboardShot ? "object-left-top" : "object-center",
          )}
          sizes={
            isHorizontal
              ? "(max-width: 1024px) 100vw, 320px"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
          }
          loading="lazy"
        />
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

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
