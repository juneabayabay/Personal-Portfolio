import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 sm:mb-10", className)}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-desc">{description}</p> : null}
    </div>
  );
}
