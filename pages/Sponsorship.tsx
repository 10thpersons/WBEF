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
    spots: 'Exclusive (1 Spot)',
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
      <section className="bg-slate-900 pt-32 pb-20 px-6 text-center">
        <Section>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Partner With Impact</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Secure your position at the forefront of the Blue Economy transformation. 
            Connect with Ministers, Global Investors, and Industry Leaders.
          </p>
        </Section>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, idx) => (
            <Section 
              key={tier.name} 
              delay={idx * 0.1} 
              className={`relative bg-white rounded-3xl p-8 border ${
                tier.isPopular ? 'border-blue-500 ring-4 ring-blue-500/10 shadow-xl' : 'border-slate-200 shadow-sm'
              } flex flex-col`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Value
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-slate-900 tracking-tight">{tier.price}</div>
                <div className="text-xs text-slate-500 font-mono mt-2 uppercase">{tier.spots}</div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={getMailtoLink(tier.name, tier.price)}
                className={`w-full py-3 rounded-xl font-semibold transition-colors text-center inline-block ${
                tier.isPopular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                Inquire Now
              </a>
            </Section>
          ))}
        </div>

        {/* Standard Exhibitor */}
        <Section className="mt-12 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Standard Exhibitor</h3>
            <p className="text-slate-600 max-w-xl">
              Perfect for Startups and SMEs focused on maritime solutions. Includes a 3m x 3m shell scheme, table, and chairs.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold text-slate-900">$2,000</div>
            <a 
              href={exhibitorMailto()}
              className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors inline-block text-center"
            >
              Book Booth
            </a>
          </div>
        </Section>
      </div>
    </div>
  );
};