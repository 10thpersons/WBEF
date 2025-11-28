
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2'
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative w-16 h-16 md:w-20 md:h-20 transition-all duration-300">
             <Logo color={isScrolled ? 'blue' : 'white'} className="w-full h-full drop-shadow-sm" />
          </div>
          <div className={`flex flex-col border-l pl-3 ${isScrolled ? 'border-slate-300' : 'border-white/30'}`}>
             <span className={`text-[10px] font-bold uppercase tracking-widest ${isScrolled ? 'text-blue-600' : 'text-blue-200'}`}>
              Sultan Mizan
            </span>
            <span className={`font-bold text-lg leading-none tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              WBEF <span className="font-light">2026</span>
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:opacity-70 ${
                  isActive
                    ? 'opacity-100'
                    : isScrolled
                    ? 'text-slate-600'
                    : 'text-slate-200'
                } ${isScrolled && isActive ? 'text-blue-600' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://forms.gle/Zb1RMDGLJrchM7kEA"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              isScrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'
                : 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg shadow-white/10'
            }`}
          >
            Register Interest
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 right-0 bg-white border-b border-slate-200 shadow-xl h-screen">
          <div className="flex flex-col p-6 gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-2xl font-semibold ${
                    isActive ? 'text-blue-600' : 'text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-6 border-t border-slate-100">
              <a
                href="https://forms.gle/Zb1RMDGLJrchM7kEA"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 bg-blue-600 text-white rounded-xl text-lg font-bold"
              >
                Register Interest
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
