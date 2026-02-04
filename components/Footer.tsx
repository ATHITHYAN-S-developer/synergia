
import React, { useState } from 'react';
import { Phone, Globe, Instagram, MapPin, ExternalLink, X, Code2, Zap } from 'lucide-react';
import { SYMPOSIUM_NAME, COORDINATORS, INSTAGRAM_HANDLE, COLLEGE_NAME, DEPARTMENT, OFFICIAL_URL } from '../constants';

const Footer: React.FC = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState<string | null>(null);

  const developers = [
    {
      id: 'athithyan',
      name: 'Mr.S.ATHITHYAN',
      role: 'Frontend Lead',
      year: 'CSE 2nd Year, VCET',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      power: '⚡ Full Stack Developer',
      bio: 'Architected the responsive UI and interactive components'
    },
    {
      id: 'abyvighneesh',
      name: 'Mr.P.Y.ABYVIGHNEESH',
      role: 'UI/UX Lead',
      year: 'CSE 2nd Year, VCET',
      skills: ['User Research', 'Wireframing', 'Figma', 'UX Strategy'],
      power: '✨ Experience Designer',
      bio: 'Crafted intuitive user experiences and visual flows aligned with user-first design'
    },
    {
      id: 'shamruthya',
      name: 'Mr.N.SHAMRUTHYA GOPAL',
      role: 'Backend Lead',
      year: 'CSE 3rd Year, VCET',
      skills: ['Server Config',, 'APIs', 'Database', 'Optimization'],
      power: '🔥 Backend Specialist',
      bio: 'Built robust backend infrastructure and database architecture'
    },
    {
      id: 'devops',
      name: 'Mr.P.K.KAJA MAQBOOL',
      role: 'DevOps & Deployment Lead',
      year: 'VCET',
      skills: ['CI/CD', 'Docker', 'Cloud Deployment'],
      power: '🚀 System Orchestrator',
      bio: 'Managed deployment pipelines and system optimization to keep the project fast and reliable'
    }
  ];
  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
              <span className="font-orbitron text-2xl font-bold tracking-wider text-white">
                {SYMPOSIUM_NAME}
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Organized by {DEPARTMENT} at {COLLEGE_NAME}. Dedicated to fostering technical excellence and creative innovation among students nationwide.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={OFFICIAL_URL} 
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
                title="Official Domain"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              Location
            </h4>
            <p className="text-slate-500 text-sm">
              Velalar College of Engineering and Technology<br />
              Thindal, Erode - 638 012<br />
              Tamil Nadu, India
            </p>
            <div className="mt-4 space-y-2">
              <a 
                href="https://maps.google.com/?q=Velalar+College+of+Engineering+and+Technology"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-500 text-sm hover:underline"
              >
                Get Directions
                <ExternalLink className="w-3 h-3" />
              </a>
              <div className="pt-2">
                <p className="text-slate-600 text-[10px] uppercase font-bold tracking-widest">Official Portal</p>
                <a href={OFFICIAL_URL} className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
                  {OFFICIAL_URL.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-500" />
              Coordinators
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {COORDINATORS.map((coord, idx) => (
                <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 transition-colors hover:border-slate-700">
                  <div className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-1">{coord.role}</div>
                  <div className="text-slate-200 font-bold">{coord.name}</div>
                  <a href={`tel:${coord.phone}`} className="text-slate-500 hover:text-white transition-colors text-sm">
                    {coord.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 mb-6">
          <div className="bg-gradient-to-r from-slate-900/50 via-slate-800/30 to-slate-900/50 p-6 rounded-lg border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 animate-fade-in shadow-lg hover:shadow-blue-500/20">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Developed by - Athithyan */}
              <div 
                className="group cursor-pointer"
                onClick={() => setSelectedDeveloper('athithyan')}
              >
                <div className="bg-slate-900/40 p-4 rounded-lg border border-slate-700/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 animate-slide-up">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-2 group-hover:text-blue-400 transition-colors">Developed by</p>
                  <div className="space-y-1">
                    <p className="text-white font-bold text-sm group-hover:text-blue-300 transition-colors flex items-center gap-1">
                      <Code2 className="w-4 h-4 text-blue-500" /> {developers[0].name}
                    </p>
                    <p className="text-slate-500 text-xs">{developers[0].role}</p>
                    <p className="text-slate-500 text-xs mt-1">{developers[0].year}</p>
                    <div className="flex gap-1 mt-2 flex-wrap">
                      {developers[0].skills.slice(0, 2).map((skill, i) => (
                        <span key={i} className="text-[8px] px-2 py-1 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-700/30 text-[10px] text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view details →
                  </div>
                </div>
              </div>

              {/* Developed by - Abyvighneesh */}
              <div 
                className="group cursor-pointer"
                onClick={() => setSelectedDeveloper('abyvighneesh')}
              >
                <div className="bg-slate-900/40 p-4 rounded-lg border border-slate-700/30 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 animate-slide-up animation-delay-100">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-2 group-hover:text-red-400 transition-colors">Developed by</p>
                  <div className="space-y-1">
                    <p className="text-white font-bold text-sm group-hover:text-red-300 transition-colors flex items-center gap-1">
                      <Zap className="w-4 h-4 text-red-500" /> {developers[1].name}
                    </p>
                    <p className="text-slate-500 text-xs">{developers[1].role}</p>
                    <p className="text-slate-500 text-xs mt-1">{developers[1].year}</p>
                    <div className="flex gap-1 mt-2 flex-wrap">
                      {developers[1].skills.slice(0, 2).map((skill, i) => (
                        <span key={i} className="text-[8px] px-2 py-1 bg-red-500/20 text-red-300 rounded border border-red-500/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-700/30 text-[10px] text-red-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view details →
                  </div>
                </div>
              </div>

              {/* Developed by - Shamruthya (Backend) */}
              <div 
                className="group cursor-pointer"
                onClick={() => setSelectedDeveloper('shamruthya')}
              >
                <div className="bg-slate-900/40 p-4 rounded-lg border border-slate-700/30 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 animate-slide-up animation-delay-200">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-2 group-hover:text-yellow-400 transition-colors">Developed by</p>
                  <div className="space-y-1">
                    <p className="text-white font-bold text-sm group-hover:text-yellow-300 transition-colors flex items-center gap-1">
                      🔥 {developers[2].name}
                    </p>
                    <p className="text-slate-500 text-xs">{developers[2].role}</p>
                    <p className="text-slate-500 text-xs mt-1">{developers[2].year}</p>
                    <div className="flex gap-1 mt-2 flex-wrap">
                      {developers[2].skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="text-[8px] px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded border border-yellow-500/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-700/30 text-[10px] text-yellow-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view details →
                  </div>
                </div>
              </div>

              {/* Deployed by - DevOps Engineer */}
              <div 
                className="group cursor-pointer"
                onClick={() => setSelectedDeveloper('devops')}
              >
                <div className="bg-slate-900/40 p-4 rounded-lg border border-slate-700/30 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 animate-slide-up animation-delay-300">
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-2 group-hover:text-green-400 transition-colors">Deployed by</p>
                  <div className="space-y-1">
                    <p className="text-white font-bold text-sm group-hover:text-green-300 transition-colors flex items-center gap-1">
                      🚀 {developers[3].name}
                    </p>
                    <p className="text-slate-500 text-xs">{developers[3].role}</p>
                    <p className="text-slate-500 text-xs mt-1">{developers[3].year}</p>
                    <div className="flex gap-1 mt-2 flex-wrap">
                      {developers[3].skills.slice(0, 2).map((skill, i) => (
                        <span key={i} className="text-[8px] px-2 py-1 bg-green-500/20 text-green-300 rounded border border-green-500/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-700/30 text-[10px] text-green-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view details →
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Iron Man Armor Modal */}
          {selectedDeveloper && (
            <div 
              className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
              onClick={() => setSelectedDeveloper(null)}
            >
              <div 
                className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden max-w-2xl w-full animate-in zoom-in-95 duration-300 border border-slate-700/50 shadow-2xl shadow-blue-500/30"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
                
                {/* Close button */}
                <button 
                  onClick={() => setSelectedDeveloper(null)}
                  className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition-all z-20 shadow-lg hover:shadow-blue-500/50"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Header */}
                <div className="relative px-8 py-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/50 flex items-center justify-center text-2xl animate-pulse">
                      👨‍💻
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {developers.find(d => d.id === selectedDeveloper)?.name}
                      </h3>
                      <p className="text-blue-400 font-semibold">
                        {developers.find(d => d.id === selectedDeveloper)?.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative px-8 py-6 space-y-6">
                  {/* Power Status */}
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-all">
                    <p className="text-sm font-semibold text-slate-300 mb-2">⚙️ POWER STATUS</p>
                    <p className="text-lg font-bold text-blue-400">
                      {developers.find(d => d.id === selectedDeveloper)?.power}
                    </p>
                  </div>

                  {/* Role & Bio */}
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-all">
                    <p className="text-sm font-semibold text-slate-300 mb-2">📋 ROLE</p>
                    <p className="text-white font-semibold mb-3">
                      {developers.find(d => d.id === selectedDeveloper)?.role}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {developers.find(d => d.id === selectedDeveloper)?.bio}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-all">
                    <p className="text-sm font-semibold text-slate-300 mb-3">🛠️ TECH ARSENAL</p>
                    <div className="flex flex-wrap gap-2">
                      {developers.find(d => d.id === selectedDeveloper)?.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 text-sm font-semibold hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Year & Institution */}
                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-slate-700/50 hover:border-blue-500/30 transition-all">
                    <p className="text-sm font-semibold text-slate-300 mb-1">🎓 INSTITUTION</p>
                    <p className="text-white font-semibold">
                      {developers.find(d => d.id === selectedDeveloper)?.year}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="relative px-8 py-4 border-t border-slate-700/50 bg-slate-900/50 flex items-center justify-between">
                  <p className="text-xs text-slate-500">Iron Man Initiative - Tech Avengers</p>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
          <p>© 2026 {SYMPOSIUM_NAME} | VCET CSE Association - MAGNUMOPUS</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Participation</a>
            <a href={OFFICIAL_URL} className="hover:text-blue-500 transition-colors font-bold">www.velalarengg.ac.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
