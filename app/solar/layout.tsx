import { Header } from "@/components/solar/header";
import { Footer } from "@/components/solar/footer";

export default function SolarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
