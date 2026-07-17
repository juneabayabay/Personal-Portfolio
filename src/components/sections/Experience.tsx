import { experienceEntries } from "@/constants/experience";

export function Experience() {
  return (
    <section id="experience" className="section-block scroll-mt-nav">
      <div className="section-inner">
        <div className="section-header section-header--simple">
          <div>
            <h2 className="section-heading">Experience</h2>
            <p className="section-sub">
              Roles from school and client projects. See Projects for full details.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {experienceEntries.map((entry) => (
            <article key={entry.id} className="panel-solid p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">{entry.role}</h3>
                  <p className="text-sm text-primary">{entry.company}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {entry.type} · {entry.location}
                  </p>
                </div>
                <span className="tag tag-gold w-fit shrink-0">{entry.period}</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {entry.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              {entry.liveUrl || entry.githubUrl ? (
                <div className="mt-3 flex flex-wrap gap-4">
                  {entry.liveUrl ? (
                    <a href={entry.liveUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                      Live site
                    </a>
                  ) : null}
                  {entry.githubUrl ? (
                    <a href={entry.githubUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                      Source code
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
