"use client";

import { HeroSection } from "@/components/solar/sections/hero-section";
import { BenefitsSection } from "@/components/solar/sections/benefits-section";
import { ServicesSection } from "@/components/solar/sections/services-section";
import { FeaturesSection } from "@/components/solar/sections/features-section";
import { ProcessSection } from "@/components/solar/sections/process-section";
import { Gallery } from "@/components/solar/gallery";
import { ContactForm } from "@/components/solar/contact-form";

export default function SolarPage() {
  return (
    <div className="relative">
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <FeaturesSection />
      <ProcessSection />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}