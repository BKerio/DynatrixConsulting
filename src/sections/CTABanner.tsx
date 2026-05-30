import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/siteData';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.cta-panel', {
        opacity: 0, y: 40, duration: 0.8,
        scrollTrigger: { trigger: '.cta-panel', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-0 cta-panel shadow-[0_10px_60px_rgba(0,0,0,0.08)]">
          {/* Form side */}
          <div className="bg-[#f8f6f1] p-8 sm:p-12 lg:p-14">
            <SectionTitle
              align="left"
              eyebrow="Get In Touch"
              title="Let's Work Together"
              description={`Ready to transform your business? Reach out to ${companyInfo.shortName} and let's discuss how we can help you achieve your technology goals.`}
              className="mb-8"
            />

            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle className="w-12 h-12 text-golden mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Message Sent!</h3>
                <p className="text-[#6f7174]">Thank you for reaching out. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-white border border-[#e1e2e7] text-charcoal text-[15px] focus:outline-none focus:border-golden"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-white border border-[#e1e2e7] text-charcoal text-[15px] focus:outline-none focus:border-golden"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 bg-white border border-[#e1e2e7] text-charcoal text-[15px] focus:outline-none focus:border-golden resize-none"
                />
                <button type="submit" className="btn-theme w-full justify-center">
                  <span className="relative z-10 flex items-center gap-2"><Send className="w-4 h-4" /> Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Image side */}
          <div className="relative min-h-[400px] lg:min-h-0">
            <img src="/service-consulting.jpg" alt="Contact Dynatrix" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/50" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 text-white">
              <p className="text-[12px] uppercase tracking-[0.1em] text-golden mb-2">Contact</p>
              <p className="text-2xl font-semibold mb-2">{companyInfo.phone}</p>
              <p className="text-white/70 text-[15px]">{companyInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
