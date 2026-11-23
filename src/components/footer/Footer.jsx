import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            ESRAA GAMAL<span>KHATER</span>
          </div>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/esraa-gamal-khater-7a0b00217/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/ESRAAGamalKhater" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:esraagamal12002@gmail.com"><FaEnvelope /></a>
          </div>
          <p className="footer-copy">&copy; 2026 Esraa Gamal Khater. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
