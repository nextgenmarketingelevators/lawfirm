import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Wolper Law Firm</h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Experienced Legal Counsel You Can Trust. Serving clients across New York and Westchester County.
          </p>
        </div>
      </section>

      {/* 2. Attorney Bio Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 relative mb-12 lg:mb-0">
              <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden">
                <Image 
                  src="/images/AttorneyPortrait.png" 
                  alt="Robert W. Wolper, Esq." 
                  fill
                  className="object-cover" 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 hidden md:block">
                <p className="font-serif text-2xl font-bold">35+ Years</p>
                <p className="text-sm text-slate-300 uppercase tracking-wider">of Legal Experience</p>
              </div>
            </div>
            
            <div className="lg:col-span-7 lg:pl-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-2">Robert W. Wolper, Esq.</h2>
              <p className="text-lg text-slate-500 mb-8 uppercase tracking-wider font-medium">Founder & Principal Attorney</p>
              
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Wolper Law Firm is a New York-based practice focused on <Link href="/practice-areas/real-estate" className="text-primary hover:underline">real estate law</Link>, <Link href="/practice-areas/business-law" className="text-primary hover:underline">business law</Link>, and property-related legal matters. Led by Robert W. Wolper, an attorney with decades of experience, the firm provides clients with thoughtful, strategic legal guidance tailored to their specific needs.
                </p>
                <p>
                  As a <Link href="/practice-areas/business-law" className="text-primary hover:underline">business attorney</Link> in Westchester NY and <Link href="/practice-areas/real-estate" className="text-primary hover:underline">real estate attorney</Link> in New York, Robert has built a reputation for providing practical, results-driven advice. He understands that clients don&apos;t just want a legal analysis—they want a solution. His approach is rooted in identifying issues early, providing clear strategies, and staying accessible and responsive to client needs.
                </p>
                <p>
                  Whether guiding a <Link href="/practice-areas/community-associations" className="text-primary hover:underline">cooperative board</Link> through complex governance issues, negotiating a <Link href="/practice-areas/real-estate" className="text-primary hover:underline">commercial lease</Link>, or helping an <Link href="/practice-areas/business-law" className="text-primary hover:underline">entrepreneur</Link> structure a new venture, Robert brings a deep understanding of local and state law, coupled with a strong professional network. Our goal is not just to complete transactions—but to serve as a trusted legal advisor over time.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Serving Clients Across New York & Westchester County</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Property buyers and sellers</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Business owners and entrepreneurs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Community associations and boards</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Property owners seeking tax reductions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Firm Approach */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Approach</h2>
            <p className="text-xl text-slate-600">We believe effective legal representation goes beyond technical knowledge.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-slate-200 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Understand Objectives</h3>
              <p className="text-slate-600">We take the time to deeply understand your goals, whether in <Link href="/practice-areas/real-estate" className="text-primary hover:underline">real estate</Link> or <Link href="/practice-areas/business-law" className="text-primary hover:underline">business</Link>.</p>
            </div>
            <div className="bg-white p-8 border border-slate-200 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Anticipate Risks</h3>
              <p className="text-slate-600">We identify potential liabilities before they become costly problems, protecting your bottom line.</p>
            </div>
            <div className="bg-white p-8 border border-slate-200 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Clear, Practical Advice</h3>
              <p className="text-slate-600">We explain your options in plain language, empowering you to make informed decisions with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Areas of Focus */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10">A Law Firm That Works With You — Not Just For You</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/practice-areas/business-law" className="px-6 py-3 bg-slate-50 border border-slate-200 hover:border-slate-400 text-slate-700 font-medium transition-colors">
              Business Law
            </Link>
            <Link href="/practice-areas/real-estate" className="px-6 py-3 bg-slate-50 border border-slate-200 hover:border-slate-400 text-slate-700 font-medium transition-colors">
              Real Estate Law
            </Link>
            <Link href="/practice-areas/community-associations" className="px-6 py-3 bg-slate-50 border border-slate-200 hover:border-slate-400 text-slate-700 font-medium transition-colors">
              Community Associations
            </Link>
            <Link href="/practice-areas/property-tax" className="px-6 py-3 bg-slate-50 border border-slate-200 hover:border-slate-400 text-slate-700 font-medium transition-colors">
              Property Tax Reduction
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Need experienced guidance for a legal or business decision?</h2>
          <Button size="lg" render={<Link href="/contact" />} className="bg-[#C5A059] hover:bg-[#B38F48] text-white py-3 px-8 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}
