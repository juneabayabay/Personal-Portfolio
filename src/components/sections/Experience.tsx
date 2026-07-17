import { ArrowUpRight, Code2 } from "lucide-react";
import { experienceEntries } from "@/constants/experience";

export function Experience() {
  return (
    <section id="experience" className="section-block scroll-mt-nav">
      <div className="section-inner">
        <div className="section-header section-header--simple">
          <div>
            <h2 className="section-heading">Experience</h2>
            <p className="section-sub">
              What I owned on each project — outcomes, not just titles.
            </p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {experienceEntries.map((entry) => (
            <article key={entry.id} className="panel-solid p-4 sm:p-5 md:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {entry.role}
                    </h3>
                    {entry.current ? (
                      <span className="tag tag-gold">Current</span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">{entry.company}</p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {entry.type} · {entry.location}
                  </p>
                </div>
                <span className="tag w-fit shrink-0 self-start">{entry.period}</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4">
                {entry.description}
              </p>

              {entry.highlights.length > 0 ? (
                <ul className="mt-3 space-y-2 sm:mt-4">
                  {entry.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {entry.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {entry.liveUrl || entry.githubUrl ? (
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  {entry.liveUrl ? (
                    <a
                      href={entry.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow"
                    >
                      Live demo
                      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>
                  ) : null}
                  {entry.githubUrl ? (
                    <a
                      href={entry.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Code2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                      GitHub
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
