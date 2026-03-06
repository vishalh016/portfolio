import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = targetId ? document.querySelector(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu on click
  };


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-light-primary/80 dark:bg-primary/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-accent origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" onClick={handleNavClick} className="text-2xl font-bold text-accent" data-cursor-pointer>BISHAL HALDER</a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavClick} className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors font-medium" data-cursor-pointer>
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Open menu" data-cursor-pointer>
            <Menu className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-light-secondary dark:bg-secondary absolute top-full left-0 w-full shadow-lg border-t border-gray-200 dark:border-gray-700/50"
          >
            <div className="flex flex-col items-center divide-y divide-gray-200 dark:divide-gray-700/50">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-full text-center py-4 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors text-lg"
                  onClick={handleNavClick}
                  data-cursor-pointer
                >
                  {link.label}
                </a>
              ))}
              <div className="w-full flex justify-center py-4">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;