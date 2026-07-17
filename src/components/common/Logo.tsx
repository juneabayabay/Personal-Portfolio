import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  variant?: "nav" | "footer";
}

export function BrandMark({ className, variant = "nav" }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "brand-mark",
        variant === "nav" ? "brand-mark--nav" : "brand-mark--footer",
        className,
      )}
    >
      <span className="brand-mark__top">Discipline in</span>
      <span className="brand-mark__main">Silence</span>
    </span>
  );
}

/** @deprecated Use BrandMark */
export function Logo(props: { className?: string; size?: number }) {
  return <BrandMark className={props.className} variant="nav" />;
}
