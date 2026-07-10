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
  const profileLinks = getProfileLinks().filter((link) => link.url.trim() !== "");

  if (profileLinks.length === 0) {
    return null;
  }

  return (
    <div className="fade-in mt-10 w-full border-t border-border/50 pt-8 sm:mt-12 sm:pt-10">
      <p className="mb-4 font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
        External links
      </p>
      <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {profileLinks.map((link) => {
          const Icon = iconMap[link.icon];

          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${link.name} profile`}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3.5 py-2 font-mono text-xs text-muted-foreground backdrop-blur-md transition-colors hover:border-accent-2/45 hover:text-foreground sm:px-4 sm:text-sm"
            >
              <Icon
                className="h-3.5 w-3.5 text-accent-2 transition-colors group-hover:text-accent-1"
                aria-hidden="true"
              />
              <span className="font-medium tracking-wide">{link.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
