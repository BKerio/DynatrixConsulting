import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { companyInfo, navLinks } from '@/data/siteData';
import logoImg from '@/assets/logo.png';

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
      
      // Determine if scrolled styling applies (capsule mode)
      setScrolled(currentScrollY > 50);
      
      // Smart Hide/Show direction detection
      const lastScrollY = lastScrollYRef.current;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling DOWN & past threshold -> hide navbar (only if mobile drawer is closed)
        if (!isOpen) {
          setVisible(false);
        }
      } else {
        // Scrolling UP -> show navbar
        setVisible(true);
      }
      
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const isActive = (href: string) => location.pathname === href;

  const linkClass = (href: string) =>
    `relative px-1 py-2 text-[14px] font-normal tracking-wide transition-colors duration-200 link-hover-line ${
      isActive(href)
        ? 'text-golden font-semibold'
        : 'text-white/80 hover:text-golden'
    }`;

  return (
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
      {/* Top info bar - Hidden when scrolled to keep capsule clean */}
      <div 
        className={`transition-all duration-500 ease-in-out bg-charcoal border-b border-white/[0.05] overflow-hidden ${
          scrolled 
            ? 'max-h-0 opacity-0' 
            : 'max-h-10 opacity-100'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-[11px] text-[#9a9ba0]">
            <div className="flex items-center gap-6">
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-1.5 hover:text-golden transition-colors">
                <Mail className="w-3 h-3" />
                {companyInfo.email}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                Upperhill, Nairobi
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1.5 hover:text-golden transition-colors">
                <Phone className="w-3 h-3" />
                {companyInfo.phone}
              </a>
              <span className="w-px h-3 bg-white/10" />
              <a href={companyInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-golden transition-colors"><Linkedin className="w-3 h-3" /></a>
              <a href={companyInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-golden transition-colors"><Twitter className="w-3 h-3" /></a>
              <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-golden transition-colors"><Facebook className="w-3 h-3" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <nav
        className={`mx-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? 'max-w-[1200px] rounded-full bg-charcoal/90 backdrop-blur-md border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] px-6 lg:px-10 h-16 lg:h-[76px] flex items-center justify-between'
            : 'max-w-full bg-charcoal/20 backdrop-blur-[1px] border-b border-white/[0.05] px-6 lg:px-12 h-20 lg:h-[90px] flex items-center justify-between'
        }`}
      >
        {/* High-visibility premium white-glass logo badge */}
        <Link to="/" className="flex items-center group relative z-10" aria-label="Dynatrix Home">
          <div className={`relative flex items-center justify-center transition-all duration-500 rounded-xl shadow-md ${
            scrolled 
              ? 'bg-white border border-white py-1 px-3.5 hover:shadow-[0_4px_15px_rgba(254,198,63,0.15)]' 
              : 'bg-white/95 backdrop-blur-sm border border-white/60 py-2 px-4 hover:bg-white hover:border-white shadow-lg'
          }`}>
            <img 
              src={logoImg} 
              draggable="false"
              alt="Dynatrix Logo" 
              className={`object-contain transition-all duration-500 group-hover:scale-[1.02] ${
                scrolled ? 'h-8 lg:h-9' : 'h-11 lg:h-12'
              }`} 
            />
            {/* Ambient gold glow highlight on hover */}
            <span className="absolute inset-0 rounded-xl bg-golden/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.filter(l => l.label !== 'Contact Us').map((link) => (
            <div
              key={link.href + link.label}
              className="relative py-4"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to={link.href} className={`flex items-center gap-1 ${linkClass(link.href)}`}>
                {link.label}
                {link.children && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180 text-golden' : 'text-white/60'}`} />
                )}
              </Link>

              {/* Sub-menu dropdown list */}
              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-charcoal/95 border border-white/10 rounded-xl shadow-[0_15px_45px_rgba(0,0,0,0.5)] backdrop-blur-md py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
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

        {/* Desktop CTA & Mobile Toggle */}
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
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors text-white ${
              scrolled ? 'hover:bg-white/10' : 'hover:bg-white/5'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer panel */}
      <div 
        className={`lg:hidden overflow-hidden bg-charcoal/95 border-b border-white/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div key={location.pathname} className="px-6 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.href + link.label} className="border-b border-white/[0.04] last:border-0 py-1">
              <Link
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-[14px] font-medium transition-colors ${
                  isActive(link.href) ? 'text-golden bg-white/5' : 'text-white/80 hover:text-golden'
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-6 border-l border-white/10 pl-4 mb-2 flex flex-col gap-0.5">
                  {link.children.map((child) => (
                    <Link 
                      key={child.label} 
                      to={child.href} 
                      onClick={() => setIsOpen(false)} 
                      className="block py-2 text-[13px] text-white/60 hover:text-golden transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="mt-4 btn-theme w-full justify-center rounded-full py-3.5 text-center text-sm font-semibold"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
