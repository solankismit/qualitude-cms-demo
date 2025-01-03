"use client";

import { motion } from "framer-motion";
import { solarHero } from "@/app/solar/data";

export function HeroSection() {
  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-blue-50/20 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-background/90 dark:bg-gray-950/90" />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container relative z-10 px-4 sm:px-6 py-24 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl !leading-tight font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 mb-6 ">
            {solarHero.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            {solarHero.subtitle}
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {solarHero.description}
          </p>
        </motion.div>
      

      {/* Scroll Indicator */}
      <motion.div
          initial={{ opacity: 0, y: 20,x: "-50%" }}
          animate={{ opacity: 1, y: 0 ,x: "-50%"}}
          transition={{ delay: 0.8 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        >
        <div className="flex flex-col items-center text-muted-foreground">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-8 bg-gradient-to-b from-muted-foreground to-transparent rounded-full mb-2"
          />
          <span className="text-sm">Scroll to explore</span>
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
} 