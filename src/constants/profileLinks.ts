import { siteConfig } from "@/config/site";
import { getCodewarsUrl, getLinkedinUrl, getMonkeytypeUrl } from "@/lib/profile-urls";
import type { ProfileLink } from "@/types";

export function getProfileLinks(): ProfileLink[] {
  const featured: ProfileLink[] = [
    {
      id: "github",
      name: "GitHub",
      subtitle: siteConfig.social.githubUsername,
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
    {
      id: "monkeytype",
      name: "MonkeyType",
      subtitle: siteConfig.profiles.monkeytypeSubtitle,
      url: getMonkeytypeUrl(),
      icon: "keyboard",
    },
  ];

  const optional: ProfileLink[] = [
    {
      id: "codewars",
      name: "CodeWars",
      subtitle: siteConfig.profiles.codewarsSubtitle,
      url: getCodewarsUrl(),
      icon: "code",
    },
  ];

  return [...featured, ...optional.filter((link) => link.url.trim() !== "")];
}
