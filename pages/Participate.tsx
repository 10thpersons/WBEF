import React from 'react';
import { Section } from '../components/Section';
import { User, Store, Gem, ExternalLink } from 'lucide-react';

export const Participate: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
       {/* Dark Hero Section for Header Visibility */}
       <div className="bg-slate-900 pt-40 pb-32 px-6 text-center min-h-[50vh] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent"></div>
          <Section className="relative z-10">
            <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-8">
              Join the Movement
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Register Your Interest</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Whether you are an industry leader, a solution provider, or a policy maker, 
              WBEF 2026 offers unparalleled opportunities to connect and grow.
            </p>
          </Section>
       </div>

       <div className="max-w-7xl mx-auto px-6 py-12 pb-24 -mt-24 relative z-20">
         
         {/* Main CTA Box */}
         <Section delay={0.1} className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-2xl shadow-blue-900/10 border border-slate-100 text-center mb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600"></div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Ready to Participate?</h2>
            <p className="text-slate-600 mb-12 max-w-lg mx-auto text-lg leading-relaxed">
              Registration is handled via our official secure form. Click below to enter your details as a Visitor, Exhibitor, or Sponsor.
            </p>
            
            <a 
              href="https://forms.gle/Zb1RMDGLJrchM7kEA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-600/30 group"
            >
              Fill Registration Form 
              <ExternalLink size={20} className="opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest">
              Opens in a new tab • Secure Google Form
            </p>
         </Section>

         {/* Categories Grid */}
         <div className="grid md:grid-cols-3 gap-8">
            <Section delay={0.2} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
               <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 mb-6">
                 <User size={28} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">As a Visitor</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-6">
                 Gain access to the exhibition hall, attend plenary sessions, and network with over 500 global delegates.
               </p>
               <ul className="text-sm text-slate-500 space-y-3 font-medium">
                 <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Exhibition Access</li>
                 <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Networking Sessions</li>
               </ul>
            </Section>

            <Section delay={0.3} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
               <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                 <Store size={28} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">As an Exhibitor</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-6">
                 Showcase your innovations in one of our 6 thematic zones. Connect directly with buyers and investors.
               </p>
               <ul className="text-sm text-slate-500 space-y-3 font-medium">
                 <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Brand Visibility</li>
                 <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Business Matching</li>
               </ul>
            </Section>

            <Section delay={0.4} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
               <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                 <Gem size={28} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">As a Sponsor</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-6">
                 Position your organization as a leader in the Blue Economy. Enjoy exclusive speaking slots and VIP access.
               </p>
               <ul className="text-sm text-slate-500 space-y-3 font-medium">
                 <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Thought Leadership</li>
                 <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> VIP Gala Access</li>
               </ul>
            </Section>
         </div>

       </div>
    </div>
  );
};