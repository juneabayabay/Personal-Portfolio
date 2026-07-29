"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/common/Logo";
import { homeHref, navLinks } from "@/constants/nav";
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
    if (!isOpen) return;
    const links = document.querySelectorAll("#mobileMenu a");
    const closeMenu = () => setIsOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    links.forEach((link) => link.addEventListener("click", closeMenu));
    window.addEventListener("keydown", onKeyDown);
    return () => {
      links.forEach((link) => link.removeEventListener("click", closeMenu));
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`nav-bar safe-top fixed top-0 left-0 z-50 w-full ${
        scrolled ? "nav-bar--scrolled" : ""
      }`}
    >
      <div className="section-inner flex h-[var(--nav-height)] items-center justify-between gap-3">
        <a
          href={homeHref}
          className="brand-mark-link inline-flex min-h-11 min-w-0 shrink items-center"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setIsOpen(false)}
        >
          <BrandMark variant="nav" />
        </a>

        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link px-2 py-2">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobileMenu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 top-[calc(var(--nav-height)+env(safe-area-inset-top,0px))] z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      ) : null}

      <div
        id="mobileMenu"
        className={`relative z-50 lg:hidden ${isOpen ? "" : "hidden"}`}
      >
        <div className="section-inner grid max-h-[calc(100dvh-var(--nav-height)-env(safe-area-inset-top,0px)-1rem)] gap-0.5 overflow-y-auto border-t border-border py-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link rounded-lg px-3 py-3.5 text-base"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
