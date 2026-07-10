"use client";

import Image from "next/image";
import { ArrowUpRight, Layers } from "lucide-react";
import { useState } from "react";
import { capstoneProject } from "@/constants/capstone";
import { CapstoneDetailModal } from "@/components/sections/CapstoneDetailModal";

const highlightTech = ["React", "Node.js", "Express", "MySQL"] as const;

const impactMetrics = [
  { label: "Scope", value: "Full-stack" },
  { label: "Roles", value: "4 dashboards" },
  { label: "Domain", value: "Live clinic" },
] as const;

export function CapstoneProject() {
  const { title, badge, tagline, overview, featuredImage } = capstoneProject;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="capstone-card group grid w-full overflow-hidden text-left md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)]"
      >
        <div className="capstone-card-image relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:min-h-[280px] md:self-stretch lg:min-h-[300px]">
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 55vw"
            quality={75}
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--surface-solid)] via-[var(--surface-solid)]/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-[var(--surface-solid)]/30 md:to-[var(--surface-solid)]/85" />
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 font-mono text-[0.6rem] tracking-wider text-accent-2 uppercase backdrop-blur-md sm:top-4 sm:left-4">
            <Layers className="h-3 w-3" aria-hidden="true" />
            Featured
          </div>
        </div>

        <div className="relative flex flex-col justify-center gap-3.5 border-t border-border bg-[var(--surface-solid)] p-4 sm:gap-4 sm:p-6 md:border-t-0 md:border-l md:p-7 lg:p-8">
          <span className="accent-badge w-fit rounded-full px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide uppercase sm:text-xs">
            {badge}
          </span>

          <div className="min-w-0">
            <h3 className="text-base font-bold leading-snug break-words text-foreground transition-colors group-hover:text-accent-2 sm:text-xl lg:text-[1.35rem]">
              {title}
            </h3>
            <p className="mt-1.5 text-sm font-medium text-accent-2">{tagline}</p>
          </div>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {overview}
          </p>

          <dl className="grid grid-cols-3 gap-2 border-y border-border/80 py-3">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="min-w-0 text-center sm:text-left">
                <dt className="font-mono text-[0.55rem] tracking-[0.12em] text-muted-foreground uppercase sm:text-[0.6rem]">
                  {metric.label}
                </dt>
                <dd className="mt-0.5 text-xs font-semibold text-foreground sm:text-sm">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="flex flex-wrap gap-1.5 sm:gap-2" aria-label="Key technologies">
            {highlightTech.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-white/[0.03] px-2 py-1 font-mono text-[0.65rem] text-muted-foreground sm:px-2.5 sm:text-xs"
              >
                {tech}
              </li>
            ))}
          </ul>

          <span className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-2">
            View case study
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </button>

      {isOpen ? <CapstoneDetailModal onClose={() => setIsOpen(false)} /> : null}
    </>
  );
}
