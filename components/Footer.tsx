
import React from 'react';
import { Phone, Globe, Instagram, MapPin, ExternalLink, Rocket } from 'lucide-react';
import { SYMPOSIUM_NAME, COORDINATORS, INSTAGRAM_HANDLE, COLLEGE_NAME, DEPARTMENT, OFFICIAL_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Rocket className="w-8 h-8 text-blue-500" />
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

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
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
