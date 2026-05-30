import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { companyInfo, navLinks } from '../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;
  const navSolid = scrolled || !isHome;

  const linkClass = (href: string) =>
    `relative px-1 py-2 text-[15px] font-light tracking-wide transition-colors duration-200 link-hover-line ${
      isActive(href)
        ? 'text-golden font-medium'
        : navSolid
          ? 'text-charcoal hover:text-golden'
          : 'text-white hover:text-golden'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className={`${navSolid ? 'hidden lg:block' : 'hidden lg:block'} bg-charcoal border-b border-white/[0.06]`}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-[12px] text-[#808287]">
            <div className="flex items-center gap-6">
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-golden transition-colors">
                <Mail className="w-3.5 h-3.5" />
                {companyInfo.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                Upperhill, Nairobi
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 hover:text-golden transition-colors">
                <Phone className="w-3.5 h-3.5" />
                {companyInfo.phone}
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a href={companyInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-golden transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
              <a href={companyInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-golden transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
              <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-golden transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-500 ${
          navSolid
            ? 'bg-white/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.06)]'
            : 'bg-charcoal/20 backdrop-blur-[2px]'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-[100px]">
            <Link to="/" className="flex items-center gap-3 group" aria-label="Dynatrix Home">
              <div className={`w-11 h-11 flex items-center justify-center transition-colors ${navSolid ? 'bg-charcoal' : 'bg-golden'}`}>
                <span className={`font-black text-xl ${navSolid ? 'text-golden' : 'text-charcoal'}`}>D</span>
              </div>
              <div>
                <span className={`text-lg font-semibold tracking-tight leading-none block ${navSolid ? 'text-charcoal' : 'text-white'}`}>
                  {companyInfo.shortName}
                </span>
                <span className={`text-[10px] font-medium tracking-[0.15em] uppercase block mt-0.5 ${navSolid ? 'text-golden' : 'text-white/60'}`}>
                  Consulting Ltd
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              {navLinks.filter(l => l.label !== 'Contact Us').map((link) => (
                <div
                  key={link.href + link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={link.href} className={`flex items-center gap-1 ${linkClass(link.href)}`}>
                    {link.label}
                    {link.children && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-[0_10px_60px_rgba(0,0,0,0.12)] border-t-2 border-golden py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-5 py-2.5 text-[14px] text-[#6f7174] hover:text-charcoal hover:bg-[#f8f6f1] transition-colors"
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
                className={`hidden lg:inline-flex btn-theme !px-8 !py-3.5 text-sm ${!navSolid ? 'btn-theme-outline !border-white/40 !text-white hover:!text-white' : ''}`}
              >
                <span className="relative z-10">Get In Touch</span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 ${navSolid ? 'text-charcoal' : 'text-white'}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <div className={`lg:hidden overflow-hidden bg-white transition-all duration-300 ${isOpen ? 'max-h-[80vh] opacity-100 border-t border-[#e1e2e7]' : 'max-h-0 opacity-0'}`}>
          <div key={location.pathname} className="px-6 py-4 flex flex-col">
            {navLinks.map((link) => (
              <div key={link.href + link.label}>
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium ${isActive(link.href) ? 'text-golden bg-[#f8f6f1]' : 'text-charcoal hover:text-golden'}`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-6 border-l border-[#e1e2e7] pl-4 mb-2">
                    {link.children.map((child) => (
                      <Link key={child.label} to={child.href} onClick={() => setIsOpen(false)} className="block py-2 text-sm text-[#6f7174] hover:text-golden">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-3 btn-theme w-full justify-center">
              <span className="relative z-10">Get In Touch</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
