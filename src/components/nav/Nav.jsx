import React, { useState, useEffect } from 'react';
import './nav.css';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaMoon, FaSun } from 'react-icons/fa';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#171614' : '#f7f6f2');
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" className={`nav-container ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-content">
        {/* اللوجو سيصغر في الموبايل عبر الـ CSS */}
        <div className="nav-logo">
          ESRAA GAMAL<span>KHATER</span>
        </div>

        {/* القائمة - كلاس show هو المسؤول عن ظهورها عند الضغط */}
        <ul id="portfolio-navigation" className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>

        {/* هذه هي الأيقونة التي طلبتِها للموبايل */}
        <div className="nav-tools">
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-pressed={theme === 'dark'}
            onClick={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="portfolio-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <HiX aria-hidden="true" /> : <HiMenuAlt3 aria-hidden="true" />}
          </button>
          <div className="nav-action">
            <a href="#contact" className="nav-btn">Let&apos;s Talk</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
