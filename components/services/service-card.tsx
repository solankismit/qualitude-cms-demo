"use client";

import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=" h-full"
    >
      <Link href={href} className="block h-full">
        <Card className="p-6 sm:p-8 h-full hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800  flex flex-col">
          <div className="mb-4 p-3 rounded-lg bg-blue-500/10 w-fit group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6 flex-grow">
            {description}
          </p>
          {/* <Button variant="ghost" className="group/btn w-fit mt-auto">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button> */}
        </Card>
      </Link>
    </motion.div>
  );
}