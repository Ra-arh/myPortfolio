import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { Download, Rocket, Mail, Phone } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="greeting">Hello, world!</span>
          <h1 className="name-heading">
            I'm <span className="text-gradient">Rahul Jangid</span>
          </h1>
          <h2 className="typed-heading">
            <ReactTyped
              strings={[
                "QA Automation Engineer",
                "Cypress Automation Engineer",
                "Selenium Automation Engineer",
                "Manual QA Engineer",
                "Test Automation Specialist",
                "Automation Framework Engineer"
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
          </h2>
          <p className="hero-description">
            Experienced QA Automation Engineer with expertise in manual and automated testing using Cypress and Selenium. Skilled in building scalable test frameworks, identifying defects, and improving test coverage. Proven track record in delivering reliable test solutions for web and mobile applications ensuring high-quality software delivery.
          </p>
          
          <div className="hero-contact-info" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '30px', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Mail size={18} color="var(--accent-color)" /> <a href="mailto:jangidr480@gmail.com" className="contact-link">jangidr480@gmail.com</a>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Phone size={18} color="var(--accent-color)" /> <a href="tel:+917622964850" className="contact-link">+91 7622964850</a>
            </div>
          </div>
          
          <div className="hero-btns">
            <a href="https://tinyurl.com/2hbasvdc" target="_blank" rel="noreferrer" className="btn btn-primary">
              <Download size={20} /> Download CV
            </a>
            <a href="#contact" className="btn btn-secondary glass">
              <Rocket size={20} /> Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="blob"></div>
          <div className="image-container glass">
            {/* The image should end up in public/Images/self.png */}
            <img src="/self.png" alt="Rahul Jangid" className="profile-img" />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
