import { ChevronDown, FileText, MapPin, Send, Terminal } from "lucide-react";
import { ProfileLinks } from "@/components/sections/ProfileLinks";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center justify-center overflow-x-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20"
    >
      <div className="hero-focus pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <div className="fade-in status-chip mb-5 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:mb-7 sm:gap-x-2.5">
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

        <p className="fade-in mb-2 font-mono text-[0.65rem] tracking-[0.22em] text-accent-2 uppercase sm:mb-3 sm:text-sm sm:tracking-[0.28em]">
          {siteConfig.role}
        </p>

        <h1 className="fade-in hero-name w-full max-w-5xl text-[clamp(2.25rem,11vw,5.75rem)] leading-[0.92] font-bold tracking-[-0.045em] break-words">
          <span className="block text-foreground">{siteConfig.firstName}</span>
          <span className="text-gradient block">{siteConfig.lastName}</span>
        </h1>

        <p className="fade-in mx-auto mt-5 max-w-2xl px-1 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
          {siteConfig.heroIntro}
        </p>

        <p className="fade-in mt-3 inline-flex max-w-full items-center gap-1.5 px-1 font-mono text-[0.7rem] text-muted-foreground sm:mt-4 sm:text-sm">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-accent-2" aria-hidden="true" />
          <span className="min-w-0 break-words">{siteConfig.location}</span>
        </p>

        <div className="fade-in mt-8 flex w-full max-w-lg flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
          <a
            href="#work"
            className="btn-glow btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white sm:w-auto sm:min-w-[160px] sm:px-8"
          >
            <Terminal className="h-4 w-4 shrink-0" aria-hidden="true" />
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-accent-2/45 hover:bg-white/[0.07] sm:w-auto sm:min-w-[160px] sm:px-8"
          >
            <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
            Contact
          </a>
          <a
            href={siteConfig.resumePath}
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/80 px-6 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground sm:w-auto sm:px-7"
          >
            <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
            Resume
          </a>
        </div>

        <ul className="fade-in signal-strip mt-9 grid w-full max-w-2xl grid-cols-1 gap-0 overflow-hidden sm:mt-11 sm:grid-cols-3">
          {siteConfig.signals.map((signal) => (
            <li key={signal.label} className="signal-cell">
              <span className="font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase sm:text-[0.65rem] sm:tracking-[0.16em]">
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

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:bottom-8 md:block">
        <a
          href="#work"
          className="flex flex-col items-center gap-1 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          <span>Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
