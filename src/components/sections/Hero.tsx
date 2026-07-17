import {
  Code2,
  FileText,
  Keyboard,
  Link2,
  Send,
  Terminal,
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
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <span className="profile-card__name">{link.name}</span>
      {link.subtitle ? (
        <span className="profile-card__subtitle">{link.subtitle}</span>
      ) : (
        <span className="profile-card__subtitle profile-card__subtitle--empty" aria-hidden="true">
          &nbsp;
        </span>
      )}
    </>
  );

  if (isEmpty) {
    return (
      <div
        className={cn("profile-card", "profile-card--empty")}
        aria-label={`${link.name} — coming soon`}
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
  const profileLinks = getProfileLinks().filter(
    (link) => link.empty || link.url.trim() !== "",
  );

  return (
    <section
      id="home"
      className="section hero-section flex min-h-[75dvh] items-center pb-10 sm:min-h-[80dvh] sm:pb-14"
    >
      <div className="section-inner w-full">
        <div className="hero-content w-full min-w-0 max-w-xl sm:max-w-2xl">
          <span className="status-badge">{siteConfig.availability}</span>

          <p className="hero-label mt-4">{siteConfig.role}</p>
          <h1 className="hero-name mt-2 text-foreground">{siteConfig.name}</h1>
          <p className="hero-role mt-2">{siteConfig.headline}</p>

          <p className="hero-text mt-5">{siteConfig.heroIntro}</p>

          <p className="mt-4 text-sm text-muted-foreground">{siteConfig.tagline}</p>

          <div className="mt-7 flex w-full max-w-md flex-col gap-2.5 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <a
              href="#work"
              className="btn btn-primary inline-flex min-h-11 w-full items-center justify-center gap-2 px-6 py-3 text-sm sm:w-auto sm:min-w-[148px]"
            >
              <Terminal className="h-4 w-4 shrink-0" aria-hidden="true" />
              View projects
            </a>
            <a
              href="#contact"
              className="btn btn-outline inline-flex min-h-11 w-full items-center justify-center gap-2 px-6 py-3 text-sm sm:w-auto sm:min-w-[148px]"
            >
              <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
              Contact me
            </a>
          </div>
        </div>

        {profileLinks.length > 0 ? (
          <div className="profile-grid mt-8 sm:mt-10">
            {profileLinks.map((link) => (
              <ProfileCard key={link.id} link={link} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
