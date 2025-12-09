import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Mail, Download, MessageCircle } from 'lucide-react';
import jsPDF from 'jspdf';

const Hero = () => {
  const phrases = ['MERN Stack Developer', 'Tech Explorer'];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); 
  const [charIndex, setCharIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];

    const type = () => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500); 
        }
      } else {
        if (charIndex > 0) {
          setText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? 75 : 150);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("Aravind Pedhabudhi", 20, 20);
    doc.setFontSize(16);
    doc.text("MERN Stack Developer", 20, 30);
    doc.setFontSize(12);
    doc.text("Email: sagararavind87@gmail.com", 20, 45);
    doc.text("GitHub: github.com/aravind458", 20, 55);
    doc.text("LinkedIn: www.linkedin.com/in/aravind-pedhabudhi", 20, 65);
    doc.text("Skills: React.js, Node.js, Express.js, MongoDB, Tailwind CSS", 20, 80);
    doc.text("Projects: FuelX, Sports Facility Reservation, Portfolio", 20, 95);
    doc.save("Aravind_Resume.pdf");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <div className="max-w-3xl space-y-6 animate-fade-in-up">
        <div className="space-y-4">
          <h3 className="text-cyan-400 text-xl font-medium">Hello, I'm</h3>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Aravind <span className="text-cyan-400">Pedhabudhi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-300 h-8">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          I am a dedicated and motivated Computer Science student with a deep passion for technology
          and problem-solving. I approach challenges with efficiency, creativity, and a strong growth
          mindset. Committed to continuous learning, I strive to deliver high-quality
          results in both collaborative and independent environments.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Contact Me
          </button>

          <a
            href="/resume_pedhabudhi_aravind.pdf"
            download
            className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          {[
            { Icon: Github, href: 'https://github.com/Aravind458' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/aravind-pedhabudhi/' },
            { Icon: Twitter, href: 'https://x.com/aravind_sagar87' },
            { Icon: Mail, href: 'mailto:sagararavind87@gmail.com' }
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transform hover:-translate-y-1 transition-all duration-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
