import { Clock, Flag, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { projects } from "@/constants/projects";
import { skillCategories } from "@/constants/skills";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              About Me
            </span>
            <h2 className="section-heading mt-2 text-left">
              A little about me.
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-[#cbd5e1]">
              {siteConfig.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="flex flex-wrap items-center gap-3 text-sm text-[#94a3b8]">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  {siteConfig.availability}
                </span>
                <span className="hidden h-4 w-px bg-white/10 sm:inline" />
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {siteConfig.role}
                </span>
                <span className="hidden h-4 w-px bg-white/10 sm:inline" />
                <span className="flex items-center gap-1">
                  <Flag className="h-3.5 w-3.5" aria-hidden="true" />
                  {projects.length} projects
                </span>
                <span className="hidden h-4 w-px bg-white/10 sm:inline" />
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  Cainta, Rizal
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="glass p-6 text-center">
                <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="mt-1 text-sm text-[#94a3b8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="skills" className="mt-20 border-t border-white/5 pt-10">
          <SectionHeading
            eyebrow="Skills"
            title="Tech Stack & Tools"
            description="Technologies I use and continue to learn."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.category} className="glass p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="skill-pill text-xs">
                      {skill.name}
                      {skill.level ? (
                        <span className="ml-1.5 text-[10px] opacity-70">
                          · {skill.level}
                        </span>
                      ) : null}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
