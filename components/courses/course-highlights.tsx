'use client';

import { motion } from 'framer-motion';
import { Award, Target, Users, Zap } from 'lucide-react';
import { Course } from '@/lib/courses';
import { Section } from '@/components/ui/section';

interface CourseHighlightsProps {
  course: Course;
}

export function CourseHighlights({ course }: CourseHighlightsProps) {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Industry-Focused',
      description: 'Curriculum designed with real-world applications in mind'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Interactive Learning',
      description: 'Engage in group projects and peer-to-peer learning'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Hands-on Practice',
      description: 'Work on real projects with practical assignments'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certification',
      description: 'Earn a verified certificate upon completion'
    }
  ];

  return (
    <Section
      title="Course Highlights"
      description="What makes this course special"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-4 sm:p-6 rounded-xl bg-white dark:bg-gray-800/50 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-start space-x-4">
              <div className="p-2.5 sm:p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 dark:text-gray-100 truncate">
                  {highlight.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground dark:text-gray-400 line-clamp-2">
                  {highlight.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
} 