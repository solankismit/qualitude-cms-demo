"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "./project-card";
import { Course } from "@/lib/courses";

interface ItemGridSectionProps {
  items: Course[];
  onResetFilter?: () => void;
  emptyMessage?: string;
  resetButtonText?: string;
  basePath?: string;
  itemButtonText?: string;
}

export function ItemGridSection({
  items,
  onResetFilter,
  emptyMessage = "No items found for the selected category.",
  resetButtonText = "View All",
  basePath = "/technologies/projects",
  itemButtonText = "View Project",
}: ItemGridSectionProps) {
  return (
    <Section className="bg-white dark:bg-gray-950 pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <ProjectCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            image={item.heroImage || ""}
            tags={item.skills?.slice(0, 3) || []}
            basePath={basePath}
            buttonText={itemButtonText}
          />
        ))}
      </div>

      {items.length === 0 && onResetFilter && (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-muted-foreground">
            {emptyMessage}
          </h3>
          <Button variant="outline" onClick={onResetFilter} className="mt-4">
            {resetButtonText}
          </Button>
        </div>
      )}
    </Section>
  );
}
