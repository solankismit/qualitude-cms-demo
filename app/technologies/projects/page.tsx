"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectHeroSection } from "@/components/projects/project-hero-section";
import { ProjectFilterSection } from "@/components/projects/project-filter-section";
import { ItemGridSection } from "@/components/projects/project-grid-section";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);

  // Get unique categories from projects
  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  // Filter projects based on selected category
  const filteredProjects = filter
    ? projects.filter((project) => project.category === filter)
    : projects;

  return (
    <div className="relative">
      <ProjectHeroSection
        title="Our Projects"
        description="Discover our innovative solutions and successful implementations across various industries"
      />

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
    </div>
  );
}
