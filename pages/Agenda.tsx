import React, { useState } from 'react';
import { Section } from '../components/Section';
import { AgendaDay } from '../types';
import { Clock } from 'lucide-react';

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
    <div className="pt-20 bg-white min-h-screen">
      <section className="bg-slate-900 py-20 text-center px-6">
        <Section>
          <h1 className="text-4xl font-bold text-white mb-4">Event Programme</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A curated three-day journey through policy, innovation, and investment in the Blue Economy.
          </p>
        </Section>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          {agendaData.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`px-8 py-4 rounded-xl text-left transition-all duration-300 border ${
                activeDay === idx
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300'
              }`}
            >
              <span className="block text-xs font-bold uppercase tracking-wider opacity-80 mb-1">{day.day}</span>
              <span className="block text-lg font-semibold">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Schedule */}
        <div className="space-y-6">
          {agendaData[activeDay].items.map((item, idx) => (
            <Section key={idx} delay={idx * 0.05} className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl hover:bg-slate-50 border border-slate-100 transition-colors">
              <div className="md:w-48 shrink-0 flex items-center gap-2 text-slate-500 font-mono text-sm">
                <Clock size={16} />
                {item.time}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    {item.description && <p className="text-slate-600 text-sm">{item.description}</p>}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide border ${
                    item.type === 'keynote' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                    item.type === 'break' ? 'bg-slate-100 text-slate-600 border-slate-200' :
                    item.type === 'ceremony' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                    'bg-blue-50 text-blue-700 border-blue-200'
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