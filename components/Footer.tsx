
import React from 'react';
import { Mail, MapPin, Calendar, Clock } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-500 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Brand & Partners Column */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-14 h-14">
               <Logo color="blue" />
             </div>
             <div className="flex flex-col">
               <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Sultan Mizan</span>
               <span className="text-xl font-bold text-slate-900 leading-none">WBEF 2026</span>
             </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed mb-8 text-slate-600">
            Charting waves of sustainable progress and economic resilience. 
            Establishing a cohesive, competitive, and integrated Blue Economy framework 
            for the entire Asia Pacific region.
          </p>
          
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Strategic Partners</span>
            <div className="flex items-center gap-4">
              <span className="font-bold text-slate-800 text-lg tracking-tight">UMT HOLDINGS</span>
              <div className="h-5 w-px bg-slate-300"></div>
              <span className="font-bold text-slate-800 text-lg tracking-tight">SYNAPZE</span>
            </div>
          </div>
        </div>

        {/* Event Details Column */}
        <div className="lg:col-span-4">
          <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Event Details</h4>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-bold text-slate-900">MITEC</p>
                <p className="text-sm text-slate-600">Malaysia International Trade &<br/>Exhibition Centre</p>
                <p className="text-sm text-slate-500 mt-1">Kuala Lumpur, Malaysia</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                <Calendar size={18} />
              </div>
              <div>
                <p className="font-bold text-slate-900">9 - 11 September 2026</p>
                <p className="text-sm text-slate-600">Wednesday - Friday</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-3">
          <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h4>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <p className="font-bold text-slate-900">General Inquiries</p>
              <a href="mailto:info@wbef2026.com" className="text-sm text-blue-600 hover:text-blue-700 transition-colors font-medium">
                info@wbef2026.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-slate-200 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-400">
        <p>© 2026 WBEF. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
