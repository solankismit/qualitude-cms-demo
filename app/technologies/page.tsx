"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Brain } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components/services/service-card";
import { InquiryForm } from "@/components/inquiry-form";

export default function TechnologiesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background p-10 md:p-20 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Empowering Ideas with Technology
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Transform your vision into reality with our cutting-edge technology solutions
              and comprehensive learning programs.
            </p>
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute inset-0 bg-background/90" />
        </div>
      </section>

      {/* Services Section */}
      <section className="p-10 md:p bg-muted/50">
        <div className="container justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of technology services designed to meet
              your digital transformation needs.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              title="App Development"
              description="Native and cross-platform mobile applications built with the latest technologies."
              icon={Smartphone}
              href="/technologies/app-development"
            />
            <ServiceCard
              title="Web Development"
              description="Modern, responsive websites and web applications optimized for performance."
              icon={Code}
              href="/technologies/web-development"
            />
            <ServiceCard
              title="AI Solutions"
              description="Intelligent systems and machine learning solutions for business automation."
              icon={Brain}
              href="/technologies/ai"
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="p-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Internship Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Launch your career with our industry-focused training programs and
              gain hands-on experience with real projects.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <Link href="/technologies/courses/web-development">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Web Development Internship</h3>
                <p className="text-muted-foreground mb-4">
                  Learn modern web development with React, Next.js, and Node.js.
                </p>
                <Button variant="ghost" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </Link>
            <Link href="/technologies/courses/mobile-development">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
                <p className="text-muted-foreground mb-4">
                  Master mobile app development with React Native and Flutter.
                </p>
                <Button variant="ghost" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <InquiryForm />
    </div>
  );
}