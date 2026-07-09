import { siteConfig } from "@/config/site";
import { getCodewarsUrl, getLinkedinUrl, getMonkeytypeUrl } from "@/lib/profile-urls";
import type { ProfileLink } from "@/types";

export function getProfileLinks(): ProfileLink[] {
  const featured: ProfileLink[] = [
    {
      id: "monkeytype",
      name: "MonkeyType",
      subtitle: siteConfig.profiles.monkeytypeSubtitle,
      url: getMonkeytypeUrl(),
      icon: "keyboard",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      subtitle: "Professional Profile",
      url: getLinkedinUrl(),
      icon: "linkedin",
    },
    {
      id: "github",
      name: "GitHub",
      subtitle: "Open Source",
      url: siteConfig.social.github,
      icon: "github",
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
