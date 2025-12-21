
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Rocket, Trophy, Calendar } from 'lucide-react';

const TechFest: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set a dynamic target date (e.g., 30 days from now)
    const target = new Date();
    target.setDate(target.getDate() + 15);
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="techfest" className="py-24 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-acm-gold/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-acm-dark to-slate-900 rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 text-acm-gold font-bold mb-4 uppercase tracking-[0.2em] text-sm">
                <Rocket size={18} /> ANNUAL FLAGSHIP EVENT
              </div>
              <h2 className="text-5xl md:text-7xl font-outfit font-extrabold text-white mb-6">
                TECH <span className="text-acm-gold">FEST</span> 2024
              </h2>
              <p className="text-lg text-acm-offwhite/60 mb-8 max-w-lg leading-relaxed">
                Gear up for the most electrifying tech extravaganza of the year! 
                From intense hackathons to thrilling e-sports tournaments, Tech Fest is where ideas take flight.
              </p>

              <div className="flex flex-wrap gap-8 mb-10">
                <div className="flex items-center gap-3">
                  <Gamepad2 className="text-acm-accent" />
                  <div>
                    <h4 className="text-white font-bold">Exciting Games</h4>
                    <p className="text-xs text-acm-offwhite/40">Valorant, BGMI, Chess</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="text-acm-gold" />
                  <div>
                    <h4 className="text-white font-bold">Mega Prizes</h4>
                    <p className="text-xs text-acm-offwhite/40">Worth ₹1,00,000+</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <button className="bg-acm-gold text-acm-dark px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-acm-gold/20">
                  Register Now
                </button>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <Calendar size={18} /> Dec 15th - 17th
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds },
                ].map((unit, i) => (
                  <motion.div 
                    key={unit.label}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card flex flex-col items-center justify-center p-6 md:p-10 rounded-3xl border border-white/10 group"
                  >
                    <span className="text-4xl md:text-6xl font-outfit font-black text-white group-hover:text-acm-gold transition-colors">
                      {unit.value < 10 ? `0${unit.value}` : unit.value}
                    </span>
                    <span className="text-xs md:text-sm uppercase tracking-widest text-acm-offwhite/40 mt-2">
                      {unit.label}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-center text-acm-offwhite/30 italic text-sm">
                *Limited slots available for the Hackathon. Join the discord for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFest;
