import { ChevronDown, Code2, Eye, Link2, Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div className="hero-shape absolute top-[-200px] right-[-200px] h-[500px] w-[500px] bg-blue-600" />
      <div className="hero-shape absolute bottom-[-150px] left-[-150px] h-[400px] w-[400px] bg-purple-600" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-blue-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          {siteConfig.availability}
        </div>

        <h1 className="fade-in text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl">
          <span className="text-white">Hi, I&apos;m {siteConfig.firstName}</span>{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {siteConfig.lastName}
          </span>
        </h1>

        <p className="fade-in mx-auto mt-4 max-w-2xl text-xl text-[#94a3b8] md:text-2xl">
          {siteConfig.tagline}
        </p>

        <p className="fade-in mx-auto mt-4 max-w-2xl text-base text-[#94a3b8]">
          {siteConfig.description}
        </p>

        <p className="fade-in mt-3 flex items-center justify-center gap-1 text-sm text-[#64748b]">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {siteConfig.location}
        </p>

        <div className="fade-in mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#work"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition-all hover:bg-blue-500"
          >
            <Eye className="h-4 w-4" aria-hidden="true" />
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white/5"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Let&apos;s Talk
          </a>
        </div>

        <div className="fade-in mt-10 flex items-center justify-center gap-5">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-[#94a3b8] transition-all hover:scale-110 hover:text-white"
            aria-label="GitHub"
          >
            <Code2 className="h-5 w-5" />
          </a>
          {siteConfig.social.linkedin ? (
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#94a3b8] transition-all hover:scale-110 hover:text-white"
              aria-label="LinkedIn"
            >
              <Link2 className="h-5 w-5" />
            </a>
          ) : null}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-xl text-[#94a3b8] transition-all hover:scale-110 hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
          <a
            href="#work"
            className="flex flex-col items-center gap-1 text-sm text-[#64748b] transition-colors hover:text-white"
          >
            <span>Scroll</span>
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
