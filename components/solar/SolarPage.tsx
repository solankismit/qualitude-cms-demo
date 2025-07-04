"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/solar/sections/hero-section";
import { BenefitsSection } from "@/components/solar/sections/benefits-section";
import { ServicesSection } from "@/components/solar/sections/services-section";
import { FeaturesSection } from "@/components/solar/sections/features-section";
import { ProcessSection } from "@/components/solar/sections/process-section";
import { Gallery } from "@/components/solar/gallery";
import { ContactForm } from "@/components/solar/contact-form";
import { AdSection } from "@/components/ad-section";
import { PopupAd } from "@/components/popup-ad";
import { useTina } from "tinacms/dist/react";
import { SolarPageQuery } from "@/tina/__generated__/types";

interface SolarPageProps {
  data: SolarPageQuery;
  query: string;
  variables: { relativePath: string };
}

export default function SolarPage({
  data: tmpdata,
  query,
  variables,
}: SolarPageProps) {
  const { data } = useTina({
    data: tmpdata,
    query,
    variables,
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const popupAd = (data.solarPage as any).popupAd;

  // Show popup on page load if enabled
  useEffect(() => {
    if (
      popupAd &&
      popupAd.enabled &&
      popupAd.images &&
      popupAd.images.length > 0
    ) {
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
      }, 2000); // Show popup after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [popupAd]);

  return (
    <div className="relative">
      <HeroSection solarPage={data.solarPage} />
      <BenefitsSection solarPage={data.solarPage} />
      <ServicesSection solarPage={data.solarPage} />
      {/* Ad Section */}
      {(data.solarPage as any).adSection &&
        (data.solarPage as any).adSection.enabled && (
          <AdSection
            className="dark:bg-gray-800"
            title={(data.solarPage as any).adSection.title || ""}
            images={(data.solarPage as any).adSection.images || []}
            autoplay={(data.solarPage as any).adSection.autoplay !== false}
            autoplayDuration={
              (data.solarPage as any).adSection.autoplayDuration || 5000
            }
          />
        )}
      <FeaturesSection solarPage={data.solarPage} />
      <ProcessSection solarPage={data.solarPage} />

      <div id="gallery">
        <Gallery solarPage={data.solarPage} />
      </div>
      <div id="contact">
        <ContactForm solarPage={data.solarPage} />
      </div>
      {console.log("popupAd", popupAd)}
      {/* Popup Ad */}
      {popupAd && popupAd.enabled && (
        <PopupAd
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          title={popupAd.title || ""}
          images={popupAd.images || []}
          autoplay={popupAd.autoplay === true}
          autoplayDuration={popupAd.autoplayDuration || 5000}
        />
      )}
    </div>
  );
}
