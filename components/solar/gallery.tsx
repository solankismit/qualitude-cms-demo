"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { gallery } from "@/app/solar/data";

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
            Our Projects Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our completed solar installations and see the quality of our work
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square group cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white font-medium">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => setIsOpen(true)}
            variant="outline"
            className="group"
          >
            View More Images
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-6xl h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {gallery.map((item, index) => (
                <div key={item.title} className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 text-white text-sm rounded-b-lg">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
} 