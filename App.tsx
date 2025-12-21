
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechFest from './components/TechFest';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for a premium feel
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans text-acm-offwhite selection:bg-acm-gold selection:text-acm-dark overflow-x-hidden">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-acm-dark"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-16 h-16 border-4 border-acm-gold border-t-transparent rounded-full mb-4"
              />
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-acm-gold font-outfit text-xl tracking-widest font-bold"
              >
                VCE ACM
              </motion.h1>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <TechFest />
        <Team />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
