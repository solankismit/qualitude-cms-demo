"use client";

import { motion } from "framer-motion";
import { solarHero } from "@/app/solar/data";
// import { SolarPage } from "@/types/solar";
import Image from "next/image";
import { SolarPage, SolarPageQuery } from "@/tina/__generated__/types";

interface HeroSectionProps extends SolarPageQuery {}

export function HeroSection(props: HeroSectionProps) {
  // Fallback to static data if CMS data is not available
  const heroData = props?.solarPage?.hero || solarHero;
  const hasMedia = !!heroData.image;

  return (
    <div
      data-hero-section="true"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-blue-50/20 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Background image from Cloudinary if available */}
      {heroData.image && (
        <div className="absolute inset-0 z-0">
          {heroData.image.endsWith(".mp4") ? (
            <video
              src={heroData.image}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover object-center w-full h-full brightness-[0.3]"
            />
          ) : (
            <Image
              src={heroData.image}
              alt="Solar energy background"
              fill
              className="object-cover object-center brightness-[0.3]"
              priority
            />
          )}
        </div>
      )}

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div
          className={`absolute inset-0 ${
            hasMedia
              ? "bg-gradient-to-b from-background/40 via-background/20 to-blue-900/10 dark:from-gray-950/40 dark:via-gray-950/20 dark:to-blue-900/10"
              : "bg-background/90 dark:bg-gray-950/90"
          }`}
        />
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
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl !leading-tight font-bold tracking-tight mb-6 ${
              hasMedia
                ? "bg-clip-text text-transparent bg-gradient-to-br from-sky-200 via-blue-100 to-sky-300 dark:from-blue-400 dark:via-sky-200 dark:to-blue-400 opacity-80 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.3)]"
                : "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200"
            }`}
          >
            {heroData.title}
          </h1>
          <p
            className={`text-lg sm:text-xl max-w-2xl mx-auto mb-4 ${
              hasMedia
                ? "text-gradient-to-r from-sky-200 to-blue-100 dark:from-sky-200 dark:to-blue-100 opacity-80 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
                : "text-muted-foreground"
            }`}
          >
            {heroData.subtitle}
          </p>
          <p
            className={`max-w-2xl mx-auto ${
              hasMedia
                ? "text-sky-100/95 dark:text-sky-100/95 opacity-80 drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.2)]"
                : "text-muted-foreground"
            }`}
          >
            {heroData.description}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
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
