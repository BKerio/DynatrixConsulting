import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyInfo, stats } from '../data/siteData';
import ThemeButton from '@/components/ThemeButton';

gsap.registerPlugin(ScrollTrigger);

const expertisePoints = [
  'Implementation, training, and support for ERP, cloud, and cybersecurity systems.',
  'Industry-focused solutions customized for healthcare, finance, manufacturing, and more.',
  'Technology partnership for complex business requirements and tailored solutions.',
  'Dedicated team of skilled professionals with extensive product knowledge across diverse industries.',
];

export default function WelcomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.welcome-content > *', {
        opacity: 0, y: 30, stagger: 0.12, duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.from('.welcome-image', {
        opacity: 0, x: 40, duration: 0.8,
        scrollTrigger: { trigger: '.welcome-image', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="welcome-content">
            <p className="sec-subtitle">Welcome</p>
            <h2 className="sec-title mt-2 mb-6">
              {companyInfo.name}
              <span className="block text-2xl sm:text-3xl font-medium text-[#6f7174] mt-2 tracking-normal">
                {companyInfo.description}
              </span>
            </h2>
            <p className="text-[15px] leading-[30px] text-[#6f7174] mb-8">
              {companyInfo.mission}
            </p>

            <ul className="space-y-4 mb-10">
              {expertisePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-golden/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-golden" />
                  </span>
                  <span className="text-[15px] leading-[28px] text-[#6f7174]">{point}</span>
                </li>
              ))}
            </ul>

            <ThemeButton to="/about">
              Discover More <ArrowRight className="w-4 h-4" />
            </ThemeButton>
          </div>

          <div className="welcome-image relative">
            <div className="relative">
              <img src="/about-team.jpg" alt="Dynatrix team" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-charcoal/20" />
            </div>

            {/* Experience box — Softnet style */}
            <div className="absolute -bottom-6 -left-6 bg-charcoal p-1 shadow-[0_10px_60px_rgba(0,0,0,0.15)]">
              <div className="bg-white border-4 border-golden px-8 py-6 text-center min-w-[160px]">
                <div className="text-4xl font-bold text-charcoal">{stats[0].value}{stats[0].suffix}</div>
                <div className="text-[12px] uppercase tracking-[0.1em] text-[#6f7174] mt-1">{stats[0].label}</div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-golden mt-3 font-medium">Since {companyInfo.founded}</div>
              </div>
            </div>

            {/* Skill bar preview */}
            <div className="mt-12 lg:mt-16 space-y-4">
              <div>
                <div className="flex justify-between text-[14px] mb-2">
                  <span className="text-charcoal font-medium">Success Rate</span>
                  <span className="text-golden font-semibold">100%</span>
                </div>
                <div className="h-3.5 bg-[#f2f3f6] rounded-full overflow-hidden">
                  <div className="h-full bg-golden rounded-full w-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[14px] mb-2">
                  <span className="text-charcoal font-medium">Client Retention</span>
                  <span className="text-golden font-semibold">100%</span>
                </div>
                <div className="h-3.5 bg-[#f2f3f6] rounded-full overflow-hidden">
                  <div className="h-full bg-golden rounded-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
