import { siteConfig } from "@/config/site";

export function getLinkedinUrl(): string {
  return siteConfig.linkedinProfile.trim() || siteConfig.social.linkedin.trim();
}

function normalizeMonkeytypeUsername(value: string): string {
  const trimmed = value.trim();
  const fromUrl = trimmed.match(/monkeytype\.com\/profile\/([^/?#]+)/i);
  if (fromUrl) {
    return fromUrl[1];
  }
  return trimmed.replace(/^https?:\/\//i, "").replace(/^monkeytype\.com\/profile\//i, "");
}

export function getMonkeytypeUrl(): string {
  const username = normalizeMonkeytypeUsername(siteConfig.profiles.monkeytypeUsername);
  return username ? `https://monkeytype.com/profile/${username}` : "";
}

export function getCodewarsUrl(): string {
  const username = siteConfig.profiles.codewarsUsername.trim();
  return username ? `https://www.codewars.com/users/${username}` : "";
}
