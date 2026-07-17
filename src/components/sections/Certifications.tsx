import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/constants/certifications";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <div className="mt-8">
      <h4 className="text-sm font-semibold text-foreground">Verified certifications</h4>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => {
          const content = (
            <>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h5 className="text-sm font-semibold text-foreground">{cert.title}</h5>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.issuer}
                  {cert.completedAt ? ` · ${cert.completedAt}` : ` · ${cert.year}`}
                </p>
                {cert.url ? (
                  <span className="link-arrow mt-2 text-xs">
                    Verify
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </span>
                ) : null}
              </div>
            </>
          );

          return (
            <li key={cert.credentialId ?? cert.title}>
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-card flex h-full items-start gap-3 p-4"
                >
                  {content}
                </a>
              ) : (
                <div className="achievement-card flex h-full items-start gap-3 p-4">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
