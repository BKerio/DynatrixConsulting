import { Link } from 'react-router-dom';
import { Lightbulb, Cpu, Cloud, Shield, Database, Code, ArrowRight } from 'lucide-react';
import { services } from '../data/siteData';
import ThemeButton from '@/components/ThemeButton';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Cpu, Cloud, Shield, Database, Code,
};

const serviceTaglines: Record<string, string> = {
  'it-consulting': 'Strategic guidance',
  'digital-transformation': 'Driving innovation',
  'cloud-infrastructure': 'Scalable infrastructure',
  'cybersecurity': 'Proactive protection',
  'erp-integration': 'Connected systems',
  'software-development': 'Custom solutions',
};

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-[#f4f6f9] relative overflow-hidden">
      {/* Ekobyte-style soft background shapes */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-golden/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-charcoal/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        {/* Section header — Ekobyte "Latest service" pattern */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-10 sm:w-14 h-px bg-golden" aria-hidden="true" />
            <span className="text-golden text-[13px] sm:text-sm font-semibold uppercase tracking-[0.15em]">
              Latest service
            </span>
            <span className="w-10 sm:w-14 h-px bg-golden" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-charcoal leading-[1.15] tracking-tight">
            Explore Our Best Premium
            <br className="hidden sm:block" />
            {' '}Quality Service
          </h2>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Lightbulb;
            const tagline = serviceTaglines[service.id] ?? 'Expert delivery';

            return (
              <article
                key={service.id}
                className="group relative bg-white rounded-xl border border-[#e8ecf1] p-7 sm:p-8 shadow-[0_4px_24px_rgba(24,25,28,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(24,25,28,0.1)] hover:border-golden/40 overflow-hidden"
              >
                <span
                  className="absolute top-5 right-6 text-5xl sm:text-6xl font-black text-charcoal/[0.04] leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative w-[72px] h-[72px] mb-6">
                  <div
                    className="absolute inset-0 rounded-2xl bg-golden/15 rotate-6 group-hover:rotate-12 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <div className="relative w-full h-full rounded-2xl bg-[#f8f6f1] border border-[#ece9e0] flex items-center justify-center group-hover:bg-golden transition-colors duration-300">
                    <Icon className="w-8 h-8 text-golden group-hover:text-charcoal transition-colors duration-300" strokeWidth={1.75} />
                  </div>
                </div>

                <p className="text-golden text-[13px] font-semibold uppercase tracking-wider mb-2">
                  {tagline}
                </p>
                <h3 className="text-xl font-bold text-charcoal mb-3 leading-snug group-hover:text-golden transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#6f7174] text-[15px] leading-[28px] mb-6 line-clamp-3">
                  {service.description}
                </p>

                <Link
                  to={service.href || '/services'}
                  className="inline-flex items-center gap-2 text-charcoal font-semibold text-[13px] uppercase tracking-wider group/link hover:text-golden transition-colors"
                >
                  read more
                  <span className="w-8 h-8 rounded-full bg-[#f4f6f9] border border-[#e8ecf1] flex items-center justify-center group-hover/link:bg-golden group-hover/link:border-golden transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </article>
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
