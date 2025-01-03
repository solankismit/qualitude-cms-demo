"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Brain, Zap, Users, Target, CheckCircle } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components/services/service-card";
import { InquiryForm } from "@/components/inquiry-form";
import { Section } from "@/components/ui/section";

const features = [
  {
    icon: Target,
    title: "Industry-Focused",
    description: "Programs designed with real-world applications and current market demands in mind"
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from experienced professionals who are active in the industry"
  },
  {
    icon: Zap,
    title: "Hands-on Experience",
    description: "Work on real projects and build a professional portfolio"
  },
  {
    icon: CheckCircle,
    title: "Career Support",
    description: "Get guidance on job placement and career advancement opportunities"
  }
];

export default function TechnologiesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-blue-50/20 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute inset-0 bg-background/90 dark:bg-gray-950/90" />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container relative z-10 px-4 sm:px-6 py-24 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 mb-6">
              Empowering Ideas with Technology
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your vision into reality with our cutting-edge technology solutions
              and comprehensive learning programs.
            </p>
          </motion.div>
               {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20,x: "-50%" }}
          animate={{ opacity: 1, y: 0 ,x: "-50%"}}
          transition={{ delay: 0.8 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-muted-foreground">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-8 bg-gradient-to-b from-muted-foreground to-transparent rounded-full mb-2"
            />
            <span className="text-sm">Scroll to explore</span>
          </div>
        </motion.div>
        </motion.div>

   
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 p-3 rounded-lg bg-blue-500/10 w-fit group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-500 transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of technology services designed to meet
              your digital transformation needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
            <ServiceCard
              title="App Development"
              description="Native and cross-platform mobile applications built with the latest technologies. We specialize in creating intuitive and performant apps that users love."
              icon={Smartphone}
              href="/technologies/app-development"
            />
            <ServiceCard
              title="Web Development"
              description="Modern, responsive websites and web applications optimized for performance. From simple landing pages to complex web applications, we've got you covered."
              icon={Code}
              href="/technologies/web-development"
            />
            <ServiceCard
              title="AI Solutions"
              description="Intelligent systems and machine learning solutions for business automation. Leverage the power of AI to streamline your operations and gain valuable insights."
              icon={Brain}
              href="/technologies/ai"
            />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
              Internship Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Launch your career with our industry-focused training programs and
              gain hands-on experience with real projects.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <Link href="/technologies/courses/web-development" className="block group">
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800 h-full  hover:border-blue-500/50 dark:hover:border-blue-400/50">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-3 rounded-lg bg-blue-500/10 w-fit group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    Web Development Internship
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Learn modern web development with React, Next.js, and Node.js. Build real-world projects and gain practical experience.
                  </p>
                  <Button variant="ghost" className="group/btn w-fit">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </Link>
            <Link href="/technologies/courses/mobile-development" className="block group">
              <Card className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800 h-full  hover:border-blue-500/50 dark:hover:border-blue-400/50">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-3 rounded-lg bg-blue-500/10 w-fit group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    Mobile App Development
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Master mobile app development with React Native and Flutter. Create cross-platform applications for iOS and Android.
                  </p>
                  <Button variant="ghost" className="group/btn w-fit">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
