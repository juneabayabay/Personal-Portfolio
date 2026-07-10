import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        centered ? "mb-10 text-center sm:mb-12" : "mb-8 text-left sm:mb-10",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          centered && "justify-center",
        )}
      >
        {index ? (
          <span className="section-index font-mono text-xs font-semibold tracking-widest sm:text-sm">
            {index}
          </span>
        ) : null}
        <span className="eyebrow text-xs font-semibold tracking-[0.22em] uppercase sm:text-sm">
          {eyebrow}
        </span>
        {!centered ? <span className="section-rule hidden sm:block" aria-hidden="true" /> : null}
      </div>
      <h2 className="section-heading mt-3">{title}</h2>
      {description ? (
        <p className={cn("section-sub", !centered && "mx-0")}>{description}</p>
      ) : null}
    </div>
  );
}
