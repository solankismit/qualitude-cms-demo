"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, Tag } from "lucide-react";
import Image from "next/image";

interface ProjectDetailHeaderProps {
  title: string;
  category: string;
  image: string;
  clientName?: string;
  completionDate?: string;
  tags: string[];
}

export function ProjectDetailHeader({
  title,
  category,
  image,
  clientName,
  completionDate,
  tags,
}: ProjectDetailHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full"
    >
      <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
        <Image src={image} alt={title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 py-1 mb-4 text-sm rounded-full bg-blue-500/20 text-blue-300">
              {category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h1>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {clientName && (
                <div className="flex items-center text-white/80">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>{clientName}</span>
                </div>
              )}

              {completionDate && (
                <div className="flex items-center text-white/80">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    {new Date(completionDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {tags && tags.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center flex-wrap gap-2">
              <Tag className="h-4 w-4 text-muted-foreground mr-2" />
              {Array.from(new Set(tags)).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
