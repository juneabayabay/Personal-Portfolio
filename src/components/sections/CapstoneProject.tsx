"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { capstoneProject } from "@/constants/capstone";
import { CapstoneDetailModal } from "@/components/sections/CapstoneDetailModal";

export function CapstoneProject() {
  const { title, badge, tagline, overview, featuredImage } = capstoneProject;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="blog-card capstone-card group mx-auto flex w-full max-w-3xl flex-col overflow-hidden text-left"
      >
        <div className="capstone-card-image relative aspect-[1024/501] w-full overflow-hidden">
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 768px"
            quality={100}
            unoptimized
            priority
          />
        </div>

        <div className="flex flex-col border-t border-border bg-[var(--surface-solid)] p-5 sm:p-6">
          <span className="accent-badge w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            {badge}
          </span>

          <h3 className="mt-3 text-lg font-bold text-foreground transition-colors group-hover:text-accent-2 sm:text-xl">
            {title}
          </h3>

          <p className="mt-1 text-sm font-medium text-accent-2">{tagline}</p>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{overview}</p>

          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-2">
            View project
            <ChevronRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </button>

      {isOpen ? <CapstoneDetailModal onClose={() => setIsOpen(false)} /> : null}
    </>
  );
}
