"use client";

import { useState } from "react";
import { ProjectFilterSection } from "../project-details/project-filter-section";
import { ItemGridSection } from "../project-grid-section";
import { Project } from "@/lib/projects";

interface ProjectFilterSectionClientProps {
  projects: Project[];
  categories: string[];
}

export function ProjectFilterSectionClient({
  projects,
  categories,
}: ProjectFilterSectionClientProps) {
  const [filter, setFilter] = useState<string | null>(null);

  // Filter projects based on selected category
  const filteredProjects = filter
    ? projects.filter((project) => project.category === filter)
    : projects;

  return (
    <>
      <ProjectFilterSection
        categories={categories}
        activeFilter={filter}
        onFilterChange={setFilter}
        allLabel="All Projects"
      />

      <ItemGridSection
        items={filteredProjects}
        onResetFilter={() => setFilter(null)}
        emptyMessage="No projects found for the selected category."
        resetButtonText="View All Projects"
        basePath="/technologies/projects"
        itemButtonText="View Project"
      />
    </>
  );
}
