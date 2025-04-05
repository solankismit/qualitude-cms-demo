import { transformTinaProject } from "@/lib/projects";
import client from "@/tina/__generated__/client";
import { ProjectsListPageClient } from "@/components/projects/projects-main/projects-list-page-client";

export default async function ProjectsPage() {
  // For TinaCMS, we can ignore type errors since the types will be generated later
  // @ts-ignore
  const res = await client.queries.projectConnection();
  // @ts-ignore
  const projectEdges = res.data.projectConnection.edges || [];

  // Transform projects data to match the Project interface
  const projects = projectEdges.map((edge: any) => {
    return transformTinaProject(edge.node);
  });

  // Get unique categories from projects
  const categories = Array.from(
    new Set(projects.map((project: any) => project.category)) as Set<string>
  );

  return <ProjectsListPageClient projects={projects} categories={categories} />;
}
