"use client";

import { HeroSection } from "@/components/solar/sections/hero-section";
import { BenefitsSection } from "@/components/solar/sections/benefits-section";
import { ServicesSection } from "@/components/solar/sections/services-section";
import { FeaturesSection } from "@/components/solar/sections/features-section";
import { ProcessSection } from "@/components/solar/sections/process-section";
import { Gallery } from "@/components/solar/gallery";
import { ContactForm } from "@/components/solar/contact-form";
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

  return (
    <div className="relative">
      <HeroSection solarPage={data.solarPage} />
      <BenefitsSection solarPage={data.solarPage} />
      <ServicesSection solarPage={data.solarPage} />
      <FeaturesSection solarPage={data.solarPage} />
      <ProcessSection solarPage={data.solarPage} />
      <div id="gallery">
        <Gallery solarPage={data.solarPage} />
      </div>
      <div id="contact">
        <ContactForm solarPage={data.solarPage} />
      </div>
    </div>
  );
}
