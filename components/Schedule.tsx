
import React from 'react';
import { Clock, Coffee, Mic, Music, Trophy, Star } from 'lucide-react';

const ITINERARY = [
  { time: '08:30 AM', event: 'Registration', icon: <Star className="w-5 h-5" /> },
  { time: '09:30 AM', event: 'Inaugural Ceremony', icon: <Mic className="w-5 h-5" /> },
  { time: '10:30 AM', event: 'Tech Events', icon: <Star className="w-5 h-5" /> },
  { time: '01:00 PM', event: 'Lunch', icon: <Coffee className="w-5 h-5" /> },
  { time: '02:00 PM', event: 'Non-Tech Events', icon: <Star className="w-5 h-5" /> },
  { time: '03:00 PM', event: 'Valedictory & Prize Distribution', icon: <Trophy className="w-5 h-5" /> },
  { time: '04:00 PM', event: 'DJ Music Mashup', icon: <Music className="w-5 h-5" /> },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-slate-800 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 uppercase tracking-wider">
            Event <span className="text-blue-500">Schedule</span>
          </h2>
          <p className="text-slate-400">February 11, 2026 — Plan your day at Horizon</p>
        </div>

        <div className="space-y-12">
          {ITINERARY.map((item, idx) => (
            <div key={idx} className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline Marker */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950 shadow-[0_0_15px_rgba(37,99,235,0.6)] z-20 hidden md:block"></div>
              
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start group">
                <div className={`p-6 bg-slate-900 border border-slate-800 rounded-2xl transition-all group-hover:border-blue-500/50 group-hover:bg-slate-900/50 w-full ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`flex items-center gap-3 mb-2 text-blue-500 font-bold font-orbitron text-sm ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>
                  <h3 className="text-white text-xl font-bold">{item.event}</h3>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
