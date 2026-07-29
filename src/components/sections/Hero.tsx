import { ArrowUpRight, Send } from "lucide-react";
import { ProfileCard } from "@/components/common/ProfileCard";
import { getProfileLinks } from "@/constants/profileLinks";
import { siteConfig } from "@/config/site";

export function Hero() {
  const profileLinks = getProfileLinks();

  return (
    <section
      id="home"
      className="section hero-section flex min-h-[70dvh] items-center pb-12 sm:min-h-[76dvh] sm:pb-16"
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
          <div className="profile-grid mt-10 sm:mt-12" aria-label="Profiles and links">
            {profileLinks.map((link) => (
              <ProfileCard key={link.id} link={link} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
