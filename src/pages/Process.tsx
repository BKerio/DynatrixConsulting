import { Search, PenTool, Truck, ClipboardCheck, RefreshCw } from 'lucide-react';
import { processSteps } from '@/data/siteData';
import CTABanner from '@/sections/CTABanner';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import AgileMethodologyDiagram from '@/components/AgileMethodologyDiagram';
import ImplementationLifecycle from '@/components/ImplementationLifecycle';

const stepIcons = [Search, PenTool, Truck, ClipboardCheck, RefreshCw];

export default function Process() {
  return (
    <div>
      <PageHero
        eyebrow="Our Process"
        title="How We Deliver Excellence"
        description="Our proven methodology ensures every project is delivered on time, within budget, and exceeding expectations."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            eyebrow="5-Step Process"
            title="Client Engagement Process"
            description="A structured approach that ensures transparency, collaboration, and successful outcomes."
          />

          <div className="process-timeline max-w-4xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index] || Search;
              return (
                <div key={step.number} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 bg-golden flex items-center justify-center">
                      <Icon className="w-7 h-7 text-charcoal" />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px h-16 bg-[#e1e2e7] my-2" />
                    )}
                  </div>
                  <div className="pt-2 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-golden">{step.number}</span>
                      <h3 className="text-xl font-semibold text-charcoal">{step.title}</h3>
                    </div>
                    <p className="text-[15px] leading-[28px] text-[#6f7174]">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#fafafc]">
        <div className="container-custom">
          {/* Title with gold accent block — matches profile slide */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="hidden sm:block w-16 lg:w-24 h-10 lg:h-12 bg-golden flex-shrink-0" aria-hidden="true" />
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#ED7D31] tracking-tight text-center">
              Our Methodology
            </h2>
            <div className="hidden sm:block w-16 lg:w-24 h-10 lg:h-12 bg-golden flex-shrink-0 opacity-0" aria-hidden="true" />
          </div>

          <div className="bg-[#008DA5] border border-[#009cb7] rounded-3xl p-6 sm:p-10 text-center max-w-5xl mx-auto shadow-lg mb-14 sm:mb-16">
            <p className="text-[14px] sm:text-base md:text-[17px] leading-[26px] sm:leading-[32px] text-white/95 font-light max-w-4xl mx-auto">
              Agile development is our default methodology, it takes an iterative and adaptive approach to maximize the value of the solution in development. The methodology helps reduce the number of failures and allows us to scale on those failures. It also means that the customer gets to see the solution regularly and make any suggestions instantaneously as opposed to waiting until the project culminates.
            </p>
          </div>

          {/* Agile circle + Project implementation — restored from profile */}
          <div className="mb-14 sm:mb-16">
            <AgileMethodologyDiagram />
          </div>

          {/* Implementation lifecycle */}
          <div className="bg-white border border-[#e1e2e7] p-5 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <ImplementationLifecycle />
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
