
import React from 'react';
import { Section } from '../components/Section';
import { ArrowRight, User, Store, Gem, ExternalLink } from 'lucide-react';

export const Participate: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
       <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <Section>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
              Join the Movement
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Register Your Interest</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Whether you are an industry leader, a solution provider, or a policy maker, 
              WBEF 2026 offers unparalleled opportunities to connect and grow.
            </p>
          </Section>
       </div>

       <div className="max-w-7xl mx-auto px-6 pb-24">
         
         {/* Main CTA Box */}
         <Section delay={0.1} className="max-w-3xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-xl shadow-blue-900/5 border border-slate-100 text-center mb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800"></div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Participate?</h2>
            <p className="text-slate-600 mb-10 max-w-lg mx-auto text-lg">
              Registration is handled via our official secure form. Click below to enter your details as a Visitor, Exhibitor, or Sponsor.
            </p>
            
            <a 
              href="https://forms.gle/Zb1RMDGLJrchM7kEA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20 group"
            >
              Fill Registration Form 
              <ExternalLink size={20} className="opacity-80 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="mt-6 text-xs text-slate-400">
              Opens in a new tab • Google Forms
            </p>
         </Section>

         {/* Categories */}
         <div className="grid md:grid-cols-3 gap-8">
            <Section delay={0.2} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-6">
                 <User size={24} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">As a Visitor</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-6">
                 Gain access to the exhibition hall, attend plenary sessions, and network with over 500 global delegates.
               </p>
               <ul className="text-sm text-slate-500 space-y-2">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Exhibition Access</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Networking Sessions</li>
               </ul>
            </Section>

            <Section delay={0.3} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                 <Store size={24} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">As an Exhibitor</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-6">
                 Showcase your innovations in one of our 6 thematic zones. Connect directly with buyers and investors.
               </p>
               <ul className="text-sm text-slate-500 space-y-2">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Brand Visibility</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Business Matching</li>
               </ul>
            </Section>

            <Section delay={0.4} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                 <Gem size={24} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">As a Sponsor</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-6">
                 Position your organization as a leader in the Blue Economy. Enjoy exclusive speaking slots and VIP access.
               </p>
               <ul className="text-sm text-slate-500 space-y-2">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Thought Leadership</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> VIP Gala Access</li>
               </ul>
            </Section>
         </div>

       </div>
    </div>
  );
};
