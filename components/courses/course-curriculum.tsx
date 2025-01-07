'use client';

import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import { Course } from '@/lib/courses';
import { Section } from '@/components/ui/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface CourseCurriculumProps {
  course: Course;
}

export default function CourseCurriculum({ course }: CourseCurriculumProps) {
  return (
    <Section
      title="Course Curriculum"
      description="A comprehensive breakdown of what you'll learn each week"
    >
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          {course.curriculum.map((week, index) => (
            <AccordionItem
              key={index}
              value={`week-${index + 1}`}
              className="px-4 sm:px-6"
            >
              <AccordionTrigger className="py-4 sm:py-6 hover:no-underline group">
                <div className="flex items-center min-w-0 w-full pr-6 sm:pr-8">
                  <div className="flex-shrink-0 mr-4 sm:mr-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {week?.title ??""}
                    </h3>
                    <p className="text-sm text-muted-foreground hidden sm:block">
                      {week?.topics?.length ??""} topics
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <div className="ml-14 sm:ml-[4.5rem] space-y-3">
                  {week?.topics?.map((topic, topicIndex) => (
                    <motion.div
                      key={topicIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: topicIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0">
                        <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30">
                          <Book className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                        </div>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 break-words">
                        {topic}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

