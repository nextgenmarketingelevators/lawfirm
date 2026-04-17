import Link from "next/link";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, Users, Receipt, Home, ArrowRight, CheckCircle2 } from "lucide-react";

const bodyLinkClassName =
  "font-medium text-primary underline decoration-accent/70 decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

const practiceAreas = [
  {
    href: "/practice-areas/business-law",
    icon: Building2,
    title: "Business Law & Counseling",
    description:
      "Build your business on a strong legal foundation. Entity formation, shareholder agreements, and ongoing guidance for entrepreneurs.",
    image: "/images/legal-contract-document.png",
    alt: "Business law contract documents",
  },
  {
    href: "/practice-areas/community-associations",
    icon: Users,
    title: "Community Associations",
    description:
      "Confident legal support for boards and associations. Condominiums, cooperatives, HOA governance, and dispute resolution.",
    image: "/images/condo-community-exterior.png",
    alt: "Condominium community exterior",
  },
  {
    href: "/practice-areas/property-tax",
    icon: Receipt,
    title: "Property Tax Reduction",
    description:
      "Stop overpaying on property taxes. Strategic tax challenges with proven reduction results for real estate owners.",
    image: "/images/tax-document-review.png",
    alt: "Property tax document review",
  },
  {
    href: "/practice-areas/real-estate",
    icon: Home,
    title: "Real Estate Law",
    description:
      "Protect your largest investments. Residential and commercial transactions, leasing, and financing negotiations.",
    image: "/images/commercial-property-building.png",
    alt: "Commercial property building",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "We take the time to understand your situation and objectives in detail.",
    image: "/images/lawyer-client-consultation.png",
    alt: "Attorney meeting with a client",
  },
  {
    step: "02",
    title: "Legal Review & Strategy",
    desc: "We anticipate and mitigate risks to protect your interests and bottom line.",
    image: "/images/legal-contract-document.png",
    alt: "Legal contract on a desk",
  },
  {
    step: "03",
    title: "Guidance Through Decisions",
    desc: "We provide actionable advice and clear options for absolute clarity.",
    image: "/images/attorney-client-strategy-session.png",
    alt: "Attorney leading a strategy session",
  },
  {
    step: "04",
    title: "Resolution & Counsel",
    desc: "We guide you through closing, execution, or ongoing legal matters.",
    image: "/images/agreement-signature-pen.png",
    alt: "Agreement ready for signature",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white min-h-[85vh] flex items-center">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8f9fa_1px,transparent_1px),linear-gradient(to_bottom,#f8f9fa_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-50/50 skew-x-[-12deg] translate-x-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-[80px] py-16 md:py-24 items-center max-w-[1280px]">
          <div className="max-w-2xl relative z-10">
            {/* Kicker */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-accent"></span>
              <span className="text-primary uppercase tracking-[3px] text-[11px] sm:text-xs font-bold font-sans">Wolper Law Firm, PLLC</span>
            </div>
            
            <h1 className="font-serif text-[44px] sm:text-[52px] md:text-[60px] lg:text-[68px] leading-[1.05] text-primary mb-6 font-bold tracking-tight">
              <span className="block mb-2">Strategic</span>
              <span className="block mb-2">
                <Link href="/practice-areas/real-estate" className="text-primary hover:text-accent transition-colors relative after:absolute after:bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-accent/30 hover:after:bg-accent after:transition-colors">Real Estate</Link>
              </span>
              <span className="block mb-2">
                &amp; <Link href="/practice-areas/business-law" className="text-primary hover:text-accent transition-colors relative after:absolute after:bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-accent/30 hover:after:bg-accent after:transition-colors">Business Counsel</Link>
              </span>
              <span className="block text-slate-500 font-medium text-[28px] sm:text-[32px] md:text-[40px] mt-4 font-sans tracking-normal">in New York.</span>
            </h1>
            
            <p className="text-[17px] md:text-[20px] text-slate-600 leading-[1.6] mb-10 max-w-[540px]">
              When the stakes are high, experience matters. Secure your investments and business future with practical, results-driven legal representation in Westchester County.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Button size="lg" render={<Link href="/contact" />} className="bg-accent hover:bg-[#B38F48] text-primary py-4 px-8 h-auto no-underline text-[13px] md:text-[14px] font-bold rounded-[2px] uppercase tracking-[1.5px] shadow-[0_8px_20px_-6px_rgba(197,160,89,0.4)] hover:shadow-[0_12px_24px_-8px_rgba(197,160,89,0.5)] transition-all border-none">
                Request a Consultation
              </Button>
              <Button size="lg" variant="outline" render={<a href="tel:+19147415050" />} className="border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 px-8 h-auto no-underline text-[13px] md:text-[14px] font-bold rounded-[2px] uppercase tracking-[1.5px] transition-all bg-transparent">
                Call +1 914-741-5050
              </Button>
            </div>
            
            {/* Trust Signals */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                </div>
                <span>35+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                </div>
                <span>Results-Driven Approach</span>
              </div>
            </div>

          </div>
          
          <div className="hidden lg:block relative pb-8 pr-8 mt-4 lg:mt-0">
            {/* Elevated, framed image container */}
            <div className="relative z-10 w-full aspect-[4/5] shadow-[0_25px_60px_-15px_rgba(27,43,58,0.3)] rounded-[2px] overflow-hidden bg-muted">
              <Image 
                src="/images/attorney-portrait-hero.png"
                alt="Robert W. Wolper, Esq." 
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              {/* Inner subtle border to frame image */}
              <div className="absolute inset-0 border border-white/20 pointer-events-none rounded-[2px]"></div>
            </div>
            {/* Offset Gold Accent Frame */}
            <div className="absolute bottom-0 right-0 w-[95%] h-[95%] border-[3px] border-accent/80 rounded-[2px] z-0 pointer-events-none"></div>
            {/* Soft backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 2. Why Clients Hire Us */}
      <WhyChooseUs />

      {/* 3. Practice Areas Overview */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[2px] w-8 bg-accent"></span>
                <span className="text-primary uppercase tracking-[2px] text-xs font-bold font-sans">Our Expertise</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Focused Legal Excellence</h2>
              <p className="text-slate-600 text-lg">Providing strategic counsel and dedicated representation in the areas that matter most to your business and real estate investments.</p>
            </div>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-[2px] uppercase tracking-[1px] font-bold h-12 px-8 shrink-0 relative top-[-10px] hidden md:flex w-[300px] items-center justify-center" asChild>
               <Link href="/practice-areas">View All Areas</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area) => {
              const Icon = area.icon;

              return (
                <Link
                  key={area.href}
                  href={area.href}
                  className="group relative flex flex-col bg-white border border-slate-200 p-5 hover:border-accent/40 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(197,160,89,0.15)] transition-all duration-300 rounded-[2px] overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-[2px] bg-slate-100">
                    <Image
                      src={area.image}
                      alt={area.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>

                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-serif text-[28px] leading-tight font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-1 text-[15px]">{area.description}</p>
                  <div className="inline-flex items-center text-xs uppercase tracking-[1.5px] text-primary font-bold group-hover:text-accent transition-colors mt-auto">
                    Explore Area <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" />
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Mobile view all btn */}
          <div className="mt-12 md:hidden">
             <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-[2px] uppercase tracking-[1px] font-bold" asChild>
                 <Link href="/practice-areas">View All Practice Areas</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* 4. The Cost of Waiting Too Long */}
      <section className="py-24 md:py-32 relative bg-primary overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 bg-[#0f1922]"></div>
        <div className="absolute right-0 top-0 h-full w-2/3 overflow-hidden opacity-20 mix-blend-overlay pointer-events-none">
          <Image
            src="/images/lawyer-client-consultation.png"
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 66vw, 100vw"
          />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-transparent to-[#0f1922] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="w-full max-w-4xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 md:p-16 rounded-[2px] text-center shadow-2xl relative overflow-hidden">
            {/* Subtle corner flares */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 blur-3xl rounded-full"></div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-[44px] font-bold text-white mb-4 sm:mb-6 leading-tight">The Wrong Legal Move Can Be Costly</h2>
            <div className="w-16 h-[2px] bg-accent mx-auto mb-6 sm:mb-8"></div>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Many clients contact an attorney only after a problem has already developed. Bringing legal counsel in early can help you prevent delays, avoid hidden liabilities, and negotiate from a stronger position in any <Link href="/practice-areas" className={bodyLinkClassName}>legal matter</Link>.
            </p>
            
            <Button size="lg" render={<Link href="/contact" />} className="bg-[#C5A059] hover:bg-[#B38F48] text-primary w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-10 h-auto no-underline text-xs sm:text-sm md:text-base font-bold rounded-[2px] uppercase tracking-[1px] sm:tracking-[1.5px] shadow-[0_10px_30px_-10px_rgba(197,160,89,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(197,160,89,0.6)] hover:-translate-y-1 transition-all duration-300 whitespace-normal sm:whitespace-nowrap">
              Talk to Us Before You Sign Anything
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Featured Quote */}
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

      {/* 6. Process Section */}
      <section className="py-16 md:py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We follow a structured approach to ensure every client receives the highest level of strategic legal counsel.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-[1px] bg-border"></div>
            
            {processSteps.map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] mb-6 bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
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

      {/* 7. FAQ Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Common Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about real estate and business law in New York.</p>
          </div>
          
          <Accordion className="w-full mb-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-serif text-lg hover:no-underline text-primary">When should I contact a real estate attorney in New York?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                It is best to involve an attorney before signing agreements or making binding decisions. Early legal guidance helps identify risks, negotiate stronger terms, and prevent costly disputes. Whether you are buying a home in Westchester or leasing commercial space in Manhattan, getting counsel involved early can make a meaningful difference.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-serif text-lg hover:no-underline text-primary">Do you handle both residential and commercial real estate matters?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Yes. We represent clients in both residential and commercial <Link href="/practice-areas/real-estate" className={bodyLinkClassName}>real estate transactions</Link> across New York and Westchester County, including purchases, sales, leasing, and financing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-serif text-lg hover:no-underline text-primary">Can you help with business formation in Westchester County?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Absolutely. We help entrepreneurs and business owners choose the right entity structure, draft operating agreements, and build a strong legal foundation for growth in Valhalla and the surrounding area.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-serif text-lg hover:no-underline text-primary">What does property tax assessment reduction involve?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                We compare your property&apos;s assessed value with its market value. If the assessment appears too high, we prepare and file a strategic challenge to reduce your tax burden. We handle these matters on a contingency basis, meaning our fees are tied to the results we achieve for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-serif text-lg hover:no-underline text-primary">Why do I need a business lawyer for my startup?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Working with a business lawyer helps ensure your company is structured properly, protected legally, and compliant with New York law. That reduces risk early and puts your business in a stronger position for long-term success.
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

      {/* 8. Final CTA Section */}
      <section className="py-16 md:py-24 bg-muted border-t border-border text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-serif text-[3xl] md:text-4xl font-bold text-primary mb-6">Contact a <Link href="/practice-areas/real-estate" className="hover:text-accent transition-colors">Real Estate</Link> & <Link href="/practice-areas/business-law" className="hover:text-accent transition-colors">Business</Link> Attorney in New York</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Make informed decisions with confidence. If you are looking for an experienced <Link href="/practice-areas/real-estate" className={bodyLinkClassName}>real estate attorney</Link> in New York or <Link href="/practice-areas/business-law" className={bodyLinkClassName}>business lawyer</Link> in Westchester County, Valhalla, NY, or the New York Metropolitan Area, we invite you to contact our office.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" render={<Link href="/contact" />} className="bg-[#C5A059] hover:bg-[#B38F48] text-primary py-3 px-8 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
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
