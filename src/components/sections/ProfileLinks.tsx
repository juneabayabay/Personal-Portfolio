import { Code2, Keyboard, Link2, Trophy, Type, type LucideIcon } from "lucide-react";
import { getProfileLinks } from "@/constants/profileLinks";
import type { ProfileLink } from "@/types";

const iconMap: Record<ProfileLink["icon"], LucideIcon> = {
  keyboard: Keyboard,
  linkedin: Link2,
  code: Code2,
  github: Code2,
  trophy: Trophy,
  type: Type,
};

export function ProfileLinks() {
  const profileLinks = getProfileLinks();

  return (
    <div className="fade-in mt-8 w-full sm:mt-10">
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:max-w-4xl">
        {profileLinks.map((link) => {
          const Icon = iconMap[link.icon];
          const hasUrl = link.url.trim() !== "";

          const content = (
            <>
              <Icon
                className="h-6 w-6 text-accent-2 transition-colors group-hover:text-accent-1"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-foreground sm:text-base">{link.name}</span>
              <span className="text-xs text-muted-foreground">
                {hasUrl ? link.subtitle : "Add link in site.ts"}
              </span>
            </>
          );

          if (!hasUrl) {
            return (
              <div
                key={link.id}
                className="glass flex min-w-0 flex-col items-center gap-2 rounded-2xl border-dashed p-4 text-center opacity-70 sm:p-5"
                title="Add your profile URL in src/config/site.ts"
              >
                {content}
              </div>
            );
          }

          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${link.name} profile`}
              className="glass group flex min-w-0 flex-col items-center gap-2 rounded-2xl p-4 text-center sm:p-5"
            >
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
}
