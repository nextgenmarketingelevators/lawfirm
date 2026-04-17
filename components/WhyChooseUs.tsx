"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { FileText, Scale, ShieldAlert, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Section Entrance Animation
    const leftElements = gsap.utils.toArray(".why-left");
    if (leftElements.length > 0) {
      gsap.fromTo(
        leftElements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // 2. Staggered Cards (Luxury Feel)
    const cardElements = gsap.utils.toArray(".why-card");
    if (cardElements.length > 0) {
      gsap.fromTo(
        cardElements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section className="py-20 md:py-32 bg-[#F8F9FA] relative" ref={containerRef}>
      <div className="container mx-auto px-4 z-10 relative">
        <div ref={triggerRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative max-w-7xl mx-auto items-start">
          
          {/* Left Side: Headline & Copy */}
          <div className="why-left lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-accent"></span>
              <span className="text-accent uppercase tracking-[2.5px] text-xs font-bold font-sans">Why Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-bold text-primary mb-8 leading-[1.15]">
              Why Choose Wolper Law Firm
            </h2>
            <div className="space-y-6">
              <p className="text-lg md:text-[20px] text-slate-700 leading-relaxed font-medium">
                As a trusted real estate attorney in Westchester County, Wolper Law Firm brings decades of experience to complex legal and financial decisions. We combine technical precision with practical strategy to protect your interests at every stage.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every matter is approached with discipline, attention to detail, and a clear understanding of your objectives—because in high-value transactions, nothing is insignificant.
              </p>
            </div>
            
            <div className="mt-12 hidden lg:flex gap-4">
               {/* Decorative Element */}
               <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center">
                 <div className="w-2 h-2 bg-accent rounded-full"></div>
               </div>
            </div>
          </div>

          {/* Right Side: Stacked Cards */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="why-card p-10 md:p-12 bg-white shadow-[0_4px_24px_rgba(27,43,58,0.06)] border border-slate-100 rounded-[2px] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(27,43,58,0.1)] transition-all duration-300">
              <FileText className="w-12 h-12 text-accent mb-8" strokeWidth={1.5} />
              <h3 className="font-serif text-3xl font-bold text-primary mb-5">Experience That Sees the Details</h3>
              <p className="text-slate-600 leading-relaxed text-[17px]">
                Protect your investment before problems arise. As an experienced real estate lawyer in New York, we identify risks others overlook—reviewing contracts, uncovering hidden liabilities, and ensuring every detail is aligned with your best interests.
              </p>
            </div>
            
            <div className="why-card p-10 md:p-12 bg-white shadow-[0_4px_24px_rgba(27,43,58,0.06)] border border-slate-100 rounded-[2px] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(27,43,58,0.1)] transition-all duration-300">
              <Scale className="w-12 h-12 text-accent mb-8" strokeWidth={1.5} />
              <h3 className="font-serif text-3xl font-bold text-primary mb-5">Practical, Strategic Legal Guidance</h3>
              <p className="text-slate-600 leading-relaxed text-[17px]">
                Clarity drives better decisions. We translate complex legal issues into straightforward, actionable advice—so you can move forward confidently in business transactions, real estate matters, and legal negotiations.
              </p>
            </div>
            
            <div className="why-card p-10 md:p-12 bg-white shadow-[0_4px_24px_rgba(27,43,58,0.06)] border border-slate-100 rounded-[2px] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(27,43,58,0.1)] transition-all duration-300">
              <ShieldAlert className="w-12 h-12 text-accent mb-8" strokeWidth={1.5} />
              <h3 className="font-serif text-3xl font-bold text-primary mb-5">Representation Built Around You</h3>
              <p className="text-slate-600 leading-relaxed text-[17px]">
                No two clients—or situations—are the same. We develop tailored legal strategies for business owners, property investors, and community associations across New York, ensuring your goals remain the priority at every step.
              </p>
            </div>

            <div className="why-card p-10 md:p-12 bg-white shadow-[0_4px_24px_rgba(27,43,58,0.06)] border border-slate-100 rounded-[2px] hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(27,43,58,0.1)] transition-all duration-300">
               <Users className="w-12 h-12 text-accent mb-8" strokeWidth={1.5} />
              <h3 className="font-serif text-3xl font-bold text-primary mb-5">Accessible & Responsive Counsel</h3>
              <p className="text-slate-600 leading-relaxed text-[17px]">
                You will never feel like just another case. We provide direct access, timely communication, and consistent guidance—so when important decisions arise, you have experienced counsel ready to respond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
