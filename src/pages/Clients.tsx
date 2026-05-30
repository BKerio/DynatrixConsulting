import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';
import { clients, testimonials } from '@/data/siteData';
import CTABanner from '@/sections/CTABanner';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.client-card', {
        opacity: 0, y: 30, stagger: 0.06, duration: 0.5,
        scrollTrigger: { trigger: '.clients-grid', start: 'top 80%' },
      });
      gsap.from('.testimonial-card', {
        opacity: 0, y: 30, stagger: 0.12, duration: 0.6,
        scrollTrigger: { trigger: '.testimonials-grid', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <PageHero
        eyebrow="Our Clients"
        title="Trusted by Leading Organizations"
        description="We are proud to partner with some of Africa's most respected organizations across diverse industries."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Clientele"
            title="Organizations We Work With"
            description="From SACCOs and hospitals to government agencies and manufacturers."
          />

          <div className="clients-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[30px]">
            {clients.map((client) => (
              <div key={client.name} className="client-card p-6 bg-[#f8f6f1] border border-[#e1e2e7] text-center hover:border-golden transition-colors">
                <div className="w-14 h-14 bg-golden/20 flex items-center justify-center mx-auto mb-4 text-charcoal font-bold text-xl">
                  {client.name.charAt(0)}
                </div>
                <div className="font-semibold text-charcoal text-[15px]">{client.name}</div>
                <div className="text-[12px] uppercase tracking-[0.08em] text-[#6f7174] mt-1">{client.industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f2f3f6]">
        <div className="container-custom">
          <SectionTitle eyebrow="Testimonials" title="What Our Clients Say" />

          <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card bg-charcoal p-8 relative">
                <Quote className="w-8 h-8 text-golden mb-4 opacity-60" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                  ))}
                </div>
                <blockquote className="text-white/85 text-[15px] leading-[28px] mb-6 line-clamp-5">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold text-white text-[15px]">{testimonial.author}</div>
                  <div className="text-[11px] uppercase tracking-[0.1em] text-golden mt-1">{testimonial.title}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
