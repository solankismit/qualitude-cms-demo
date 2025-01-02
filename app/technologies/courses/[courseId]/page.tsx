
import { courses } from "@/lib/courses";
import { CourseHero } from "@/components/courses/course-hero";
import { CourseFeatures } from "@/components/courses/course-features";
import  CourseCurriculum from "@/components/courses/course-curriculum";
import { RegistrationForm } from "@/components/courses/registration-form";
import { notFound } from "next/navigation";
export async function generateStaticParams() {
  return courses.map((course) => ({
    courseId: course.id,
  }));
}
export default function CoursePage({ params }: { params: { courseId: string } }) {
  // const { courseId } = useParams();
  const course = courses.find((c) => c.id === params.courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen text-center bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
      <div className="space-y-16 pb-16">
        <CourseHero title={course.title} description={course.description} />
        <CourseFeatures
          duration={course.duration}
          schedule={course.schedule}
          skills={course.skills}
        />
        <CourseCurriculum course={course} />
        <RegistrationForm courseId={course.id} courseTitle={course.title} />
      </div>
    </div>
  );
}