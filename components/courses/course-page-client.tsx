'use client';

import { CourseHero } from "@/components/courses/course-hero";
import { CourseFeatures } from "@/components/courses/course-features";
import CourseCurriculum from "@/components/courses/course-curriculum";
import { RegistrationForm } from "@/components/courses/registration-form";
import { CourseHighlights } from "@/components/courses/course-highlights";
import { CourseTestimonials } from "@/components/courses/course-testimonials";
import { Course } from "@/lib/courses";
import { useTina } from "tinacms/dist/react";

interface CoursePageClientProps {
  data: any;
  query: string;
  variables: { relativePath: string };
}

export function CoursePageClient({ data, query, variables }: CoursePageClientProps) {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  });

  const course = tinaData.course as Course;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CourseHero 
        title={course.title} 
        description={course.description}
        image={course.heroImage}
      />
      
      {/* Content Wrapper */}
      <div className="relative bg-gradient-to-b from-background via-background to-gray-50 dark:to-gray-900/50">
        {/* Curved Separator */}
        <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent to-background" />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6">
          <div className="py-8 sm:py-12">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="xl:col-span-2 space-y-8">
                <CourseFeatures
                  duration={course.duration}
                  schedule={course.schedule}
                  skills={course.skills.map(s => s.skill)}
                />
                <CourseHighlights course={course} />
                <CourseCurriculum course={course} />
              </div>
              
              {/* Right Column - Registration Form */}
              <div className="xl:col-span-1">
                <div className="sticky top-24 rounded-xl shadow-lg border ">
                  <RegistrationForm 
                    courseId={variables.relativePath.replace('.json', '')} 
                    courseTitle={course.title} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      {/* <CourseTestimonials courseId={variables.relativePath.replace('.json', '')} /> */}
    </div>
  );
} 