import { CapstoneProject } from "@/components/sections/CapstoneProject";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const hasMultiple = projects.length > 1;

  return (
    <section id="work" className="section-block scroll-mt-nav">
      <div className="section-inner">
        <div className="section-header section-header--simple">
          <div>
            <h2 className="section-heading">Projects</h2>
            <p className="section-sub">
              Capstone and selected builds — school, client, and full-stack work.
            </p>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-col gap-5 sm:gap-6">
          <CapstoneProject />

          {projects.length > 0 ? (
            <div
              className={cn(
                "projects-grid w-full",
                !hasMultiple && "projects-grid--single",
              )}
            >
              {projects.map((project) => (
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
