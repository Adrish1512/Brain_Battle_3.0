import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    { name: 'Team', href: '#team' },
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
                      textShadow: '0 0 10px #06B6D4',
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
            <div className="md:hidden relative z-50">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Hamburger clicked, current state:', isOpen);
                  setIsOpen(!isOpen);
                }}
                className="relative w-10 h-10 flex flex-col justify-center items-center cursor-pointer group p-2 rounded-lg hover:bg-cyber-cyan/10 transition-colors duration-300 z-50"
              >
                {/* Traditional 3-line Hamburger */}
                <div className="flex flex-col justify-center items-center w-6 h-6 space-y-1.5 relative">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-6 h-0.5 bg-cyber-cyan rounded-full origin-center"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="w-6 h-0.5 bg-cyber-cyan rounded-full"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-6 h-0.5 bg-cyber-cyan rounded-full origin-center"
                  />
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-cyber-cyan/20 rounded-lg blur-md scale-0 group-hover:scale-100 transition-transform duration-300 hamburger-glow" />
                
                {/* Hover indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-1 -right-1 w-2 h-2 bg-neon-green rounded-full"
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95 backdrop-blur-xl border-b border-cyber-cyan/50 shadow-2xl z-40"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-neon-purple/5 to-neon-pink/5" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
              
              {/* Data stream effect */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyber-cyan to-transparent opacity-30"
                    style={{
                      left: `${20 + i * 30}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s',
                      animationName: 'data-stream',
                      animationIterationCount: 'infinite',
                      animationTimingFunction: 'linear'
                    }}
                  />
                ))}
              </div>
              
              <div className="relative px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ 
                      x: 8, 
                      scale: 1.02,
                      textShadow: '0 0 15px #06B6D4',
                      boxShadow: '0 0 20px rgba(6,182,212,0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    className="group relative text-white hover:text-cyber-cyan block px-4 py-3 text-lg font-tech font-medium w-full text-left transition-all duration-300 rounded-xl bg-black/30 hover:bg-black/50 border border-transparent hover:border-cyber-cyan/30 overflow-hidden cyber-pulse"
                  >
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyber-cyan to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    
                    {/* Text with glow effect */}
                    <span className="relative z-10 flex items-center">
                      <span className="mr-3 text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">{'>'}</span>
                      {item.name}
                    </span>
                  </motion.button>
                ))}
                
                {/* Decorative elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center pt-4"
                >
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;