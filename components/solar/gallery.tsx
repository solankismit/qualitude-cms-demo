"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { gallery } from "@/app/solar/data";
import { DialogTitle } from "@radix-ui/react-dialog";
import { SolarPageQuery } from "@/tina/__generated__/types";

export function Gallery({ solarPage }: SolarPageQuery) {
  const [isOpen, setIsOpen] = useState(false);

  // Fallback to static data if CMS data is not available
  const rawGalleryData = solarPage?.gallery?.length
    ? solarPage.gallery
    : gallery;
  // Create a flat list of all gallery images
  const allGalleryImages: Array<{
    src: string;
    title: string;
    categoryIndex: number;
  }> = [];

  // First, collect one image from each unique category (up to 4)
  const firstFourImages: Array<{ src: string; title: string }> = [];

  // Add the first image from each category (up to 4 different categories)
  rawGalleryData.forEach((category, categoryIndex) => {
    if (
      category &&
      category.images &&
      category.images.length > 0 &&
      firstFourImages.length < 4
    ) {
      firstFourImages.push({
        src: category.images[0] || "/images/placeholder.jpg",
        title: category.title || "Gallery image",
      });
    }

    // Also add all images to the complete collection
    if (category && category.images && category.images.length > 0) {
      category.images.forEach((image) => {
        allGalleryImages.push({
          src: image || "/images/placeholder.jpg",
          title: category.title || "Gallery image",
          categoryIndex,
        });
      });
    }
  });

  // If we still need more images to reach 4, fill with any available images
  if (firstFourImages.length < 4) {
    // Find images from categories we haven't used yet
    for (
      let i = 0;
      i < allGalleryImages.length && firstFourImages.length < 4;
      i++
    ) {
      // Check if this image's category is already represented in firstFourImages
      const alreadyIncluded = firstFourImages.some(
        (img) => img.src === allGalleryImages[i].src
      );

      if (!alreadyIncluded) {
        firstFourImages.push({
          src: allGalleryImages[i].src,
          title: allGalleryImages[i].title,
        });
      }
    }
  }

  // Use the first four images from different categories for the preview
  // and keep all images available for the full gallery
  const galleryData =
    firstFourImages.length > 0 ? firstFourImages : allGalleryImages;
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
            Explore our completed solar installations and see the quality of our
            work
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {firstFourImages.slice(0, 4).map(
            (image, index) =>
              image && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square group cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  <Image
                    key={index}
                    src={image.src || "/images/placeholder.jpg"}
                    alt={image.title || "Gallery image"}
                    fill
                    className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white font-medium">{item.title}</p>
              </div> */}
                </motion.div>
              )
          )}
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => setIsOpen(true)}
            variant="outline"
            className="group"
          >
            View More Images
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Button>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent
            className="max-w-6xl h-[80vh] overflow-y-auto"
            aria-description="Gallery"
          >
            <DialogTitle className="hidden">Gallery</DialogTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {allGalleryImages.map(
                (item, index) =>
                  item && (
                    <div key={index} className="relative aspect-square">
                      <Image
                        key={index}
                        src={item.src || "/images/placeholder.jpg"}
                        alt={item.title || "Gallery image"}
                        fill
                        className="object-cover rounded-lg"
                      />
                      {/* <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 text-white text-sm rounded-b-lg">
                    {item.title}
                  </div> */}
                    </div>
                  )
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
