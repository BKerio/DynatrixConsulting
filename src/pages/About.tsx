import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Heart, Zap, Star, Users, Target, Eye } from 'lucide-react';
import { coreValues, companyInfo } from '@/data/siteData';
import CTABanner from '@/sections/CTABanner';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Award, Heart, Zap, Star, Users,
};

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.mission-card', { opacity: 0, y: 40, stagger: 0.15, duration: 0.7,
        scrollTrigger: { trigger: '.mission-grid', start: 'top 80%' }});
      gsap.from('.values-card', { opacity: 0, y: 40, stagger: 0.1, duration: 0.6,
        scrollTrigger: { trigger: '.values-grid', start: 'top 80%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <PageHero
        eyebrow="About Us"
        title="Architects of Your Digital Future"
        description={`Since ${companyInfo.founded}, ${companyInfo.name} has been at the forefront of IT consulting and digital transformation across Africa.`}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mission-grid grid md:grid-cols-2 gap-[30px]">
            <div className="mission-card bg-golden p-8 sm:p-10 text-charcoal">
              <Target className="w-10 h-10 mb-6" />
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-[15px] leading-[28px] opacity-90">{companyInfo.mission}</p>
            </div>
            <div className="mission-card bg-charcoal p-8 sm:p-10 text-white">
              <Eye className="w-10 h-10 mb-6 text-golden" />
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-[15px] leading-[28px] text-white/75">{companyInfo.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8f6f1]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle align="left" eyebrow="Who We Are" title="Deep African Market Expertise" className="mb-8" />
              <div className="space-y-4 text-[15px] leading-[30px] text-[#6f7174]">
                <p>
                  {companyInfo.name} is a leading IT consulting, digital transformation, and technology solutions partner based in Nairobi, Kenya. Operating since {companyInfo.founded}, we support organizations across Africa with scalable, future-ready technology.
                </p>
                <p>
                  Our team brings deep expertise across Microsoft technologies, cloud infrastructure, cybersecurity, ERP systems, and custom software development — designing solutions that work within local African contexts.
                </p>
                <p>
                  From SACCOs and hospitals to government agencies and manufacturing companies, we have partnered with diverse organizations to deliver transformative results. Our 100% client retention rate speaks to the quality and reliability of our services.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-5 border border-[#e1e2e7]">
                  <div className="text-3xl font-bold text-golden">5+</div>
                  <div className="text-[14px] text-[#6f7174] mt-1">Years of Excellence</div>
                </div>
                <div className="bg-white p-5 border border-[#e1e2e7]">
                  <div className="text-3xl font-bold text-charcoal">30+</div>
                  <div className="text-[14px] text-[#6f7174] mt-1">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/about-team.jpg" alt="Dynatrix team" className="shadow-[0_10px_60px_rgba(0,0,0,0.12)]" />
              <div className="absolute -bottom-6 -left-6 bg-white p-5 border-4 border-golden shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-golden" />
                  <div>
                    <div className="font-semibold text-charcoal">Certified Team</div>
                    <div className="text-[12px] text-[#6f7174]">Microsoft, Cisco, AWS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle eyebrow="Our Principles" title="Core Values" description="The principles that guide every decision we make and every solution we deliver." />
          <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {coreValues.map((value) => {
              const Icon = iconMap[value.icon] || Award;
              return (
                <div key={value.title} className="values-card p-8 bg-[#f2f3f6] text-center group hover:bg-charcoal transition-colors duration-300">
                  <div className="why-icon-circle mx-auto mb-5 group-hover:bg-golden">
                    <Icon className="w-7 h-7 text-golden group-hover:text-charcoal" />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal group-hover:text-white mb-2 transition-colors">{value.title}</h3>
                  <p className="text-[14px] leading-[26px] text-[#6f7174] group-hover:text-white/70 transition-colors">{value.description}</p>
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
