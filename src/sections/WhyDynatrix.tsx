import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Handshake, TrendingUp, Settings } from 'lucide-react';
import { whyChooseUs, companyInfo } from '../data/siteData';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Globe, Handshake, TrendingUp, Settings,
};

export default function WhyDynatrix() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.why-card', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7,
        scrollTrigger: { trigger: '.why-grid', start: 'top 80%' },
      });
      gsap.from('.why-image', {
        opacity: 0, x: 50, duration: 0.8,
        scrollTrigger: { trigger: '.why-image', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#f2f3f6] overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Why Choose Us"
              title="Building a Design Easy for Business"
              description={`${companyInfo.shortName} brings the latest business innovation into the digital world with top quality technology solutions tailored for African markets.`}
              className="mb-10"
            />

            <div className="why-grid grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whyChooseUs.map((item) => {
                const Icon = iconMap[item.icon] || Globe;
                return (
                  <div key={item.title} className="why-card group text-center sm:text-left">
                    <div className="why-icon-circle mx-auto sm:mx-0 mb-5">
                      <Icon className="w-7 h-7 text-golden group-hover:text-golden transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-[14px] leading-[26px] text-[#6f7174]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="why-image relative">
            <img src="/about-team.jpg" alt="Dynatrix team" className="w-full h-auto object-cover shadow-[0_10px_60px_rgba(0,0,0,0.12)]" />
            <div className="absolute bottom-8 left-8 right-8 bg-charcoal/90 text-white p-6 backdrop-blur-sm">
              <p className="text-[15px] leading-[28px] text-white/80">{companyInfo.tagline}</p>
              <p className="text-golden font-semibold mt-2 text-sm uppercase tracking-[0.1em]">{companyInfo.shortName}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
