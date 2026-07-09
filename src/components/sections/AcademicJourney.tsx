import { GraduationCap } from "lucide-react";
import { academicJourney } from "@/constants/education";

export function AcademicJourney() {
  return (
    <section
      id="education"
      className="relative z-10 scroll-mt-20 px-4 pb-10 pt-2 sm:scroll-mt-24 sm:px-6 sm:pb-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {academicJourney.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            {academicJourney.subtitle}
          </p>
        </div>

        <article className="glass p-5 sm:p-6 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11">
                <GraduationCap
                  className="h-6 w-6 text-emerald-400 sm:h-7 sm:w-7"
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
                  Expected Graduation: {academicJourney.expectedGraduation}
                </p>
              </div>
            </div>

            <div className="shrink-0 text-left sm:text-right">
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase sm:text-sm">
                {academicJourney.period}
              </p>
              <p className="mt-1 hidden text-sm font-medium text-accent-2 sm:block">
                Expected Graduation: {academicJourney.expectedGraduation}
              </p>
            </div>
          </div>

          <p className="mt-5 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground italic sm:mt-6 sm:text-base">
            {academicJourney.description}
          </p>
        </article>
      </div>
    </section>
  );
}
