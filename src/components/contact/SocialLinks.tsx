// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { Github  } from 'lucide-react';
import { LiaTelegramPlane } from "react-icons/lia";
import { CiTwitter } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import personalInfo from '@/data/personal-info.json';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      icon: LiaTelegramPlane  ,
      label: 'Telegram',
      href: personalInfo.social.telegram.url,
      username: personalInfo.social.telegram.username
    },
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.social.github.url,
      username: personalInfo.social.github.username
    },
    {
      icon: CiMail,
      label: 'Gmail',
      href: personalInfo.social.email,
      username: "vladmeer"
    },
    {
      icon: CiTwitter,
      label: 'Twitter',
      href: personalInfo.social.twitter.url,
      username: personalInfo.social.twitter.username
    },
    // {
    //   icon: Linkedin,
    //   label: 'LinkedIn',
    //   href: personalInfo.social.linkedin.url,
    //   username: personalInfo.social.linkedin.username
    // }
  ];

  return (
    <div className="glass-card p-5 rounded-xl">
      {/* <h3 className="text-2xl font-semibold mb-6 text-foreground">
        Follow Me
      </h3> */}
      
      <div className="flex flex-row gap-3 justify-end">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-1"
            >
              {/* <div className="flex items-center space-x-4"> */}
                <div className="p-1 rounded-lg iconic bg-accent-gradient group-hover:scale-110 transition-transform duration-300">
                  <Icon size={18} className="text-background text-black" />
                </div>
                {/* <div>
                  <p className="font-medium text-foreground">{social.label}</p>
                  <p className="text-sm text-muted-foreground">{social.username}</p>
                </div> */}
              {/* </div> */}
              {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-primary">→</span>
              </div> */}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
