import { siteConfig } from "@/config/site";
import { getCodewarsUrl, getLinkedinUrl, getMonkeytypeUrl } from "@/lib/profile-urls";
import type { ProfileLink } from "@/types";

/** Optional profile links (not shown in hero). Resume omitted until a PDF is ready. */
export function getProfileLinks(): ProfileLink[] {
  const featured: ProfileLink[] = [
    {
      id: "github",
      name: "GitHub",
      subtitle: "Project repositories",
      url: siteConfig.social.github,
      icon: "github",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      subtitle: "Professional profile",
      url: getLinkedinUrl(),
      icon: "linkedin",
    },
  ];

  const optional: ProfileLink[] = [
    {
      id: "monkeytype",
      name: "MonkeyType",
      subtitle: siteConfig.profiles.monkeytypeSubtitle,
      url: getMonkeytypeUrl(),
      icon: "keyboard",
    },
    {
      id: "codewars",
      name: "CodeWars",
      subtitle: siteConfig.profiles.codewarsSubtitle,
      url: getCodewarsUrl(),
      icon: "code",
    },
  ];

  return [
    ...featured,
    ...optional.filter((link) => link.url.trim() !== ""),
  ];
}
