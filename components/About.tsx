
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="text-acm-gold" />,
      title: 'Our Mission',
      desc: 'To foster a spirit of technical excellence and innovation among students of Vardhaman.'
    },
    {
      icon: <Zap className="text-acm-accent" />,
      title: 'Our Vision',
      desc: 'Becoming a global hub for student developers to share, learn, and grow together.'
    },
    {
      icon: <Shield className="text-blue-400" />,
      title: 'Integrity',
      desc: 'We uphold the highest professional standards in all our academic and technical pursuits.'
    },
    {
      icon: <Award className="text-yellow-400" />,
      title: 'Excellence',
      desc: 'Striving for perfection in every workshop, hackathon, and seminar we organize.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-acm-dark/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-bold text-white mb-4"
          >
            Who We Are
          </motion.h2>
          <div className="w-24 h-1 bg-acm-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-acm-offwhite/60 leading-relaxed">
            The ACM Student Chapter at Vardhaman College of Engineering serves as a portal for students 
            to delve deeper into the tech world beyond the curriculum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all border-b-2 border-transparent hover:border-acm-gold group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-acm-offwhite/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
