import React from 'react';
import { Section } from '../components/Section';
import { Check } from 'lucide-react';
import { SponsorshipTier } from '../types';

const tiers: SponsorshipTier[] = [
  {
    name: 'Silver',
    price: '$75,000',
    spots: '5 Spots',
    features: [
      '3m x 6m Booth Space',
      'Logo on Marketing Materials',
      'Virtual Presence',
      '10 Visitor Passes',
    ]
  },
  {
    name: 'Gold',
    price: '$150,000',
    spots: '3 Spots',
    features: [
      '6m x 6m Pavilion Space',
      'Speaking Slot (1 hr)',
      'Appreciation Token (Gala Dinner)',
      '25 Visitor Passes',
      'Virtual Presence'
    ],
    isPopular: true
  },
  {
    name: 'Platinum',
    price: '$200,000',
    spots: '2 Spots',
    features: [
      '8m x 6m Pavilion Space',
      'Speaking Slot (1 hr)',
      'Press Release Mention',
      'Main Ceremony Mention',
      '35 Visitor Passes'
    ]
  },
  {
    name: 'Diamond',
    price: '$300,000',
    spots: 'Exclusive',
    features: [
      '8m x 8m Pavilion Space',
      'Unrivalled Positioning',
      'Speaking Slot (Main Stage)',
      'Press Release Mention',
      '50 Visitor Passes'
    ]
  }
];

export const Sponsorship: React.FC = () => {
  const getMailtoLink = (tierName: string, price: string) => {
    const subject = encodeURIComponent(`Sponsorship Inquiry: ${tierName} Package`);
    const body = encodeURIComponent(`Hi WBEF Team,\n\nI am interested in the ${tierName} sponsorship package (${price}).\n\nPlease send me more details regarding this opportunity.\n\nBest regards,`);
    return `mailto:info@wbef2026.com?subject=${subject}&body=${body}`;
  };

  const exhibitorMailto = () => {
     const subject = encodeURIComponent(`Exhibitor Inquiry: Standard Exhibitor`);
     const body = encodeURIComponent(`Hi WBEF Team,\n\nI am interested in the Standard Exhibitor booth ($2,000).\n\nPlease send me more details.\n\nBest regards,`);
     return `mailto:info@wbef2026.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dark Hero Section for Header Visibility */}
      <section className="bg-slate-900 relative pt-40 pb-24 px-6 text-center min-h-[50vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900 z-0"></div>
        <Section className="relative z-10">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block">Partnership Opportunities</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Partner With Impact</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Secure your position at the forefront of the Blue Economy transformation. 
            Connect with Ministers, Global Investors, and Industry Leaders.
          </p>
        </Section>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, idx) => (
            <Section 
              key={tier.name} 
              delay={idx * 0.1} 
              className={`relative bg-white rounded-3xl p-8 border flex flex-col transition-all duration-300 ${
                tier.isPopular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-900/10 scale-105 z-10' 
                  : 'border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="pb-6 border-b border-slate-100 mb-6">
                <h3 className="text-lg font-semibold text-slate-500 mb-2 uppercase tracking-wide">{tier.name}</h3>
                <div className="text-3xl font-bold text-slate-900 tracking-tight">{tier.price}</div>
                <div className="text-xs text-blue-600 font-bold mt-2 uppercase tracking-wider">{tier.spots}</div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600 leading-snug">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={getMailtoLink(tier.name, tier.price)}
                className={`w-full py-4 rounded-xl font-bold transition-all text-center inline-block ${
                tier.isPopular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30' 
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
              }`}>
                Inquire Now
              </a>
            </Section>
          ))}
        </div>

        {/* Standard Exhibitor */}
        <Section className="mt-16 bg-white rounded-3xl p-10 border border-slate-200 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Standard Exhibitor Booth</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Perfect for Startups and SMEs focused on maritime solutions. Includes a 3m x 3m shell scheme, table, and chairs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
            <div className="text-3xl font-bold text-slate-900 tracking-tight">$2,000</div>
            <a 
              href={exhibitorMailto()}
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl"
            >
              Book Booth
            </a>
          </div>
        </Section>
      </div>
    </div>
  );
};