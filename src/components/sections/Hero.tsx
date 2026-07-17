import {
  Code2,
  FileText,
  Keyboard,
  Link2,
} from "lucide-react";
import { getProfileLinks } from "@/constants/profileLinks";
import { siteConfig } from "@/config/site";
import type { ProfileLink } from "@/types";

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
  const isDownload = link.id === "resume";

  const inner = (
    <>
      <div className="profile-card__icon">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <span className="profile-card__name">{link.name}</span>
      <span className="profile-card__subtitle">{link.subtitle}</span>
    </>
  );

  if (isDownload) {
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
  const profileLinks = getProfileLinks().filter((link) => link.url.trim() !== "");

  return (
    <section
      id="home"
      className="section hero-section flex min-h-[75dvh] items-center pb-10 sm:min-h-[80dvh] sm:pb-14"
    >
      <div className="section-inner w-full">
        <div className="hero-content w-full min-w-0 max-w-xl sm:max-w-2xl">
          <span className="status-badge">{siteConfig.availability}</span>

          <h1 className="hero-name mt-4 text-foreground">{siteConfig.name}</h1>
          <p className="hero-role mt-2">{siteConfig.headline}</p>

          <p className="hero-text mt-5">{siteConfig.heroIntro}</p>

          <p className="mt-4 text-sm text-muted-foreground">{siteConfig.tagline}</p>
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
