
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
    role: 'Distinguished Professor & Acting Director (CBRC)', 
    institution: 'KAUST, Saudi Arabia',
    bio: 'A world-renowned geneticist and Distinguished Professor at King Abdullah University of Science and Technology (KAUST). He leads the Computational Bioscience Research Center, focusing on marine genomics and the utilization of marine resources for biotechnology.',
    // Distinguished Asian male professional
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=500&h=600' 
  },
  { 
    name: 'Michelle Voyer', 
    role: 'Principal Research Fellow', 
    institution: 'ANCORS, University of Wollongong, Australia',
    bio: 'A leading social scientist at the Australian National Centre for Ocean Resources and Security (ANCORS). Her work explores the human dimension of the Blue Economy, focusing on equitable development, social license, and the integration of ocean industries with coastal communities.',
    // Professional Asian female academic/researcher
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500&h=600' 
  },
  { 
    name: 'Anthony Bellafiore', 
    role: 'Investment Manager', 
    institution: 'Katapult Ocean',
    bio: 'Investment Manager at Katapult Ocean, a leading venture fund dedicated to ocean impact startups. Anthony specializes in identifying and scaling high-potential technologies that address climate change and ocean health while delivering financial returns.',
    // Young Asian male professional
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
      <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image - Deep Blue Ocean Texture (Abstract/Professional) */}
        <div className="absolute inset-0 z-0">
            {/* Gradient overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-blue-900/20 to-slate-900/90 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&q=80&w=2669" 
              alt="Deep blue ocean waves representing economic resilience" 
              className="w-full h-full object-cover animate-pan-slow"
            />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
          <Section>
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
              9 - 11 September 2026 • Kuala Lumpur
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight drop-shadow-lg">
              Sultan Mizan <br />
              <span className="block mt-2">
                World Blue Economy Forum
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-blue-50 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
              <span className="font-semibold text-white">World Blue Horizon:</span> Charting waves of sustainable progress and economic resilience.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                to="/participate"
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-black/20"
              >
                Reserve Your Spot <ArrowRight size={18} />
              </Link>
              <Link 
                to="/sponsorship" 
                className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Become a Partner
              </Link>
            </div>
          </Section>
        </div>
      </div>

      {/* Intro Context: What is Blue Economy */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <Section className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-500/20">
                <Waves size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What is the Blue Economy?</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                According to the World Bank, the Blue Economy is the <span className="text-blue-700 font-semibold">sustainable use of ocean resources</span> for economic growth, improved livelihoods, and jobs while preserving the health of ocean ecosystems.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Ocean Assets</h4>
                <p className="text-sm text-slate-500">Valued at over $24 trillion, making it the 7th largest economy in the world.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Livelihoods</h4>
                <p className="text-sm text-slate-500">Supports over 3 billion people who depend on marine and coastal biodiversity.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Climate Buffer</h4>
                <p className="text-sm text-slate-500">Oceans absorb 30% of CO2 produced by humans, buffering the impacts of global warming.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Transport</h4>
                <p className="text-sm text-slate-500">Over 80% of international goods are transported by sea.</p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* The Strategic Mandate */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Section className="grid lg:grid-cols-2 gap-20">
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">The Strategic Mandate</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                Driving Asia's Blue Transformation
              </h2>
              <div className="prose prose-lg text-slate-600 leading-relaxed">
                <p className="mb-6">
                  The Blue Economy is an underutilized asset, currently contributing <span className="font-bold text-slate-900">23% of Malaysia's GDP</span>. 
                  However, its growth is constrained by fragmented policy and talent gaps.
                </p>
                <p>
                  The WBEF 2026 serves as a <strong>Policy and Investment Accelerator</strong> to establish a cohesive, 
                  competitive, and integrated Blue Economy framework for the entire Asia Pacific region.
                  We are moving towards a sustainable and regenerative blue economy that protects the ocean while fostering economic growth.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                 <div className="text-4xl font-bold text-blue-600 mb-2">23%</div>
                 <div className="text-sm font-semibold text-slate-900">Contribution to Malaysia's GDP</div>
               </div>
               <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                 <div className="text-4xl font-bold text-blue-600 mb-2">12th</div>
                 <div className="text-sm font-semibold text-slate-900">Malaysia Plan Integration</div>
               </div>
               <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                 <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                 <div className="text-sm font-semibold text-slate-900">Global Leaders & Policymakers</div>
               </div>
               <div className="p-8 bg-slate-900 rounded-2xl text-white shadow-xl shadow-blue-900/20">
                 <div className="text-xl font-bold mb-2">6 Zones</div>
                 <div className="text-sm text-slate-300">Dedicated Thematic Exhibition Areas</div>
               </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <Section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Objectives: Measurable Impact</h2>
            <p className="text-slate-600 max-w-2xl">
              Our mission is to de-risk investments and drive high-level collaboration across nations.
            </p>
          </Section>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Section delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Accelerate Investment</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                De-risk and scale investments into sustainable maritime, energy, and aquaculture projects.
              </p>
            </Section>

            <Section delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Harmonize Policy</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Drive high-level collaboration across nations to finalize regional ocean policy and governance.
              </p>
            </Section>

            <Section delay={0.3} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Future-Proofing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Foster the adoption and transfer of Blue Tech and R&D for next-generation economic resilience.
              </p>
            </Section>

            <Section delay={0.4} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Ocean Diplomacy</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Establish collaborative mechanisms for critical shared issues like marine pollution and resources.
              </p>
            </Section>
          </div>
        </div>
      </section>

      {/* Why WBEF */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Section className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden h-[600px] shadow-2xl group">
              {/* Maritime/Ship Image - Represents Blue Economy and Trade */}
              <img 
                src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=1000" 
                alt="Large vessel navigating the open ocean" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent">
                 <div className="absolute bottom-8 left-8 right-8">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                      <p className="font-medium text-lg text-white leading-relaxed">
                        "A holistic framework to foster a more integrated, competitive, and environmentally conscious Blue Economy."
                      </p>
                   </div>
                 </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Why Attend</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
                Why Sultan Mizan World Blue Economy Forum?
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Globe size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Addressing Shared Regional Challenges</h3>
                      <p className="text-slate-600 leading-relaxed">A platform for careful ocean diplomacy and a united front to address complex challenges like marine litter and encroachment.</p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <TrendingUp size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Attracting Sustainable Financing</h3>
                      <p className="text-slate-600 leading-relaxed">Showcasing key players and innovative financial products to scale investments in blue transformation.</p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Zap size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Enhancing Knowledge Sharing</h3>
                      <p className="text-slate-600 leading-relaxed">Sharing resources and know-how within nations to increase dynamic capabilities and adopt frontier technologies.</p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Users size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Fostering Multi-Stakeholder Partnerships</h3>
                      <p className="text-slate-600 leading-relaxed">A world-class experience for government officials, industry, academia, and NGOs to exchange ideas.</p>
                   </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* Thematic Pillars */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Section className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">6 Core Thematic Pillars</h2>
            <p className="text-slate-400 text-lg">
              Explore the dedicated zones driving the future of the maritime industry.
            </p>
          </Section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <Section key={pillar.id} delay={idx * 0.1} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                  {getIcon(pillar.iconName)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Section className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Distinguished Keynote Speakers</h2>
              <p className="text-slate-600 text-lg">World-renowned experts shaping the discourse on ocean sustainability and economic resilience.</p>
            </div>
            <Link to="/agenda" className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform mt-8 md:mt-0">
              View Full Agenda <ArrowRight size={20} />
            </Link>
          </Section>

          <div className="grid lg:grid-cols-3 gap-8">
            {speakers.map((speaker, idx) => (
              <Section key={idx} delay={idx * 0.1} className="group cursor-default">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-slate-100 relative shadow-lg">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                     <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        "{speaker.bio}"
                     </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{speaker.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{speaker.role}</p>
                <p className="text-slate-500 text-sm uppercase tracking-wider">{speaker.institution}</p>
              </Section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
