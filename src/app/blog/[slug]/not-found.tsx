import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="section page-top flex min-h-[60vh] flex-col items-center justify-center pb-16 text-center">
      <div className="section-inner max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Not found</p>
        <h1 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">This post does not exist</h1>
        <p className="mt-3 text-muted-foreground">
          The page you are looking for may have been moved or removed.
        </p>
        <Link href="/" className="btn btn-outline mt-8 inline-flex">
          Back to home
        </Link>
      </div>
    </div>
  );
}
