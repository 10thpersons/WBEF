
import React from 'react';
import { Section } from '../components/Section';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

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
                    <p className="text-slate-500">info@wbef2026.com</p>
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

         {/* Right: CTA to Google Form */}
         <div className="p-12 lg:p-24 flex flex-col justify-center items-center text-center">
           <Section delay={0.2} className="max-w-md mx-auto w-full">
             <div className="mb-8">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Express Your Interest</h2>
               <p className="text-slate-600">
                 Registration for the Sultan Mizan World Blue Economy Forum 2026 is now open for expressions of interest. 
                 Please fill out our official form to secure your place as a visitor, exhibitor, or sponsor.
               </p>
             </div>
             
             <a 
               href="https://forms.gle/Zb1RMDGLJrchM7kEA" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
             >
               <span>Go to Registration Form</span>
               <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
             </a>
             <p className="text-xs text-slate-400 mt-6">
               You will be redirected to our secure Google Form page.
             </p>
           </Section>
         </div>
       </div>
    </div>
  );
};
