import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { achievementsContent } from "@/constants/achievements";
import { getLinkedinUrl } from "@/lib/profile-urls";

function getLinkedinCertificationsUrl(): string {
  const profile = getLinkedinUrl().replace(/\/$/, "");
  return profile ? `${profile}/details/certifications/` : "";
}

export function Achievements() {
  const linkedinCertsUrl = getLinkedinCertificationsUrl();

  return (
    <section
      id="achievements"
      className="section-shell section-panel relative z-10 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <SectionHeading
            eyebrow={achievementsContent.eyebrow}
            title="Certifications"
            description={achievementsContent.summary}
            centered={false}
            className="mb-0 max-w-2xl sm:mb-0"
          />

          <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
            <span className="accent-badge inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              {achievementsContent.status}
            </span>

            {linkedinCertsUrl ? (
              <a
                href={linkedinCertsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-btn achievement-btn-linkedin inline-flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                {achievementsContent.linkedinLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
