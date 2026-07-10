import { ArrowUp, Code2, Link2, Mail } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { siteConfig } from "@/config/site";
import { getLinkedinUrl } from "@/lib/profile-urls";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-glass safe-bottom relative z-10 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-border/60 pb-6 sm:flex-row sm:items-center">
          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <div className="flex items-center gap-2.5">
              <Logo size={26} />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-foreground uppercase">
                {siteConfig.firstName}
              </span>
            </div>
            <p className="font-mono text-[0.7rem] tracking-wide text-muted-foreground">
              © {year} · Built with precision
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs tracking-wide"
          >
            <a href="#work" className="footer-link">
              01 Work
            </a>
            <a href="#skills" className="footer-link">
              02 Arsenal
            </a>
            <a href="#education" className="footer-link">
              03 Path
            </a>
            <a href="#learn" className="footer-link">
              04 Notes
            </a>
            <a href="#contact" className="footer-link">
              05 Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="footer-link rounded-lg border border-border/80 p-2"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link rounded-lg border border-border/80 p-2"
              aria-label="GitHub"
            >
              <Code2 className="h-4 w-4" />
            </a>
            {getLinkedinUrl() ? (
              <a
                href={getLinkedinUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link rounded-lg border border-border/80 p-2"
                aria-label="LinkedIn"
              >
                <Link2 className="h-4 w-4" />
              </a>
            ) : null}
            <a
              href="#home"
              className="footer-link ml-1 rounded-lg border border-accent-2/30 p-2 text-accent-2"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
