import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Users, Receipt, Home, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PracticeAreasPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-40"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Legal Services in Real Estate, Business & Property Law</h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8">
            Wolper Law Firm provides comprehensive legal services for clients seeking an experienced real estate attorney, business lawyer, or property tax attorney in New York.
          </p>
          <Button size="lg" render={<Link href="/contact" />} className="bg-white text-slate-900 hover:bg-slate-100 rounded-none text-base px-8 h-12">
            Speak With an Attorney
          </Button>
        </div>
      </section>

      {/* 2. Intro / Positioning */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">Why Experience Matters</h2>
          <p className="text-xl md:text-2xl font-serif text-slate-800 leading-relaxed">
            Legal issues involving real estate and business require precision and foresight. We focus on protecting your interests while helping you make informed decisions across Westchester County and New York.
          </p>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Real Estate Law */}
            <Card className="rounded-none border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <CardHeader className="pb-4">
                <Home className="w-10 h-10 text-slate-700 mb-4" />
                <CardTitle className="font-serif text-2xl">Real Estate Law</CardTitle>
                <CardDescription className="text-base text-slate-600 mt-2">
                  Guidance for residential and commercial transactions, leasing, and financing.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-8 flex-1 text-slate-700">
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Residential & commercial transactions</li>
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Lease negotiation & contract review</li>
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Financing & due diligence</li>
                </ul>
                <Link href="/practice-areas/real-estate" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-slate-600 uppercase tracking-wider mt-auto">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>

            {/* Business Law */}
            <Card className="rounded-none border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <CardHeader className="pb-4">
                <Building2 className="w-10 h-10 text-slate-700 mb-4" />
                <CardTitle className="font-serif text-2xl">Business Law & Counseling</CardTitle>
                <CardDescription className="text-base text-slate-600 mt-2">
                  Legal support for business formation, agreements, and strategic growth.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-8 flex-1 text-slate-700">
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Business formation (LLC, Corp, Partnerships)</li>
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Shareholder & operating agreements</li>
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Ongoing strategic legal counsel</li>
                </ul>
                <Link href="/practice-areas/business-law" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-slate-600 uppercase tracking-wider mt-auto">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>

            {/* Community Associations */}
            <Card className="rounded-none border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <CardHeader className="pb-4">
                <Users className="w-10 h-10 text-slate-700 mb-4" />
                <CardTitle className="font-serif text-2xl">Community Associations</CardTitle>
                <CardDescription className="text-base text-slate-600 mt-2">
                  Representation for condominiums, cooperatives, and HOA boards.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-8 flex-1 text-slate-700">
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Board governance & compliance</li>
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Contract review & negotiation</li>
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Dispute resolution & litigation</li>
                </ul>
                <Link href="/practice-areas/community-associations" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-slate-600 uppercase tracking-wider mt-auto">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>

            {/* Property Tax */}
            <Card className="rounded-none border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <CardHeader className="pb-4">
                <Receipt className="w-10 h-10 text-slate-700 mb-4" />
                <CardTitle className="font-serif text-2xl">Property Tax Assessment Reduction</CardTitle>
                <CardDescription className="text-base text-slate-600 mt-2">
                  Legal strategies to challenge excessive property tax assessments.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-8 flex-1 text-slate-700">
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Review of property valuation</li>
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Filing tax assessment appeals</li>
                  <li className="flex items-start"><span className="mr-2 text-slate-400">•</span> Representation in legal proceedings</li>
                </ul>
                <Link href="/practice-areas/property-tax" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-slate-600 uppercase tracking-wider mt-auto">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Client Types Section */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">Who We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-lg text-slate-700">
            <div className="flex items-center p-4 bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-slate-400 mr-4 flex-shrink-0" />
              Business owners
            </div>
            <div className="flex items-center p-4 bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-slate-400 mr-4 flex-shrink-0" />
              Entrepreneurs
            </div>
            <div className="flex items-center p-4 bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-slate-400 mr-4 flex-shrink-0" />
              Boards of managers
            </div>
            <div className="flex items-center p-4 bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-slate-400 mr-4 flex-shrink-0" />
              Cooperative boards
            </div>
            <div className="flex items-center p-4 bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-slate-400 mr-4 flex-shrink-0" />
              HOA boards
            </div>
            <div className="flex items-center p-4 bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-slate-400 mr-4 flex-shrink-0" />
              Buyers and sellers
            </div>
            <div className="flex items-center p-4 bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-slate-400 mr-4 flex-shrink-0" />
              Landlords and commercial tenants
            </div>
            <div className="flex items-center p-4 bg-slate-50 border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-slate-400 mr-4 flex-shrink-0" />
              Property owners and managers
            </div>
          </div>
        </div>
      </section>

      {/* 5. Consultation CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-medium mb-6">Not sure which practice area applies to your situation?</h2>
          <p className="text-slate-300 mb-8">Let&apos;s point you in the right direction.</p>
          <Button size="lg" render={<Link href="/contact" />} className="bg-white text-slate-900 hover:bg-slate-100 rounded-none px-8">
            Request a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
