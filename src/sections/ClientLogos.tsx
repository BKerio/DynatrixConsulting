import { partners } from '../data/siteData';

import PartnerAWS from '@/assets/Partner/aws.svg';
import PartnerCisco from '@/assets/Partner/cisco.svg';
import PartnerFortinet from '@/assets/Partner/fortinet.svg';
import PartnerHuawei from '@/assets/Partner/huawei.svg';
import PartnerZoho from '@/assets/Partner/zoho.svg';
import PartnerCheckPoint from '@/assets/Partner/checkpoint.svg';
import PartnerForcepoint from '@/assets/Partner/forcepoint.svg';
import PartnerEazzyRent from '@/assets/Partner/eazzyrent.svg';
import PartnerWingubox from '@/assets/Partner/wingubox.svg';
import PartnerXero from '@/assets/Partner/xero.svg';

const logoMap: Record<string, string> = {
  AWS: PartnerAWS,
  Cisco: PartnerCisco,
  Fortinet: PartnerFortinet,
  Huawei: PartnerHuawei,
  Zoho: PartnerZoho,
  'Check Point': PartnerCheckPoint,
  Forcepoint: PartnerForcepoint,
  EazzyRent: PartnerEazzyRent,
  Wingubox: PartnerWingubox,
  Xero: PartnerXero,
};

export default function ClientLogos() {
  const items = [...partners, ...partners];

  return (
    <section className="py-12 bg-white border-y border-[#e1e2e7] overflow-hidden">
      <div className="container-custom mb-8">
        <p className="sec-subtitle text-center">Technology Partners</p>
        <h2 className="sec-title text-center mt-2 text-2xl sm:text-3xl">Our Trusted Partners</h2>
      </div>

      <div className="relative">
        <div className="flex animate-marquee-slow hover:[animation-play-state:paused]">
          {items.map((name, index) => {
            const logo = logoMap[name];
            return (
              <div
                key={`${name}-${index}`}
                className="flex-shrink-0 mx-8 w-[140px] h-[80px] flex items-center justify-center bg-[#f8f6f1] border border-[#e1e2e7] px-4"
              >
                {logo ? (
                  <img src={logo} alt={name} className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
                ) : (
                  <span className="text-[13px] font-semibold text-charcoal/70 text-center uppercase tracking-wide">{name}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
