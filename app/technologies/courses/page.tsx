import { transformTinaCourse } from "@/lib/courses";
import client from "@/tina/__generated__/client";
import { Course } from "@/tina/__generated__/types";
import CourseListPageClient from "@/components/courses/course-list-page-client";

export default async function CoursesPage() {
  const res = await client.queries.courseConnection();
  const courses = res.data.courseConnection.edges;
  // Transform courses data to match the card interface
  const coursesForDisplay = courses?.map((course) => {
    const courseData = transformTinaCourse(course?.node as Course);
    return courseData;
  });
  return <CourseListPageClient courses={coursesForDisplay || []} />;
}
