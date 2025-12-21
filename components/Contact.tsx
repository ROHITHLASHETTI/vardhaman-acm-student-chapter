
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-8">
              Let's Build <br />
              <span className="text-acm-gold">The Future Together</span>
            </h2>
            <p className="text-lg text-acm-offwhite/60 mb-12">
              Have questions or want to collaborate? Our team is always ready to connect with enthusiastic minds.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-acm-blue/20 rounded-2xl text-acm-accent">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Location</h4>
                  <p className="text-acm-offwhite/50 text-sm">Vardhaman College of Engineering, <br />Shamshabad, Hyderabad - 501218</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-acm-gold/20 rounded-2xl text-acm-gold">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <p className="text-acm-offwhite/50 text-sm">acm.vardhaman@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-acm-accent/20 rounded-2xl text-acm-offwhite">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <p className="text-acm-offwhite/50 text-sm">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-acm-offwhite/40 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-acm-gold transition-colors text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-acm-offwhite/40 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-acm-gold transition-colors text-white" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-acm-offwhite/40 uppercase tracking-widest">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-acm-gold transition-colors text-white" placeholder="Interested in Tech Fest" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-acm-offwhite/40 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-acm-gold transition-colors text-white" placeholder="Tell us more..."></textarea>
              </div>
              <button className="w-full bg-acm-accent hover:bg-acm-blue text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-acm-accent/20 active:scale-95">
                SEND MESSAGE <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
