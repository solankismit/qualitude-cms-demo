"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface ProjectContentProps {
  description: string[];
  features?: string[];
  gallery?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export function ProjectContent({
  description,
  features,
  gallery,
  testimonial,
}: ProjectContentProps) {
  return (
    <div className="py-12">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto prose dark:prose-invert prose-headings:text-foreground prose-a:text-blue-500"
        >
          <div className="space-y-6">
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </Section>

      {features && features.length > 0 && (
        <Section
          title="Key Features"
          description="Explore the comprehensive capabilities of this solution"
          className="bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {gallery && gallery.length > 0 && (
        <Section
          title="Project Gallery"
          description="Visual highlights of the implementation"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={image}
                  alt={`Project gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {testimonial && (
        <Section className="bg-gray-50 dark:bg-gray-900 last:!mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <blockquote className="relative p-6 md:p-8 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 opacity-10 text-blue-500">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.13456 9H5.25655C4.28208 9 3.3809 9.37354 2.72224 10.0377C2.06358 10.7019 1.69152 11.609 1.69152 12.5556V14.6667C1.69152 15.1382 1.87892 15.5905 2.21223 15.9243C2.54555 16.2581 3.00425 16.4444 3.48254 16.4444H5.25655C5.63031 16.4444 5.98901 16.5905 6.25567 16.8508C6.52232 17.1111 6.67056 17.4638 6.67056 17.8333V18.7222C6.67056 19.0917 6.52232 19.4444 6.25567 19.7047C5.98901 19.965 5.63031 20.1111 5.25655 20.1111H3.48254M16.7545 9H12.8765C11.902 9 11.0008 9.37354 10.3422 10.0377C9.68351 10.7019 9.31145 11.609 9.31145 12.5556V14.6667C9.31145 15.1382 9.49886 15.5905 9.83217 15.9243C10.1655 16.2581 10.6242 16.4444 11.1025 16.4444H12.8765C13.2502 16.4444 13.6089 16.5905 13.8756 16.8508C14.1422 17.1111 14.2905 17.4638 14.2905 17.8333V18.7222C14.2905 19.0917 14.1422 19.4444 13.8756 19.7047C13.6089 19.965 13.2502 20.1111 12.8765 20.1111H11.1025"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 mb-5 relative z-10">
                "{testimonial.quote}"
              </p>
              <footer className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </Section>
      )}
    </div>
  );
}
