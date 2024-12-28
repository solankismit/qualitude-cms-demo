"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface RegistrationFormProps {
  courseId: string;
  courseTitle: string;
}

export function RegistrationForm({ courseId, courseTitle }: RegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section className="w-full px-10 md:px-20">
      <div className="container max-w-2xl mx-auto text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-8  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
              Register for {courseTitle}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your full name" 
                  required 
                  className="h-12 text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="h-12 text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  required 
                  className="h-12 text-lg"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Register Now"}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}