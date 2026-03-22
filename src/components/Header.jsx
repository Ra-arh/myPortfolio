import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, PhoneCall } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          folio<span className="accent">.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="social-links">
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
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer glass ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
          
          <div className="mobile-social-links">
            <a href="https://www.linkedin.com/in/rahul-jangid-55abaa167/" target="_blank" rel="noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Ra-arh" target="_blank" rel="noreferrer">
              <Github size={24} />
            </a>
            <a href="mailto:jangidr480@gmail.com">
              <Mail size={24} />
            </a>
            <a href="tel:+917622964850">
              <PhoneCall size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
