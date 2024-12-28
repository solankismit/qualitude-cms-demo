"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CurriculumWeek {
  week: number;
  title: string;
  topics: string[];
}

interface CourseCurriculumProps {
  curriculum: CurriculumWeek[];
}

export function CourseCurriculum({ curriculum }: CourseCurriculumProps) {
  return (
    <section className="w-full px-10 md:px-20">
      <div className="container max-w-4xl mx-auto">
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
          <p className="text-lg text-muted-foreground">
            A comprehensive breakdown of what you'll learn each week
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {curriculum.map((week) => (
              <AccordionItem key={week.week} value={`week-${week.week}`}>
                <AccordionTrigger className="text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400">
                  Week {week.week}: {week.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2 py-2">
                    {week.topics.map((topic, index) => (
                      <li key={index} className="text-muted-foreground">
                        {topic}
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
}