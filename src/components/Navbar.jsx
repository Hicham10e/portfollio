import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="w-full shadow-sm bg-white dark:bg-neutral-900 sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        <a href="#hero" className="text-3xl font-bold text-purple-600 dark:text-purple-400 tracking-tight">HM</a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <li><a href="#hero" className="hover:text-purple-500" onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" className="hover:text-purple-500" onClick={handleNavClick}>About</a></li>
          <li><a href="#skills" className="hover:text-purple-500" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-500" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#experience" className="hover:text-purple-500" onClick={handleNavClick}>Experience</a></li>
          <li><a href="#education" className="hover:text-purple-500" onClick={handleNavClick}>Education</a></li>
          <li><a href="#contact" className="hover:text-purple-500" onClick={handleNavClick}>Contact</a></li>
        </ul>
        {/* Dark mode toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
        {/* Mobile Nav */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden" onClick={() => setMenuOpen(false)}>
            <div className="absolute top-0 left-0  w-full max-w-xs h-full bg-white dark:bg-neutral-900 shadow-lg flex flex-col p-8 gap-6 animate-slide-in">
              <a href="#hero" className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4" onClick={handleNavClick}>HM</a>
              <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium">
                <li><a href="#hero" className="hover:text-purple-500" onClick={handleNavClick}>Home</a></li>
                <li><a href="#about" className="hover:text-purple-500" onClick={handleNavClick}>About</a></li>
                <li><a href="#skills" className="hover:text-purple-500" onClick={handleNavClick}>Skills</a></li>
                <li><a href="#projects" className="hover:text-purple-500" onClick={handleNavClick}>Projects</a></li>
                <li><a href="#experience" className="hover:text-purple-500" onClick={handleNavClick}>Experience</a></li>
                <li><a href="#education" className="hover:text-purple-500" onClick={handleNavClick}>Education</a></li>
                <li><a href="#contact" className="hover:text-purple-500" onClick={handleNavClick}>Contact</a></li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
