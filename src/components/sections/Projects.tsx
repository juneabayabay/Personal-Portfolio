import Image from "next/image";
import { ArrowRight, Code2, ExternalLink, Eye } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { projects } from "@/constants/projects";

export function Projects() {
  return (
    <section id="work" className="bg-[#0f0f0f] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Each project reflects what I've learned through hands-on practice and school work."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="glass group p-5">
              <div className="project-img">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-[220px] w-full object-cover"
                  loading="lazy"
                />
                <div className="overlay">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-blue-600/70 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
                    >
                      <Eye className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="rounded-full bg-blue-600/70 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                      <Code2 className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
                      View on GitHub
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full bg-blue-400/10 px-2.5 py-1 text-xs font-medium text-blue-400">
                    {project.technologies[0]}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#94a3b8]">{project.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-pill text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                  >
                    <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                    GitHub
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={projects[0]?.githubUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-blue-400 transition-all hover:text-blue-300"
          >
            View all projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
