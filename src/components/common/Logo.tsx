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
      aria-hidden="true"
    >
      <span className="brand-mark__code">{"?>"}</span>
    </span>
  );
}
