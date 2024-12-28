import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Qualitude - Technology & Solar Solutions',
  description: 'Qualitude offers cutting-edge technology services and solar solutions. Explore our app development, web development, AI services, and educational courses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only hide navbar and footer on home page
  // const isHomePage = usePathname() === '/';
  const isHomePage = false;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            {!isHomePage && <Navbar />}
            <main className="flex-1">{children}</main>
            {!isHomePage && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}