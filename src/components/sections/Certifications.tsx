import { Award, ExternalLink } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { certifications } from "@/constants/certifications";

export function Certifications() {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <Section id="certifications">
      <SectionTitle
        eyebrow="Certifications"
        title="Certificates & Courses"
        description="Optional credentials that support my learning journey."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={`${cert.title}-${cert.issuer}`}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Award className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.issuer} · {cert.year}
                </p>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View credential
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
