import { Lightbulb, Cpu, Cloud, Shield, Database, Code, ArrowRight } from 'lucide-react';
import { services } from '../data/siteData';
import ThemeButton from '@/components/ThemeButton';
import EkobyteSectionHeader from '@/components/EkobyteSectionHeader';
import ServiceCard, { mainServiceTaglines } from '@/components/ServiceCard';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Cpu, Cloud, Shield, Database, Code,
};

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-[#f4f6f9] relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-golden/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-charcoal/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <EkobyteSectionHeader
          eyebrow="Latest service"
          title={
            <>
              Explore Our Best Premium
              <br className="hidden sm:block" />
              {' '}Quality Service
            </>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Lightbulb;
            return (
              <ServiceCard
                key={service.id}
                index={index}
                icon={Icon}
                tagline={mainServiceTaglines[service.id] ?? 'Expert delivery'}
                title={service.title}
                description={service.description}
                href={service.href || '/services'}
              />
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
