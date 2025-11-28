import React, { useState } from 'react';
import { Section } from '../components/Section';
import { AgendaDay } from '../types';

const agendaData: AgendaDay[] = [
  {
    day: 'Day 1',
    date: 'Wednesday, 23 Sept 2026',
    items: [
      { time: '09:00 - 11:30', title: 'Official Opening & Launch Ceremony', type: 'ceremony' },
      { time: '11:30 - 12:30', title: 'VVIP Walkabout & Exhibition Tour', type: 'break' },
      { time: '14:00 - 15:00', title: 'Keynote: The Ocean\'s Socio-Economic Significance', description: 'H.E. Ms Ilana Seid, Permanent Representative of Palau to UN', type: 'keynote' },
      { time: '15:00 - 16:00', title: 'Plenary: Investing for a Regenerative Blue Economy', type: 'plenary' },
      { time: '16:00 - 17:00', title: 'Plenary: Sustainable Ocean Governance Frameworks', type: 'plenary' },
      { time: '19:30 - 22:30', title: 'Award & Recognition Dinner', type: 'ceremony' },
    ]
  },
  {
    day: 'Day 2',
    date: 'Thursday, 24 Sept 2026',
    items: [
      { time: '10:00 - 11:00', title: 'Keynote: Sustainable Blue Food & Biotech', description: 'Cutting-edge marine biotechnology innovations.', type: 'keynote' },
      { time: '11:00 - 12:00', title: 'Interactive: Knowledge-Driven Blue Economy', description: '8i-ecosystem framework deep dive.', type: 'interactive' },
      { time: '14:00 - 15:00', title: 'Plenary: Transforming Maritime Transport', description: 'Decarbonization and Smart Ports.', type: 'plenary' },
      { time: '15:00 - 16:00', title: 'Interactive: Ocean Renewable Energy', description: 'Offshore wind, OTEC, and Carbon Capture.', type: 'interactive' },
      { time: '16:00 - 17:00', title: 'Plenary: Financing the Blue Economy', type: 'plenary' },
    ]
  },
  {
    day: 'Day 3',
    date: 'Friday, 25 Sept 2026',
    items: [
      { time: '10:00 - 11:00', title: 'Keynote: Marine Conservation & Circularity', description: 'Plastic reduction and circular economy principles.', type: 'keynote' },
      { time: '11:00 - 12:00', title: 'Plenary: Coastal Development & Tourism', type: 'plenary' },
      { time: '15:00 - 16:00', title: 'Plenary: Blue Technologies & Innovation', description: 'AI, IoT, and Robotics for cross-sectoral solutions.', type: 'plenary' },
      { time: '16:00 - 17:00', title: 'Closing: A Sustainable Blue Future', type: 'ceremony' },
    ]
  }
];

export const Agenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Tall Dark Hero Section to ensure Header Text Visibility */}
      <section className="bg-slate-900 relative pt-40 pb-24 text-center px-6 min-h-[50vh] flex flex-col justify-center items-center">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        
        <Section className="relative z-10 max-w-4xl mx-auto">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4 block">Schedule & Programming</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Event Programme</h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A curated three-day journey through policy, innovation, and investment in the Blue Economy.
          </p>
        </Section>
      </section>

      <div className="max-w-5xl mx-auto px-6 -mt-16 relative z-20 pb-24">
        {/* Tabs */}
        <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 mb-12 flex flex-col md:flex-row gap-2">
          {agendaData.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`flex-1 py-4 px-6 rounded-xl text-center transition-all duration-300 ${
                activeDay === idx
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="block text-xs font-bold uppercase tracking-wider opacity-70 mb-1">{day.day}</span>
              <span className="block text-lg font-bold">{day.date.split(',')[0]}</span>
              <span className="block text-xs opacity-80 mt-1">{day.date.split(',')[1]}</span>
            </button>
          ))}
        </div>

        {/* Schedule */}
        <div className="space-y-4">
          {agendaData[activeDay].items.map((item, idx) => (
            <Section key={idx} delay={idx * 0.05} className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-center">
                <div className="md:w-32 shrink-0">
                  <div className="text-lg font-bold text-slate-900 font-mono">{item.time.split(' - ')[0]}</div>
                  <div className="text-xs text-slate-400 font-mono mt-1">to {item.time.split(' - ')[1]}</div>
                </div>
                
                <div className="w-px h-12 bg-slate-100 hidden md:block"></div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  {item.description && <p className="text-slate-500 leading-relaxed">{item.description}</p>}
                </div>
                
                <div className="shrink-0">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    item.type === 'keynote' ? 'bg-purple-100 text-purple-700' :
                    item.type === 'break' ? 'bg-slate-100 text-slate-600' :
                    item.type === 'ceremony' ? 'bg-amber-100 text-amber-800' :
                    'bg-blue-50 text-blue-700'
                  }`}>
                    {item.type}
                  </span>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
};