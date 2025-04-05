"use client";

import { ProjectHeroSection } from "@/components/projects/project-details/project-hero-section";
import { ProjectFilterSectionClient } from "@/components/projects/projects-main/project-filter-section-client";
import { Project } from "@/lib/projects";

interface ProjectsListPageClientProps {
  projects: Project[];
  categories: string[];
}

export function ProjectsListPageClient({
  projects,
  categories,
}: ProjectsListPageClientProps) {
  return (
    <div className="relative">
      <ProjectHeroSection
        title="Our Projects"
        description="Discover our innovative solutions and successful implementations across various industries"
      />

      <ProjectFilterSectionClient projects={projects} categories={categories} />
    </div>
  );
}
