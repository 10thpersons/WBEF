import React from 'react';
import { Section } from '../components/Section';
import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Leaf, Droplet, Zap, Heart, Cpu, Globe, Target, Shield, TrendingUp, Users, Waves } from 'lucide-react';
import { Pillar, Speaker } from '../types';

const pillars: Pillar[] = [
  { id: '1', title: 'Transport & Ports', description: 'Decarbonization, Smart Logistics & Green Shipping Corridors.', iconName: 'Anchor' },
  { id: '2', title: 'Fisheries & Aquaculture', description: 'Food Security, Advanced Systems & Sustainable Stock Management.', iconName: 'Leaf' },
  { id: '3', title: 'Marine Bio-Economy', description: 'Bioprospecting, Pharmaceuticals & Industrial Enzymes.', iconName: 'Droplet' },
  { id: '4', title: 'Ocean Renewable Energy', description: 'Offshore Wind, OTEC, Tidal Energy & Climate Tech.', iconName: 'Zap' },
  { id: '5', title: 'Ocean Health', description: 'Conservation, Waste Management & Ecosystem Restoration.', iconName: 'Heart' },
  { id: '6', title: 'Blue Tech & Solutions', description: 'AI, IoT, Robotics & Satellite Monitoring.', iconName: 'Cpu' },
];

const speakers: Speaker[] = [
  { 
    name: 'Takashi Gojobori', 
    role: 'Distinguished Professor & Acting Director', 
    institution: 'KAUST, Saudi Arabia',
    bio: 'A world-renowned geneticist leading the Computational Bioscience Research Center, focusing on marine genomics and biotechnology.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=500&h=600' 
  },
  { 
    name: 'Michelle Voyer', 
    role: 'Principal Research Fellow', 
    institution: 'ANCORS, University of Wollongong',
    bio: 'A leading social scientist exploring the human dimension of the Blue Economy, focusing on equitable development and social license.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500&h=600' 
  },
  { 
    name: 'Anthony Bellafiore', 
    role: 'Investment Manager', 
    institution: 'Katapult Ocean',
    bio: 'Specializes in identifying and scaling high-potential technologies that address climate change and ocean health while delivering financial returns.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500&h=600' 
  },
];

