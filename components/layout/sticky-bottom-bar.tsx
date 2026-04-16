import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

export function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary border-t border-slate-800 z-50 md:hidden">
      <div className="flex h-16">
        <a href="tel:+19147415050" className="flex-1 flex flex-col items-center justify-center text-white hover:bg-slate-800 transition-colors border-r border-slate-800">
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call Now</span>
        </a>
        <Link href="/contact" className="flex-1 flex flex-col items-center justify-center text-white bg-[#C5A059] hover:bg-[#B38F48] transition-colors">
          <Calendar className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Consultation</span>
        </Link>
      </div>
    </div>
  );
}
