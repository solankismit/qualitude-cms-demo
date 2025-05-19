"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Custom Swiper styles
import "./swiper-custom.css";
import { cn } from "@/lib/utils";

interface AdSectionProps {
  title: string;
  images: (string | null)[];
  autoplay?: boolean;
  autoplayDuration?: number;
  className?: string;
}

export function AdSection({
  title,
  images,
  autoplay = true,
  autoplayDuration = 5000,
  className,
}: AdSectionProps) {
  // Filter out null images
  const validImages = images?.filter(Boolean) as string[];
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType>();

  if (!validImages || validImages.length === 0) {
    return null;
  }

  return (
    <Section
      className={cn("bg-white dark:bg-gray-900 pb-8", className)}
      title={title}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto relative"
      >
        {/* Custom navigation buttons */}
        {validImages.length > 1 && (
          <>
            <div
              ref={prevRef}
              className="custom-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full shadow-md cursor-pointer hover:bg-white dark:hover:bg-gray-800 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </div>
            <div
              ref={nextRef}
              className="custom-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full shadow-md cursor-pointer hover:bg-white dark:hover:bg-gray-800 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </div>
          </>
        )}

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          effect="slide"
          loop={true}
          autoplay={
            autoplay
              ? {
                  delay: autoplayDuration,
                  disableOnInteraction: false,
                }
              : false
          }
          onBeforeInit={(swiper) => {
            // Update swiper with navigation elements
            swiperRef.current = swiper;
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="rounded-lg overflow-hidden shadow-lg custom-swiper"
        >
          {validImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-square lg:aspect-[16/9]">
                <Image
                  src={image}
                  alt={`Advertisement ${index + 1}`}
                  fill
                  className="object-contain bg-gray-50 dark:bg-gray-900"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </Section>
  );
}
