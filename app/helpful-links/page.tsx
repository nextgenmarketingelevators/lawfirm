import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Building2, Home, Users, Receipt } from "lucide-react";

export default function HelpfulLinksPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Helpful Legal Resources in New York</h1>
          <p className="text-lg md:text-xl text-slate-300">
            Curated resources and information for our clients in New York and Westchester County.
          </p>
        </div>
      </section>

      {/* 2. Resource Categories */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Business Resources */}
            <Card className="rounded-none border-slate-200 shadow-sm">
              <CardHeader className="bg-white border-b border-slate-100 pb-4">
                <div className="flex items-center mb-2">
                  <Building2 className="w-6 h-6 text-slate-700 mr-3" />
                  <CardTitle className="font-serif text-2xl">Business Resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 bg-white">
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="group flex items-start text-slate-700 hover:text-slate-900 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-3 mt-1 text-slate-400 group-hover:text-slate-600 shrink-0" />
                      <div>
                        <span className="font-medium block">NYS Department of State - Division of Corporations</span>
                        <span className="text-sm text-slate-500">Information on forming and maintaining business entities in NY.</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-start text-slate-700 hover:text-slate-900 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-3 mt-1 text-slate-400 group-hover:text-slate-600 shrink-0" />
                      <div>
                        <span className="font-medium block">Small Business Administration (SBA)</span>
                        <span className="text-sm text-slate-500">Resources for funding, programs, and local assistance.</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Real Estate Resources */}
            <Card className="rounded-none border-slate-200 shadow-sm">
              <CardHeader className="bg-white border-b border-slate-100 pb-4">
                <div className="flex items-center mb-2">
                  <Home className="w-6 h-6 text-slate-700 mr-3" />
                  <CardTitle className="font-serif text-2xl">Real Estate Resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 bg-white">
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="group flex items-start text-slate-700 hover:text-slate-900 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-3 mt-1 text-slate-400 group-hover:text-slate-600 shrink-0" />
                      <div>
                        <span className="font-medium block">Westchester County Clerk - Land Records</span>
                        <span className="text-sm text-slate-500">Access to deeds, mortgages, and other property records.</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-start text-slate-700 hover:text-slate-900 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-3 mt-1 text-slate-400 group-hover:text-slate-600 shrink-0" />
                      <div>
                        <span className="font-medium block">NYS Department of Financial Services - Title Insurance</span>
                        <span className="text-sm text-slate-500">Consumer guide to title insurance in New York.</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Community Association Resources */}
            <Card className="rounded-none border-slate-200 shadow-sm">
              <CardHeader className="bg-white border-b border-slate-100 pb-4">
                <div className="flex items-center mb-2">
                  <Users className="w-6 h-6 text-slate-700 mr-3" />
                  <CardTitle className="font-serif text-2xl">Community Associations</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 bg-white">
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="group flex items-start text-slate-700 hover:text-slate-900 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-3 mt-1 text-slate-400 group-hover:text-slate-600 shrink-0" />
                      <div>
                        <span className="font-medium block">NYS Attorney General - Real Estate Finance Bureau</span>
                        <span className="text-sm text-slate-500">Information for cooperative and condominium boards and owners.</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-start text-slate-700 hover:text-slate-900 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-3 mt-1 text-slate-400 group-hover:text-slate-600 shrink-0" />
                      <div>
                        <span className="font-medium block">Community Associations Institute (CAI)</span>
                        <span className="text-sm text-slate-500">Education and resources for community association leaders.</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Property Tax Resources */}
            <Card className="rounded-none border-slate-200 shadow-sm">
              <CardHeader className="bg-white border-b border-slate-100 pb-4">
                <div className="flex items-center mb-2">
                  <Receipt className="w-6 h-6 text-slate-700 mr-3" />
                  <CardTitle className="font-serif text-2xl">Property Tax Resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 bg-white">
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="group flex items-start text-slate-700 hover:text-slate-900 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-3 mt-1 text-slate-400 group-hover:text-slate-600 shrink-0" />
                      <div>
                        <span className="font-medium block">NYS Department of Taxation and Finance - Property Taxes</span>
                        <span className="text-sm text-slate-500">Information on assessments, exemptions, and the grievance process.</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-start text-slate-700 hover:text-slate-900 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-3 mt-1 text-slate-400 group-hover:text-slate-600 shrink-0" />
                      <div>
                        <span className="font-medium block">STAR Program Information</span>
                        <span className="text-sm text-slate-500">Details on the School Tax Relief (STAR) exemption program.</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* 3. Disclaimer */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-sm text-slate-500 leading-relaxed">
            <strong>Disclaimer:</strong> The external resources provided on this page are for general informational purposes only. Wolper Law Firm PLLC does not endorse, control, or take responsibility for the content, accuracy, or privacy practices of these third-party websites. Accessing these links does not constitute legal advice or create an attorney-client relationship.
          </p>
        </div>
      </section>
    </div>
  );
}
