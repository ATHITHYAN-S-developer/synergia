
import React, { useState } from 'react';
import { Lightbulb, Code, BrainCircuit, Music, Users, Trophy, X, ChevronRight } from 'lucide-react';
import { EVENTS } from '../constants';
import { EventDetail } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  BrainCircuit: <BrainCircuit className="w-8 h-8" />,
  Music: <Music className="w-8 h-8" />,
};

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);

  return (
    <section id="events" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            SYMPOSIUM <span className="text-blue-500">EVENTS</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Choose from a spectrum of technical and non-technical challenges designed for the leaders of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 transition-all hover:bg-slate-800/80 hover:-translate-y-2 hover:border-blue-500/50 overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
              
              <div className="relative z-10">
                <div className={`p-4 rounded-2xl inline-block mb-6 transition-all ${
                  event.type === 'technical' ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' : 
                  event.type === 'non-technical' ? 'bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white' : 
                  'bg-red-500/20 text-red-400 group-hover:bg-red-500 group-hover:text-white'
                }`}>
                  {iconMap[event.icon]}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {event.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                    event.type === 'technical' ? 'bg-blue-900 text-blue-200' : 
                    event.type === 'non-technical' ? 'bg-indigo-900 text-indigo-200' : 
                    'bg-red-900 text-red-200'
                  }`}>
                    {event.type.replace('-', ' ')}
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {event.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800 group-hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Users className="w-4 h-4" />
                    <span>{event.teamSize}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-12 space-y-8 max-h-[90vh] overflow-y-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className={`p-6 rounded-3xl bg-slate-800 text-blue-500`}>
                    {iconMap[selectedEvent.icon]}
                  </div>
                  <div>
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-2 block">{selectedEvent.type} EVENT</span>
                    <h3 className="text-4xl font-orbitron font-bold text-white mb-2">{selectedEvent.name}</h3>
                    <p className="text-slate-400 leading-relaxed">{selectedEvent.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-white font-bold flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-500" />
                      Rules & Guidelines
                    </h4>
                    <ul className="space-y-3">
                      {selectedEvent.rules?.map((rule, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-800">
                      <h4 className="text-slate-300 font-bold mb-2 text-sm uppercase tracking-wider">Team Configuration</h4>
                      <p className="text-white text-lg font-bold">{selectedEvent.teamSize}</p>
                    </div>
                    <a
                      href="#register"
                      onClick={() => setSelectedEvent(null)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2"
                    >
                      REGISTER FOR THIS EVENT
                      <Trophy className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-800/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-blue-400 font-bold">
              <Trophy className="w-6 h-6" />
              <span>CASH PRIZES & CERTIFICATES</span>
            </div>
            <h3 className="text-3xl font-bold text-white">Ready to take on the challenge?</h3>
            <p className="text-slate-400 max-w-xl">
              Registration fee covers all events, participation kits, and the special musical session by DJ Music.
            </p>
          </div>
          <a
            href="#register"
            className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-blue-900/40 transition-all hover:scale-105"
          >
            CLAIM YOUR SPOT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
