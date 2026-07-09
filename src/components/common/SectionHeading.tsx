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
    <div className={centered ? "mb-14 text-center" : "mb-10"}>
      <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
        {eyebrow}
      </span>
      <h2 className="section-heading mt-2">{title}</h2>
      {description ? <p className="section-sub">{description}</p> : null}
    </div>
  );
}
