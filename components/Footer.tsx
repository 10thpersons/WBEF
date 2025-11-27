import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-500 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-slate-900 font-bold text-xl mb-4">WBEF 2026</h3>
          <p className="max-w-md text-sm leading-relaxed mb-6">
            Charting waves of sustainable progress and economic resilience. 
            Establishing a cohesive, competitive, and integrated Blue Economy framework 
            for the entire Asia Pacific region.
          </p>
          <div className="flex items-center gap-4">
            {/* Logos derived from text in PDF */}
            <div className="h-10 w-auto font-bold text-slate-900 flex items-center">UMT HOLDINGS</div>
            <div className="h-6 w-px bg-slate-300"></div>
            <div className="h-10 w-auto font-bold text-slate-900 flex items-center">SYNAPZE</div>
          </div>
        </div>

        <div>
          <h4 className="text-slate-900 font-semibold mb-4">Event Details</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>
                MITEC, Kuala Lumpur<br />
                Malaysia
              </span>
            </li>
            <li>9 - 11 September 2026</li>
            <li>Wed - Fri</li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:info@wbef2026.com" className="hover:text-blue-600 transition-colors">info@wbef2026.com</a>
            </li>
             <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:andrew@synapzemy.com" className="hover:text-blue-600 transition-colors">andrew@synapzemy.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>+60 12-515 8185</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-slate-200 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 Synapze & UMT. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-900">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
