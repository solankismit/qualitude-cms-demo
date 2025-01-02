"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseHeroProps {
  title: string;
  description: string;
  image?: string;
}

export function CourseHero({ title, description, image = '/course-hero-bg.jpg' }: CourseHeroProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const textY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${image})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/70 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 py-24 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Decorative elements */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.3 }}
              className="bg-blue-500/20 backdrop-blur-sm rounded-full p-3"
            >
              <BookOpen className="w-6 h-6 text-blue-300" />
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white min-w-[200px] group"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-300 hover:bg-white/10 min-w-[200px]"
            >
              View Curriculum
            </Button>
          </motion.div> */}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 ,x: "-50%"}}
          animate={{ opacity: 1, y: 0 ,x: "-50%"}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-0 left-1/2"
        >
          <div className="flex flex-col items-center text-gray-400">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 bg-gradient-to-b from-gray-400 to-transparent rounded-full mb-2"
            />
            <span className="text-sm">Scroll to explore</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}