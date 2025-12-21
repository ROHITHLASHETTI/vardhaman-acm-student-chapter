
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Users, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-acm-dark">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-acm-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-acm-gold rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-acm-blue/10 border border-acm-blue/30 text-acm-accent text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acm-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-acm-accent"></span>
            </span>
            VARDHAMAN COLLEGE OF ENGINEERING
          </div>
          
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold leading-tight mb-6">
            Innovate. Integrate. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acm-gold to-yellow-200">Inspire.</span>
          </h1>
          
          <p className="text-lg text-acm-offwhite/70 max-w-lg mb-10 font-light leading-relaxed">
            Welcome to the Vardhaman ACM Student Chapter. We are a community of creators, 
            thinkers, and problem solvers dedicated to advancing computing as a science and a profession.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-acm-gold text-acm-dark px-8 py-4 rounded-xl font-bold shadow-xl shadow-acm-gold/10 hover:shadow-acm-gold/30 transition-all transform hover:scale-105 active:scale-95">
              Explore Events
            </button>
            <button className="glass-card text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all border border-white/20">
              Our Legacy
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">500+</span>
              <span className="text-xs uppercase tracking-widest">Members</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">50+</span>
              <span className="text-xs uppercase tracking-widest">Events</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">10+</span>
              <span className="text-xs uppercase tracking-widest">Hackathons</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 animate-float">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                <Cpu size={120} />
              </div>
              
              <div className="flex gap-4 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="font-mono text-sm space-y-2">
                <p className="text-acm-gold"># Welcome to ACM VARDHAMAN</p>
                <p><span className="text-pink-400">const</span> mission = <span className="text-green-300">"Advance computing"</span>;</p>
                <p><span className="text-pink-400">function</span> <span className="text-blue-300">collaborate</span>() &#123;</p>
                <p className="pl-4 text-acm-offwhite/60">// Joining minds to create the future</p>
                <p className="pl-4">students.<span className="text-yellow-200">map</span>(s =&gt; s.innovate());</p>
                <p>&#125;</p>
                <p className="animate-pulse">_</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl">
                  <Terminal size={24} className="text-acm-accent mb-2" />
                  <h4 className="font-bold text-white text-sm">Coding Rounds</h4>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl">
                  <Users size={24} className="text-acm-gold mb-2" />
                  <h4 className="font-bold text-white text-sm">Community</h4>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorative ring */}
          <div className="absolute -inset-10 border border-white/5 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: '30s' }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
