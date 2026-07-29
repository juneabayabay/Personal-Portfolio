import {
  Code2,
  FileText,
  Keyboard,
  Link2,
} from "lucide-react";
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

export function ProfileCard({ link }: { link: ProfileLink }) {
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
