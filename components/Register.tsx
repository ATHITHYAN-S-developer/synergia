
import React from 'react';
import { ExternalLink, QrCode, CheckCircle2 } from 'lucide-react';
import { REGISTRATION_URL, REGISTRATION_FEE } from '../constants';

const Register: React.FC = () => {
  return (
    <section id="register" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-blue-900/30 to-slate-900 rounded-[3rem] overflow-hidden border border-blue-500/20">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-20 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
                  JOIN THE <span className="text-blue-500">HORIZON</span>
                </h2>
                <p className="text-slate-400 text-lg">
                  Be a part of the most anticipated technical symposium of the year. Secure your spot and get ready to innovate.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Complete Access to All Events",
                  "Certificate of Participation",
                  "Interactive Technical Workshops",
                  "Networking Opportunities with Industry Mentors",
                  "Entry to DJ Music Mashup Session"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <div className="text-slate-400 mb-2 uppercase tracking-widest font-bold text-xs">Registration Fee</div>
                <div className="text-4xl font-orbitron font-bold text-white mb-8">{REGISTRATION_FEE}</div>
                
                <a 
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-900/60 transition-all hover:scale-105"
                >
                  CLICK TO REGISTER
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-slate-900/50 p-12 md:p-20 flex flex-col items-center justify-center border-l border-slate-800">
              <div className="bg-white p-6 rounded-3xl mb-8 shadow-2xl animate-float">
                 <img 
                   src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(REGISTRATION_URL)}`} 
                   alt="Registration QR Code"
                   className="w-48 h-48 md:w-64 md:h-64"
                 />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-white font-orbitron font-bold text-xl mb-2">
                  <QrCode className="w-6 h-6 text-blue-500" />
                  SCAN TO REGISTER
                </div>
                <p className="text-slate-500 max-w-[250px] mx-auto text-sm">
                  Simply open your camera and scan the QR code to access the registration form directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
