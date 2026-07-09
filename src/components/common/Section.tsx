import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 md:py-24", className)}
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
