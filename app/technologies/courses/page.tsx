"use client";

import { useState } from "react";
import { courses } from "@/lib/courses";
import { ProjectHeroSection } from "@/components/projects/project-hero-section";
import { ProjectFilterSection } from "@/components/projects/project-filter-section";
import { ItemGridSection } from "@/components/projects/project-grid-section";

export default function CoursesPage() {
  const [filter, setFilter] = useState<string | null>(null);

  // Transform courses data to match the card interface
  const coursesForDisplay = courses.map((course) => ({
    id: course.id,
    title: course.title,
    description: course.description,
    category: course.category,
    image: course.heroImage || "/images/courses/default-course.jpg",
    tags: course.skills.slice(0, 3), // Using first 3 skills as tags
  }));

  // Get unique categories from courses
  const categories = Array.from(
    new Set(coursesForDisplay.map((course) => course.category))
  );

  // Filter courses based on selected category
  const filteredCourses = filter
    ? coursesForDisplay.filter((course) => course.category === filter)
    : coursesForDisplay;

  return (
    <div className="relative">
      <ProjectHeroSection
        title="Our Courses"
        description="Launch your career with our industry-focused training programs and gain hands-on experience with real projects"
      />

      <ProjectFilterSection
        categories={categories}
        activeFilter={filter}
        onFilterChange={setFilter}
        allLabel="All Courses"
      />

      <ItemGridSection
        items={filteredCourses}
        onResetFilter={() => setFilter(null)}
        emptyMessage="No courses found for the selected category."
        resetButtonText="View All Courses"
        basePath="/technologies/courses"
        itemButtonText="Learn More"
      />
    </div>
  );
}
