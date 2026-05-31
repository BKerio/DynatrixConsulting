import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { companyInfo, navLinks } from '@/data/siteData';
import logoImg from '@/assets/logo.png';

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={companyInfo.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#9a9ba0] hover:text-golden hover:border-golden/40 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5" />
      </a>
      <a
        href={companyInfo.social.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#9a9ba0] hover:text-golden hover:border-golden/40 transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-3.5 h-3.5" />
      </a>
      <a
        href={companyInfo.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#9a9ba0] hover:text-golden hover:border-golden/40 transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      const lastScrollY = lastScrollYRef.current;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        if (!isOpen) setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  const linkClass = (href: string) =>
    `relative px-1 py-2 text-[14px] font-normal tracking-wide transition-colors duration-200 link-hover-line ${
      isActive(href)
        ? 'text-golden font-semibold'
        : 'text-white/80 hover:text-golden'
    }`;

  const mobileNavLinks = navLinks.filter((l) => l.label !== 'Contact Us');

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
          visible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          scrolled
            ? 'top-4 px-4 sm:px-6 lg:px-8'
            : 'top-0 px-0'
        }`}
      >
        {/* Top info bar */}
        <div
          className={`transition-all duration-500 ease-in-out bg-charcoal overflow-hidden ${
            scrolled ? 'max-h-0 opacity-0 border-b-0' : 'max-h-32 md:max-h-12 opacity-100 border-b border-golden/15'
          }`}
        >
          {/* Mobile */}
          <div className="md:hidden px-3 py-2">
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${companyInfo.email}`}
                className="shrink min-w-0 max-w-[46%] inline-flex items-center gap-1.5 rounded-md bg-white/[0.04] border border-white/[0.06] px-2 py-1.5 hover:border-golden/30 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-golden/15 flex items-center justify-center shrink-0">
                  <Mail className="w-3 h-3 text-golden" />
                </span>
                <span className="text-[10px] text-white/80 truncate leading-tight">{companyInfo.email}</span>
              </a>

              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="flex-1 min-w-0 inline-flex items-center gap-2 rounded-md bg-golden px-2.5 py-1.5 shadow-[0_4px_14px_rgba(254,198,63,0.25)] hover:bg-white transition-colors group"
              >
                <span className="w-6 h-6 rounded-full bg-charcoal/10 flex items-center justify-center shrink-0 group-hover:bg-charcoal/15 transition-colors">
                  <Phone className="w-3 h-3 text-charcoal" />
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block text-[8px] uppercase tracking-[0.12em] text-charcoal/70 font-semibold">
                    Call Us
                  </span>
                  <span className="block text-[10px] font-bold text-charcoal truncate">
                    {companyInfo.phone}
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-2 flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 min-w-0 text-[11px] text-[#9a9ba0]">
                <MapPin className="w-3.5 h-3.5 text-golden shrink-0" />
                <span className="truncate">Upperhill, Nairobi</span>
              </span>
              <SocialLinks />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:block max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-11 text-[12px] text-[#9a9ba0]">
              <div className="flex items-center gap-1">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/[0.04] hover:text-golden transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-golden" />
                  {companyInfo.email}
                </a>
                <span className="w-1 h-1 rounded-full bg-golden/50 mx-1" aria-hidden="true" />
                <span className="inline-flex items-center gap-2 px-3 py-1.5">
                  <MapPin className="w-3.5 h-3.5 text-golden" />
                  Upperhill, Nairobi
                </span>
              </div>

              <div className="flex items-center gap-1">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/[0.04] hover:text-golden transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-golden" />
                  {companyInfo.phone}
                </a>
                <span className="w-px h-4 bg-white/10 mx-2" aria-hidden="true" />
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav
          className={`mx-auto transition-all duration-500 ease-in-out ${
            scrolled
              ? 'max-w-[1200px] rounded-full bg-charcoal/90 backdrop-blur-md border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] px-6 lg:px-10 h-16 lg:h-[76px] flex items-center justify-between'
              : 'max-w-full bg-charcoal/20 backdrop-blur-[1px] border-b border-white/[0.05] px-6 lg:px-12 h-20 lg:h-[90px] flex items-center justify-between'
          }`}
        >
          <Link to="/" className="flex items-center group relative z-10" aria-label="Dynatrix Home">
            <div
              className={`relative flex items-center justify-center transition-all duration-500 rounded-xl shadow-md ${
                scrolled
                  ? 'bg-white border border-white py-1 px-3.5 hover:shadow-[0_4px_15px_rgba(254,198,63,0.15)]'
                  : 'bg-white/95 backdrop-blur-sm border border-white/60 py-2 px-4 hover:bg-white hover:border-white shadow-lg'
              }`}
            >
              <img
                src={logoImg}
                draggable="false"
                alt="Dynatrix Logo"
                className={`object-contain transition-all duration-500 group-hover:scale-[1.02] ${
                  scrolled ? 'h-8 lg:h-9' : 'h-11 lg:h-12'
                }`}
              />
              <span className="absolute inset-0 rounded-xl bg-golden/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.filter((l) => l.label !== 'Contact Us').map((link) => (
              <div
                key={link.href + link.label}
                className="relative py-4"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={link.href} className={`flex items-center gap-1 ${linkClass(link.href)}`}>
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeDropdown === link.label ? 'rotate-180 text-golden' : 'text-white/60'
                      }`}
                    />
                  )}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-charcoal/95 border border-white/10 rounded-xl shadow-[0_15px_45px_rgba(0,0,0,0.5)] backdrop-blur-md py-2 overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-5 py-3 text-[13px] text-white/80 hover:text-golden hover:bg-white/5 transition-all duration-150"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className={`hidden lg:inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-500 rounded-full ${
                scrolled
                  ? 'bg-golden text-charcoal hover:bg-white hover:text-charcoal px-5 py-2 text-xs lg:text-[13px] shadow-[0_4px_20px_rgba(254,198,63,0.25)]'
                  : 'bg-transparent border border-white/20 text-white hover:bg-golden hover:text-charcoal hover:border-golden px-6 py-2.5 text-xs lg:text-[14px]'
              }`}
            >
              Get In Touch
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className={`lg:hidden p-2.5 rounded-full transition-colors text-white ${
                scrolled ? 'hover:bg-white/10' : 'hover:bg-white/5'
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile fullscreen menu — reference-style overlay */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden bg-charcoal transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-end px-6 pt-6 pb-2">
            <button
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-golden hover:border-golden/40 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center px-8 pb-12 -mt-6">
            <ul className="flex flex-col items-center gap-7 sm:gap-8 w-full max-w-xs">
              {mobileNavLinks.map((link) => (
                <li key={link.href + link.label} className="w-full text-center">
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-[15px] sm:text-base uppercase tracking-[0.22em] font-medium transition-colors duration-200 ${
                      isActive(link.href) ? 'text-golden' : 'text-white hover:text-golden'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-12 sm:mt-14 inline-flex items-center justify-center rounded-full bg-golden text-charcoal px-10 py-4 text-[13px] sm:text-sm font-bold uppercase tracking-[0.18em] shadow-[0_8px_30px_rgba(254,198,63,0.35)] hover:bg-white transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </nav>

          <div className="px-6 pb-8 pt-4 border-t border-white/[0.06]">
            <div className="flex flex-col items-center gap-3 text-center">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="text-[13px] text-white/70 hover:text-golden transition-colors"
              >
                {companyInfo.phone}
              </a>
              <SocialLinks className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
