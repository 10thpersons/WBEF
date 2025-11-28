import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Logo } from './Logo';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Agenda', path: '/agenda' },
  { label: 'Sponsorship', path: '/sponsorship' },
  { label: 'Participate', path: '/participate' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-3'
            : 'bg-gradient-to-b from-black/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Area */}
          <NavLink to="/" className="flex items-center gap-4 group">
            <div className={`relative transition-all duration-300 ${isScrolled ? 'w-14 h-14' : 'w-16 h-16'}`}>
               <Logo color={isScrolled ? 'blue' : 'white'} className="w-full h-full drop-shadow-sm" />
            </div>
            <div className={`flex flex-col border-l pl-4 ${isScrolled ? 'border-slate-300' : 'border-white/40'}`}>
               <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5 ${isScrolled ? 'text-blue-600' : 'text-blue-200'}`}>
                Sultan Mizan
              </span>
              <span className={`font-bold text-lg leading-none tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                WBEF <span className="font-light opacity-90">2026</span>
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? isScrolled ? 'text-blue-600 bg-blue-50' : 'text-white bg-white/20 backdrop-blur-md'
                      : isScrolled
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="ml-4 pl-4 border-l border-slate-200/20">
              <NavLink
                to="/participate"
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20'
                    : 'bg-white text-blue-900 hover:bg-blue-50 shadow-lg shadow-black/10'
                }`}
              >
                Register Interest
              </NavLink>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'text-slate-900 hover:bg-slate-100' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-32 px-6 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-3xl font-bold py-4 border-b border-slate-100 ${
                  isActive ? 'text-blue-600' : 'text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/participate"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 block w-full text-center py-5 bg-blue-600 text-white rounded-2xl text-xl font-bold shadow-xl shadow-blue-600/30"
          >
            Register Interest
          </NavLink>
        </div>
      </div>
    </>
  );
};