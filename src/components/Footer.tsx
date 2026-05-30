import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { companyInfo, navLinks } from '@/data/siteData';

export default function Footer() {
  const exploreLinks = navLinks.filter(l =>
    ['About Us', 'Services', 'Blog', 'Contact Us'].includes(l.label)
  );

  return (
    <footer>
      {/* Upper band */}
      <div className="bg-[#151518] border-b border-white/[0.06]">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex items-center justify-center text-golden group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.1em] text-[#7f7f7f]">Call Anytime</p>
                <p className="font-medium text-white text-[15px]">{companyInfo.phone}</p>
              </div>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 flex items-center justify-center text-golden">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.1em] text-[#7f7f7f]">Send Email</p>
                <p className="font-medium text-white text-[15px]">{companyInfo.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center text-golden flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.1em] text-[#7f7f7f]">Visit Us</p>
                <p className="font-medium text-white text-[14px] leading-snug">{companyInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-charcoal text-white">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-golden flex items-center justify-center">
                  <span className="text-charcoal font-black text-lg">D</span>
                </div>
                <div>
                  <span className="text-xl font-semibold text-white block">Dynatrix</span>
                  <span className="text-[10px] text-golden font-medium tracking-[0.15em] uppercase">Consulting Ltd</span>
                </div>
              </Link>
              <p className="text-[#75767a] text-[15px] leading-[28px] mb-6">
                {companyInfo.description}. Supporting organizations across Africa with innovative, secure, and scalable technology solutions since {companyInfo.founded}.
              </p>
              <div className="flex items-center gap-3">
                {[Linkedin, Twitter, Facebook].map((Icon, i) => {
                  const href = [companyInfo.social.linkedin, companyInfo.social.twitter, companyInfo.social.facebook][i];
                  return (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#75767a] hover:text-golden hover:border-golden transition-colors">
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-white/10">Explore</h3>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-[#75767a] hover:text-white text-[15px] link-hover-line transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li><Link to="/solutions" className="text-[#75767a] hover:text-white text-[15px] link-hover-line">Solutions</Link></li>
                <li><Link to="/clients" className="text-[#75767a] hover:text-white text-[15px] link-hover-line">Clients</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-white/10">Our Services</h3>
              <ul className="space-y-3">
                {['IT Consulting & Strategy', 'Digital Transformation', 'Cloud & Infrastructure', 'Cybersecurity Solutions', 'ERP & Systems Integration', 'Software Development'].map((s) => (
                  <li key={s}>
                    <Link to="/services" className="text-[#75767a] hover:text-white text-[15px] link-hover-line">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-white/10">Business Hours</h3>
              <div className="space-y-2 text-[15px] text-[#75767a] mb-8">
                <p>{companyInfo.hours.weekday}</p>
                <p>{companyInfo.hours.saturday}</p>
                <p>{companyInfo.hours.sunday}</p>
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <p className="text-[14px] text-[#75767a] mb-4">Subscribe for latest tech insights and updates from Dynatrix.</p>
              <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 bg-white text-charcoal text-[15px] focus:outline-none focus:ring-2 focus:ring-golden"
                />
                <button type="submit" className="btn-theme w-full justify-center">
                  <span className="relative z-10 flex items-center gap-2">Subscribe <ArrowRight className="w-4 h-4" /></span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-[#75767a]">
              <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link to="#" className="hover:text-golden link-hover-line transition-colors">Privacy Policy</Link>
                <Link to="#" className="hover:text-golden link-hover-line transition-colors">Terms of Use</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
