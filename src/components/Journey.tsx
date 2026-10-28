import React from 'react';
import { motion } from 'framer-motion';

const journeyData = [
  {
    title: 'Computer Science Education',
    description: 'Pursuing a degree in Computer Science, building a strong foundation in theory and practical application.',
    status: 'Ongoing'
  },
  {
    title: 'Mastering DSA',
    description: 'Focusing on Data Structures and Algorithms to build efficient and scalable software solutions.',
    status: 'Active'
  },
  {
    title: 'Full-Stack Development',
    description: 'Exploring the synergy between frontend interfaces and backend logic through various projects.',
    status: 'Active'
  },
  {
    title: 'Personal Experiments',
    description: 'Exploring AI pathfinding and other algorithmic challenges to push my technical boundaries.',
    status: 'Experimental'
  },
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 px-6 bg-primary-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-primary-dark mb-16 text-center">My Journey</h2>
        
        <div className="relative border-l-4 border-primary-dark ml-6 space-y-12">
          {journeyData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-10"
            >
              <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-primary-accent border-4 border-primary-light" />
              <div className="bg-white p-6 rounded-2xl border border-primary-muted/20 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary-dark">{item.title}</h3>
                  <span className="text-xs font-bold px-2 py-1 bg-primary-light text-primary-muted rounded uppercase">
                    {item.status}
                  </span>
                </div>
                <p className="text-primary-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
