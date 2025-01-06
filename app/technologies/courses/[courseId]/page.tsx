import { notFound } from "next/navigation";
import { client } from "@/tina/__generated__/client";
import { CoursePageClient } from "@/components/courses/course-page-client";

export async function generateStaticParams() {
  const coursesResponse = await client.queries.courseConnection();
  console.log("@@courseResponse::")
  coursesResponse.data.courseConnection.edges?.map((c)=>{
    console.log(c?.node?._sys.filename);
    
  })
  console.log("@@courseResponse----")
  return coursesResponse.data.courseConnection.edges?.map((course) => ({
    courseId: course?.node?._sys.filename,
  })) || [];
}

export default async function CoursePage({ params }: { params: { courseId: string } }) {
  console.log("IN CoursePage", params.courseId);

  try {
    const courseResponse = await client.queries.course({
      relativePath: `${params.courseId}.json`,
    });

    console.log("Course Response:", courseResponse);

    if (!courseResponse.data.course) {
      console.error("Course not found for:", params.courseId);
      notFound();
    }

    return (
      <CoursePageClient 
        data={courseResponse.data}
        query={courseResponse.query}
        variables={courseResponse.variables}
      />
    );
  } catch (error) {
    console.error("Error fetching course data:", error);
    notFound();
  }
}