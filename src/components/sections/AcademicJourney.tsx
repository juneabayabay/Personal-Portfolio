import { ExternalLink, GraduationCap } from "lucide-react";
import { certifications } from "@/constants/certifications";
import { academicJourney } from "@/constants/education";

export function AcademicJourney() {
  return (
    <section id="education" className="section-block scroll-mt-nav">
      <div className="section-inner">
        <div className="section-header section-header--simple">
          <div>
            <h2 className="section-heading">Education</h2>
            <p className="section-sub">{academicJourney.subtitle}</p>
          </div>
        </div>

        <article className="panel-solid p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-3">
              <div className="icon-box">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground">{academicJourney.school}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{academicJourney.degree}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Class of {academicJourney.expectedGraduation}
                </p>
              </div>
            </div>
            <span className="tag tag-gold w-fit shrink-0">{academicJourney.period}</span>
          </div>

          <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
            {academicJourney.description}
          </p>
        </article>

        {certifications.length > 0 ? (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-foreground">Certifications</h3>
            <ul className="mt-3 grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {certifications.map((cert) => (
                <li key={cert.credentialId ?? cert.title}>
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="panel-solid block h-full p-4 transition-colors hover:border-primary/30"
                    >
                      <p className="text-sm font-medium text-foreground">{cert.title}</p>
                      <p className="mt-1 text-xs text-primary">
                        {cert.issuer}
                        {cert.completedAt ? ` · ${cert.completedAt}` : ` · ${cert.year}`}
                      </p>
                      <span className="link-arrow mt-3 inline-flex text-xs">
                        Verify
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </a>
                  ) : (
                    <div className="panel-solid h-full p-4">
                      <p className="text-sm font-medium text-foreground">{cert.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
