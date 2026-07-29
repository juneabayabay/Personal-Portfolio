import { ArrowUp, Code2, Link2, Mail } from "lucide-react";
import { BrandMark } from "@/components/common/Logo";
import { homeHref, navLinks } from "@/constants/nav";
import { siteConfig } from "@/config/site";
import { getLinkedinUrl } from "@/lib/profile-urls";

export function Footer() {
  const year = new Date().getFullYear();
  const linkedinUrl = getLinkedinUrl();

  return (
    <footer className="safe-bottom relative z-10 border-t border-border bg-background/80 py-8 backdrop-blur-md sm:py-10">
      <div className="section-inner flex flex-col gap-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <a
              href={homeHref}
              className="brand-mark-link inline-flex min-h-11 items-center"
              aria-label={`${siteConfig.name} home`}
            >
              <BrandMark variant="footer" />
            </a>
            <p className="text-sm text-muted-foreground">
              © {year} · {siteConfig.name}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="hidden flex-wrap items-center justify-center gap-x-1 gap-y-1 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link inline-flex min-h-11 items-center px-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="footer-link inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border"
              aria-label="GitHub"
            >
              <Code2 className="h-4 w-4" />
            </a>
            {linkedinUrl ? (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border"
                aria-label="LinkedIn"
              >
                <Link2 className="h-4 w-4" />
              </a>
            ) : null}
            <a
              href={homeHref}
              className="footer-link inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-primary/30 text-primary"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
