import { getProfileLinks } from "@/constants/profileLinks";

export function ProfileLinks() {
  const profileLinks = getProfileLinks().filter((link) => link.url.trim() !== "");

  if (profileLinks.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Profiles"
      className="pointer-events-auto relative z-20 fade-in mt-8 w-full border-t border-white/[0.08] pt-6 sm:mt-10 sm:pt-7"
    >
      <p className="mb-3 font-mono text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase sm:mb-4">
        Profiles
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
        {profileLinks.map((link, index) => (
          <li key={link.id} className="flex items-center">
            {index > 0 ? (
              <span className="mx-2 text-border select-none sm:mx-3" aria-hidden="true">
                ·
              </span>
            ) : null}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center px-1 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
