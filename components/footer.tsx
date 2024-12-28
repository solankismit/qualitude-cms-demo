import Link from "next/link";
import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container p-8 md:p-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Cpu className="h-6 w-6" />
              <span className="font-bold">Qualitude</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering innovation through technology and sustainable solutions.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/technologies/app-development" className="text-muted-foreground hover:text-foreground">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/technologies/web-development" className="text-muted-foreground hover:text-foreground">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/technologies/ai" className="text-muted-foreground hover:text-foreground">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {/* <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
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
            </ul>*/}
          </div> 
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Qualitude. All rights reserved.
        </div>
      </div>
    </footer>
  );
}