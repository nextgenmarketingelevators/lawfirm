import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, FileSignature, ShieldAlert, Handshake, CheckCircle2 } from "lucide-react";

export default function RealEstatePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Real Estate Attorney in New York
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Strategic Legal Counsel for Property Owners & Investors. As an experienced real estate attorney in New York, we provide comprehensive legal services for residential and commercial transactions across Westchester County.
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
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 shrink-0" /> Personalized Attention for Investors</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 shrink-0" /> Practical Guidance for Closings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Challenge */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Protect Your Investment at Every Stage</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Real estate transactions are complex — and often the largest financial decisions you&apos;ll make. Whether you are buying or selling property in Westchester County, working with a real estate lawyer helps you identify risks early and negotiate from a position of strength.
          </p>
        </div>
      </section>

      {/* 3. How We Help */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Our Real Estate Services in Westchester County</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <Home className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Residential & Commercial</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Representation for buyers and sellers in residential and commercial property transactions in Valhalla, NY and across New York.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <FileSignature className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Leasing & Contracts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We draft, review, and negotiate commercial and residential leases for properties in the New York Metropolitan Area.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <ShieldAlert className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Risk Assessment</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Thorough review of title reports, zoning compliance, and environmental issues to avoid unexpected liabilities in Westchester.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <Handshake className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Financing & Negotiation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Strategic negotiation of financing terms, mortgages, and complex deal structures for New York real estate investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Transactional Process & Risk Mitigation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">The Real Estate Closing Process</h2>
              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">1</div>
                  <h4 className="font-bold text-slate-900 mb-2">Contract Negotiation</h4>
                  <p className="text-slate-600 text-sm">We review and negotiate the Contract of Sale to include necessary contingencies (inspection, financing, etc.) and protect your down payment.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">2</div>
                  <h4 className="font-bold text-slate-900 mb-2">Due Diligence & Title Review</h4>
                  <p className="text-slate-600 text-sm">Examination of title reports, surveys, and certificates of occupancy to ensure the property is free of liens and legal encumbrances.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">3</div>
                  <h4 className="font-bold text-slate-900 mb-2">The Closing</h4>
                  <p className="text-slate-600 text-sm">Final review of all loan documents, deed transfer, and coordination of fund distribution to ensure a successful transfer of ownership.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-10 border border-slate-200">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Mitigating Real Estate Risks</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Real estate in New York carries unique risks that require professional oversight:
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Title Defects:</strong> Unresolved liens or boundary disputes can prevent a future sale or lead to costly litigation.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Zoning Violations:</strong> Illegal structures or non-compliant uses can lead to heavy municipal fines and required remediation.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Environmental Liabilities:</strong> Hidden issues like oil tanks or asbestos can become the new owner&apos;s financial burden.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Representative Real Estate Matters */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Representative Real Estate Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700 p-8">
              <h4 className="font-bold text-accent mb-4 uppercase tracking-wider text-xs">Complex Residential Purchase</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Represented a buyer in the acquisition of a high-value estate in Westchester County involving complex title issues and multiple municipal easements, successfully resolving all concerns before closing.
              </p>
            </div>
            <div className="border border-slate-700 p-8">
              <h4 className="font-bold text-accent mb-4 uppercase tracking-wider text-xs">Commercial Lease Negotiation</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Negotiated a long-term commercial lease for a retail tenant in the New York Metropolitan Area, securing favorable build-out allowances and flexible assignment rights for the client.
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
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Do I need a real estate lawyer to buy a house in New York?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                In New York, it is customary and highly recommended for both buyers and sellers to be represented by attorneys. We review the contract of sale, examine the title report, negotiate terms, and ensure your interests are protected through closing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What should I look for in a commercial lease in Westchester County?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Commercial leases are highly negotiable and complex. Key areas to review include common area maintenance (CAM) charges, assignment and subletting rights, personal guarantees, and repair obligations. We ensure the lease terms align with your business needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Can you help resolve a dispute with my landlord or tenant?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Yes. We represent both landlords and commercial tenants in lease disputes, eviction proceedings, and negotiations to resolve conflicts efficiently and protect your rights under the lease agreement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What is the role of a real estate lawyer during a closing?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                A real estate lawyer reviews all closing documents, ensures the title is clear, coordinates with the lender, and oversees the transfer of funds to ensure a smooth and legally sound transaction.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">How can a real estate lawyer help with zoning issues?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                We analyze local zoning laws and regulations in Westchester to ensure your intended use of the property is permitted and assist with applications for variances or special permits if needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What is a title search and why is it important?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                A title search is a review of public records to confirm the seller has the legal right to sell the property and to identify any liens, mortgages, or easements that could affect your ownership. We review the results to ensure you get a &quot;clear title.&quot;
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What are common closing costs for buyers in New York?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Closing costs can include mortgage recording taxes, title insurance premiums, attorney fees, and mansion taxes for high-value properties. We provide a detailed estimate early in the process so there are no surprises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">How do you handle co-op and condo purchases differently?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Co-ops involve buying shares in a corporation, while condos involve buying real property. Co-ops require a board approval process and a review of the corporation&apos;s financial health, which we handle as part of our due diligence.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Ready to discuss your real estate matter?</h2>
          <Button size="lg" render={<Link href="/contact" />} className="bg-white text-slate-900 hover:bg-slate-100 rounded-none text-base h-14 px-10">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
