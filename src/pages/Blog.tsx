import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/siteData';
import CTABanner from '../sections/CTABanner';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.blog-card', { opacity: 0, y: 40, stagger: 0.1, duration: 0.6,
        scrollTrigger: { trigger: '.blog-grid', start: 'top 80%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div ref={sectionRef}>
      <PageHero
        eyebrow="Blog & Insights"
        title="Technology Insights & Updates"
        description="Stay informed with the latest trends, best practices, and insights from our team of technology experts."
      />

      <section className="section-padding bg-[#f2f3f6]">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-[14px] font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-golden text-charcoal'
                    : 'bg-white text-[#6f7174] border border-[#e1e2e7] hover:border-golden'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card news-card group">
                <div className="relative h-52 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative bg-white px-6 pt-10 pb-0 border-x border-[#e1e2e7]">
                  <div className="absolute -top-5 left-6 bg-golden text-charcoal px-4 py-2 text-[12px] font-semibold flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <span className="text-[12px] uppercase tracking-[0.1em] text-golden font-medium">{post.category}</span>
                  <h3 className="text-lg font-semibold text-charcoal mt-2 mb-3 group-hover:text-golden transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-[14px] leading-[26px] text-[#6f7174] line-clamp-3 mb-4">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between bg-[#f2f3f6] px-6 py-4 border border-t-0 border-[#e1e2e7]">
                  <span className="text-[13px] text-[#6f7174]">{post.author}</span>
                  <span className="w-10 h-10 rounded-full bg-golden flex items-center justify-center text-charcoal">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
