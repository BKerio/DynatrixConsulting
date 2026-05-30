import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, PenTool, Truck, ClipboardCheck, RefreshCw, Users, CheckCircle } from 'lucide-react';
import { processSteps, agilePhases } from '@/data/siteData';
import CTABanner from '@/sections/CTABanner';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const stepIcons = [Search, PenTool, Truck, ClipboardCheck, RefreshCw];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.process-step', { opacity: 0, x: -30, stagger: 0.15, duration: 0.7,
        scrollTrigger: { trigger: '.process-timeline', start: 'top 80%' }});
      gsap.from('.agile-card', { opacity: 0, y: 30, stagger: 0.1, duration: 0.6,
        scrollTrigger: { trigger: '.agile-grid', start: 'top 80%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <PageHero
        eyebrow="Our Process"
        title="How We Deliver Excellence"
        description="Our proven methodology ensures every project is delivered on time, within budget, and exceeding expectations."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle eyebrow="5-Step Process" title="Client Engagement Process" description="A structured approach that ensures transparency, collaboration, and successful outcomes." />

          <div className="process-timeline max-w-4xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index] || Search;
              return (
                <div key={step.number} className="process-step flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 bg-golden flex items-center justify-center">
                      <Icon className="w-7 h-7 text-charcoal" />
                    </div>
                    {index < processSteps.length - 1 && <div className="w-px h-16 bg-[#e1e2e7] my-2" />}
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

      <section className="section-padding bg-[#f2f3f6]">
        <div className="container-custom">
          <SectionTitle eyebrow="Methodology" title="Agile Development Approach" description="Iterative development with continuous validation and steering committee oversight." />

          <div className="agile-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-12">
            {agilePhases.map((phase, index) => (
              <div key={phase.name} className="agile-card bg-white p-6 border border-[#e1e2e7] hover:border-golden transition-colors">
                <div className="w-12 h-12 bg-golden/15 flex items-center justify-center mb-4">
                  <span className="text-golden font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{phase.name}</h3>
                <p className="text-[14px] text-[#6f7174]">{phase.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 border border-[#e1e2e7]">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: 'Customer Validation', desc: 'Continuous feedback loops with end-users throughout development' },
                { icon: CheckCircle, title: 'Steering Committee', desc: 'Regular governance reviews to ensure alignment with business goals' },
                { icon: RefreshCw, title: 'Go Live!', desc: 'Phased deployment with comprehensive training and support' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-golden/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">{title}</h4>
                    <p className="text-[14px] text-[#6f7174]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
