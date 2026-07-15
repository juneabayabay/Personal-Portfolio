import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="section-shell relative z-10 mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 pt-28 pb-16 text-center">
      <p className="font-mono text-xs tracking-[0.18em] text-accent-2 uppercase">
        404
      </p>
      <h1 className="mt-3 text-2xl font-bold text-foreground">
        Note not found
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        That build journal entry doesn&apos;t exist or isn&apos;t published yet.
      </p>
      <Link
        href="/#learn"
        className="mt-8 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent-2/40 hover:text-accent-2"
      >
        Back to build journal
      </Link>
    </div>
  );
}
