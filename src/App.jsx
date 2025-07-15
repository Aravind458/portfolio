import React from 'react';
import SpaceBackground from './components/SpaceBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;