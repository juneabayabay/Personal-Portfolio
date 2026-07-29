import {
  ArrowUpRight,
  Code2,
  FileText,
  Keyboard,
  Link2,
  Send,
} from "lucide-react";
import { getProfileLinks } from "@/constants/profileLinks";
import { siteConfig } from "@/config/site";
import type { ProfileLink } from "@/types";
import { cn } from "@/lib/utils";

const iconMap = {
  github: Code2,
  linkedin: Link2,
  keyboard: Keyboard,
  code: Code2,
  trophy: Code2,
  type: Keyboard,
  award: Code2,
  file: FileText,
} as const;

function ProfileCard({ link }: { link: ProfileLink }) {
  const Icon = iconMap[link.icon] ?? Link2;
  const isEmpty = Boolean(link.empty) || link.url.trim() === "";

  const inner = (
    <>
      <div className="profile-card__icon">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <span className="profile-card__name">{link.name}</span>
      <span
        className={cn(
          "profile-card__subtitle",
          isEmpty && "profile-card__subtitle--muted",
        )}
      >
        {link.subtitle || "\u00A0"}
      </span>
    </>
  );

  if (isEmpty) {
    return (
      <div
        className="profile-card profile-card--empty"
        aria-label={`${link.name} — ${link.subtitle || "coming soon"}`}
      >
        {inner}
      </div>
    );
  }

  if (link.id === "resume") {
    return (
      <a href={link.url} download className="profile-card">
        {inner}
      </a>
    );
  }

  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className="profile-card">
      {inner}
    </a>
  );
}

export function Hero() {
  const profileLinks = getProfileLinks();

  return (
    <section
      id="home"
      className="section hero-section flex min-h-[72dvh] items-center pb-12 sm:min-h-[78dvh] sm:pb-16"
    >
      <div className="section-inner w-full">
        <div className="hero-content w-full min-w-0 max-w-2xl">
          <span className="status-badge">{siteConfig.availability}</span>

          <h1 className="hero-name mt-5 text-foreground">{siteConfig.name}</h1>
          <p className="hero-role mt-3">{siteConfig.headline}</p>

          <p className="hero-text mt-5 max-w-xl">{siteConfig.heroIntro}</p>

          <p className="mt-4 text-sm text-muted-foreground">{siteConfig.tagline}</p>

          <div className="mt-8 flex w-full max-w-md flex-col gap-2.5 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <a
              href="#work"
              className="btn btn-primary inline-flex min-h-11 w-full items-center justify-center gap-2 px-6 py-3 text-sm sm:w-auto"
            >
              View projects
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="btn btn-outline inline-flex min-h-11 w-full items-center justify-center gap-2 px-6 py-3 text-sm sm:w-auto"
            >
              <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
              Contact me
            </a>
          </div>
        </div>

        {profileLinks.length > 0 ? (
          <div className="profile-grid mt-10 sm:mt-12">
            {profileLinks.map((link) => (
              <ProfileCard key={link.id} link={link} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
