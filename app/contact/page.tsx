'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practiceArea: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.practiceArea) newErrors.practiceArea = "Please select an area of interest";
    if (!formData.message.trim()) newErrors.message = "Please provide a brief message";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError("");

      try {
        const payload = {
          full_name: formData.name,
          email_address: formData.email,
          phone_number: formData.phone,
          service: formData.practiceArea || 'General Inquiry',
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'contact_form'
        };

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          console.error('Contact form error:', response.status, response.statusText, errorData);
          throw new Error('Webhook request failed');
        }

        setIsSubmitted(true);
        setFormData({ name: "", phone: "", email: "", practiceArea: "", message: "" });
        setErrors({});
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitError("We were unable to send your message. Please try again shortly.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-40"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
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
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-6 text-center">
                  <h3 className="text-green-800 font-bold mb-2">Thank you for reaching out</h3>
                  <p className="text-green-700 text-sm">Your message has been successfully sent. We will review your inquiry and get back to you promptly.</p>
                  <Button 
                    variant="outline" 
                    className="mt-6 border-green-600 text-green-700 hover:bg-green-100"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name" className={errors.name ? "text-red-500" : ""}>Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      autoComplete="name"
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`rounded-none focus-visible:ring-slate-900 transition-colors ${errors.name ? 'border-red-500 bg-red-50/10 focus-visible:ring-red-500' : 'border-slate-300'}`} 
                    />
                    {errors.name && <p className="text-red-500 text-xs flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1" />{errors.name}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={errors.phone ? "text-red-500" : ""}>Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        autoComplete="tel"
                        placeholder="(555) 123-4567" 
                        value={formData.phone}
                        onChange={handleChange}
                        className={`rounded-none focus-visible:ring-slate-900 transition-colors ${errors.phone ? 'border-red-500 bg-red-50/10 focus-visible:ring-red-500' : 'border-slate-300'}`} 
                      />
                      {errors.phone && <p className="text-red-500 text-xs flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1" />{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={errors.email ? "text-red-500" : ""}>Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        autoComplete="email"
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`rounded-none focus-visible:ring-slate-900 transition-colors ${errors.email ? 'border-red-500 bg-red-50/10 focus-visible:ring-red-500' : 'border-slate-300'}`} 
                      />
                      {errors.email && <p className="text-red-500 text-xs flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1" />{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="practiceArea" className={errors.practiceArea ? "text-red-500" : ""}>Area of Interest</Label>
                    <select 
                      id="practiceArea" 
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleChange}
                      aria-label="Area of Interest"
                      className={`flex h-10 w-full border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-none transition-colors ${errors.practiceArea ? 'border-red-500 focus-visible:ring-red-500 bg-red-50/10 text-red-900' : 'border-slate-300 focus-visible:ring-slate-900'}`}
                    >
                      <option value="">Select a practice area...</option>
                      <option value="business">Business Law & Counseling</option>
                      <option value="real-estate">Real Estate Law</option>
                      <option value="community">Community Associations</option>
                      <option value="tax">Property Tax Reduction</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                    {errors.practiceArea && <p className="text-red-500 text-xs flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1" />{errors.practiceArea}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className={errors.message ? "text-red-500" : ""}>Brief Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please briefly describe your legal needs..." 
                      className={`min-h-[120px] rounded-none focus-visible:ring-slate-900 transition-colors ${errors.message ? 'border-red-500 bg-red-50/10 focus-visible:ring-red-500' : 'border-slate-300'}`}
                    />
                    {errors.message ? (
                      <p className="text-red-500 text-xs flex items-center mt-1"><AlertCircle className="w-3 h-3 mr-1" />{errors.message}</p>
                    ) : (
                      <p className="text-xs text-slate-500 mt-2">Please do not include sensitive or confidential information in this form.</p>
                    )}
                  </div>
                  
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 text-sm font-medium">
                      {submitError}
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#C5A059] hover:bg-[#B38F48] disabled:opacity-70 text-white rounded-[2px] h-12 text-base font-semibold uppercase tracking-[1px] transition-all duration-300 hover:scale-[1.02]"
                  >
                    {isSubmitting ? "Sending..." : "Request Consultation"}
                  </Button>
                </form>
              )}
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
