import { ArrowUp, Code2, Heart, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#64748b] sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-bold text-blue-500">{siteConfig.logo}</span>
          <span>
            © {year} {siteConfig.name}. Crafted with{" "}
            <Heart className="mx-0.5 inline h-3.5 w-3.5 text-red-400" aria-hidden="true" />
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="footer-link"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <Code2 className="h-4 w-4" />
          </a>
          <a href="#work" className="footer-link">
            Work
          </a>
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
          <a href="#home" className="footer-link" aria-label="Back to top">
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
