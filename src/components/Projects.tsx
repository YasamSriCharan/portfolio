import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Food Order System',
    description: 'A Java-based application focused on utilizing efficient data structures for order management and menu processing.',
    tech: ['Java', 'DSA'],
    category: 'Java Application',
  },
  {
    title: 'Power Grid Management System',
    description: 'Algorithmic problem-solving implementation for managing power distribution and grid efficiency.',
    tech: ['Java', 'DSA'],
    category: 'Algorithm Design',
  },
  {
    title: 'Subscription Plan Management',
    description: 'A full-stack implementation for managing user subscription tiers and billing cycles.',
    tech: ['React', 'JavaScript', 'CSS'],
    category: 'Full-Stack',
  },
  {
    title: 'AI Racecar Path Finder',
    description: 'Python implementation of pathfinding algorithms to optimize racecar trajectories in dynamic environments.',
    tech: ['Python', 'AI Algorithms'],
    category: 'AI / Python',
  },
  {
    title: 'TravelSync',
    description: 'An intelligent travel-planning concept utilizing search algorithms to synchronize multiple itineraries.',
    tech: ['JavaScript', 'DSA'],
    category: 'Algorithm Concept',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-primary-dark mb-16 text-center">Selected Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-primary-light rounded-2xl border border-primary-muted/20 overflow-hidden hover:border-primary-accent transition-all"
            >
              <div className="h-48 bg-primary-dark flex items-center justify-center overflow-hidden relative">
                {/* Abstract Visual Placeholder */}
                <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-accent via-transparent to-transparent" />
                </div>
                <span className="text-primary-light text-4xl font-black opacity-30">{project.title[0]}</span>
              </div>
              
              <div className="p-8">
                <span className="text-xs font-bold text-primary-accent uppercase tracking-widest">{project.category}</span>
                <h3 className="text-2xl font-bold text-primary-dark mt-2 mb-4">{project.title}</h3>
                <p className="text-primary-muted mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium px-2 py-1 bg-white rounded border border-primary-muted/20 text-primary-dark">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-primary-dark hover:text-primary-accent transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-primary-dark hover:text-primary-accent transition-colors">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
