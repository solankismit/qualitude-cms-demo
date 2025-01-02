'use client';

import React from 'react';
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Book } from 'lucide-react';
import { Progress } from "@/components/ui/progress"

interface CurriculumWeek {
  week: number;
  title: string;
  topics: string[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  schedule: string;
  skills: string[];
  curriculum: CurriculumWeek[];
  careers: {
    title: string;
    description: string;
  }[];
}

interface CourseCurriculumAccordionsProps {
  course: Course;
}

const CourseCurriculumAccordions: React.FC<CourseCurriculumAccordionsProps> = ({ course }) => {
  const totalWeeks = course.curriculum.length;
  const completedWeeks = 2; // This would typically be managed by state in a real application

  return (
    <section className="w-full px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
            Course Curriculum
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-400">
            A comprehensive breakdown of what you'll learn each week
          </p>
        </motion.div>

        {/* <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium dark:text-gray-300">Overall Progress</span>
            <span className="text-sm font-medium dark:text-gray-300">{completedWeeks}/{totalWeeks} weeks completed</span>
          </div>
          <Progress value={(completedWeeks / totalWeeks) * 100} className="w-full" />
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {course.curriculum.map((week, index) => (
              <AccordionItem 
                key={index} 
                value={`week-${week.week}`} 
                className="border-b border-gray-200 dark:border-gray-700 overflow-hidden last:border-b-0"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 data-[state=open]:bg-gray-50 dark:data-[state=open]:bg-gray-800 data-[state=open]:text-blue-600 dark:data-[state=open]:text-blue-400">
                  <div className="flex items-center space-x-4 w-full relative z-20">
                    <span className="flex items-center justify-center w-10 h-10 bg-blue-500 dark:bg-blue-600 text-white rounded-full font-bold text-lg flex-shrink-0">
                      {week.week}
                    </span>
                    <div className="flex-grow text-left">
                      <span className="font-semibold text-lg block dark:text-gray-200">{week.title}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{week.topics.length} topics</span>
                  </div>
                  {/* <span className="absolute inset-0 z-10 bg-blue-50 dark:bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span> */}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  <ul className="space-y-2">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="p-2">
                        <div className="flex items-center space-x-3">
                          <span className="bg-blue-100 dark:bg-blue-900 p-1.5 rounded-full">
                            <Book className="w-3 h-3 text-blue-500 dark:text-blue-300" />
                          </span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{topic}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseCurriculumAccordions;

