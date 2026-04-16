import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Legal Disclaimer</h1>
          <p className="text-slate-300">Attorney Advertising</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate max-w-none text-slate-700 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">No Attorney-Client Relationship</h2>
              <p>
                The information provided on the Wolper Law Firm, PLLC website is for general informational purposes only and does not constitute legal advice. The use of this website, and the sending or receipt of information through this website, does not create an attorney-client relationship between you and Wolper Law Firm, PLLC.
              </p>
              <p className="mt-4">
                An attorney-client relationship is only established when you and the firm have signed a formal engagement letter. Please do not send any confidential information to us until such a relationship has been established.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Not Legal Advice</h2>
              <p>
                You should not act or rely on any information on this website without seeking the advice of a competent attorney licensed in your jurisdiction. The content of this website may not reflect the most current legal developments. Wolper Law Firm, PLLC expressly disclaims all liability in respect to actions taken or not taken based on any or all the contents of this site.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Attorney Advertising</h2>
              <p>
                Under the rules of certain jurisdictions, this website may constitute attorney advertising. Prior results do not guarantee a similar outcome. Each case is different and must be evaluated on its own merits.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites for your convenience. Wolper Law Firm, PLLC does not endorse or control these third-party sites and is not responsible for their content, accuracy, or privacy practices.
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
              Contact Us for a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
