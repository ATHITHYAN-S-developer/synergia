
import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, ChevronDown, Sparkles, X } from 'lucide-react';
import { SYMPOSIUM_NAME, TAGLINE, COLLEGE_NAME, DEPARTMENT, ASSOCIATION, EVENT_DATE } from '../constants';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/WhatsApp Image 2026-02-04 at 11.52.29 AM.jpeg',
    '/WhatsApp Image 2026-02-04 at 11.52.30 AM (1).jpeg',
    '/WhatsApp Image 2026-02-04 at 11.52.30 AM.jpeg',
  ];

  useEffect(() => {
    const targetDate = new Date("February 11, 2026 09:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Show modal with specific image on first visit
    const hasVisited = localStorage.getItem('synergia-visited');
    if (!hasVisited) {
      setSelectedImage('/WhatsApp Image 2026-02-04 at 11.52.30 AM (1).jpeg');
      localStorage.setItem('synergia-visited', 'true');
    }
  }, []);

  const marqueeStyle = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes fadeSlide {
      0% { opacity: 0; transform: translateY(10px); }
      25% { opacity: 1; transform: translateY(0); }
      75% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-10px); }
    }
    .marquee-image {
      animation: fadeSlide 15s ease-in-out infinite;
    }
    @media (prefers-reduced-motion: reduce) {
      .marquee-image,
      .animate-float,
      .animate-glow-pulse,
      .animate-pulse-glow {
        animation: none !important;
      }
    }
  `;

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-16">
      <style>{marqueeStyle}</style>
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      {/* Abstract Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse md:animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse md:animate-glow-pulse delay-700"></div>

      {/* Additional animated orbs for visual depth - hidden on mobile */}
      <div className="hidden md:block absolute top-1/3 right-1/3 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none animate-float animation-delay-1000"></div>
      <div className="hidden lg:block absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-400/10 blur-[90px] rounded-full pointer-events-none animate-float animation-delay-2000"></div>

      <div className="relative z-10 space-y-8 max-w-5xl mx-auto">
        <div className="space-y-4 animate-slide-down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase animate-glow-pulse">
            <Sparkles className="w-3.5 h-3.5 animate-rotate-slow" />
            Empowering Future Tech Leaders
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="/vcet full logocrop.png" alt="VCET Logo" className="h-28 w-auto object-contain animate-float" />
            <div className="space-y-1 text-center">
              <h3 className="text-white font-bold tracking-[0.2em] uppercase text-sm md:text-base opacity-90 animate-slide-up">{COLLEGE_NAME}</h3>
              <p className="text-blue-500 font-orbitron font-bold text-sm tracking-widest animate-slide-up animation-delay-100">{DEPARTMENT}</p>
              <p className="text-slate-400 text-xs font-medium animate-slide-up animation-delay-200">{ASSOCIATION}</p>
            </div>
          </div>
        </div>

        <div className="space-y-0">
          <p className="text-slate-300 font-bold text-base md:text-lg mb-4 tracking-wider animate-slide-up animation-delay-300">21st NATIONAL LEVEL TECHNICAL SYMPOSIUM</p>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-orbitron font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 filter drop-shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-pulse-glow">
            {SYMPOSIUM_NAME}
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-7xl font-orbitron font-bold text-red-500 tracking-[0.6em] mt-2 translate-y-[-10px] drop-shadow-lg animate-slide-up animation-delay-400">
            {TAGLINE}
          </h2>
          
          {/* Images below Horizon - Mobile optimized */}
          <div className="w-full mt-8 flex flex-wrap justify-center gap-3 md:gap-6">
            {images.map((image, idx) => (
              <img 
                key={idx}
                src={image} 
                alt={`Event image ${idx + 1}`} 
                onClick={() => setSelectedImage(image)}
                className="marquee-image w-32 sm:w-40 md:w-56 h-auto object-contain rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer transition-all hover:scale-105 animate-slide-up" 
                style={{ animationDelay: `${idx * 100}ms` }}
              />
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <div 
                className="relative bg-slate-900 rounded-2xl overflow-hidden max-w-4xl max-h-[90vh] animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition-colors z-20 shadow-lg"
                >
                  <X className="w-6 h-6" />
                </button>
                <img 
                  src={selectedImage} 
                  alt="Full size" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 py-4">
          <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 md:px-6 py-3 rounded-2xl border border-slate-800 shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all animate-slide-left">
            <Calendar className="w-5 h-5 text-blue-500 animate-rotate-slow" />
            <span className="text-slate-200 font-bold text-sm md:text-base">{EVENT_DATE}</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 md:px-6 py-3 rounded-2xl border border-slate-800 shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all animate-slide-right">
            <MapPin className="w-5 h-5 text-blue-500 animate-rotate-slow" />
            <span className="text-slate-200 font-bold text-sm md:text-base">VCET Main Auditorium, Erode</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex justify-center gap-2 md:gap-6 py-6 flex-wrap">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div 
              key={item.label} 
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 md:p-6 backdrop-blur-md min-w-[70px] md:min-w-[120px] shadow-2xl transition-all hover:scale-105 hover:border-blue-500/50 hover:shadow-blue-500/20 animate-slide-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <span className="block text-2xl sm:text-3xl md:text-5xl font-bold text-white font-orbitron tracking-tighter">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[8px] md:text-xs text-slate-500 uppercase tracking-widest font-bold mt-1 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-6 md:pt-8 animate-slide-up animation-delay-500">
          <a
            href="#register"
            className="group relative inline-flex items-center justify-center px-6 md:px-10 py-4 md:py-5 font-bold text-white transition-all duration-300 bg-blue-600 rounded-2xl focus:outline-none hover:bg-blue-700 w-full sm:w-auto overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2 md:gap-3 tracking-widest text-base md:text-lg">
              REGISTER NOW
              <RocketIcon />
            </span>
          </a>
          <a
            href="#events"
            className="px-6 md:px-10 py-4 md:py-5 font-bold text-slate-200 transition-all duration-300 bg-transparent border-2 border-slate-700 rounded-2xl hover:bg-slate-800 hover:border-slate-600 w-full sm:w-auto backdrop-blur-sm tracking-widest text-base md:text-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            VIEW EVENTS
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce-slow cursor-pointer" onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}>
        <ChevronDown className="w-8 h-8 text-slate-600 hover:text-blue-500 transition-colors animate-pulse" />
      </div>
    </section>
  );
};

const RocketIcon = () => (
  <svg className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path>
    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path>
  </svg>
);

export default Hero;
