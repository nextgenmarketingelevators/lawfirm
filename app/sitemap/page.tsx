import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SitemapPage() {
  const links = [
    {
      title: "Main Pages",
      items: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Practice Areas", href: "/practice-areas" },
        { name: "Helpful Links", href: "/helpful-links" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Practice Areas",
      items: [
        { name: "Business Law & Counseling", href: "/practice-areas/business-law" },
        { name: "Community Associations", href: "/practice-areas/community-associations" },
        { name: "Property Tax Assessment Reduction", href: "/practice-areas/property-tax" },
        { name: "Real Estate Law", href: "/practice-areas/real-estate" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Disclaimer", href: "/disclaimer" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Site Map", href: "/sitemap" },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Sitemap</h1>
          <p className="text-slate-300">Navigate our website to find information on our legal services in New York and Westchester County.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12">
            {links.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="group flex items-center text-slate-600 hover:text-[#C5A059] transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-slate-300 group-hover:text-[#C5A059] transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
