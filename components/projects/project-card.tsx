"use client";

import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags?: string[];
  basePath?: string;
  buttonText?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  category,
  image,
  tags = [],
  basePath = "/technologies/projects",
  buttonText = "View Project",
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-full group"
    >
      <Link href={`${basePath}/${id}`} className="block h-full">
        <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800 flex flex-col">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            {category != "" && (
              <div className="mb-2">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                  {category}
                </span>
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
              {description}
            </p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-auto pt-2">
              <Button variant="ghost" className="group/btn w-fit">
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
