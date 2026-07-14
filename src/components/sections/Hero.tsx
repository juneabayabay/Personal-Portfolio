import { ChevronDown, FileText, MapPin, Send, Terminal } from "lucide-react";
import { ProfileLinks } from "@/components/sections/ProfileLinks";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center justify-center overflow-x-hidden px-4 pt-[max(5.5rem,calc(env(safe-area-inset-top)+4.5rem))] pb-[max(4rem,calc(env(safe-area-inset-bottom)+3rem))] sm:px-6 sm:pt-28 sm:pb-20 md:px-8"
    >
      <div className="hero-focus pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <div className="fade-in status-chip mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:mb-6 sm:gap-x-2.5">
          <span className="status-pulse" aria-hidden="true" />
          <span className="font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase sm:text-xs sm:tracking-[0.18em]">
            {siteConfig.statusLabel}
          </span>
          <span className="font-mono text-[0.6rem] tracking-[0.12em] text-accent-2 uppercase sm:text-xs sm:tracking-[0.14em]">
            {siteConfig.statusValue}
          </span>
          <span className="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
          <span className="w-full font-mono text-[0.6rem] tracking-[0.1em] text-muted-foreground uppercase sm:w-auto sm:text-xs sm:tracking-[0.12em]">
            {siteConfig.availability}
          </span>
        </div>

        <p className="fade-in mb-2 font-mono text-[0.65rem] tracking-[0.2em] text-accent-2 uppercase sm:mb-3 sm:text-sm sm:tracking-[0.24em]">
          {siteConfig.role}
        </p>

        <h1 className="fade-in hero-name w-full max-w-5xl text-[clamp(2rem,9.5vw,5.25rem)] leading-[0.95] font-bold tracking-[-0.04em] break-words hyphens-none">
          <span className="block text-foreground">{siteConfig.firstName}</span>
          <span className="text-gradient block">{siteConfig.lastName}</span>
        </h1>

        <p className="fade-in mx-auto mt-4 max-w-xl px-1 text-[0.9375rem] leading-relaxed text-muted-foreground sm:mt-5 sm:max-w-2xl sm:text-base md:text-lg">
          {siteConfig.heroIntro}
        </p>

        <p className="fade-in mt-3 inline-flex max-w-full items-center gap-1.5 px-1 font-mono text-[0.7rem] text-muted-foreground sm:mt-4 sm:text-sm">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-accent-2" aria-hidden="true" />
          <span className="min-w-0 break-words">{siteConfig.location}</span>
        </p>

        <div className="fade-in mt-7 flex w-full max-w-md flex-col items-stretch justify-center gap-2.5 sm:mt-9 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
          <a
            href="#work"
            className="btn-glow btn-primary inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white sm:w-auto sm:min-w-[148px] sm:px-7"
          >
            <Terminal className="h-4 w-4 shrink-0" aria-hidden="true" />
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-2/40 hover:bg-white/[0.05] sm:w-auto sm:min-w-[148px] sm:px-7"
          >
            <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
            Contact
          </a>
          <a
            href={siteConfig.resumePath}
            download
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border/70 px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground sm:w-auto sm:px-6"
          >
            <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
            Resume
          </a>
        </div>

        <ul className="fade-in signal-strip mt-8 grid w-full max-w-xl grid-cols-1 gap-0 overflow-hidden sm:mt-10 sm:max-w-2xl sm:grid-cols-3">
          {siteConfig.signals.map((signal) => (
            <li key={signal.label} className="signal-cell">
              <span className="font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase sm:text-[0.65rem]">
                {signal.label}
              </span>
              <span className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                {signal.value}
              </span>
            </li>
          ))}
        </ul>

        <ProfileLinks />
      </div>

      <div className="pointer-events-none absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-0 hidden -translate-x-1/2 md:bottom-8 md:block">
        <a
          href="#work"
          className="pointer-events-auto flex flex-col items-center gap-1 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          <span>Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
