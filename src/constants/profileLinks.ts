import { siteConfig } from "@/config/site";
import { getLinkedinUrl, getMonkeytypeUrl } from "@/lib/profile-urls";
import type { ProfileLink } from "@/types";

/** Hero profile cards — LinkedIn, Resume, GitHub, MonkeyType */
export function getProfileLinks(): ProfileLink[] {
  const links: ProfileLink[] = [
    {
      id: "linkedin",
      name: "LinkedIn",
      subtitle: "Professional profile",
      url: getLinkedinUrl(),
      icon: "linkedin",
    },
    {
      id: "resume",
      name: "Resume",
      subtitle: "Coming soon",
      url: "",
      icon: "file",
      empty: true,
    },
    {
      id: "github",
      name: "GitHub",
      subtitle: "Project repositories",
      url: siteConfig.social.github,
      icon: "github",
    },
    {
      id: "monkeytype",
      name: "MonkeyType",
      subtitle: siteConfig.profiles.monkeytypeSubtitle,
      url: getMonkeytypeUrl(),
      icon: "keyboard",
    },
  ];

  return links.filter((link) => link.empty || link.url.trim() !== "");
}
