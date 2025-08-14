import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';
import Logo from '../../Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (logoRef.current) {
      VanillaTilt.init(logoRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
      });
    }
  }, []);

  // Handle click outside mobile menu and escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Event', href: '#event' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 64; // h-16 = 64px
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <div className="scan-line"></div>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-cyber-cyan/30 shadow-neon-cyan'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              ref={logoRef}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img src={Logo} alt="Logo" className="h-12 px-2 object-contain" style={{ maxHeight: '1.8rem' }} />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ 
                      scale: 1.1, 
                      textShadow: '0 0 4px #06B6D4',
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white hover:text-cyber-cyan px-3 py-2 text-sm font-tech font-medium transition-all duration-300 relative group cyber-border rounded-lg"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyber-cyan to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-cyber-cyan transition-colors duration-300 p-2 rounded-lg cyber-border"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-md border-b border-cyber-cyan/30"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 10, textShadow: '0 0 4px #06B6D4' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white hover:text-cyber-cyan block px-3 py-2 text-base font-tech font-medium w-full text-left transition-all duration-300 rounded-lg cyber-border"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;