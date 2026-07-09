interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mb-10 text-center sm:mb-14" : "mb-8 sm:mb-10"}>
      <span className="eyebrow text-sm font-semibold uppercase tracking-widest">
        {eyebrow}
      </span>
      <h2 className="section-heading mt-2">{title}</h2>
      {description ? <p className="section-sub">{description}</p> : null}
    </div>
  );
}
