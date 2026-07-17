import { ArrowUp, Code2, Link2, Mail } from "lucide-react";
import { BrandMark } from "@/components/common/Logo";
import { navLinks } from "@/constants/nav";
import { siteConfig } from "@/config/site";
import { getLinkedinUrl } from "@/lib/profile-urls";

export function Footer() {
  const year = new Date().getFullYear();
  const linkedinUrl = getLinkedinUrl();

  return (
    <footer className="safe-bottom relative z-10 border-t border-border bg-background/80 py-8 backdrop-blur-md sm:py-10">
      <div className="section-inner flex flex-col gap-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <a href="#home" className="brand-mark-link inline-flex" aria-label={`${siteConfig.name} home`}>
              <BrandMark variant="footer" />
            </a>
            <p className="text-sm text-muted-foreground">© {year} · {siteConfig.name}</p>
          </div>

          <nav aria-label="Footer" className="hidden flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={`mailto:${siteConfig.email}`} className="footer-link rounded-lg border border-border p-2" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="footer-link rounded-lg border border-border p-2" aria-label="GitHub">
              <Code2 className="h-4 w-4" />
            </a>
            {linkedinUrl ? (
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="footer-link rounded-lg border border-border p-2" aria-label="LinkedIn">
                <Link2 className="h-4 w-4" />
              </a>
            ) : null}
            <a href="#home" className="footer-link rounded-lg border border-primary/30 p-2 text-primary" aria-label="Back to top">
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
