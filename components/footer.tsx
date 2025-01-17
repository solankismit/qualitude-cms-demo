import Link from "next/link";
import { Cpu } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className=" px-5 md:px-20 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
            {/* <Image src="/logo.png" alt="Qualitude Logo" width={50} height={50} /> */}
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
              Qualitude IT Solution
            </span></Link>
            <p className="text-sm text-muted-foreground">
              Empowering innovation through technology and sustainable solutions.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/technologies/courses/mobile-development" className="text-muted-foreground hover:text-foreground">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/technologies/courses/web-development" className="text-muted-foreground hover:text-foreground">
                  Web Development
                </Link>
              </li>
              {/* <li>
                <Link href="/technologies/ai" className="text-muted-foreground hover:text-foreground">
                  AI Solutions
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/technologies/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/technologies/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>
          {/* <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div> 
        */}
        </div> 
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Qualitude. All rights reserved.
        </div>
      </div>
    </footer>
  );
}