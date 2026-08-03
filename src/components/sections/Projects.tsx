import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CapstoneProject } from "@/components/sections/CapstoneProject";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";

const HOME_PROJECTS_PREVIEW = 2;

export function Projects() {
  const previewProjects = projects.slice(0, HOME_PROJECTS_PREVIEW);
  const hasMultiple = previewProjects.length > 1;
  const hasMore = projects.length > HOME_PROJECTS_PREVIEW;

  return (
    <section id="work" className="section-block scroll-mt-nav">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <h2 className="section-heading">Projects</h2>
            <p className="section-sub">
              Selected school and client work with live demos.
            </p>
          </div>
          {hasMore ? (
            <Link href="/projects" className="link-arrow text-sm shrink-0">
              View all
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        <div className="flex w-full min-w-0 flex-col gap-5 sm:gap-6">
          <CapstoneProject />

          {previewProjects.length > 0 ? (
            <div
              className={cn(
                "projects-grid w-full",
                !hasMultiple && "projects-grid--single",
              )}
            >
              {previewProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  layout={hasMultiple ? "vertical" : "horizontal"}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
