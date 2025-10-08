// Server Component - Static content rendered on server for SEO benefits
import React from 'react';
import BrandSection from './BrandSection';
import QuickLinks from './QuickLinks';
import ContactInfo from './ContactInfo';
import BottomBar from './BottomBar';
import { BsTwitterX } from "react-icons/bs";
import { LiaTelegramPlane } from "react-icons/lia";
import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';
import personalInfo from '@/data/personal-info.json';

interface SocialLink {
  readonly icon: any;
  readonly href: string;
  readonly label: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: LiaTelegramPlane, href: personalInfo.social.telegram.url, label: 'Telegram' },
    { icon: BsTwitterX, href: personalInfo.social.twitter.url, label: 'Twitter' },
    { icon: Github, href: personalInfo.social.github.url, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin.url, label: 'LinkedIn' },
    { icon: Mail, href: personalInfo.social.email, label: 'Email' }
  ];
  return (
    <footer id='footer' className="bg-gradient-to-b from-background via-secondary/10 to-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand & Description */}
          <BrandSection />

          {/* Quick Links */}
          <QuickLinks />

          {/* Social / Contact */}
          <div className="flex flex-col md:items-start items-center space-y-4 md:space-y-6">
            <p className="text-lg text-white font-bold text-muted-foreground">Connect with me:</p>
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted border border-primary hover:bg-primary/20 hover:scale-110 hover:border-white transition-transform duration-200 flex items-center justify-center group"
                    aria-label={social.label}
                  >
                    <Icon size={22} className="text-white group-hover:text-primary transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border/50 pt-4 text-center text-sm text-muted-foreground">
          Copyright &copy; {new Date().getFullYear()} Vladmeer
        </div>
      </div>
    </footer>

  );
};

export default Footer;
