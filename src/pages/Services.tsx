import { Link } from 'react-router-dom';
import {
  Lightbulb, Cpu, Cloud, Shield, Database, Code,
  BarChart3, GraduationCap, FolderKanban, Users, Calculator, FileCheck, Search,
  ArrowRight, CheckCircle2,
} from 'lucide-react';
import { services, additionalServices } from '../data/siteData';
import CTABanner from '../sections/CTABanner';
import PageHero from '@/components/PageHero';
import EkobyteSectionHeader from '@/components/EkobyteSectionHeader';
import ServiceCard, { mainServiceTaglines, additionalServiceTaglines } from '@/components/ServiceCard';
import ThemeButton from '@/components/ThemeButton';

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

const highlights = [
  'End-to-end delivery from strategy through implementation',
  'Proven expertise across African enterprise environments',
  'Flexible engagement models tailored to your scale',
];

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Technology Solutions"
        description="From strategy to implementation, we offer end-to-end IT services designed to transform your business and drive sustainable growth across Africa."
      />

      <section className="section-padding bg-[#f4f6f9] relative overflow-hidden">
        <div className="absolute top-10 right-0 w-80 h-80 bg-golden/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-charcoal/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <EkobyteSectionHeader
            eyebrow="Core Services"
            title={
              <>
                Solutions That Drive
                <br className="hidden sm:block" />
                {' '}Real Results
              </>
            }
            description="Our core services address the most critical technology needs of modern African enterprises."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = mainIconMap[service.icon] || Lightbulb;
              return (
                <ServiceCard
                  key={service.id}
                  index={index}
                  icon={Icon}
                  tagline={mainServiceTaglines[service.id] ?? 'Expert delivery'}
                  title={service.title}
                  description={service.description}
                  href="/contact"
                  linkLabel="Get started"
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center mb-14 sm:mb-16">
            <div>
              <p className="sec-subtitle">Why work with us</p>
              <h2 className="sec-title mt-2">
                Technology partners built for African growth
              </h2>
              <p className="mt-4 text-[15px] leading-[30px] text-[#6f7174]">
                We combine strategic advisory, implementation depth, and ongoing support so your
                organization can modernize with confidence — not just deploy tools.
              </p>
              <ul className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-charcoal">
                    <CheckCircle2 className="w-5 h-5 text-golden shrink-0 mt-0.5" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ThemeButton to="/contact" variant="dark">
                  Request a consultation <ArrowRight className="w-4 h-4" />
                </ThemeButton>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {services.slice(0, 4).map((service) => {
                const Icon = mainIconMap[service.icon] || Lightbulb;
                return (
                  <div
                    key={service.id}
                    className="p-5 sm:p-6 rounded-xl bg-[#f4f6f9] border border-[#e8ecf1] hover:border-golden/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-golden/15 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-golden" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-bold text-charcoal text-sm sm:text-base leading-snug">
                      {service.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f4f6f9] relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-golden/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <EkobyteSectionHeader
            eyebrow="More Services"
            title={
              <>
                Additional Capabilities
                <br className="hidden sm:block" />
                {' '}For Your Ecosystem
              </>
            }
            description="Specialized services to address every aspect of your technology and operations landscape."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {additionalServices.map((service, index) => {
              const Icon = additionalIconMap[service.id] || Search;
              return (
                <ServiceCard
                  key={service.id}
                  index={index}
                  icon={Icon}
                  tagline={additionalServiceTaglines[service.id] ?? 'Specialist support'}
                  title={service.title}
                  description={service.description}
                  href="/contact"
                  linkLabel="Learn more"
                />
              );
            })}
          </div>

          <p className="text-center mt-12 text-[15px] text-[#6f7174]">
            Need something not listed here?{' '}
            <Link to="/contact" className="font-semibold text-charcoal hover:text-golden transition-colors">
              Talk to our team
            </Link>
          </p>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
