"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/projects/common/project-card";
import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { client } from "@/tina/__generated__/client";
import { transformTinaProject } from "@/lib/projects";
import { useState, useEffect } from "react";
import type { Project } from "@/lib/projects";

export function ProjectsHomeSection() {
  // Filter projects marked as featured instead of showing first 3
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsResponse = await client.queries.projectConnection();
        const tinaProjects =
          projectsResponse.data.projectConnection.edges?.map(
            (edge) => edge?.node
          ) || [];

        const transformedProjects = tinaProjects
          .map((project) => transformTinaProject(project))
          .filter((project) => project.featured);

        // If no featured projects, fall back to first 3
        setFeaturedProjects(
          transformedProjects.length > 0
            ? transformedProjects
            : projects.slice(0, 3)
        );
      } catch (error) {
        console.error("Error fetching featured projects:", error);
        setFeaturedProjects(projects.slice(0, 3));
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="py-8 text-center">Loading projects...</div>;
  }

  return (
    <Section
      title="Featured Projects"
      description="Discover our innovative solutions across various industries"
      className="bg-gray-50 dark:bg-gray-900 !mb-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            category={project.category}
            image={project.image}
            tags={project.tags.slice(0, 3)} // Limit tags for the card view
            basePath="/technologies/projects"
            buttonText="View Project"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <Link href="/technologies/projects">
          <Button className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