const getIcon = (name: string) => {
  switch (name) {
    case 'Anchor': return <Anchor className="w-6 h-6" />;
    case 'Leaf': return <Leaf className="w-6 h-6" />;
    case 'Droplet': return <Droplet className="w-6 h-6" />;
    case 'Zap': return <Zap className="w-6 h-6" />;
    case 'Heart': return <Heart className="w-6 h-6" />;
    case 'Cpu': return <Cpu className="w-6 h-6" />;
    default: return <Globe className="w-6 h-6" />;
  }
};

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
            {/* Professional Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-blue-900/10 to-slate-900/90 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&q=80&w=2669" 
              alt="Deep blue ocean waves" 
              className="w-full h-full object-cover animate-pan-slow scale-110"
            />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-10">
          <Section>
            <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase mb-10 backdrop-blur-md shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              9 - 11 September 2026 • Kuala Lumpur
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-[0.9] drop-shadow-2xl">
              Sultan Mizan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">
                World Blue Economy Forum
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-blue-100/90 max-w-3xl mx-auto mb-14 font-light leading-relaxed drop-shadow-md">
              <span className="font-semibold text-white">World Blue Horizon:</span> Charting waves of sustainable progress and economic resilience for the Asia Pacific region.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link 
                to="/participate"
                className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl shadow-blue-900/50"
              >
                Reserve Your Spot <ArrowRight size={20} />
              </Link>
              <Link 
                to="/sponsorship" 
                className="px-10 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Become a Partner
              </Link>
            </div>
          </Section>
        </div>
      </div>

      {/* Intro Context */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Section className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5 sticky top-32">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-600/20 rotate-3">
                <Waves size={32} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">What is the Blue Economy?</h2>
              <p className="text-slate-600 text-xl leading-relaxed">
                According to the World Bank, the Blue Economy is the <span className="text-blue-700 font-semibold">sustainable use of ocean resources</span> for economic growth, improved livelihoods, and jobs while preserving the health of ocean ecosystems.
              </p>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Ocean Assets', val: '$24T+', desc: '7th largest economy in the world.' },
                { title: 'Livelihoods', val: '3B+', desc: 'People depend on marine biodiversity.' },
                { title: 'Climate Buffer', val: '30%', desc: 'Of human-produced CO2 absorbed.' },
                { title: 'Global Trade', val: '80%', desc: 'International goods transported by sea.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.val}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Strategic Mandate */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Section className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Strategic Mandate</div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                Driving Asia's <br/>
                <span className="text-blue-600">Blue Transformation</span>
              </h2>
              <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                <p>
                  The Blue Economy is an underutilized asset, currently contributing <span className="text-slate-900 font-semibold border-b-2 border-blue-200">23% of Malaysia's GDP</span>. 
                  However, its growth is constrained by fragmented policy and talent gaps.
                </p>
                <p>
                  The WBEF 2026 serves as a <strong>Policy and Investment Accelerator</strong> to establish a cohesive, 
                  competitive, and integrated Blue Economy framework for the entire Asia Pacific region.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {['23% GDP Contribution', '12th Malaysia Plan', '500+ Leaders', '6 Focus Zones'].map((stat, i) => (
                 <div key={i} className={`p-8 rounded-2xl ${i === 3 ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} flex flex-col justify-between aspect-square`}>
                    <div className="text-3xl font-bold">{stat.split(' ')[0]}</div>
                    <div className={`text-sm font-medium ${i === 3 ? 'text-slate-400' : 'text-slate-500'}`}>{stat.substring(stat.indexOf(' ') + 1)}</div>
                 </div>
               ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Section className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-1 opacity-20 transition-transform group-hover:rotate-2"></div>
              <div className="relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent z-10 opacity-80"></div>
                <img 
                  src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Maritime vessel" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-10 left-10 right-10 z-20">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">
                    <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed">
                      "A holistic framework to foster a more integrated, competitive, and environmentally conscious Blue Economy."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Why Attend?</h2>
                <p className="text-slate-600">Join the conversation that will define the future of our oceans.</p>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Globe, title: 'Regional Challenges', desc: 'Ocean diplomacy and united fronts.' },
                  { icon: TrendingUp, title: 'Sustainable Financing', desc: 'Scale investments in blue transformation.' },
                  { icon: Zap, title: 'Knowledge Sharing', desc: 'Adopt frontier technologies.' },
                  { icon: Users, title: 'Global Partnerships', desc: 'Exchange ideas with world leaders.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100">
                     <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <item.icon size={22} />
                     </div>
                     <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Thematic Pillars */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6">
          <Section className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">6 Core Thematic Pillars</h2>
            <p className="text-slate-400 text-lg">
              Explore the dedicated zones driving the future of the maritime industry.
            </p>
          </Section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <Section key={pillar.id} delay={idx * 0.1} className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(pillar.iconName)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Section className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-100 pb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Keynote Speakers</h2>
              <p className="text-slate-600 text-lg">World-renowned experts shaping the discourse.</p>
            </div>
            <Link to="/agenda" className="px-6 py-3 bg-slate-50 text-slate-900 rounded-full font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2 mt-6 md:mt-0">
              View Full Agenda <ArrowRight size={18} />
            </Link>
          </Section>

          <div className="grid lg:grid-cols-3 gap-10">
            {speakers.map((speaker, idx) => (
              <Section key={idx} delay={idx * 0.1} className="group cursor-default">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-slate-100 relative shadow-lg">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-0 group-hover:saturate-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                     <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                        "{speaker.bio}"
                     </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{speaker.name}</h3>
                <p className="text-slate-500 font-medium mb-1">{speaker.role}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{speaker.institution}</p>
              </Section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};