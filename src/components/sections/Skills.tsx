import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { skillCategories } from "@/constants/skills";
import { cn } from "@/lib/utils";

const levelStyles = {
  Learning: "bg-accent/10 text-accent",
  Comfortable: "bg-primary/10 text-primary",
  Familiar: "bg-secondary/10 text-secondary",
} as const;

export function Skills() {
  return (
    <Section id="skills" className="bg-surface/50">
      <SectionTitle
        eyebrow="Skills"
        title="Technologies I Work With"
        description="Focused on tools I'm actively using and learning — not everything I've ever tried."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.category}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              {category.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm"
                >
                  <span className="font-medium text-foreground">{skill.name}</span>
                  {skill.level ? (
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-medium",
                        levelStyles[skill.level],
                      )}
                    >
                      {skill.level}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
