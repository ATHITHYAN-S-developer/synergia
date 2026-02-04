
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SYMPOSIUM_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Deadlines', href: '#deadlines' },
    { name: 'Register', href: '#register' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="font-orbitron text-xl font-bold tracking-wider text-white">
              {SYMPOSIUM_NAME}
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200 px-3 py-2 text-xs font-bold uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-500/20 uppercase tracking-widest"
              >
                Register
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-blue-400 block px-3 py-4 text-sm font-bold uppercase tracking-widest border-b border-slate-900 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="w-full bg-blue-600 text-white block px-3 py-4 rounded-xl text-center font-bold mt-6 uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
