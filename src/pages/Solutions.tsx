import { Monitor, Database, Users, Shield, Cloud, BarChart3, MessageSquare, CreditCard } from 'lucide-react';
import { solutions } from '@/data/siteData';
import CTABanner from '@/sections/CTABanner';
import PageHero from '@/components/PageHero';
import EkobyteSectionHeader from '@/components/EkobyteSectionHeader';

const iconMap: Record<string, React.ElementType> = {
  Monitor, Database, Users, Shield, Cloud, BarChart3, MessageSquare, CreditCard,
};

const allProducts = Array.from(
  new Map(solutions.flatMap((s) => s.items).map((item) => [item.name, item])).values(),
);

export default function Solutions() {
  return (
    <div>
      <PageHero
        eyebrow="Our Solutions"
        title="Technology Partner Ecosystem"
        description="We partner with the world's leading technology vendors to deliver best-in-class solutions tailored for African enterprises."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <EkobyteSectionHeader
            eyebrow="Partner Solutions"
            title={
              <>
                Everything Your Business
                <br className="hidden sm:block" />
                {' '}Needs
              </>
            }
            description="One trusted partner for all your technology needs. We deliver integrated solutions across every layer of your stack."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {solutions.map((solution) => {
              const Icon = iconMap[solution.icon] || Monitor;
              return (
                <article
                  key={solution.category}
                  className="group bg-[#f8f6f1] p-7 sm:p-8 border-t-4 border-transparent hover:border-golden transition-colors duration-300"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 bg-golden flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-charcoal" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal pt-3 leading-snug">
                      {solution.category}
                    </h3>
                  </div>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 list-none p-0 m-0">
                    {solution.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-center p-3 sm:p-4 bg-white border border-[#e8ecf1] min-h-[72px] sm:min-h-[80px] hover:border-golden/60 transition-colors"
                      >
                        <img
                          src={item.logo}
                          alt={item.name}
                          title={item.name}
                          draggable="false"
                          loading="lazy"
                          className="max-h-10 sm:max-h-12 w-full max-w-[120px] object-contain"
                        />
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f4f6f9]">
        <div className="container-custom">
          <EkobyteSectionHeader
            eyebrow="Products"
            title="Products We Work With"
            description="Best-in-class software platforms we implement and support."
          />

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 list-none p-0 m-0">
            {allProducts.map((product) => (
              <li
                key={product.name}
                className="flex items-center justify-center p-4 sm:p-5 bg-white border border-[#e8ecf1] min-h-[80px] hover:border-golden transition-colors"
              >
                <img
                  src={product.logo}
                  alt={product.name}
                  title={product.name}
                  draggable="false"
                  loading="lazy"
                  className="max-h-10 sm:max-h-12 w-full max-w-[110px] object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
