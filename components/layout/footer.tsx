import Link from "next/link";

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M6.94 8.98H3.56V20h3.38V8.98ZM7.2 5.57c0-1.05-.84-1.85-1.95-1.85s-1.96.8-1.96 1.85c0 1.02.83 1.85 1.92 1.85h.02c1.13 0 1.97-.83 1.97-1.85ZM20.7 13.68c0-3.32-1.78-4.86-4.16-4.86-1.92 0-2.78 1.06-3.26 1.8V8.98H9.91c.04 1.03 0 11.02 0 11.02h3.37v-6.15c0-.33.03-.66.12-.89.25-.66.82-1.35 1.78-1.35 1.25 0 1.75 1.02 1.75 2.48V20h3.37l.4-6.32Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M14.2 8.3V6.8c0-.72.47-.89.8-.89h2.04V2.78L14.22 2.77c-3.13 0-3.84 2.34-3.84 3.84V8.3H7.96v3.22h2.42V20h3.82v-8.48h2.83l.38-3.22H14.2Z" />
    </svg>
  );
}

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
          <LinkedInIcon />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Facebook">
          <FacebookIcon />
        </a>
      </div>
    </footer>
  );
}
