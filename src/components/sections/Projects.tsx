import { CapstoneProject } from "@/components/sections/CapstoneProject";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Projects() {
  return (
    <section id="work" className="section-shell section-panel scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Capstone Project"
          description="Full-stack system built for a real clinic — scheduling, records, billing, and role-based dashboards."
        />
        <CapstoneProject />
      </div>
    </section>
  );
}
