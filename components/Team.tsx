
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  const members = [
    {
      name: 'Dr. Ramesh Kumar',
      role: 'Faculty Coordinator',
      image: 'https://picsum.photos/400/500?random=1',
    },
    {
      name: 'Aravind S',
      role: 'Chapter Chair',
      image: 'https://picsum.photos/400/500?random=2',
    },
    {
      name: 'Sanya Reddy',
      role: 'Vice Chair',
      image: 'https://picsum.photos/400/500?random=3',
    },
    {
      name: 'Kiran Deep',
      role: 'Technical Lead',
      image: 'https://picsum.photos/400/500?random=4',
    }
  ];

  return (
    <section id="team" className="py-24 bg-acm-dark">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-outfit font-bold text-white mb-4"
        >
          Meet The <span className="text-acm-accent">Lead Team</span>
        </motion.h2>
        <div className="w-24 h-1 bg-acm-accent mx-auto mb-16"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5] bg-slate-800">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-acm-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-acm-gold hover:text-acm-dark transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-acm-gold hover:text-acm-dark transition-colors"><Github size={18} /></a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-acm-gold hover:text-acm-dark transition-colors"><Twitter size={18} /></a>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <p className="text-acm-gold text-sm uppercase tracking-widest font-semibold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
