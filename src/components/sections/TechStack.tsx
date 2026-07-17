"use client";

import { useState } from "react";
import {
  currentFocusStack,
  skillCategories,
} from "@/constants/skills";
import type { SkillLevel } from "@/types";

type StackMode = "focus" | "all";

const levelClass: Record<SkillLevel, string> = {
  Comfortable: "level-dot--comfortable",
  Learning: "level-dot--learning",
  Familiar: "level-dot--familiar",
};

const levelLabel: Record<SkillLevel, string> = {
  Comfortable: "Comfortable",
  Learning: "Learning",
  Familiar: "Familiar",
};

export function TechStack() {
  const [mode, setMode] = useState<StackMode>("focus");

  return (
    <section id="skills" className="section-block scroll-mt-nav">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <h2 className="section-heading">Tech Stack</h2>
            <p className="section-sub">
              Tools I use in projects—some comfortable, others still in progress.
            </p>
          </div>

          <div className="toggle-group w-full sm:w-auto" role="tablist" aria-label="Tech stack view">
            <button
              type="button"
              role="tab"
              aria-selected={mode === "focus"}
              onClick={() => setMode("focus")}
              className={`toggle-btn flex-1 sm:flex-none ${mode === "focus" ? "toggle-btn--active" : ""}`}
            >
              Current Focus
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "all"}
              onClick={() => setMode("all")}
              className={`toggle-btn flex-1 sm:flex-none ${mode === "all" ? "toggle-btn--active" : ""}`}
            >
              All Skills
            </button>
          </div>
        </div>

        {mode === "focus" ? (
          <div className="skill-grid" role="tabpanel">
            {currentFocusStack.map((tech) => (
              <div key={tech} className="skill-chip">{tech}</div>
            ))}
          </div>
        ) : (
          <div className="space-y-6" role="tabpanel">
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="level-dot level-dot--comfortable" /> Comfortable
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="level-dot level-dot--familiar" /> Familiar
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="level-dot level-dot--learning" /> Learning
              </span>
            </div>

            {skillCategories.map((category) => (
              <div key={category.category}>
                <h3 className="mb-2.5 text-sm font-medium text-foreground">{category.category}</h3>
                <div className="skill-grid">
                  {category.skills.map((skill) => (
                    <div
                      key={`${category.category}-${skill.name}`}
                      className="skill-chip"
                      title={skill.level ? `${skill.name} · ${levelLabel[skill.level]}` : skill.name}
                    >
                      {skill.level ? (
                        <span className={`level-dot ${levelClass[skill.level]}`} aria-hidden="true" />
                      ) : null}
                      {skill.name}
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
