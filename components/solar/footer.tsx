"use client";

import Link from "next/link";
import { Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react";
import { contact } from "@/app/solar/data";

export function Footer() {
  const navigation = {
    company: [
      { name: "About Us", href: "/solar#about" },
      { name: "Services", href: "/solar#services" },
      { name: "Gallery", href: "/solar#gallery" },
      { name: "Contact", href: "/solar#contact" },
    ],
    services: [
      { name: "Residential Solar", href: "/solar#residential" },
      { name: "Commercial Solar", href: "/solar#commercial" },
      { name: "Energy Storage", href: "/solar#storage" },
      { name: "Maintenance", href: "/solar#maintenance" },
    ],
    social: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
                QUALITUDE SOLAR
              </h3>
              <p className="text-sm text-muted-foreground">
                Your trusted partner in clean, sustainable energy solutions.
              </p>
              <div className="flex space-x-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-muted-foreground hover:text-blue-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{item.name}</span>
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center space-x-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{contact.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center space-x-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://${contact.website}`}
                    className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{contact.website}</span>
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    123 Solar Street, Green City, 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Qualitude Solar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 