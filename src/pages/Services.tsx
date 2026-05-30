import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Cpu, Cloud, Shield, Database, Code, ArrowRight, BarChart3, GraduationCap, FolderKanban, Users, Calculator, FileCheck, Search } from 'lucide-react';
import { services, additionalServices } from '../data/siteData';
import CTABanner from '../sections/CTABanner';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const mainIconMap: Record<string, React.ElementType> = {
  Lightbulb, Cpu, Cloud, Shield, Database, Code,
};

const additionalIconMap: Record<string, React.ElementType> = {
  'data-analytics': BarChart3,
  'training': GraduationCap,
  'project-management': FolderKanban,
  'hr-payroll': Users,
  'tax-compliance': Calculator,
  'system-audits': FileCheck,
};

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.main-service-card', { opacity: 0, y: 50, stagger: 0.1, duration: 0.7,
        scrollTrigger: { trigger: '.main-services-grid', start: 'top 80%' }});
      gsap.from('.additional-service-card', { opacity: 0, y: 40, stagger: 0.08, duration: 0.6,
        scrollTrigger: { trigger: '.additional-services-grid', start: 'top 80%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Technology Solutions"
        description="From strategy to implementation, we offer end-to-end IT services designed to transform your business and drive sustainable growth across Africa."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle eyebrow="Core Services" title="Solutions That Drive Results" description="Our core services address the most critical technology needs of modern African enterprises." />

          <div className="main-services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {services.map((service) => {
              const Icon = mainIconMap[service.icon] || Lightbulb;
              return (
                <div key={service.id} className="main-service-card service-block group">
                  <div className="relative h-52 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-4 w-14 h-14 bg-golden flex items-center justify-center">
                      <Icon className="w-6 h-6 text-charcoal" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-golden transition-colors">{service.title}</h3>
                    <p className="text-[15px] leading-[28px] text-[#6f7174] mb-4">{service.description}</p>
                    <Link to="/contact" className="inline-flex items-center text-charcoal font-semibold text-[14px] hover:text-golden transition-colors group/link">
                      Get Started <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f2f3f6]">
        <div className="container-custom">
          <SectionTitle eyebrow="More Services" title="Additional Capabilities" description="Specialized services to address every aspect of your technology ecosystem." />

          <div className="additional-services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {additionalServices.map((service) => {
              const Icon = additionalIconMap[service.id] || Search;
              return (
                <div key={service.id} className="additional-service-card p-6 bg-white border border-[#e1e2e7] hover:border-golden transition-colors group">
                  <div className="w-14 h-14 bg-golden/15 flex items-center justify-center mb-4 group-hover:bg-golden transition-colors">
                    <Icon className="w-6 h-6 text-charcoal" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{service.title}</h3>
                  <p className="text-[14px] leading-[26px] text-[#6f7174]">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
