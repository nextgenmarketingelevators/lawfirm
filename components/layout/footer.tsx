import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-10 text-[11px] text-muted-foreground flex flex-col md:flex-row justify-between items-center border-t border-border mt-auto bg-background gap-6 md:gap-0">
      <div className="text-center md:text-left max-w-md" suppressHydrationWarning>
        &copy; {new Date().getFullYear()} Wolper Law Firm, PLLC. Attorney Advertising. 400 Columbus Avenue, Valhalla, NY 10595
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
        <span className="hidden md:inline text-border">|</span>
        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
        <span className="hidden md:inline text-border">|</span>
        <Link href="/sitemap" className="hover:text-foreground transition-colors">Site Map</Link>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Facebook">
          <Facebook className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
