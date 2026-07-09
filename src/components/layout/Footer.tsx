import { ArrowUp, Code2, Heart, Link2, Mail } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { siteConfig } from "@/config/site";
import { getLinkedinUrl } from "@/lib/profile-urls";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-glass safe-bottom px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center text-sm text-muted-foreground sm:flex-row sm:gap-4 sm:text-left">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <Logo size={28} />
          <span className="max-w-xs leading-relaxed sm:max-w-none">
            © {year} {siteConfig.name}. Crafted with{" "}
            <Heart className="mx-0.5 inline h-3.5 w-3.5 text-accent-3" aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end sm:gap-5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="footer-link p-1"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link p-1"
            aria-label="GitHub"
          >
            <Code2 className="h-4 w-4" />
          </a>
          {getLinkedinUrl() ? (
            <a
              href={getLinkedinUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link p-1"
              aria-label="LinkedIn"
            >
              <Link2 className="h-4 w-4" />
            </a>
          ) : null}
          <a href="#work" className="footer-link px-1 py-0.5">
            Work
          </a>
          <a href="#learn" className="footer-link px-1 py-0.5">
            Learn
          </a>
          <a href="#contact" className="footer-link px-1 py-0.5">
            Contact
          </a>
          <a href="#home" className="footer-link p-1" aria-label="Back to top">
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
