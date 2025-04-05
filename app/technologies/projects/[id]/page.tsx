// "use client";

import { projects, transformTinaProject } from "@/lib/projects";
import { notFound } from "next/navigation";
import client from "@/tina/__generated__/client";
import { ProjectPageClient } from "@/components/projects/project-details/project-page-client";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  try {
    // For Tina CMS, we'll need to fetch all projects to generate static paths
    // @ts-ignore
    const res = await client.queries.projectConnection();
    // @ts-ignore
    const projectEdges = res.data.projectConnection.edges || [];

    return projectEdges.map((edge: any) => ({
      id: edge.node._sys.filename,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    // Fallback to static data
    return projects.map((project) => ({
      id: project.id,
    }));
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  try {
    // Try to fetch the project from Tina CMS
    // @ts-ignore
    const projectResponse = await client.queries.project({
      relativePath: `${params.id}.json`,
    });

    if (!projectResponse.data.project) {
      console.error("Project not found for:", params.id);
      notFound();
    }

    // Get projects in the same category from Tina
    // @ts-ignore
    const allProjectsRes = await client.queries.projectConnection();
    // @ts-ignore
    const projectEdges = allProjectsRes.data.projectConnection.edges || [];

    // Keep original nodes for related projects
    const relatedProjects = projectEdges
      .filter((edge: any) => {
        const node = edge.node;
        return (
          node.category === projectResponse.data.project.category &&
          node._sys.filename !== params.id
        );
      })
      .map((edge: any) => transformTinaProject(edge.node))
      .slice(0, 3);

    return (
      <ProjectPageClient
        data={projectResponse.data}
        query={projectResponse.query}
        variables={projectResponse.variables}
        relatedProjects={relatedProjects}
      />
    );
  } catch (error) {
    console.error("Error fetching project data:", error);

    // Fallback to static data if Tina fetch fails
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
      notFound();
    }

    // Get projects in the same category (excluding the current one)
    const relatedProjects = projects
      .filter((p) => p.category === project.category && p.id !== project.id)
      .slice(0, 3);

    // Create a mock Tina data structure with our static project
    const mockData = {
      project: {
        ...project,
        _sys: { filename: project.id },
      },
    };

    return (
      <ProjectPageClient
        data={mockData}
        query=""
        variables={{ relativePath: `${params.id}.json` }}
        relatedProjects={relatedProjects}
      />
    );
  }
}
