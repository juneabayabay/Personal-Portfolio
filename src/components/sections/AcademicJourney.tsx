import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { academicJourney } from "@/constants/education";

export function AcademicJourney() {
  return (
    <section
      id="education"
      className="section-shell section-panel relative z-10 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Path"
          title={academicJourney.title}
          description={academicJourney.subtitle}
          centered={false}
        />

        <article className="glass p-5 sm:p-6 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-2/10 sm:h-11 sm:w-11">
                <GraduationCap
                  className="h-5 w-5 text-accent-2 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {academicJourney.school}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                  {academicJourney.degree}
                </p>
                <p className="mt-2 text-sm font-medium text-accent-2 sm:hidden">
                  Expected {academicJourney.expectedGraduation}
                </p>
              </div>
            </div>

            <div className="shrink-0 border-t border-border pt-4 text-left sm:border-0 sm:pt-0 sm:text-right">
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase sm:text-sm">
                {academicJourney.period}
              </p>
              <p className="mt-1 hidden text-sm font-medium text-accent-2 sm:block">
                Expected {academicJourney.expectedGraduation}
              </p>
            </div>
          </div>

          <p className="mt-5 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
            {academicJourney.description}
          </p>
        </article>
      </div>
    </section>
  );
}
