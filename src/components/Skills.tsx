import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming',
    skills: ['Java', 'Python'],
    description: 'Core languages for logic and algorithm implementation.'
  },
  {
    category: 'Computer Science',
    skills: ['Data Structures', 'Algorithms'],
    description: 'Foundation for efficient problem solving and optimization.'
  },
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    description: 'Building responsive and interactive user interfaces.'
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
    description: 'Essential tools for version control and development.'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-primary-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-primary-dark mb-16 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group, index) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-primary-muted/20 hover:border-primary-accent transition-colors"
            >
              <h3 className="text-xl font-bold text-primary-dark mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {group.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-primary-light text-primary-dark text-sm font-medium rounded-md border border-primary-muted/20">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-sm text-primary-muted leading-relaxed">
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
