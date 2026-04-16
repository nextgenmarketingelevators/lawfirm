import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, Users, Receipt, Home, ArrowRight, CheckCircle2, Scale, ShieldAlert, FileText } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="bg-background">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-[60px] py-[60px] px-4 md:px-10 items-center max-w-[1024px] mx-auto w-full">
          <div>
            <h1 className="font-serif text-[48px] leading-[1.1] text-primary mb-6 font-bold hero-animate">
              <Link href="/practice-areas/real-estate" className="hover:text-accent transition-colors">Real Estate</Link> & <Link href="/practice-areas/business-law" className="hover:text-accent transition-colors">Business</Link> Attorney in New York
            </h1>
            <p className="text-[18px] text-muted-foreground leading-[1.6] mb-8 max-w-[500px] hero-animate">
              When the Stakes Are High, Experience Matters. Working with an experienced <Link href="/practice-areas/real-estate" className="text-primary hover:underline">real estate attorney</Link> in New York or <Link href="/practice-areas/business-law" className="text-primary hover:underline">business lawyer</Link> in Westchester County can make the difference between a successful outcome and a costly mistake.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 hero-animate">
              <Button render={<Link href="/contact" />} className="bg-[#C5A059] hover:bg-[#B38F48] text-white py-3 px-6 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
                Request a Consultation
              </Button>
              <Button variant="outline" render={<a href="tel:+19147415050" />} className="border-2 border-[#1B2B3A] text-[#1B2B3A] hover:bg-[#1B2B3A] hover:text-white py-3 px-6 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
                Call +1 914-741-5050
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="aspect-[4/5] bg-muted relative overflow-hidden rounded-sm">
              <Image 
                src="https://picsum.photos/seed/attorney-office/800/1000" 
                alt="Wolper Law Firm Office in Valhalla, NY" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* 3. Why Clients Hire Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Wolper Law Firm</h2>
            <p className="text-lg text-muted-foreground">As a trusted <Link href="/practice-areas/real-estate" className="text-primary hover:underline">real estate lawyer</Link> in Westchester County, we combine decades of experience with a practical, results-driven approach. Every matter is handled with precision, attention to detail, and a clear understanding of your goals.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border bg-muted">
              <FileText className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Experience That Sees the Details</h3>
              <p className="text-muted-foreground leading-relaxed">Anticipate and mitigate risks to protect your bottom line. We scrutinize the fine print in <Link href="/practice-areas/real-estate" className="text-primary hover:underline">real estate transactions</Link> so you can avoid costly surprises and move forward with confidence.</p>
            </div>
            <div className="p-8 border border-border bg-muted">
              <Scale className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Practical Legal Guidance</h3>
              <p className="text-muted-foreground leading-relaxed">Gain absolute clarity for your most important decisions. We strip away legal jargon to provide actionable advice that empowers you to act decisively, whether in <Link href="/practice-areas/business-law" className="text-primary hover:underline">business formation</Link> or contract disputes.</p>
            </div>
            <div className="p-8 border border-border bg-muted">
              <ShieldAlert className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Representation Built Around You</h3>
              <p className="text-muted-foreground leading-relaxed">Secure outcomes that align with your specific goals. We craft tailored strategies for <Link href="/practice-areas/community-associations" className="text-primary hover:underline">community associations</Link> and individual property owners across New York.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Practice Areas Overview */}
      <section className="bg-primary text-white p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1024px] mx-auto w-full my-10">
        <div className="border-l border-white/20 pl-[15px]">
          <h4 className="text-[12px] uppercase tracking-[1px] text-accent mb-2 font-bold">Business Law & Counseling</h4>
          <p className="text-[13px] opacity-80 leading-[1.4]">Build your business on a strong legal foundation. From entity formation to shareholder agreements and ongoing guidance for Westchester entrepreneurs.</p>
          <Link href="/practice-areas/business-law" className="inline-block mt-4 text-[12px] uppercase tracking-[1px] text-white hover:text-accent font-bold">
            Learn More →
          </Link>
        </div>
        <div className="border-l border-white/20 pl-[15px]">
          <h4 className="text-[12px] uppercase tracking-[1px] text-accent mb-2 font-bold">Community Associations</h4>
          <p className="text-[13px] opacity-80 leading-[1.4]">Confident legal support for boards and associations. Condominiums, cooperatives, HOA governance, and dispute resolution in New York.</p>
          <Link href="/practice-areas/community-associations" className="inline-block mt-4 text-[12px] uppercase tracking-[1px] text-white hover:text-accent font-bold">
            Learn More →
          </Link>
        </div>
        <div className="border-l border-white/20 pl-[15px]">
          <h4 className="text-[12px] uppercase tracking-[1px] text-accent mb-2 font-bold">Property Tax Reduction</h4>
          <p className="text-[13px] opacity-80 leading-[1.4]">Stop overpaying on property taxes. Strategic tax challenges with proven reduction results for Westchester County property owners.</p>
          <Link href="/practice-areas/property-tax" className="inline-block mt-4 text-[12px] uppercase tracking-[1px] text-white hover:text-accent font-bold">
            Learn More →
          </Link>
        </div>
        <div className="border-l border-white/20 pl-[15px]">
          <h4 className="text-[12px] uppercase tracking-[1px] text-accent mb-2 font-bold">Real Estate Law</h4>
          <p className="text-[13px] opacity-80 leading-[1.4]">Protect your largest investments. Residential and commercial transactions, leasing, and financing negotiations across New York.</p>
          <Link href="/practice-areas/real-estate" className="inline-block mt-4 text-[12px] uppercase tracking-[1px] text-white hover:text-accent font-bold">
            Learn More →
          </Link>
        </div>
      </section>

      {/* 5. The Cost of Waiting Too Long */}
      <section className="py-16 md:py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">The Wrong Legal Move Can Be Costly</h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            Many clients contact an attorney only after a problem has already developed. Bringing legal counsel in early can help you prevent delays, avoid hidden liabilities, and negotiate from a stronger position in any <Link href="/practice-areas" className="text-accent hover:underline">legal matter</Link>.
          </p>
          <Button size="lg" render={<Link href="/contact" />} className="bg-[#C5A059] hover:bg-[#B38F48] text-white py-3 px-8 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
            Talk to Us Before You Sign Anything
          </Button>
        </div>
      </section>

      {/* 6. Featured Quote */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-serif text-3xl md:text-5xl font-medium text-primary leading-tight mb-8">
              &quot;Good legal counsel protects more than the transaction — it protects the client&apos;s future.&quot;
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-[1px] bg-border"></div>
              <span className="font-bold text-muted-foreground uppercase tracking-widest text-sm">Robert W. Wolper, Esq.</span>
              <div className="w-12 h-[1px] bg-border"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Process Section */}
      <section className="py-16 md:py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We follow a structured approach to ensure every client receives the highest level of strategic legal counsel.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-[1px] bg-border"></div>
            
            {[
              { step: "01", title: "Initial Consultation", desc: "We take the time to understand your situation and objectives in detail." },
              { step: "02", title: "Legal Review & Strategy", desc: "We anticipate and mitigate risks to protect your interests and bottom line." },
              { step: "03", title: "Guidance Through Decisions", desc: "We provide actionable advice and clear options for absolute clarity." },
              { step: "04", title: "Resolution & Counsel", desc: "We guide you through closing, execution, or ongoing legal matters." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 ring-8 ring-muted">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Common Questions</h2>
            <p className="text-muted-foreground">Find answers to frequently asked questions about real estate and business law in New York.</p>
          </div>
          
          <Accordion className="w-full mb-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-serif text-lg hover:no-underline text-primary">When should I contact a <Link href="/practice-areas/real-estate" className="hover:underline">real estate attorney</Link> in New York?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                It is always best to involve an attorney before signing any agreements or making binding decisions. Early counsel helps identify risks, negotiate better terms, and prevent costly disputes down the line. Whether you are buying a home in Westchester or leasing commercial space in Manhattan, early intervention is key.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-serif text-lg hover:no-underline text-primary">Do you handle both residential and commercial real estate matters?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Yes. We represent clients in both residential and commercial <Link href="/practice-areas/real-estate" className="text-primary hover:underline">real estate transactions</Link> across New York and Westchester County, including purchases, sales, leasing, and financing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-serif text-lg hover:no-underline text-primary">Can you help with <Link href="/practice-areas/business-law" className="hover:underline">business formation</Link> in Westchester County?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Absolutely. We guide entrepreneurs and business owners through choosing the right entity structure (LLC, Corporation, etc.), drafting operating agreements, and establishing a solid legal foundation for growth in Valhalla and the surrounding areas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-serif text-lg hover:no-underline text-primary">What does property tax assessment reduction involve?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                We analyze your property&apos;s assessment against market value. If overassessed, we file strategic tax challenges to reduce your burden. We handle this on a contingency basis—meaning our fees are based on the results we achieve for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-serif text-lg hover:no-underline text-primary">Why do I need a <Link href="/practice-areas/business-law" className="hover:underline">business lawyer</Link> for my startup?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Working with a business lawyer ensures your entity is structured correctly, legally protected, and compliant with New York state laws. This reduces future risk and positions your company for long-term success.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="text-center">
            <Button variant="outline" render={<Link href="/contact" />} className="border-2 border-[#1B2B3A] text-[#1B2B3A] hover:bg-[#1B2B3A] hover:text-white py-3 px-6 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
              Visit Contact & FAQ
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="py-16 md:py-24 bg-muted border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-serif text-[3xl] md:text-4xl font-bold text-primary mb-6">Contact a <Link href="/practice-areas/real-estate" className="hover:text-accent transition-colors">Real Estate</Link> & <Link href="/practice-areas/business-law" className="hover:text-accent transition-colors">Business</Link> Attorney in New York</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Make informed decisions with confidence. If you are looking for an experienced <Link href="/practice-areas/real-estate" className="text-primary hover:underline">real estate attorney</Link> in New York or <Link href="/practice-areas/business-law" className="text-primary hover:underline">business lawyer</Link> in Westchester County, Valhalla, NY, or the New York Metropolitan Area, we invite you to contact our office.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" render={<Link href="/contact" />} className="bg-[#C5A059] hover:bg-[#B38F48] text-white py-3 px-8 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
              Request a Consultation
            </Button>
            <Button variant="outline" size="lg" render={<a href="tel:+19147415050" />} className="border-2 border-[#1B2B3A] text-[#1B2B3A] hover:bg-[#1B2B3A] hover:text-white py-3 px-8 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
              Call +1 914-741-5050
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
