"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, Calendar, Trophy } from "lucide-react";

interface CourseFeatureProps {
  duration: string;
  schedule: string;
  skills: string[];
}

export function CourseFeatures({ duration, schedule, skills }: CourseFeatureProps) {
  return (
    <section className=" sm:px-10 md:px-20">
      <div className="container max-w-6xl mx-auto text-left">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full hover:shadow-lg transition-all">
              <Clock className="h-10 w-10 mb-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-semibold mb-4">Duration</h3>
              <p className="text-lg text-muted-foreground">{duration}</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full hover:shadow-lg transition-all">
              <Calendar className="h-10 w-10 mb-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-semibold mb-4">Schedule</h3>
              <p className="text-lg text-muted-foreground">{schedule}</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2"
          >
            <Card className="p-8 h-full hover:shadow-lg transition-all">
              <Trophy className="h-10 w-10 mb-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-semibold mb-4">Skills You'll Learn</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}