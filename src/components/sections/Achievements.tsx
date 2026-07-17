import { ExternalLink, Trophy } from "lucide-react";
import { achievements } from "@/constants/achievements";

export function Achievements() {
  const featured = achievements.filter((item) => item.tier === "featured");
  const standard = achievements.filter((item) => item.tier === "standard");

  return (
    <section id="achievements" className="section scroll-mt-20">
      <div className="section-inner">
        <h2 className="section-heading">Achievements</h2>
        <p className="section-sub">
          Milestones that reflect my learning drive—verified courses, shipped projects, and continuous growth.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {featured.map((item) => {
            const inner = (
              <>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Trophy className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{item.subtitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  {item.url ? (
                    <span className="link-arrow mt-3 inline-flex text-sm">
                      View credential
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  ) : null}
                </div>
              </>
            );

            return item.url ? (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-card achievement-card--featured flex flex-col gap-4 sm:flex-row sm:items-start"
              >
                {inner}
              </a>
            ) : (
              <article
                key={item.id}
                className="achievement-card achievement-card--featured flex flex-col gap-4 sm:flex-row sm:items-start"
              >
                {inner}
              </article>
            );
          })}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {standard.map((item) => {
            const inner = (
              <>
                <Trophy className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-0.5 text-xs font-medium text-primary">{item.subtitle}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </>
            );

            return item.url ? (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-card flex items-start gap-3"
              >
                {inner}
              </a>
            ) : (
              <article key={item.id} className="achievement-card flex items-start gap-3">
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
