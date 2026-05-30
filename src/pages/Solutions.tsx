import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Database, Users, Shield, Cloud, BarChart3, MessageSquare, CreditCard, Check } from 'lucide-react';
import { solutions } from '@/data/siteData';
import CTABanner from '@/sections/CTABanner';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Monitor, Database, Users, Shield, Cloud, BarChart3, MessageSquare, CreditCard,
};

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.solution-card', {
        opacity: 0, y: 40, stagger: 0.1, duration: 0.7,
        scrollTrigger: { trigger: '.solutions-grid', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const allProducts = solutions.flatMap(s => s.items);

  return (
    <div ref={sectionRef}>
      <PageHero
        eyebrow="Our Solutions"
        title="Technology Partner Ecosystem"
        description="We partner with the world's leading technology vendors to deliver best-in-class solutions tailored for African enterprises."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Partner Solutions"
            title="Everything Your Business Needs"
            description="One trusted partner for all your technology needs. We deliver integrated solutions across every layer of your stack."
          />

          <div className="solutions-grid grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {solutions.map((solution) => {
              const Icon = iconMap[solution.icon] || Monitor;
              return (
                <div key={solution.category} className="solution-card bg-[#f8f6f1] p-8 border-t-4 border-transparent hover:border-golden transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 bg-golden flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-charcoal" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-charcoal mb-4">{solution.category}</h3>
                      <ul className="space-y-2.5">
                        {solution.items.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-[#6f7174] text-[15px]">
                            <Check className="w-4 h-4 text-golden flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f2f3f6]">
        <div className="container-custom">
          <SectionTitle eyebrow="Products" title="Products We Work With" description="Best-in-class software platforms we implement and support." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allProducts.map((product) => (
              <div key={product} className="flex items-center justify-center p-5 bg-white border border-[#e1e2e7] text-center min-h-[80px] hover:border-golden transition-colors">
                <span className="text-[13px] font-semibold text-charcoal">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
