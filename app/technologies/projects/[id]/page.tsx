// "use client";

import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { ProjectDetailHeader } from "@/components/projects/project-detail-header";
import { ProjectContent } from "@/components/projects/project-content";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
export default async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Get projects in the same category (excluding the current one)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="relative">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/projects">
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
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <Link href="/projects">
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
