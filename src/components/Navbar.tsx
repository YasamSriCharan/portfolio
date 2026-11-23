import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['contact', 'journey', 'projects', 'skills', 'about'];
      const current = sections.find((id) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 140;
      });
      setActiveSection(current ?? 'home');
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 text-primary-light',
      scrolled ? 'bg-primary-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-slate-950/10' : 'bg-primary-dark'
    )}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter">Yasam Sri Charan</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              aria-current={activeSection === link.name.toLowerCase() ? 'location' : undefined}
              className={cn('text-sm font-medium transition-colors hover:text-primary-hover', activeSection === link.name.toLowerCase() && 'text-primary-hover')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary-dark text-primary-light p-6 flex flex-col gap-4 md:hidden border-t border-primary-muted/20">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              aria-current={activeSection === link.name.toLowerCase() ? 'location' : undefined}
              className={cn('text-lg font-medium transition-colors hover:text-primary-hover', activeSection === link.name.toLowerCase() && 'text-primary-hover')}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
