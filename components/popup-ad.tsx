"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEditState } from "tinacms/dist/react";

interface PopupAdProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  images?: Array<{
    image?: string;
    link?: string;
  }>;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export function PopupAd({
  isOpen,
  onClose,
  title = "",
  images = [],
  autoplay = false,
  autoplayDuration = 5000,
}: PopupAdProps) {
  const swiperRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const { edit: isTinaCMS } = useEditState();
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Only modify body overflow if not in TinaCMS
    if (!isTinaCMS) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Only reset body overflow if not in TinaCMS
      if (!isTinaCMS) {
        document.body.style.overflow = "unset";
      }
    };
  }, [isOpen, onClose, isTinaCMS]);

  useEffect(() => {
    console.log("autoplay", autoplay);
    console.log("isOpen", isOpen);
    console.log("autoplayDuration", autoplayDuration);
    console.log("currentSlide", currentSlide);
    console.log("progress", progress);

    if (!autoplay || !isOpen) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 100 / (autoplayDuration / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDuration, isOpen, currentSlide]);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
    setProgress(0);
  };

  if (images.length === 0) return null;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
      // Prevent focus trap behavior in TinaCMS
      modal={!isTinaCMS}
    >
      <DialogTitle className="hidden">Popup Ad</DialogTitle>
      <DialogContent
        className="max-w-4xl p-0 gap-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
        // Prevent auto-focus behavior in TinaCMS
        onOpenAutoFocus={(e) => {
          if (isTinaCMS) {
            e.preventDefault();
          }
        }}
        onPointerDownOutside={(e) => {
          if (isTinaCMS) {
            e.preventDefault();
          }
        }}
        onInteractOutside={(e) => {
          if (isTinaCMS) {
            e.preventDefault();
          }
        }}
      >
        {!title && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 rounded-full w-8 h-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 transition-all duration-200 shadow-lg"
            onClick={onClose}
          >
            <X className="h-4 w-4 text-gray-700 dark:text-gray-300" />
            <span className="sr-only">Close</span>
          </Button>
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden rounded-lg"
        >
          {title && (
            <DialogHeader className="p-4 border-b border-gray-200 dark:border-gray-800">
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
          )}

          {/* Carousel Container */}
          <div className="relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              slidesPerView={1}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              navigation={{
                prevEl: ".popup-swiper-button-prev",
                nextEl: ".popup-swiper-button-next",
              }}
              pagination={{
                el: ".popup-swiper-pagination",
                clickable: true,
                bulletClass: "popup-swiper-bullet",
                bulletActiveClass: "popup-swiper-bullet-active",
              }}
              autoplay={
                autoplay
                  ? {
                      delay: autoplayDuration,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              loop={images.length > 1}
              onSlideChange={handleSlideChange}
              className="popup-ad-swiper"
            >
              {images &&
                images.length > 0 &&
                images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-video bg-gray-100 dark:bg-gray-800"
                    >
                      {item.image && item.link && !isTinaCMS ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                        >
                          <Image
                            src={item.image}
                            alt={`${title} - Slide ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            priority={index === 0}
                          />
                        </a>
                      ) : item.image ? (
                        <Image
                          src={item.image}
                          alt={`${title} - Slide ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                          priority={index === 0}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          No image available
                        </div>
                      )}
                    </motion.div>
                  </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}
            {images.length > 1 && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-10 flex justify-between pointer-events-none"
                >
                  <button
                    className="popup-swiper-button-prev w-10 h-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 transition-all duration-200 shadow-lg pointer-events-auto"
                    aria-label="Previous slide"
                  >
                    <svg
                      className="w-5 h-5 text-gray-700 dark:text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    className="popup-swiper-button-next w-10 h-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 transition-all duration-200 shadow-lg pointer-events-auto"
                    aria-label="Next slide"
                  >
                    <svg
                      className="w-5 h-5 text-gray-700 dark:text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div>
              </AnimatePresence>
            )}

            {/* Progress Bar */}
            {autoplay && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700"
              >
                <motion.div
                  className="h-full bg-blue-500 origin-left"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </motion.div>
            )}
          </div>

          {/* Pagination */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center p-4 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm"
            >
              <div className="popup-swiper-pagination flex items-center gap-2" />
            </motion.div>
          )}
        </motion.div>
      </DialogContent>

      <style jsx global>{`
        .popup-ad-swiper {
          width: 100%;
          height: auto;
        }

        .popup-swiper-bullet {
          width: 8px !important;
          height: 8px !important;
          background: #6b7280 !important;
          opacity: 0.5 !important;
          border-radius: 50% !important;
          transition: all 0.2s ease !important;
          cursor: pointer !important;
        }

        .popup-swiper-bullet-active {
          background: #3b82f6 !important;
          opacity: 1 !important;
        }

        .popup-swiper-bullet:hover {
          opacity: 0.8 !important;
          transform: scale(1.2) !important;
        }
      `}</style>
    </Dialog>
  );
}
