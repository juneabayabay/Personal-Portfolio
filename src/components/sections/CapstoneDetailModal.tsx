"use client";

import Image from "next/image";
import { Code2, ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import { siteConfig } from "@/config/site";
import { capstoneProject, capstoneViewGroups } from "@/constants/capstone";

interface CapstoneDetailModalProps {
  onClose: () => void;
}

export function CapstoneDetailModal({ onClose }: CapstoneDetailModalProps) {
  const {
    title,
    badge,
    tagline,
    overview,
    problem,
    solution,
    role,
    challenges,
    results,
    screenshots,
    githubUrl,
    liveUrl,
    featuredImage,
  } = capstoneProject;

  const codeUrl = githubUrl || siteConfig.social.github;

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="capstone-modal-title"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-border bg-[var(--surface-solid)] shadow-2xl sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[1024/501] w-full shrink-0 overflow-hidden bg-[#0d1117]">
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            className="object-contain object-top"
            sizes="(max-width: 896px) 100vw, 896px"
            quality={100}
            unoptimized
            priority
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 rounded-full border border-border bg-background/90 p-2 text-foreground transition-colors hover:bg-background"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6">
          <span className="text-xs font-semibold tracking-wider text-accent-2 uppercase">{badge}</span>
          <h3 id="capstone-modal-title" className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent-2">{tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{overview}</p>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-2 transition-colors hover:text-accent-1"
            >
              <Code2 className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-2 transition-colors hover:text-accent-1"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live demo
              </a>
            ) : null}
          </div>

          <div className="mt-6 space-y-5 border-t border-border pt-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold tracking-wide text-accent-2 uppercase">Problem</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wide text-accent-2 uppercase">Results</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{results}</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-wide text-accent-2 uppercase">Solution</h4>
              <ul className="mt-2 grid gap-1 text-sm text-muted-foreground sm:grid-cols-2">
                {solution.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent-2" aria-hidden="true">
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold tracking-wide text-accent-2 uppercase">My role</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {role.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-wide text-accent-2 uppercase">Key challenge</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{challenges}</p>
              </div>
            </div>
          </div>

          {capstoneViewGroups.map((group) => {
            const views = screenshots.filter((shot) => shot.category === group.id);

            return (
              <div key={group.id} className="mt-6 border-t border-border pt-6">
                <h4 className="text-sm font-semibold text-foreground">{group.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
                <div
                  className={`mt-4 grid gap-4 ${
                    group.id === "patient" ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {views.map((shot) => (
                    <figure
                      key={shot.src}
                      className="overflow-hidden rounded-xl border border-border bg-[#0d1117]"
                    >
                      <div className="relative aspect-[1024/501] overflow-hidden">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          fill
                          className="object-contain object-top"
                          sizes="(max-width: 640px) 100vw, 280px"
                          quality={100}
                          unoptimized
                        />
                      </div>
                      <figcaption className="p-3">
                        <p className="text-sm font-medium text-foreground">{shot.label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{shot.detail}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
