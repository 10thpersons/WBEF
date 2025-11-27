import React from 'react';
import { Section } from '../components/Section';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Participate: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
       <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
         {/* Left: Contact Info */}
         <div className="bg-slate-50 p-12 lg:p-24 flex flex-col justify-center">
            <Section>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4 block">Get Involved</span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Join the Blue Economy Revolution</h1>
              <p className="text-lg text-slate-600 mb-12 max-w-md">
                Whether you are an investor, a policy maker, or a technology provider, WBEF 2026 is the platform to define your industry's future.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600">
                    <Mail />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email Us</h3>
                    <p className="text-slate-500">andrew@synapzemy.com</p>
                    <p className="text-slate-500">info@wbef2026.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600">
                    <Phone />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Call Us</h3>
                    <p className="text-slate-500">+60 12-515 8185</p>
                    <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9am - 6pm MST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Venue</h3>
                    <p className="text-slate-500">MITEC (Malaysia International Trade & Exhibition Centre)</p>
                    <p className="text-slate-500">Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </div>
            </Section>
         </div>

         {/* Right: Form */}
         <div className="p-12 lg:p-24 flex flex-col justify-center">
           <Section delay={0.2} className="max-w-md mx-auto w-full">
             <h2 className="text-2xl font-bold text-slate-900 mb-6">Express Your Interest</h2>
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                   <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Jane" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                   <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Doe" />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                 <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="jane@company.com" />
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
                 <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Company Name" />
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Interest Type</label>
                 <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
                   <option>Visitor</option>
                   <option>Exhibitor</option>
                   <option>Sponsor</option>
                   <option>Media</option>
                 </select>
               </div>

               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                 <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Tell us more about your interest..."></textarea>
               </div>

               <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                 Submit Interest
               </button>
             </form>
           </Section>
         </div>
       </div>
    </div>
  );
};
