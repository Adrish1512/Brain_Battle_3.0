import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Mail, MapPin, Calendar, Phone, Wifi } from 'lucide-react';
import Logo from '../../Logo.png';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-white' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-cyber-cyan' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-neon-pink' },
    { icon: Mail, href: 'mailto:hello@codingjunction.edu', label: 'Email', color: 'hover:text-neon-green' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'UIT,BU Campus, Burdwan', status: 'LOCATED' },
    { icon: Calendar, text: 'December 15-18, 2025', status: 'SCHEDULED' },
    { icon: Phone, text: '+1 (555) 123-4567', status: 'ACTIVE' },
    { icon: Mail, text: 'codingjunction@gmail.com', status: 'ONLINE' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
      </div>

      {/* Digital Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-cyber-cyan/20" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img src={Logo} alt="Logo" className="h-30 w-30 object-contain" />
              </div>
            </div>
            <div className="cyber-border rounded-lg p-4 bg-black/30 backdrop-blur-sm">
              <p className="text-gray-300 text-sm leading-relaxed font-tech">
                &gt; Empowering the next generation of digital warriors through innovative hackathons, 
                neural workshops, and tech community building. Join us in hacking the future of technology.
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 rounded-lg cyber-border`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-orbitron font-bold text-white">
              &gt; QUICK_ACCESS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5, textShadow: '0 0 4px #06B6D4' }}
                    className="text-gray-400 hover:text-cyber-cyan transition-all duration-200 text-sm font-tech flex items-center gap-2"
                  >
                    <span>&gt;</span>
                    {link.name}
                  </motion.button>
                </li>
              ))}
              <li>
                <motion.a
                  href="https://forms.gle/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, textShadow: '0 0 4px #06B6D4' }}
                  className="text-gray-400 hover:text-cyber-cyan transition-all duration-200 text-sm font-tech flex items-center gap-2"
                >
                  <span>&gt;</span>
                  Register Now
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-orbitron font-bold text-white">
              &gt; CONTACT_PROTOCOL
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <info.icon className="h-4 w-4 text-cyber-cyan mt-0.5 flex-shrink-0 animate-pulse" />
                  <div className="space-y-1">
                    <span className="text-gray-400 text-sm font-tech">{info.text}</span>
                    <div className="text-xs text-neon-green font-tech">
                      [{info.status}]
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-orbitron font-bold text-white">
              &gt; DATA_STREAM
            </h3>
            <div className="cyber-border rounded-lg p-4 bg-black/30 backdrop-blur-sm">
              <p className="text-gray-400 text-sm font-tech mb-4">
                &gt; Subscribe to receive the latest updates about Brain Battle and upcoming exciting events.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter neural link..."
                  className="w-full px-4 py-2 bg-black/50 border border-cyber-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan focus:shadow-neon-cyan transition-all duration-200 font-tech text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyber-cyan via-neon-purple to-neon-pink p-1 rounded-lg font-tech font-bold group"
                >
                  <span className="bg-black w-full py-2 px-4 rounded-lg text-white group-hover:bg-transparent transition-all duration-300 block">
                    &gt; CONNECT
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-cyber-cyan/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-tech">
              &copy; 2024 CODING JUNCTION. ALL RIGHTS RESERVED. | SYSTEM_STATUS: OPERATIONAL
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400 font-tech">
              <motion.a 
                href="#" 
                whileHover={{ textShadow: '0 0 4px #06B6D4' }}
                className="hover:text-cyber-cyan transition-colors duration-200"
              >
                Privacy Protocol
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ textShadow: '0 0 4px #06B6D4' }}
                className="hover:text-cyber-cyan transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ textShadow: '0 0 4px #06B6D4' }}
                className="hover:text-cyber-cyan transition-colors duration-200"
              >
                Code of Conduct
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent" />
      <div className="absolute top-0 right-0">
        <Wifi className="h-6 w-6 text-cyber-cyan/30 animate-pulse" />
      </div>
    </footer>
  );
};

export default Footer;