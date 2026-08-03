import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CapstoneProject } from "@/components/sections/CapstoneProject";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/constants/projects";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `All projects by ${siteConfig.name}—school, client, and personal work with live demos.`,
};

export default function ProjectsPage() {
  return (
    <section className="section scroll-mt-nav page-top pb-16 sm:pb-24">
      <div className="section-inner">
        <Link
          href="/#work"
          className="link-arrow text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to home
        </Link>

        <header className="mt-8 mb-8 sm:mb-10">
          <h1 className="section-heading">All projects</h1>
          <p className="section-sub mt-2 max-w-2xl">
            Capstone, client, and personal builds—each with a live demo and notes on what I learned.
          </p>
        </header>

        <div className="flex w-full min-w-0 flex-col gap-5 sm:gap-6">
          <CapstoneProject />

          <div className="projects-grid w-full">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} layout="vertical" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
