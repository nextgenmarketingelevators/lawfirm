import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-300">How we handle your information</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate max-w-none text-slate-700 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Information Collection</h2>
              <p>
                Wolper Law Firm, PLLC collects information that you voluntarily provide to us through our contact forms, email communications, or phone calls. This may include your name, email address, phone number, and a brief description of your legal matter.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Use of Information</h2>
              <p>
                We use the information you provide to respond to your inquiries, schedule consultations, and provide legal services if you become a client. We do not sell, rent, or share your personal information with third parties for their marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Cookies and Analytics</h2>
              <p>
                Our website may use cookies and similar technologies to improve user experience and analyze website traffic. You can adjust your browser settings to refuse cookies, although some parts of the site may not function properly as a result.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
              <p>
                We take reasonable measures to protect the information we collect from unauthorized access, disclosure, or modification. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
              <p>
                You may request to review, update, or delete the personal information we have collected about you by contacting us directly.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm italic">
                Last Updated: April 2024
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button render={<Link href="/contact" />} className="bg-[#C5A059] hover:bg-[#B38F48] text-white py-3 px-8 h-auto no-underline text-[13px] font-semibold rounded-[2px] uppercase tracking-[1px]">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
