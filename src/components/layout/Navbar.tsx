"use client";

import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/common/Logo";
import { navLinks } from "@/constants/nav";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const links = document.querySelectorAll("#mobileMenu a");
    const closeMenu = () => setIsOpen(false);

    links.forEach((link) => link.addEventListener("click", closeMenu));
    return () => links.forEach((link) => link.removeEventListener("click", closeMenu));
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`nav-glass safe-top fixed top-0 left-0 z-50 w-full px-4 py-3 transition-[background,box-shadow,border-color] duration-300 sm:px-6 sm:py-3.5 ${
        scrolled ? "nav-glass--scrolled" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a
          href="#home"
          className="inline-flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label={`${siteConfig.name} home`}
        >
          <Logo size={32} className="h-8 w-8 sm:h-9 sm:w-9" />
          <span className="hidden font-mono text-xs font-semibold tracking-[0.2em] text-foreground uppercase sm:inline">
            {siteConfig.firstName}
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link whitespace-nowrap">
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resumePath}
            download
            className="btn-glow btn-primary inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white sm:px-5"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          id="menuToggle"
          className="-mr-1 rounded-lg p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 top-[max(57px,calc(env(safe-area-inset-top)+48px))] z-40 bg-background/95 backdrop-blur-sm sm:top-[max(65px,calc(env(safe-area-inset-top)+52px))] md:hidden"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      ) : null}

      <div
        id="mobileMenu"
        className={`relative z-50 mt-3 flex flex-col gap-1 border-t border-border pt-3 text-center sm:mt-4 sm:gap-2 sm:pt-4 md:hidden ${isOpen ? "" : "hidden"}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link rounded-lg px-3 py-3 text-base sm:py-2.5"
          >
            {link.label}
          </a>
        ))}
        <a
          href={siteConfig.resumePath}
          download
          className="btn-glow btn-primary mx-auto mt-2 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white sm:w-fit sm:py-2.5"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Resume
        </a>
      </div>
    </nav>
  );
}
