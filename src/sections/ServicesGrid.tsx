import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Cpu, Cloud, Shield, Database, Code, ArrowRight } from 'lucide-react';
import { services } from '../data/siteData';
import SectionTitle from '@/components/SectionTitle';
import ThemeButton from '@/components/ThemeButton';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Cpu, Cloud, Shield, Database, Code,
};

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.service-block', {
        opacity: 0, y: 50, stagger: 0.1, duration: 0.7,
        scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#f8f6f1] relative">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Our Services"
          title="Explore Our Top-Notch Professional Services"
          description="From IT consulting to custom integrations — comprehensive technology services built for African enterprises."
        />

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Lightbulb;
            return (
              <div key={service.id} className="service-block group">
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-300" />
                  {/* Floating title strip */}
                  <div className="absolute bottom-0 left-0 right-0 mx-4 -mb-6 bg-white shadow-[0_10px_60px_rgba(0,0,0,0.1)] p-5 pr-16 z-10">
                    <h3 className="text-lg font-semibold text-charcoal">{service.title}</h3>
                    <div className="absolute -top-8 right-4 w-16 h-16 bg-golden flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-charcoal" />
                    </div>
                  </div>
                </div>
                <div className="pt-12 px-6 pb-6">
                  <p className="text-[15px] leading-[28px] text-[#6f7174] mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <Link to={service.href || '/services'} className="inline-flex items-center text-charcoal font-semibold text-[14px] hover:text-golden transition-colors group/link">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <ThemeButton to="/services" variant="dark">
            View All Services <ArrowRight className="w-4 h-4" />
          </ThemeButton>
        </div>
      </div>
    </section>
  );
}
