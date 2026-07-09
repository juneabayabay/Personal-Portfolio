import { ExternalLink, Images } from "lucide-react";
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
        <div className="mb-6 sm:mb-8">
          <p className="eyebrow text-xs font-semibold tracking-[0.2em] uppercase sm:text-sm">
            {achievementsContent.eyebrow}
          </p>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {achievementsContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-5 text-sm font-medium text-foreground">
            Status:{" "}
            <span className="accent-badge ml-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              {achievementsContent.status}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            disabled
            className="achievement-btn achievement-btn-gallery inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            aria-label={`${achievementsContent.galleryLabel} — coming soon`}
          >
            <Images className="h-4 w-4 shrink-0" aria-hidden="true" />
            {achievementsContent.galleryLabel}
          </button>

          {linkedinCertsUrl ? (
            <a
              href={linkedinCertsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-btn achievement-btn-linkedin inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
              {achievementsContent.linkedinLabel}
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="achievement-btn achievement-btn-linkedin inline-flex w-full items-center justify-center gap-2 opacity-60 sm:w-auto"
            >
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
              {achievementsContent.linkedinLabel}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
