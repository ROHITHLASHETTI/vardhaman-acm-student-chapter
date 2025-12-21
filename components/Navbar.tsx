
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#techfest' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-acm-dark/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
            <img 
              src="https://raw.githubusercontent.com/ACM-Vardhaman/Website-2023/main/assets/img/acm-logo.png" 
              alt="ACM Logo" 
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                // Fallback for logo
                (e.target as HTMLImageElement).src = 'https://picsum.photos/40/40?grayscale';
              }}
            />
          </div>
          <span className="font-outfit font-bold text-xl hidden md:block">
            <span className="text-acm-gold">VARDHAMAN</span> ACM
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase hover:text-acm-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-acm-blue hover:bg-acm-accent text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all transform hover:translate-y-[-2px] shadow-lg active:scale-95">
            JOIN NOW <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-acm-offwhite" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-acm-dark border-t border-white/10"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium tracking-wide uppercase hover:text-acm-gold"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-acm-gold text-acm-dark px-6 py-4 rounded-xl text-lg font-bold">
                JOIN NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
