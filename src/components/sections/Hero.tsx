import { ChevronDown, MapPin, Send } from "lucide-react";
import { ProfileLinks } from "@/components/sections/ProfileLinks";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <div className="fade-in mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-accent-2 backdrop-blur-md sm:mb-6 sm:px-4 sm:text-sm">
          <span className="truncate">{siteConfig.availability}</span>
        </div>

        <h1 className="fade-in text-[clamp(2rem,8vw,4.5rem)] leading-[1.1] font-bold tracking-tight">
          <span className="text-foreground">Hi, I&apos;m {siteConfig.firstName}</span>{" "}
          <span className="text-gradient">{siteConfig.lastName}</span>
        </h1>

        <p className="fade-in mx-auto mt-3 max-w-2xl text-lg text-muted-foreground sm:mt-4 sm:text-xl md:text-2xl">
          {siteConfig.tagline}
        </p>

        <p className="fade-in mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
          {siteConfig.heroIntro}
        </p>

        <p className="fade-in mt-3 flex flex-wrap items-center justify-center gap-1 text-xs text-muted-foreground sm:text-sm">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          {siteConfig.location}
        </p>

        <ProfileLinks />

        <div className="fade-in mt-10 flex justify-center sm:mt-12">
          <a
            href="#contact"
            className="btn-glow btn-primary inline-flex min-w-[200px] items-center justify-center gap-2.5 rounded-full px-10 py-3.5 text-sm font-semibold text-white sm:min-w-[220px] sm:px-12 sm:py-4 sm:text-base"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Let&apos;s Talk
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce sm:bottom-8 md:block">
        <a
          href="#work"
          className="flex flex-col items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>Scroll</span>
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
