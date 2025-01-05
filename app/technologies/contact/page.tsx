"use client"

import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import Link from "next/link";
export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "8758090920",
      href: `tel:8758090920`,
    },
    {
      icon: Mail,
      title: "Email",
      value: "qualitudeitsolutions@gmail.com",
      href: `mailto:qualitudeitsolutions@gmail.com`,
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.qualitude.co.in",
      href: `https://www.qualitude.co.in`,
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123, Baba Complex, Zanzarda Road, Junagadh",
      href: "https://maps.app.goo.gl/ex5uPq1sEE2EpJ627",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
          Contact Us
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get in touch with us to discuss your technology needs or learn more about our services.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.icon === MapPin || item.icon === Globe ? "_blank" : undefined}
                  rel={item.icon === MapPin || item.icon === Globe ? "noopener noreferrer" : undefined}
                  className="w-full flex items-start space-x-4 p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200/20 dark:border-blue-800/20">
            <h3 className="text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Why Choose Us?
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Expert team with years of experience</li>
              <li>✓ Cutting-edge technology solutions</li>
              <li>✓ Personalized service and support</li>
              <li>✓ Competitive pricing and flexible plans</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 