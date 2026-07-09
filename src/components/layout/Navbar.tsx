"use client";

import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/constants/nav";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("#mobileMenu a");
    const closeMenu = () => setIsOpen(false);

    links.forEach((link) => link.addEventListener("click", closeMenu));
    return () => links.forEach((link) => link.removeEventListener("click", closeMenu));
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/80 px-6 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-blue-500"
        >
          {siteConfig.logo}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resumePath}
            download
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-500"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          id="menuToggle"
          className="text-2xl text-white focus:outline-none md:hidden"
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

      <div
        id="mobileMenu"
        className={`mt-4 flex flex-col gap-3 border-t border-white/5 pt-4 text-center md:hidden ${isOpen ? "" : "hidden"}`}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav-link py-2">
            {link.label}
          </a>
        ))}
        <a
          href={siteConfig.resumePath}
          download
          className="btn-glow mx-auto inline-flex w-fit items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-500"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Resume
        </a>
      </div>
    </nav>
  );
}
