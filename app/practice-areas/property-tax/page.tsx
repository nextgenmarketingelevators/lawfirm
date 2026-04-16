import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Receipt, Scale, TrendingDown, Clock, CheckCircle2 } from "lucide-react";

export default function PropertyTaxPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/property-tax/1920/1080?blur=2')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Property Tax Attorney in New York
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Reduce Your Property Tax Assessment. If your property is over-assessed, you may be paying more than necessary. An experienced property tax attorney in New York can help challenge your assessment.
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
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 shrink-0" /> Review Property Valuation</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 shrink-0" /> File Tax Assessment Appeals</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 shrink-0" /> Representation in Proceedings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Challenge */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Are You Paying Too Much in Property Taxes?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            You may be — and you may not even know it. Municipalities often overvalue properties, leading to inflated tax bills. Unlike consultants, an attorney can navigate the legal system and represent you in court if necessary to achieve the best result.
          </p>
        </div>
      </section>

      {/* 3. How We Help */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Our Approach to Tax Reduction in Westchester County</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <Scale className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Legal Expertise</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We understand New York tax law in depth, handle complex filings, and can take your case to court if necessary.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <Clock className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Managing Deadlines</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Tax grievance deadlines in Valhalla, NY and surrounding towns are strict. We manage all procedural risks.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <TrendingDown className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We have achieved significant tax reductions for property owners across the New York Metropolitan Area.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <Receipt className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">No-Risk Structure</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We work on a contingency basis—meaning our fees are based entirely on the tax savings we achieve for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detailed Grievance Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">The Property Tax Grievance Process</h2>
              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">1</div>
                  <h4 className="font-bold text-slate-900 mb-2">Valuation Analysis</h4>
                  <p className="text-slate-600 text-sm">We compare your current assessment against market data and recent sales of comparable properties in your specific Westchester neighborhood.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">2</div>
                  <h4 className="font-bold text-slate-900 mb-2">Administrative Grievance</h4>
                  <p className="text-slate-600 text-sm">Preparation and filing of the RP-524 complaint form with the local Board of Assessment Review before the municipal deadline.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">3</div>
                  <h4 className="font-bold text-slate-900 mb-2">Judicial Appeal (SCAR/Article 7)</h4>
                  <p className="text-slate-600 text-sm">If the board denies the grievance, we file a Small Claims Assessment Review (SCAR) or Article 7 petition in New York Supreme Court.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-10 border border-slate-200">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Why Use an Attorney?</h3>
              <p className="text-slate-600 mb-6 text-sm">
                While non-attorney consultants can file grievances, only an attorney can:
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Provide Legal Advocacy:</strong> We can represent you in judicial proceedings (Article 7) which consultants cannot.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Navigate Complex Law:</strong> Deep understanding of the Real Property Tax Law (RPTL) and local Westchester precedents.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Aggressive Negotiation:</strong> We leverage the threat of litigation to secure better settlements from municipal assessors.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Representative Tax Matters */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Representative Tax Savings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700 p-8">
              <h4 className="font-bold text-accent mb-4 uppercase tracking-wider text-xs">Residential Assessment Reduction</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Successfully challenged the assessment of a luxury residential estate in Westchester County, resulting in a 15% reduction in annual property taxes and a significant retroactive refund.
              </p>
            </div>
            <div className="border border-slate-700 p-8">
              <h4 className="font-bold text-accent mb-4 uppercase tracking-wider text-xs">Commercial Property Appeal</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Represented a commercial property owner in the New York Metropolitan Area in an Article 7 proceeding, securing a multi-year tax reduction that improved the property&apos;s net operating income.
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
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Is it worth appealing property taxes in New York?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                In many cases, successful appeals result in significant savings. We typically handle property tax assessment reductions on a contingency fee basis. This means we only charge a fee if we are successful in reducing your taxes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Will challenging my taxes increase my assessment?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                No. Under New York law, filing a tax grievance cannot result in an increase in your property&apos;s assessed value. The only possible outcomes are a reduction or the assessment remaining the same.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What is the deadline to file a grievance in Westchester County?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Grievance Day varies by municipality, but in many Westchester County towns, it is the third Tuesday in June. However, deadlines differ across cities and villages. It is critical to contact us well in advance of the deadline.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What evidence is needed for a property tax appeal?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                We use market data, recent sales of comparable properties, and sometimes professional appraisals to demonstrate that your property is over-assessed relative to its fair market value.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">How long does the tax grievance process take?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                The timeline varies depending on the municipality and whether the case is resolved at the board level or requires further legal action (SCAR or Article 7). It can take anywhere from a few months to over a year for complex commercial cases.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Can I challenge my taxes if I just bought my home?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Yes. In fact, a recent purchase price is often the strongest evidence of a property&apos;s fair market value. If you paid less than the full market value implied by your assessment, you have a strong case for a reduction.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What is an Article 7 proceeding?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                An Article 7 proceeding is a formal legal challenge filed in the New York Supreme Court to contest a property tax assessment. This is typically used for commercial properties or high-value residential estates when the administrative grievance is denied.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Do I need to attend the grievance hearing?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                In most cases, no. We represent you at all hearings and proceedings. You can continue with your daily life while we handle the legal complexities of your tax appeal.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Ready to discuss your property tax assessment?</h2>
          <Button size="lg" render={<Link href="/contact" />} className="bg-white text-slate-900 hover:bg-slate-100 rounded-none text-base h-14 px-10">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
