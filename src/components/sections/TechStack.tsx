"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  currentFocusStack,
  fullArchiveStack,
  skillCategories,
} from "@/constants/skills";
import type { SkillLevel } from "@/types";

type StackMode = "focus" | "archive";

const levelClass: Record<SkillLevel, string> = {
  Comfortable: "level-dot--comfortable",
  Learning: "level-dot--learning",
  Familiar: "level-dot--familiar",
};

export function TechStack() {
  const [mode, setMode] = useState<StackMode>("focus");

  return (
    <section
      id="skills"
      className="section-shell relative z-10 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <SectionHeading
            index="02"
            eyebrow="Skills"
            title="Technical stack"
            description="Tools I use often, plus what I’m still learning."
            centered={false}
            className="mb-0 min-w-0 sm:mb-0"
          />

          <div
            className="tech-stack-toggle inline-flex w-full shrink-0 rounded-full border border-border bg-surface p-1 backdrop-blur-md sm:w-auto"
            role="tablist"
            aria-label="Tech stack view"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "focus"}
              onClick={() => setMode("focus")}
              className={`flex-1 rounded-full px-3 py-2.5 text-xs font-medium transition-all sm:flex-none sm:px-5 sm:text-sm ${
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
              className={`flex-1 rounded-full px-3 py-2.5 text-xs font-medium transition-all sm:flex-none sm:px-5 sm:text-sm ${
                mode === "archive"
                  ? "bg-accent-2/20 text-accent-2 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All skills
            </button>
          </div>
        </div>

        {mode === "focus" ? (
          <div
            className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5"
            role="tabpanel"
            aria-label="Current focus technologies"
          >
            {currentFocusStack.map((tech) => (
              <div key={tech} className="tech-stack-pill tech-stack-pill--focus">
                <span className="tech-stack-pill__name">{tech}</span>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="flex flex-col gap-8 sm:gap-10"
            role="tabpanel"
            aria-label="Technology skills"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-xs tracking-wide text-muted-foreground">
                {fullArchiveStack.length} technologies across {skillCategories.length} domains
              </p>
              <ul className="flex flex-wrap gap-3 font-mono text-[0.6rem] tracking-wide text-muted-foreground uppercase">
                <li className="inline-flex items-center gap-1.5">
                  <span className={`level-dot ${levelClass.Comfortable}`} /> Comfortable
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <span className={`level-dot ${levelClass.Familiar}`} /> Familiar
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <span className={`level-dot ${levelClass.Learning}`} /> Learning
                </li>
              </ul>
            </div>

            {skillCategories.map((category) => (
              <div key={category.category} className="arsenal-group min-w-0">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2 border-b border-border/70 pb-2 sm:mb-4">
                  <h3 className="font-mono text-xs font-semibold tracking-[0.16em] text-accent-2 uppercase sm:text-sm">
                    {category.category}
                  </h3>
                  <span className="font-mono text-[0.65rem] text-muted-foreground">
                    {category.skills.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
                  {category.skills.map((skill) => (
                    <div
                      key={`${category.category}-${skill.name}`}
                      className="tech-stack-pill"
                      title={skill.level ? `${skill.name} · ${skill.level}` : skill.name}
                    >
                      <span className="flex items-center justify-center gap-1.5">
                        {skill.level ? (
                          <span
                            className={`level-dot ${levelClass[skill.level]}`}
                            aria-hidden="true"
                          />
                        ) : null}
                        <span className="tech-stack-pill__name">{skill.name}</span>
                      </span>
                      {skill.level ? (
                        <span className="tech-stack-pill__level">{skill.level}</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
