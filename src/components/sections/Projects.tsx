import { CapstoneProject } from "@/components/sections/CapstoneProject";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Projects() {
  return (
    <section id="work" className="section-shell section-panel scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Capstone project"
          description="Clinic web system for scheduling, records, billing, and staff roles. Open the card for the full system study."
          centered={false}
        />
        <CapstoneProject />
      </div>
    </section>
  );
}
