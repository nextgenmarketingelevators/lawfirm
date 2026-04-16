import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, FileCheck, ArrowLeftRight, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function CommunityAssociationsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/condo-building/1920/1080?blur=2')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Community Association Attorney in New York
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Legal Counsel for Condominiums, Cooperatives & HOAs. We provide experienced legal representation for community associations in New York and Westchester County.
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
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 shrink-0" /> Trusted Legal Advisor for Boards</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 shrink-0" /> Minimizing Legal Risk</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-slate-400 shrink-0" /> Informed Decision Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Challenge */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Experienced Legal Guidance for Boards & Associations</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Managing a community involves legal complexity and constant decision-making. As a community association lawyer, we help boards make informed decisions while minimizing legal risk across New York.
          </p>
        </div>
      </section>

      {/* 3. How We Help */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Our Association Services in Westchester County</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <Users className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Board Governance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We provide governance guidance for boards in Valhalla, NY, helping them interpret documents and ensure compliance with New York laws.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <FileCheck className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Contract Negotiation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We review and negotiate vendor agreements to protect your community&apos;s financial and legal interests across the New York Metropolitan Area.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <ArrowLeftRight className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Legal Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We ensure your association stays compliant with evolving regulations and local Westchester County mandates.</p>
            </div>
            
            <div className="bg-white p-8 border border-slate-200 shadow-sm">
              <ShieldAlert className="w-10 h-10 text-slate-700 mb-6" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">Dispute Resolution</h3>
              <p className="text-slate-600 text-sm leading-relaxed">When conflicts arise with unit owners or vendors in New York, we provide strategic solutions and strong representation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Governance Process & Risk Management */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Governance & Compliance Process</h2>
              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">1</div>
                  <h4 className="font-bold text-slate-900 mb-2">Document Audit</h4>
                  <p className="text-slate-600 text-sm">Comprehensive review of Declarations, Bylaws, and House Rules to identify inconsistencies or outdated provisions.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">2</div>
                  <h4 className="font-bold text-slate-900 mb-2">Strategic Counsel</h4>
                  <p className="text-slate-600 text-sm">Advising the board on fiduciary duties, meeting protocols, and voting procedures to ensure valid corporate actions.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-900">3</div>
                  <h4 className="font-bold text-slate-900 mb-2">Ongoing Support</h4>
                  <p className="text-slate-600 text-sm">Real-time legal support for board meetings, special assessments, and capital improvement project contracts.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-10 border border-slate-200">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Managing Association Risks</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Boards in New York face significant legal exposure if not properly advised:
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Selective Enforcement:</strong> Failing to apply rules uniformly can lead to discrimination claims and invalidation of rules.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Fiduciary Breaches:</strong> Board members can be held personally liable if they fail to act in the association&apos;s best interest.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-slate-700 shrink-0" />
                  <span><strong>Contractual Liabilities:</strong> Signing vendor contracts without legal review can lead to unfavorable terms and hidden costs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Representative Association Matters */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Representative Association Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-700 p-8">
              <h4 className="font-bold text-accent mb-4 uppercase tracking-wider text-xs">Bylaw Modernization</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Represented a large Westchester condominium in a complete overhaul of its 30-year-old bylaws to allow for electronic voting and virtual meetings, ensuring compliance with updated New York statutes.
              </p>
            </div>
            <div className="border border-slate-700 p-8">
              <h4 className="font-bold text-accent mb-4 uppercase tracking-wider text-xs">Complex Vendor Dispute</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Successfully negotiated a favorable settlement for a cooperative board in the New York Metropolitan Area involving a multi-million dollar roof replacement project that failed to meet contractual specifications.
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
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Do you represent both HOAs and Condominiums in New York?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Yes. We have extensive experience representing Condominium Associations, Cooperative Boards, and Homeowner Associations (HOAs) across New York and Westchester County, understanding the distinct legal frameworks that govern each.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Can you help us update our governing documents?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Yes. Many associations operate with outdated documents that no longer comply with current law or meet the community&apos;s needs. We can draft and guide the board through the process of amending declarations, bylaws, and house rules.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">How do you work with property management companies?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                We view property managers as vital partners. We work collaboratively with management to provide the legal backing they need to enforce rules, handle disputes, and advise the board effectively.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What is the board&apos;s fiduciary duty in New York?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Board members must act in good faith and in the best interests of the association. We help boards understand their duties to avoid personal liability and ensure sound governance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">How do we handle a dispute with a unit owner?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                We recommend a proactive approach to dispute resolution, often starting with clear communication and mediation. If necessary, we provide strong legal representation to protect the association&apos;s interests.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What is the Business Judgment Rule?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                In New York, the Business Judgment Rule generally protects board members from liability for decisions made in good faith and within their authority. We advise boards on how to document their decisions to ensure this protection applies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Can an association prohibit short-term rentals like Airbnb?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Most New York associations have the authority to restrict or prohibit short-term rentals, but the specific language in the governing documents is critical. We help boards draft and enforce effective rental policies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What are the requirements for board meetings in New York?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                New York law and an association&apos;s bylaws dictate notice requirements, quorum rules, and how minutes must be kept. We ensure your board follows these procedures to maintain the validity of its actions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Ready to discuss your association&apos;s needs?</h2>
          <Button size="lg" render={<Link href="/contact" />} className="bg-white text-slate-900 hover:bg-slate-100 rounded-none text-base h-14 px-10">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
