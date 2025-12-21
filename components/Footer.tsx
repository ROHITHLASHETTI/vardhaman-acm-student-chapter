
import React from 'react';
import { Github, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-acm-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img src="https://raw.githubusercontent.com/ACM-Vardhaman/Website-2023/main/assets/img/acm-logo.png" alt="Logo" className="w-full h-full object-contain p-1" />
              </div>
              <span className="font-outfit font-bold text-2xl text-white">ACM VCE</span>
            </div>
            <p className="text-acm-offwhite/40 text-sm leading-relaxed">
              Empowering students through innovation and professional development. Join the leading computing community at Vardhaman.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-acm-gold hover:bg-white/10 transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-acm-gold hover:bg-white/10 transition-all"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-acm-gold hover:bg-white/10 transition-all"><Github size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-acm-gold hover:bg-white/10 transition-all"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm text-acm-offwhite/50">
              <li><a href="#about" className="hover:text-acm-gold transition-colors">About Chapter</a></li>
              <li><a href="#techfest" className="hover:text-acm-gold transition-colors">Tech Fest 2024</a></li>
              <li><a href="#team" className="hover:text-acm-gold transition-colors">Leadership Team</a></li>
              <li><a href="#" className="hover:text-acm-gold transition-colors">Member Benefits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-4 text-sm text-acm-offwhite/50">
              <li><a href="#" className="hover:text-acm-gold transition-colors">Join ACM</a></li>
              <li><a href="#" className="hover:text-acm-gold transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-acm-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-acm-gold transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-sm text-acm-offwhite/50 mb-6">Stay updated with our latest workshops and news.</p>
            <div className="flex gap-2">
              <input type="text" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-acm-gold" placeholder="Your email" />
              <button className="bg-acm-gold text-acm-dark px-4 py-2 rounded-lg font-bold text-sm">SUB</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-acm-offwhite/30 text-xs">
            © 2024 Vardhaman ACM Student Chapter. All Rights Reserved. Designed by Technical Team.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-acm-offwhite/50 hover:text-acm-gold transition-all"
          >
            BACK TO TOP <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
