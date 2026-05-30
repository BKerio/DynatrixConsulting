import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../data/siteData';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

export default function BlogPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.news-card', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7,
        scrollTrigger: { trigger: '.blog-grid', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section ref={sectionRef} className="section-padding bg-[#f2f3f6] relative">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <SectionTitle
            align="left"
            eyebrow="From the Blog"
            title="Checkout Latest News Updates & Articles"
            className="mb-0"
          />
          <Link to="/blog" className="btn-theme-outline btn-theme !px-8 !py-3.5 text-sm flex-shrink-0">
            <span className="relative z-10 flex items-center gap-2">View All <ArrowRight className="w-4 h-4" /></span>
          </Link>
        </div>

        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {featuredPosts.map((post) => (
            <article key={post.id} className="news-card group">
              <div className="relative h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative bg-white px-6 pt-10 pb-0 border-x border-[#e1e2e7]">
                <div className="absolute -top-5 left-6 bg-golden text-charcoal px-4 py-2 text-[12px] font-semibold flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                <span className="text-[12px] uppercase tracking-[0.1em] text-golden font-medium">{post.category}</span>
                <h3 className="text-lg font-semibold text-charcoal mt-2 mb-3 group-hover:text-golden transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-[14px] leading-[26px] text-[#6f7174] line-clamp-2 mb-4">{post.excerpt}</p>
              </div>
              <div className="flex items-center justify-between bg-[#f2f3f6] px-6 py-4 border border-t-0 border-[#e1e2e7]">
                <span className="text-[13px] text-[#6f7174]">{post.author}</span>
                <Link to="/blog" className="w-10 h-10 rounded-full bg-golden flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
