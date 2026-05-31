import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { stats } from '@/data/siteData';

const slides = [
  {
    title: 'Empowering Your Digital Journey',
    subtitle: 'Innovative, secure, and scalable ERP solutions that drive growth and transform businesses across East Africa.',
    cta: 'Discover More',
    ctaHref: '/solutions',
    image: '/hero-fold.jpg',
  },
  {
    title: 'Shaping the Perfect Solution for You',
    subtitle: 'Expert consultants designing tailored IT strategies that align with your unique business goals.',
    cta: 'Our Services',
    ctaHref: '/services',
    image: '/service-consulting.jpg',
  },
  {
    title: 'Meet the Experts Behind Your Success',
    subtitle: 'Seasoned professionals with deep expertise in ERP, cloud, cybersecurity, and digital transformation.',
    cta: 'Meet Our Team',
    ctaHref: '/about',
    image: '/service-digital.jpg',
  },
];

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (transitioning || index === activeSlide) return;
    setTransitioning(true);
    setActiveSlide(index);
    setTimeout(() => setTransitioning(false), 800);
  }, [activeSlide, transitioning]);

  const nextSlide = useCallback(() => goToSlide((activeSlide + 1) % slides.length), [activeSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide((activeSlide - 1 + slides.length) % slides.length), [activeSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-animate', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.3 });
    }, contentRef);
    return () => ctx.revert();
  }, [activeSlide]);

  const slide = slides[activeSlide];

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[800ms]"
          style={{ opacity: i === activeSlide ? 1 : 0, zIndex: i === activeSlide ? 1 : 0 }}
        >
          <img src={s.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
      ))}

      <div ref={contentRef} className="relative z-[4] flex flex-col justify-center flex-1 min-h-screen pt-[140px]">
        <div className="container-custom w-full pb-16">
          <div className="max-w-3xl">
            <h1 key={activeSlide} className="hero-animate text-4xl sm:text-5xl lg:text-[50px] font-semibold text-white leading-[1.3] tracking-tight mb-6">
              {slide.title}
            </h1>
            <p key={`sub-${activeSlide}`} className="hero-animate text-[15px] sm:text-lg text-white/75 max-w-xl mb-10 leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="hero-animate">
              <Link to={slide.ctaHref} className="btn-theme inline-flex">
                <span className="relative z-10 flex items-center gap-2">
                  {slide.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel controls — Softnet style white circles */}
        <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-[5] hidden lg:flex flex-col gap-3">
          <button onClick={prevSlide} className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-colors shadow-lg" aria-label="Previous slide">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextSlide} className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-colors shadow-lg" aria-label="Next slide">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom stats bar */}
        <div className="relative z-[4] border-t border-white/10 bg-charcoal/40 backdrop-blur-sm">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-stretch">
              {stats.slice(0, 4).map((stat, i) => (
                <div key={stat.label} className={`flex-1 py-6 px-6 ${i !== 0 ? 'border-l border-white/10' : ''}`}>
                  <div className="text-2xl font-bold text-golden">{stat.value}{stat.suffix}</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-[0.1em] mt-1">{stat.label}</div>
                </div>
              ))}
              <div className="flex items-center justify-center gap-2 py-6 px-6 border-l border-white/10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`transition-all duration-300 rounded-full ${i === activeSlide ? 'bg-golden w-8 h-2' : 'bg-white/30 w-2 h-2 hover:bg-white/60'}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
