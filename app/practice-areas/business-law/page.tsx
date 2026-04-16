import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, FileSignature, Scale, TrendingUp, CheckCircle2 } from "lucide-react";

export default function BusinessLawPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/business-meeting/1920/1080?blur=2')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Business Lawyer in New York
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Strategic Legal Counsel for Business Owners. As an experienced business attorney in New York, we assist clients with forming, structuring, and growing their businesses across Westchester County and beyond.
              </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" render={<Link href="/contact" />} className="bg-white text-slate-900 hover:bg-slate-100 rounded-none text-base h-14 px-8">
                Request a Consultation
              </Button>
              <Button variant="outline" size="lg" render={<a href="tel:+19147415050" />} className="border-slate-500 text-white hover:bg-slate-800 hover:text-white rounded-none text-base h-14 px-8">
                Call +1 914-741-5050
              </Button>
            </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
                <h3 className="font-serif text-xl font-bold mb-6 border-b border-slate-700 pb-4">Why Choose Us</h3>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 shrink-0" /> Experienced New York Representation</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 shrink-0" /> Personalized Attention for Entrepreneurs</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 shrink-0" /> Practical Guidance for Growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Challenge */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Why Work with a Business Lawyer</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Choosing the right legal structure and agreements can protect your business and reduce future risk. Starting or expanding a business involves decisions that can impact you for years. From choosing the right entity to drafting agreements that prevent disputes, we help you get it right from the beginning.
          </p>
        </div>
      </section>

      {/* 3. How We Help */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Our Business Services in the New York Metropolitan Area</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <Building2 className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Business Formation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We assist with LLC, corporation, and partnership formation in Westchester County, ensuring your entity is structured correctly for taxes and liability protection.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <FileSignature className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Agreements & Contracts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Clear agreements prevent costly disputes. We draft and review shareholder, operating, and buy-sell agreements for New York entrepreneurs.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <Scale className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Ongoing Legal Counsel</h3>
              <p className="text-slate-600 text-sm leading-relaxed">As your business evolves in Valhalla, NY, so do your legal needs. We provide ongoing counsel for contracts and strategic decisions.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <TrendingUp className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Strategic Growth</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We protect your interests as you expand, take on investors, or prepare for an eventual sale or succession in the New York Metropolitan Area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detailed Process & Risks */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">The Business Formation Process</h2>
              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">1</div>
                  <h4 className="font-bold text-slate-900 mb-2">Entity Selection Analysis</h4>
                  <p className="text-slate-600 text-sm">We evaluate your business goals, tax implications, and liability needs to recommend the optimal structure (LLC, S-Corp, C-Corp, or Partnership).</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">2</div>
                  <h4 className="font-bold text-slate-900 mb-2">Governing Document Drafting</h4>
                  <p className="text-slate-600 text-sm">Creation of Operating Agreements or Bylaws that clearly define management roles, voting rights, and profit distributions.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">3</div>
                  <h4 className="font-bold text-slate-900 mb-2">State Filing & Compliance</h4>
                  <p className="text-slate-600 text-sm">Handling all New York State filing requirements, including publication requirements for LLCs where applicable.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-10 border border-slate-200">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Mitigating Business Risks</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Without proper legal guidance, businesses in Westchester County often face avoidable risks:
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Piercing the Corporate Veil:</strong> Improperly maintained entities can lead to personal liability for business debts.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Founder Deadlocks:</strong> Lack of clear dispute resolution in operating agreements can paralyze a company.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Intellectual Property Leaks:</strong> Failure to properly assign IP from founders to the entity.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Representative Matters */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Representative Business Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700 p-8">
              <h4 className="font-bold text-accent mb-4 uppercase tracking-wider text-xs">Multi-Member LLC Formation</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Advised a group of Westchester entrepreneurs on the formation of a technology startup, including the drafting of a complex operating agreement with specific vesting schedules and buy-sell provisions.
              </p>
            </div>
            <div className="border border-slate-700 p-8">
              <h4 className="font-bold text-accent mb-4 uppercase tracking-wider text-xs">Corporate Restructuring</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Guided a long-standing family business in the New York Metropolitan Area through a structural reorganization to facilitate a smooth succession plan for the next generation of leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Do I need a business lawyer to start a company in New York?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Working with a business lawyer ensures your entity is structured correctly and legally protected. The right choice depends on your specific goals, tax situation, and plans for raising capital. LLCs offer flexibility and pass-through taxation, while Corporations may be better if you plan to seek venture capital.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Why do I need a partnership or operating agreement?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                These agreements govern how the business is run, how profits are split, and what happens if a partner wants to leave. Without a clear agreement, state default rules apply, which rarely align with the founders&apos; actual intentions and often lead to costly litigation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Do you act as outside general counsel for Westchester businesses?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Yes. For many clients, we serve as outside general counsel, providing ongoing advice on day-to-day legal issues, contract reviews, employment matters, and strategic decisions as the business grows in Valhalla and across New York.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">How can a business lawyer help with contract negotiation?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                An experienced business lawyer identifies hidden risks in contracts, ensures terms are favorable, and protects your interests during negotiations with vendors, clients, or partners.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What is the benefit of a buy-sell agreement?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                A buy-sell agreement provides a clear exit strategy for partners, establishing how shares are valued and who can purchase them if a partner leaves, retires, or passes away, preventing future disputes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What are the publication requirements for New York LLCs?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                New York requires newly formed LLCs to publish a notice of formation in two newspapers in the county where the office is located for six consecutive weeks. We handle the coordination of these filings to ensure your LLC remains in good standing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Can you help with business succession planning?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Yes. We work with family-owned and closely-held businesses in Westchester County to develop legal frameworks for transferring ownership and management to the next generation or key employees.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What is the difference between an S-Corp and a C-Corp?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                A C-Corp is a standard corporation that faces double taxation on profits and dividends. An S-Corp is a tax designation that allows profits to &quot;pass through&quot; to shareholders, avoiding double taxation, but has strict eligibility requirements regarding the number and type of shareholders.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Ready to discuss your business matter?</h2>
          <Button size="lg" render={<Link href="/contact" />} className="bg-white text-slate-900 hover:bg-slate-100 rounded-none text-base h-14 px-10">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
