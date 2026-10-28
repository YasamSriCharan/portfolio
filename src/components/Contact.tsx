import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-primary-dark mb-4">Let’s Connect</h2>
          <p className="text-xl text-primary-muted">
            Have an idea or opportunity? Let’s build something useful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="p-8 bg-primary-light rounded-2xl border border-primary-muted/20">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <a href="mailto:your-email@example.com" className="flex items-center gap-4 text-primary-dark hover:text-primary-accent transition-colors group">
                  <div className="p-3 bg-white rounded-lg border border-primary-muted/20 group-hover:border-primary-accent transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">your-email@example.com</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-primary-dark hover:text-primary-accent transition-colors group">
                  <div className="p-3 bg-white rounded-lg border border-primary-muted/20 group-hover:border-primary-accent transition-colors">
                    <Github size={20} />
                  </div>
                  <span className="font-medium">github.com/yasam-sri-charan</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-primary-dark hover:text-primary-accent transition-colors group">
                  <div className="p-3 bg-white rounded-lg border border-primary-muted/20 group-hover:border-primary-accent transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span className="font-medium">linkedin.com/in/yasam-sri-charan</span>
                </a>
              </div>
            </div>
          </div>

          <motion.form 
            onSubmit={handleSubmit}
            className="bg-primary-light p-8 rounded-2xl border border-primary-muted/20 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary-dark">Name</label>
                <input 
                  required 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-primary-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary-accent transition-all" 
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary-dark">Email</label>
                <input 
                  required 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-primary-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary-accent transition-all" 
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary-dark">Message</label>
              <textarea 
                required 
                rows={4} 
                className="w-full px-4 py-3 rounded-lg border border-primary-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary-accent transition-all" 
                placeholder="Tell me about your project..."
              />
            </div>
            <button 
              disabled={formState !== 'idle'}
              className="w-full py-4 bg-primary-accent text-primary-light font-bold rounded-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {formState === 'idle' && <><Send size={18} /> Send Message</>}
              {formState === 'sending' && 'Sending...'}
              {formState === 'success' && 'Message Sent!'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
