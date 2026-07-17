"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/common/Logo";
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
      className={`nav-bar safe-top fixed top-0 left-0 z-50 w-full ${
        scrolled ? "nav-bar--scrolled" : ""
      }`}
    >
      <div className="section-inner flex h-[var(--nav-height)] items-center justify-between gap-3 sm:gap-4">
        <a
          href="#home"
          className="brand-mark-link inline-flex min-w-0 shrink items-center"
          aria-label={`${siteConfig.name} home`}
        >
          <BrandMark variant="nav" />
        </a>

        <div className="hidden items-center gap-3 xl:gap-4 xl:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="shrink-0 rounded-lg p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary xl:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 top-[calc(var(--nav-height)+env(safe-area-inset-top,0px))] z-40 bg-background/80 backdrop-blur-sm xl:hidden"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      ) : null}

      <div
        id="mobileMenu"
        className={`relative z-50 xl:hidden ${isOpen ? "" : "hidden"}`}
      >
        <div className="section-inner grid max-h-[calc(100dvh-var(--nav-height)-env(safe-area-inset-top,0px))] gap-1 overflow-y-auto border-t border-border py-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link rounded-lg py-3 text-base">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
