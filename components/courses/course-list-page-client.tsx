"use client";
import { Course } from "@/lib/courses";
import { useState } from "react";
import { ProjectHeroSection } from "../projects/project-hero-section";
import { ProjectFilterSection } from "../projects/project-filter-section";
import { ItemGridSection } from "../projects/project-grid-section";

const CourseListPageClient = ({
  courses: coursesForDisplay,
}: {
  courses: Course[];
}) => {
  const [filter, setFilter] = useState<string | null>(null);

  // Get unique categories from courses
  const categories = Array.from(
    new Set(
      coursesForDisplay?.reduce((acc: string[], course) => {
        if (course.category != "") {
          acc.push(course.category);
        }
        return acc;
      }, [])
    )
  );

  // Filter courses based on selected category
  const filteredCourses = filter
    ? coursesForDisplay?.filter((course) => course.category === filter)
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
        items={filteredCourses || []}
        onResetFilter={() => setFilter(null)}
        emptyMessage="No courses found for the selected category."
        resetButtonText="View All Courses"
        basePath="/technologies/courses"
        itemButtonText="Learn More"
      />
    </div>
  );
};

export default CourseListPageClient;
