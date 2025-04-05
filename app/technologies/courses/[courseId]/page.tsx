import { notFound } from "next/navigation";
import { client } from "@/tina/__generated__/client";
import { CoursePageClient } from "@/components/courses/course-page-client";

export async function generateStaticParams() {
  const coursesResponse = await client.queries.courseConnection();
  coursesResponse.data.courseConnection.edges?.map((c) => {
    console.log(c?.node?._sys.filename);
  });
  return (
    coursesResponse.data.courseConnection.edges?.map((course) => ({
      courseId: course?.node?._sys.filename,
    })) || []
  );
}

export default async function CoursePage(props: {
  params: Promise<{ courseId: string }>;
}) {
  const params = await props.params;

  try {
    const courseResponse = await client.queries.course({
      relativePath: `${params.courseId}.json`,
    });

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
