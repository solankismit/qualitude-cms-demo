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
    social: [
      { name: "Facebook", icon: Facebook, href: "https://facebook.com/qualitudetechnology/" },
      // { name: "Twitter", icon: Twitter, href: "#" },
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/qualitudesolar/profilecard/?igsh=MTZia293MndvamZoaQ==" },
      // { name: "LinkedIn", icon: Linkedin, href: "#" },
    ],
  };

  return (
    <footer className="">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="py-16">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Company Info */}
            <div className="space-y-4 lg:max-w-sm">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
                Qualitude Solar
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

            {/* Right Side Links */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
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

              {/* Legal Links */}
              {/* <div>
                <h3 className="text-sm font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div> */}

                {/* Contact Info */}
                <div>
                <h3 className="text-sm font-semibold mb-4">Company</h3>
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
                    <Link
                      href={`https://${contact.website}`}
                      className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center space-x-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-4 w-4" />
                      <span>{contact.website}</span>
                    </Link>
                  </li>
                  <li>
                  <Link
                      href={`https://maps.app.goo.gl/ex5uPq1sEE2EpJ627`}
                      className="text-sm text-muted-foreground hover:text-blue-500 transition-colors flex items-center space-x-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                    {contact.address}</span>
                    </Link>
                  </li>
                </ul>
              </div>
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