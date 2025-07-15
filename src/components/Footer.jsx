import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/2211cs010458', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aravind-p-019737314/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/aravind_sagar87', label: 'Twitter' },
    { icon: Mail, href: 'mailto:sagararavind87@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-transparent py-6 flex flex-col items-center justify-center space-y-4 animate-fade-in">
      {/* Social Icons */}
      <div className="flex items-center justify-center space-x-4 px-6 py-3 rounded-2xl">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 text-center mt-2 transition-opacity duration-500">
        &copy; {currentYear} Aravind Pedhabudhi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
