"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X, Zap, Cpu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" px-10 md:px-20 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Cpu className="h-6 w-6" />
            <span className="font-bold">Qualitude</span>
          </Link>
          <div className="hidden md:flex md:gap-6">
            <Link href="/technologies" className="text-foreground/60 transition-colors hover:text-foreground">
              Technologies
            </Link>
            <Link href="/solar" className="text-foreground/60 transition-colors hover:text-foreground">
              Solar
            </Link>
            {/* <Link href="/courses" className="text-foreground/60 transition-colors hover:text-foreground">
              Courses
            </Link> */}
          </div>
        </div>
        <div className="">
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button> */}
          {/* <Button>Contact Us</Button> */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="container md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="/technologies"
              className="text-foreground/60 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Technologies
            </Link>
            <Link
              href="/solar"
              className="text-foreground/60 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Solar
            </Link>
            {/* <Link
              href="/courses"
              className="text-foreground/60 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
}