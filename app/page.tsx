"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Zap, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Qualitude Technologies Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative group h-full"
      >
        <Link href="/technologies" className="block h-full">
          <div className="relative h-full p-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 hover:shadow-2xl transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Cpu className="h-10 w-10" />
              </div>
              <h2 className="mb-4 text-4xl font-bold">
                Qualitude Technologies
              </h2>
              <p className="mb-8 text-xl text-muted-foreground max-w-lg">
                Cutting-edge solutions in app development, web development,
                and AI, coupled with comprehensive tech education programs.
              </p>
              <Button size="lg" className="w-fit group-hover:translate-x-2 transition-transform">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Qualitude Solar Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative group h-full"
      >
        <Link href="/solar" className="block h-full">
          <div className="relative h-full p-12 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 hover:shadow-2xl transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="h-10 w-10" />
              </div>
              <h2 className="mb-4 text-4xl font-bold">
                Qualitude Solar
              </h2>
              <p className="mb-8 text-xl text-muted-foreground max-w-lg">
                Sustainable energy solutions for a greener future. Coming
                soon with innovative solar technology offerings.
              </p>
              <Button size="lg" variant="secondary" className="w-fit group-hover:translate-x-2 transition-transform">
                Coming Soon <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}