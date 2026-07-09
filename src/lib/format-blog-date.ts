/** e.g. "OCT 6, 2025" */
export function formatBlogDate(iso: string): string {
  const formatted = new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formatted.toUpperCase();
}
