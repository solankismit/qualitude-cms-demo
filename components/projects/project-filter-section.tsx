"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

interface ProjectFilterSectionProps {
  categories: string[];
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
  allLabel?: string;
}

export function ProjectFilterSection({
  categories,
  activeFilter,
  onFilterChange,
  allLabel = "All Projects",
}: ProjectFilterSectionProps) {
  return (
    <Section className="bg-white dark:bg-gray-950 pt-4 pb-0">
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <Button
          variant={activeFilter === null ? "default" : "outline"}
          onClick={() => onFilterChange(null)}
          className="rounded-full"
        >
          {allLabel}
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            onClick={() => onFilterChange(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
    </Section>
  );
}
