import type {Metadata} from 'next';
import './globals.css';
import { Inter, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyBottomBar } from "@/components/layout/sticky-bottom-bar";
import { GSAPInitializer } from "@/components/layout/gsap-initializer";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  title: 'Wolper Law Firm PLLC | Real Estate & Business Attorney New York',
  description: 'Experienced real estate and business lawyer serving Westchester County, Valhalla, NY, and the New York Metropolitan Area. Strategic legal counsel for property owners and investors.',
  keywords: 'Real Estate Attorney New York, Business Lawyer Westchester County, Property Tax Reduction Westchester, Community Association Lawyer NY, Valhalla NY Attorney',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={cn("font-sans", inter.variable, playfair.variable)} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col pb-16 md:pb-0">
        <GSAPInitializer />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyBottomBar />
      </body>
    </html>
  );
}
