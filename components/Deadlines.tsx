
import React from 'react';
import { Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { DATES } from '../constants';

const Deadlines: React.FC = () => {
  return (
    <section id="deadlines" className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute -right-20 top-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider">
              MARK THE <span className="text-blue-500">DATE</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Prepare for an extraordinary day of innovation, competition, and celebration at Velalar College of Engineering and Technology.
            </p>
            
            <div className="space-y-6">
              {DATES.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors border border-slate-700 group-hover:border-blue-500">
                    <Calendar className="w-8 h-8 text-slate-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-bold group-hover:text-blue-400 transition-colors uppercase tracking-widest text-xs">
                      {item.label}
                    </h4>
                    <p className="text-3xl text-white font-orbitron mt-1">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="bg-slate-950 p-8 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">Join Now</h3>
                    <p className="text-slate-500 text-sm">Registrations are currently open</p>
                  </div>
                </div>

                <div className="space-y-4">
                   <p className="text-slate-400 text-sm leading-relaxed mb-6">
                     Participation is open to all engineering students across India. Secure your spot now to be part of the Horizon legacy.
                   </p>
                </div>

                <div className="mt-8">
                  <a 
                    href="#register"
                    className="flex items-center justify-between w-full bg-blue-600 hover:bg-blue-700 p-5 rounded-2xl transition-all group shadow-xl shadow-blue-900/40"
                  >
                    <span className="text-white font-bold uppercase tracking-widest text-xs">Register for Horizon</span>
                    <ChevronRight className="w-5 h-5 text-white/50 group-hover:translate-x-1 group-hover:text-white transition-all" />
                  </a>
                </div>
             </div>
             
             {/* Background glow for the card */}
             <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 blur-2xl opacity-10 rounded-[2.5rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deadlines;
