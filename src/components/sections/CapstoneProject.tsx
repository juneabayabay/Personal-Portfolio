import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { capstoneProject } from "@/constants/capstone";

const highlightTech = ["React", "Node.js", "Express", "MySQL"] as const;
const CASE_STUDY_HREF = "/blog/barnabas-system-study";

export function CapstoneProject() {
  const { title, badge, tagline, overview, featuredImage } = capstoneProject;

  return (
    <Link
      href={CASE_STUDY_HREF}
      className="media-card media-card--project group grid w-full min-w-0 grid-cols-1 lg:grid-cols-2"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:min-h-[260px]">
        <Image
          src={featuredImage.src}
          alt={featuredImage.alt}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={75}
          priority
        />
      </div>

      <div className="flex min-w-0 flex-col justify-center gap-3 p-4 sm:gap-4 sm:p-5 lg:p-6 xl:p-8">
        <span className="tag tag-gold w-fit">{badge}</span>
        <div className="min-w-0">
          <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg lg:text-xl">
            {title}
          </h3>
          <p className="mt-1 text-sm font-medium text-primary">{tagline}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
          {overview}
        </p>
        <ul className="flex flex-wrap gap-2">
          {highlightTech.map((tech) => (
            <li key={tech}>
              <span className="tag">{tech}</span>
            </li>
          ))}
        </ul>
        <span className="link-arrow">
          Read full case study
          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
