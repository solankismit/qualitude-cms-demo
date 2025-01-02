'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';
import { Section } from '@/components/ui/section';

interface CourseTestimonialsProps {
  courseId: string;
}

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Software Developer',
    image: '/testimonials/avatar-1.jpg',
    content: 'This course exceeded my expectations. The practical approach and hands-on projects helped me gain confidence in my skills.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Analyst',
    image: '/testimonials/avatar-2.jpg',
    content: 'The instructors are highly knowledgeable and supportive. The course structure made complex concepts easy to understand.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    image: '/testimonials/avatar-3.jpg',
    content: 'I appreciated the real-world applications and industry insights provided throughout the course. Highly recommended!',
  },
];

export function CourseTestimonials({ courseId }: CourseTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section
      title="Student Testimonials"
      description="Hear what our students have to say"
      fullWidth
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 touch-pan-y">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 md:p-12 border border-gray-100 dark:border-gray-700"
          >
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500 mb-4 sm:mb-6 opacity-50" />
            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex items-center space-x-4">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-blue-500/20">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm sm:text-base dark:text-gray-100 truncate">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={previous}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-8 bg-white dark:bg-gray-800 rounded-full p-1.5 sm:p-2 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hidden sm:block"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-8 bg-white dark:bg-gray-800 rounded-full p-1.5 sm:p-2 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hidden sm:block"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500" />
        </button>

        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                index === currentIndex
                  ? 'bg-blue-500'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
} 