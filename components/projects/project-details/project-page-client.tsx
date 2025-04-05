"use client";

import { useTina } from "tinacms/dist/react";
import { Project } from "@/lib/projects";
import { ProjectDetailHeader } from "@/components/projects/project-details/project-detail-header";
import { ProjectContent } from "@/components/projects/project-details/project-content";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/common/project-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProjectPageClientProps {
  data: any;
  query: string;
  variables: { relativePath: string };
  relatedProjects: Project[];
}

export function ProjectPageClient({
  data,
  query,
  variables,
  relatedProjects,
}: ProjectPageClientProps) {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  });

  // Use the project data from Tina, but first ensure it exists
  if (!tinaData?.project) return null;

  // Convert to our Project type
  const project: Project = {
    id: tinaData.project._sys?.filename || "",
    title: tinaData.project.title || "",
    description: tinaData.project.description || "",
    fullDescription: tinaData.project.fullDescription || [],
    category: tinaData.project.category || "",
    image: tinaData.project.image || "",
    clientName: tinaData.project.clientName,
    completionDate: tinaData.project.completionDate,
    tags: tinaData.project.tags || [],
    features: tinaData.project.features || [],
    gallery: tinaData.project.gallery || [],
    testimonial: tinaData.project.testimonial
      ? {
          quote: tinaData.project.testimonial.quote || "",
          author: tinaData.project.testimonial.author || "",
          position: tinaData.project.testimonial.position || "",
        }
      : undefined,
  };

  return (
    <div className="relative">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/technologies/projects">
          <Button
            variant="outline"
            size="sm"
            className="group bg-white/20 backdrop-blur-md border-white/20 hover:bg-white/30"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            All Projects
          </Button>
        </Link>
      </div>

      {/* Project Header */}
      <ProjectDetailHeader
        title={project.title}
        category={project.category}
        image={project.image}
        clientName={project.clientName}
        completionDate={project.completionDate}
        tags={project.tags}
      />

      {/* Project Content */}
      <ProjectContent
        description={project.fullDescription}
        features={project.features}
        gallery={project.gallery}
        testimonial={project.testimonial}
      />

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section
          title="Related Projects"
          description={`More of our work in ${project.category}`}
          className="bg-gray-50 dark:bg-gray-900"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <ProjectCard
                key={relatedProject.id}
                id={relatedProject.id}
                title={relatedProject.title}
                description={relatedProject.description}
                category={relatedProject.category}
                image={relatedProject.image}
                tags={relatedProject.tags.slice(0, 2)}
                basePath="/technologies/projects"
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
              <Button variant="outline" className="group">
                View All Projects
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </Section>
      )}
    </div>
  );
}
