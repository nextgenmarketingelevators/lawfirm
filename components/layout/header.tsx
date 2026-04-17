import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="relative z-50 w-full bg-background">
      {/* Top Utility Bar */}
      <div className="bg-primary text-white py-2 px-4 md:px-10 text-[11px] tracking-[0.05em] uppercase flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2 md:gap-0">
        <div>
          Serving clients in Westchester and the New York Metropolitan Area
        </div>
        <div>
          📞 <a href="tel:+19147415050" className="hover:text-accent transition-colors">+1 914-741-5050</a> &nbsp; | &nbsp; <a href="mailto:info@wolperlaw.com" className="hover:text-accent transition-colors">info@wolperlaw.com</a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="h-20 md:h-24 px-4 md:px-10 flex items-center justify-between border-b border-slate-100 shadow-[0_4px_24px_-12px_rgba(27,43,58,0.08)] bg-white/95 backdrop-blur-md">
        <Link href="/" className="font-serif text-[22px] md:text-[26px] font-bold text-primary no-underline tracking-tight flex items-baseline gap-2 group">
          WOLPER LAW FIRM 
          <span className="font-sans text-[11px] md:text-[12px] font-semibold tracking-[2px] text-slate-700 group-hover:text-accent transition-colors border-l border-slate-300 pl-2">PLLC</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[40px]">
          <Link href="/" className="text-primary text-[14px] font-semibold tracking-[0.5px] no-underline hover:text-accent transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300">Home</Link>
          <Link href="/practice-areas" className="text-primary text-[14px] font-semibold tracking-[0.5px] no-underline hover:text-accent transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300">Practice Areas</Link>
          <Link href="/about" className="text-primary text-[14px] font-semibold tracking-[0.5px] no-underline hover:text-accent transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300">About</Link>
          <Link href="/contact" className="text-primary text-[14px] font-semibold tracking-[0.5px] no-underline hover:text-accent transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300">Contact</Link>
          <Button render={<Link href="/contact" />} className="bg-[#C5A059] hover:bg-[#B38F48] text-primary py-3.5 px-8 h-auto no-underline text-[13px] font-bold rounded-[2px] uppercase tracking-[1.5px] ml-4 transition-all duration-300 shadow-[0_8px_16px_-6px_rgba(197,160,89,0.3)] hover:shadow-[0_12px_20px_-8px_rgba(197,160,89,0.5)] hover:-translate-y-0.5 border-none">
            Schedule a Consultation
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-foreground hover:text-primary" />}>
              <Menu className="w-6 h-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
              <nav className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto p-8 pt-12">
                  <div className="flex flex-col space-y-6">
                    <Link href="/" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Home</Link>
                    <div className="flex flex-col space-y-4">
                      <Link href="/practice-areas" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Practice Areas</Link>
                      <div className="flex flex-col space-y-3 pl-4 border-l border-border">
                        <Link href="/practice-areas/business-law" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Business Law & Counseling</Link>
                        <Link href="/practice-areas/community-associations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community Associations</Link>
                        <Link href="/practice-areas/property-tax" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Property Tax Assessment Reduction</Link>
                        <Link href="/practice-areas/real-estate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Real Estate Law</Link>
                      </div>
                    </div>
                    <Link href="/about" className="text-lg font-medium text-foreground hover:text-accent transition-colors">About</Link>
                    <Link href="/contact" className="text-lg font-medium text-foreground hover:text-accent transition-colors">Contact</Link>
                  </div>
                </div>
                
                <div className="p-8 border-t border-border bg-muted/30 flex flex-col space-y-4">
                  <div className="flex flex-col space-y-3 mb-2">
                    <a href="tel:+19147415050" className="flex items-center text-foreground hover:text-primary transition-colors">
                      <span className="font-medium">📞 +1 914-741-5050</span>
                    </a>
                    <a href="mailto:info@wolperlaw.com" className="flex items-center text-foreground hover:text-primary transition-colors">
                      <span className="font-medium">✉️ info@wolperlaw.com</span>
                    </a>
                  </div>
                  <Button render={<Link href="/contact" />} className="w-full bg-[#C5A059] hover:bg-[#B38F48] text-primary py-3 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
                    Schedule a Consultation
                  </Button>
                  <Button variant="outline" render={<a href="tel:+19147415050" />} className="w-full border-2 border-[#1B2B3A] text-[#1B2B3A] hover:bg-[#1B2B3A] hover:text-white py-3 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
                    Call +1 914-741-5050
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
