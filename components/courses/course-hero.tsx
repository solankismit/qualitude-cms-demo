"use client";

import { motion } from "framer-motion";

interface CourseHeroProps {
  title: string;
  description: string;
}

export function CourseHero({ title, description }: CourseHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {description}
          </p>
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </section>
  );
}