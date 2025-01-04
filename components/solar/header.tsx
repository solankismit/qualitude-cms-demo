"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contact } from "@/app/solar/data";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close menu first
    setIsMobileMenuOpen(false);

    // Use setTimeout to ensure menu closing animation completes before scrolling
    setTimeout(() => {
      if (href === "/solar") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        return;
      }

      const targetId = href.split("#")[1];
      if (!targetId) return;
      
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // Height of the fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 300); // Match this with your menu closing animation duration
  };

  const navItems = [
    { label: "Home", href: "/solar" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
              Qualitude Solar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-blue-500 transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href={`tel:${contact.phone}`} className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{contact.phone}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden overflow-hidden">
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: "auto", 
                  opacity: 1,
                  transition: {
                    height: { duration: 0.3 },
                    opacity: { duration: 0.2, delay: 0.1 }
                  }
                }}
                exit={{ 
                  height: 0, 
                  opacity: 0,
                  transition: {
                    height: { duration: 0.3 },
                    opacity: { duration: 0.2 }
                  }
                }}
                className="overflow-hidden border-t border-gray-200/20 dark:border-gray-800/20"
              >
                <motion.nav 
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  className="flex flex-col space-y-4 py-4"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer px-4"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="px-4 pt-4 border-t border-gray-200/20 dark:border-gray-800/20">
                    <Link href={`tel:${contact.phone}`} className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-blue-500" />
                      <span className="font-medium text-gray-800 dark:text-gray-200">{contact.phone}</span>
                    </Link>
                  </div>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
} 