"use client";

import { useState } from "react";
import { currentFocusStack, fullArchiveStack } from "@/constants/skills";

type StackMode = "focus" | "archive";

export function TechStack() {
  const [mode, setMode] = useState<StackMode>("focus");
  const items = mode === "focus" ? [...currentFocusStack] : fullArchiveStack;

  return (
    <section
      id="skills"
      className="relative z-10 scroll-mt-20 px-4 pb-10 pt-2 sm:scroll-mt-24 sm:px-6 sm:pb-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tech Stack
          </h2>

          <div
            className="tech-stack-toggle inline-flex w-full rounded-full border border-border bg-surface p-1 backdrop-blur-md sm:w-auto"
            role="tablist"
            aria-label="Tech stack view"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "focus"}
              onClick={() => setMode("focus")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all sm:flex-none sm:px-5 ${
                mode === "focus"
                  ? "bg-accent-2/20 text-accent-2 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Current Focus
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "archive"}
              onClick={() => setMode("archive")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all sm:flex-none sm:px-5 ${
                mode === "archive"
                  ? "bg-accent-2/20 text-accent-2 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Full Archive
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4"
          role="tabpanel"
          aria-label={mode === "focus" ? "Current focus technologies" : "Full technology archive"}
        >
          {items.map((tech) => (
            <div key={tech} className="tech-stack-pill">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
