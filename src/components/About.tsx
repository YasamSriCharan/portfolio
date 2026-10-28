import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-primary-dark mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-primary-muted leading-relaxed">
              <p>
                I am a computer science student dedicated to building practical software projects that solve real-world problems. 
                My approach to development is centered around a learning mindset and a commitment to writing 
                understandable, maintainable code.
              </p>
              <p>
                I have a deep interest in problem-solving, particularly through the lens of data structures 
                and algorithms, which I leverage to create efficient and scalable full-stack applications.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-light p-8 rounded-2xl border border-primary-muted/20 shadow-sm"
          >
            <div className="space-y-6">
              <div className="flex justify-between border-b border-primary-muted/20 pb-4">
                <span className="font-bold text-primary-dark">Name</span>
                <span className="text-primary-muted">Yasam Sri Charan</span>
              </div>
              <div className="flex justify-between border-b border-primary-muted/20 pb-4">
                <span className="font-bold text-primary-dark">Focus</span>
                <span className="text-primary-muted">Computer Science</span>
              </div>
              <div className="flex justify-between border-b border-primary-muted/20 pb-4">
                <span className="font-bold text-primary-dark">Interests</span>
                <span className="text-primary-muted">Java, DSA, Full-Stack</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-primary-dark">Status</span>
                <span className="text-primary-muted">Building & Learning</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
