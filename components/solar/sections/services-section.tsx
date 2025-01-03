"use client";

import { motion } from "framer-motion";
import { Home, Building2, Battery, Wrench } from "lucide-react";
import { services } from "@/app/solar/data";

const icons = {
  Home,
  Building2,
  Battery,
  Wrench,
};

export function ServicesSection() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900" id="services">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 p-3 rounded-lg bg-blue-500/10 w-fit group-hover:scale-110 transition-transform duration-300">
                  {Icon && <Icon className="w-6 h-6 text-blue-500" />}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 