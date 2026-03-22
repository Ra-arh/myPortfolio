import React from 'react';
import { Github, Linkedin, Mail, PhoneCall, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <div className="logo footer-logo">
              folio<span className="accent">.</span>
            </div>
            <p className="footer-tagline">
              Building robust automated testing solutions to ensure high-quality software delivery.
            </p>
          </div>
          
          <div className="footer-links-section">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <div className="footer-socials">
                <a href="https://www.linkedin.com/in/rahul-jangid-55abaa167/" target="_blank" rel="noreferrer" title="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Ra-arh" target="_blank" rel="noreferrer" title="GitHub">
                  <Github size={20} />
                </a>
                <a href="mailto:jangidr480@gmail.com" title="Email">
                  <Mail size={20} />
                </a>
                <a href="tel:+917622964850" title="Call">
                  <PhoneCall size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Rahul Jangid. All rights reserved.</p>
          <p className="flex-center" style={{gap: '5px'}}>
            Made with <Heart size={14} color="var(--accent-color)" fill="var(--accent-color)" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
