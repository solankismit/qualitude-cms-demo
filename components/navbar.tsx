"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X, Zap, Cpu } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isTechnologiesSection = pathname.startsWith("/technologies");

  useEffect(() => setMounted(true), []);

  // Handle hash navigation when coming from another page
  useEffect(() => {
    if (pathname === "/technologies") {
      const hash = window.location.hash;
      if (hash) {
        // Wait for page to load and then scroll
        setTimeout(() => {
          const targetId = hash.slice(1); // Remove the # from the hash
          const element = document.getElementById(targetId);
          if (element) {
            const offset = 64; // Height of the fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    }
  }, [pathname]);

  if (!mounted) return null;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only handle smooth scrolling for the main technologies page
    if (pathname !== "/technologies") {
      // For other pages, let normal navigation handle it
      if (href.startsWith("#")) {
        e.preventDefault();
        // Navigate to main technologies page with hash
        router.push(`/technologies${href}`);
        return;
      }
      return;
    }

    e.preventDefault();
    setIsOpen(false); // Close mobile menu

    setTimeout(() => {
      if (href === "/technologies") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const targetId = href.split("#")[1];
      if (!targetId) return;

      const element = document.getElementById(targetId);
      if (element) {
        const offset = 64; // Height of the fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const navItems = isTechnologiesSection
    ? [
        { label: "Home", href: "/technologies" },
        { label: "Services", href: "#services" },
        { label: "Courses", href: "#courses" },
        { label: "Projects", href: "#projects" },
      ]
    : [];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-black backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="px-5 md:px-20 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/favicon.png"
              alt="Qualitude Logo"
              width={30}
              height={30}
              className="drop-shadow-[0px_0px_0.7px_rgba(255,255,255,1)]"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
              Qualitude IT Solution
            </span>
          </Link>

          {/* Desktop Navigation - show on all technology pages */}
          {isTechnologiesSection && (
            <div className="hidden md:flex md:gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-white/70 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/technologies/contact">
            <Button>Contact Us</Button>
          </Link>

          {/* Mobile Menu Button - show on all technology pages */}
          {isTechnologiesSection && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu - show on all technology pages */}
      {isTechnologiesSection && isOpen && (
        <div className="md:hidden border-t border-white/10">
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-white/70 hover:text-blue-400 transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/technologies/contact"
              className="text-sm font-medium text-white/70 hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
