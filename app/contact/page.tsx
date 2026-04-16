import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Wolper Law Firm</h1>
          <p className="text-lg md:text-xl text-slate-300">
            Speak with an Experienced Attorney in New York. Have questions about a real estate transaction, business matter, or property tax assessment in Westchester County? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* 2. Contact Panel */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Office Location</h3>
                    <p className="text-slate-600">Wolper Law Firm, PLLC<br/>400 Columbus Avenue, Suite 124s<br/>Valhalla, NY 10595</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600"><a href="tel:+19147415050" className="hover:text-slate-900 transition-colors">+1 914-741-5050</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600"><a href="mailto:info@wolperlaw.com" className="hover:text-slate-900 transition-colors">info@wolperlaw.com</a></p>
                  </div>
                </div>
              </div>

              {/* Reassurance Block */}
              <div className="bg-slate-50 border border-slate-200 p-6">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">What to Expect</h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-center"><Clock className="w-4 h-4 mr-2 text-slate-400" /> Prompt response to all inquiries</li>
                  <li className="flex items-center"><Clock className="w-4 h-4 mr-2 text-slate-400" /> Confidential initial review</li>
                  <li className="flex items-center"><Clock className="w-4 h-4 mr-2 text-slate-400" /> Clear next steps and fee structure</li>
                </ul>
              </div>
            </div>

            {/* 3. Consultation Form */}
            <div className="bg-white border border-slate-200 shadow-sm p-8 md:p-10">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Request a Consultation</h2>
              <p className="text-slate-600 mb-8 text-sm">Fill out the form below and we will contact you shortly to discuss your matter.</p>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" className="rounded-none border-slate-300 focus-visible:ring-slate-900" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" className="rounded-none border-slate-300 focus-visible:ring-slate-900" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" className="rounded-none border-slate-300 focus-visible:ring-slate-900" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="practice-area">Area of Interest</Label>
                  <select 
                    id="practice-area" 
                    name="practice-area"
                    aria-label="Area of Interest"
                    className="flex h-10 w-full border border-slate-300 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-none"
                  >
                    <option value="">Select a practice area...</option>
                    <option value="business">Business Law & Counseling</option>
                    <option value="real-estate">Real Estate Law</option>
                    <option value="community">Community Associations</option>
                    <option value="tax">Property Tax Reduction</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Brief Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Please briefly describe your legal needs..." 
                    className="min-h-[120px] rounded-none border-slate-300 focus-visible:ring-slate-900"
                  />
                  <p className="text-xs text-slate-500 mt-2">Please do not include sensitive or confidential information in this form.</p>
                </div>
                
                <Button type="button" className="w-full bg-[#C5A059] hover:bg-[#B38F48] text-white rounded-[2px] h-12 text-base font-semibold uppercase tracking-[1px]">
                  Request Consultation
                </Button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-10 text-center">Common Business Questions</h2>
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Corporation vs LLC: Which is better?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                There is no single &quot;better&quot; option; it depends on your goals. LLCs offer flexibility in management and pass-through taxation, making them popular for many small businesses and real estate holdings. Corporations (C-Corps) are often preferred by investors and are necessary if you plan to go public, but they face double taxation. S-Corps offer a middle ground. We can help you decide based on your specific situation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Do I need a Partnership Agreement?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Yes. If you are going into business with others, a partnership agreement (or operating agreement for an LLC, or shareholder agreement for a corporation) is essential. It dictates how decisions are made, how profits are split, and what happens if a partner wants to leave, becomes disabled, or dies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What is an Operating Agreement?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                An Operating Agreement is the governing document for an LLC. Even if you are a single-member LLC, having an operating agreement is highly recommended to maintain your liability protection and establish the rules for your business operations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">What are the risks of a Sole Proprietorship?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                The primary risk of a sole proprietorship is unlimited personal liability. If the business is sued or incurs debt, your personal assets (home, savings, etc.) are at risk. Forming an LLC or Corporation creates a legal separation between your personal assets and business liabilities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
