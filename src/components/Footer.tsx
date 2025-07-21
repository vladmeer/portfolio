import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/alexchen', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/alexchen', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alex.chen@example.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-background to-secondary/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text font-mono hover:scale-105 transition-transform duration-200"
            >
              {'<Alex />'}
            </button>
            <p className="text-muted-foreground leading-relaxed">
              Full-stack developer crafting exceptional digital experiences 
              with modern technologies and clean code practices.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:scale-110 transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-muted-foreground group-hover:text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gradient group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Ready to work together?
              </p>
              <a 
                href="mailto:alex.chen@example.com"
                className="text-primary hover:text-accent transition-colors duration-200 font-medium"
              >
                alex.chen@example.com
              </a>
              <p className="text-muted-foreground">
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Alex Chen. Made with</span>
            <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
            <span>and lots of coffee.</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <span>Built with React, Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;