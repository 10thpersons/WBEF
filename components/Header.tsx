import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import { NavItem } from '../types';

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
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent text-white'
      }`}
    >
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-900'}`}>
            <Anchor size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-none tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              WBEF <span className="font-light">2026</span>
            </span>
            <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-200'}`}>
              Sultan Mizan World Blue Economy Forum
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
          <NavLink
            to="/participate"
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              isScrolled
                ? 'bg-slate-900 text-white hover:bg-slate-800'
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            Register Interest
          </NavLink>
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
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-xl h-screen">
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
              <NavLink
                to="/participate"
                className="block w-full text-center py-4 bg-blue-600 text-white rounded-xl text-lg font-bold"
              >
                Register Interest
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
