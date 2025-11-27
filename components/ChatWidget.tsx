import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, Loader2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';

const EVENT_CONTEXT = `
You are the official AI concierge for the Sultan Mizan World Blue Economy Forum 2026 (WBEF 2026).
Your goal is to assist visitors, exhibitors, and potential sponsors with accurate information about the event.
Keep your answers concise, professional, and helpful. Use a welcoming tone.

Event Overview:
- Name: Sultan Mizan World Blue Economy Forum 2026 (WBEF 2026)
- Tagline: Charting Waves of Sustainable Progress & Economic Resilience
- Date: 9 - 11 September 2026
- Venue: Malaysia International Trade & Exhibition Centre (MITEC), Kuala Lumpur, Malaysia
- Organizers: UMT Holdings and Synapze
- Contribution: The Blue Economy currently contributes 23% to Malaysia's GDP.

Definition of Blue Economy:
"The sustainable use of ocean resources for economic growth, improved livelihoods, and jobs while preserving the health of ocean ecosystems." (World Bank)
- Ocean assets are valued at $24 trillion.
- Supports 3 billion people.
- Absorbs 30% of human-made CO2.

Key Themes & Pillars:
1. Transport & Ports (Decarbonization, Smart Logistics)
2. Fisheries & Aquaculture (Food Security, Sustainable Stock)
3. Marine Bio-Economy (Pharmaceuticals, Bioprospecting)
4. Ocean Renewable Energy (Offshore Wind, OTEC, Climate Tech)
5. Ocean Health (Conservation, Waste Management)
6. Blue Tech & Solutions (AI, IoT, Robotics, Satellite Monitoring)

Speakers:
- Takashi Gojobori (Distinguished Professor, KAUST): Geneticist, Director of CBRC.
- Michelle Voyer (Principal Research Fellow, ANCORS): Social scientist, expert in human dimensions of Blue Economy.
- Anthony Bellafiore (Investment Manager, Katapult Ocean): VC for ocean impact startups.

Agenda Overview:
- Day 1 (23 Sept 2026): Opening Ceremony, VVIP Walkabout, Keynote by H.E. Ms Ilana Seid, Gala Dinner.
- Day 2 (24 Sept 2026): Keynote on Blue Food, Plenary on Maritime Transport, Interactive on Renewable Energy.
- Day 3 (25 Sept 2026): Keynote on Marine Conservation, Plenary on Coastal Development, Closing.

Sponsorship Opportunities:
- Diamond ($300k): 8m x 8m Pavilion, Main Stage Speaking.
- Platinum ($200k): 8m x 6m Pavilion, Speaking Slot.
- Gold ($150k): 6m x 6m Pavilion, Speaking Slot.
- Silver ($75k): 3m x 6m Booth.
- Standard Exhibitor ($2,000): 3m x 3m Shell Scheme.

Contact Info:
- Email: info@wbef2026.com, andrew@synapzemy.com
- Phone: +60 12-515 8185

Guidelines:
- If asked about specific dates for sessions, refer to Day 1 (23rd), Day 2 (24th), or Day 3 (25th) schedule.
- If asked about registration, guide them to the 'Participate' page.
- If you don't know an answer, politely ask them to contact the organizers via email.
`;

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to WBEF 2026! I can help you with agenda details, sponsorship tiers, or information about the Blue Economy. How can I assist you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize Chat Session
  useEffect(() => {
    if (!chatSessionRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: EVENT_CONTEXT,
        },
      });
    }
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSessionRef.current) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessage({ message: userMessage });
      const responseText = result.text;
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I'm having trouble connecting right now. Please try again later or contact support." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-blue-300">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">WBEF AI Assistant</h3>
                  <p className="text-blue-200 text-xs">Powered by Gemini 2.5</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none shadow-md shadow-blue-500/10'
                        : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-blue-600" />
                    <span className="text-xs text-slate-400">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about the agenda, speakers..."
                  className="flex-1 bg-transparent outline-none text-sm text-slate-800 placeholder:text-slate-400"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl z-50 flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-slate-200 text-slate-600 rotate-90' : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
};