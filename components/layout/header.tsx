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
    <header className="sticky top-0 z-50 w-full bg-background">
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
      <div className="py-3 md:py-4 px-4 md:px-10 flex items-center justify-between border-b border-border">
        <Link href="/" className="font-serif text-[20px] font-bold text-primary no-underline tracking-[-0.5px]">
          WOLPER LAW FIRM <span className="font-light opacity-60">PLLC</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[30px]">
          <Link href="/" className="text-foreground text-[13px] font-medium no-underline hover:text-accent transition-colors">Home</Link>
          <Link href="/practice-areas" className="text-foreground text-[13px] font-medium no-underline hover:text-accent transition-colors">Practice Areas</Link>
          <Link href="/about" className="text-foreground text-[13px] font-medium no-underline hover:text-accent transition-colors">About</Link>
          <Link href="/contact" className="text-foreground text-[13px] font-medium no-underline hover:text-accent transition-colors">Contact</Link>
          <Button render={<Link href="/contact" />} className="bg-[#C5A059] hover:bg-[#B38F48] text-white py-3 px-6 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
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
                  <Button render={<Link href="/contact" />} className="w-full bg-[#C5A059] hover:bg-[#B38F48] text-white py-3 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
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
