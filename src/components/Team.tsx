import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Users, Megaphone, Briefcase, Shield, Cpu, Instagram } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';

const Team = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only apply VanillaTilt on desktop
    if (!isMobile) {
      cardRefs.current.forEach((card) => {
        if (card) {
          VanillaTilt.init(card, {
            max: 20,
            speed: 400,
            glare: true,
            'max-glare': 0.3,
          });
        }
      });
    }
  }, [isMobile]);

  const teamMembers = [
    {
      name: 'ABC',
      role: 'SYSTEM_ADMIN',
      department: 'Information Technology',
      image: 'https://images/',
      icon: Briefcase,
      color: 'from-cyber-cyan to-blue-500',
      status: 'ONLINE',
      level: 'LVL_99',
      social: {
        github: '#',
        linkedin: '#',
        email: 'alex@codingjunction.edu',
        instagram: '#',
      },
      domain: 'Core',
    },
    {
      name: 'DEF',
      role: 'CODE_WARRIOR',
      department: 'Information Technology',
      image: 'https://images/',
      icon: Code,
      color: 'from-neon-purple to-pink-500',
      status: 'CODING',
      level: 'LVL_95',
      social: {
        github: '#',
        linkedin: '#',
        email: 'sarah@codingjunction.edu',
        instagram: '#',
      },
      domain: 'Core',
    },
    {
      name: 'GHI',
      role: 'NETWORK_NODE',
      department: 'Information Technology',
      image: 'https://images/',
      icon: Users,
      color: 'from-neon-green to-teal-500',
      status: 'CONNECTED',
      level: 'LVL_88',
      social: {
        github: '#',
        linkedin: '#',
        email: 'marcus@codingjunction.edu',
        instagram: '#',
      },
      domain: 'Core',
    },
    {
      name: 'JKL',
      role: 'EVENT_MANAGER',
      department: 'Information Technology',
      image: 'https://images/',
      icon: Megaphone,
      color: 'from-neon-pink to-red-500',
      status: 'TRANSMITTING',
      level: 'LVL_92',
      social: {
        github: '#',
        linkedin: '#',
        email: 'emily@codingjunction.edu',
        instagram: '#',
      },
      domain: 'Core',
    },
    {
      name: 'MNO',
      role: 'TECH_OPERATOR',
      department: 'Information Technology',
      image: 'https://images/',
      icon: Cpu,
      color: 'from-cyber-yellow to-orange-500',
      status: 'MONITORING',
      level: 'LVL_90',
      social: {
        github: '#',
        linkedin: '#',
        email: 'david@codingjunction.edu',
        instagram: '#',
      },
      domain: 'Core',
    },
    {
      name: 'PQR',
      role: 'PROTOCOL_MANAGER',
      department: 'Information Technology',
      image: 'https://images/',
      icon: Shield,
      color: 'from-indigo-400 to-purple-500',
      status: 'COORDINATING',
      level: 'LVL_87',
      social: {
        github: '#',
        linkedin: '#',
        email: 'lisa@codingjunction.edu',
        instagram: '#',
      },
      domain: 'Core',
    },
    {
      name: 'STU',
      role: 'SYSTEM_ANALYST', // changed
      department: 'Information Technology',
      image: 'https://images/',
      icon: Cpu, // changed icon
      color: 'from-cyber-cyan to-blue-500', // changed color
      status: 'MONITORING', // changed status
      level: 'LVL_91', // changed
      social: {
        github: '#',
        linkedin: '#',
        email: 'lisa@codingjunction.edu',
        instagram: '#',
      },
      domain: 'Core',
    },
    {
      name: 'VWX',
      role: 'NETWORK_ENGINEER', // changed
      department: 'Information Technology',
      image: 'https://images/',
      icon: Users, // changed icon
      color: 'from-neon-green to-teal-500', // changed color
      status: 'CONNECTED', // changed status
      level: 'LVL_92', // changed
      social: {
        github: '#',
        linkedin: '#',
        email: 'lisa@codingjunction.edu',
        instagram: '#',
      },
      domain: 'Core',
    },
    {
      name: 'XYZ',
      role: 'EVENT_COORDINATOR', // changed
      department: 'Information Technology',
      image: 'https://images/',
      icon: Megaphone, // changed icon
      color: 'from-neon-pink to-red-500', // changed color
      status: 'TRANSMITTING', // changed status
      level: 'LVL_93', // changed
      social: {
        github: '#',
        linkedin: '#',
        email: 'lisa@codingjunction.edu',
        instagram: '#',
      },
      domain: 'Core',
    },
    {
      name: 'Demo Name',
      role: 'SOFTWARE_DEVELOPER', // changed
      department: 'Information Technology',
      image: 'https://images/',
      icon: Code, // changed icon
      color: 'from-neon-purple to-pink-500', // changed color
      status: 'CODING', // changed status
      level: 'LVL_94', // changed
      social: {
        github: '#',
        linkedin: '#',
        email: 'lisa@codingjunction.edu',
        instagram: '#',
      },
      domain: 'Core',
    },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      ONLINE: 'text-neon-green',
      CODING: 'text-cyber-cyan',
      CONNECTED: 'text-neon-purple',
      TRANSMITTING: 'text-neon-pink',
      MONITORING: 'text-cyber-yellow',
      COORDINATING: 'text-indigo-400',
    };
    return colors[status as keyof typeof colors] || 'text-white';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1, // Faster on mobile
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 30 }, // Smaller movement on mobile
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {!isMobile && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.05),transparent_70%)]" />
          </>
        )}
      </div>

      {/* Simplified Digital Grid - only on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-3">
          <div className="grid grid-cols-4 h-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-r border-cyber-cyan/10" />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border-b border-cyber-cyan/10" />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }} // Lower threshold on mobile
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black glitch-text" data-text="CORE TEAM">
              CORE TEAM
            </h2>
            <div className="cyber-border rounded-2xl p-6 max-w-3xl mx-auto bg-black/50 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-tech">
                &gt; Meet the elite operatives behind Brain Battle 3.0. Our diverse team of digital architects, 
                code warriors, and system administrators work in perfect synchronization to create an unforgettable Tech experience.
              </p>
            </div>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            variants={containerVariants}
            className={`grid ${isMobile ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 lg:grid-cols-5'} gap-4`}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                variants={itemVariants}
                whileHover={{ 
                  scale: isMobile ? 1.01 : 1.02, // Minimal scale on mobile
                  y: isMobile ? -1 : -2, // Smaller movement on mobile
                }}
                className="group relative"
              >
                <div className="cyber-border bg-black/50 backdrop-blur-sm rounded-2xl p-3 h-full transition-all duration-300 ${!isMobile ? 'group-hover:shadow-cyber-glow' : ''}">
                  <div className="space-y-3">
                    {/* Profile Section */}
                    <div className="relative">
                      <div className="w-16 h-16 mx-auto rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-cyber-cyan/50 transition-all duration-300 relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Status Indicator */}
                      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${member.color} p-1 rounded-full ${!isMobile ? 'group-hover:scale-110' : ''} transition-transform duration-300 relative`}>
                        <member.icon className="h-3 w-3 text-white" />
                        {!isMobile && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        )}
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center space-y-1">
                      <h3 className="text-base font-orbitron font-bold text-white group-hover:text-cyber-cyan transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="space-y-1">
                        <p className={`text-xs font-tech font-bold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                          &gt; {member.role}
                        </p>
                        <div className="flex justify-center items-center gap-2 text-[10px] font-tech">
                          <span className="text-gray-400">{member.department}</span>
                          <span className={`${getStatusColor(member.status)} animate-pulse`}>
                            [{member.status}]
                          </span>
                        </div>
                        <div className="text-[10px] font-tech text-cyber-cyan">
                          {member.level}
                        </div>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed font-tech">
                        &gt; {
                          member.role === 'DATA_BROADCASTER' || member.department === 'Digital Media'
                            ? 'Managing PR outreach and event communications.'
                          : member.role === 'TECH_OPERATOR' || member.department === 'Computer Science'
                            ? 'Managing social media and online presence.'
                          : member.role === 'PROTOCOL_MANAGER' || member.department === 'Business Administration'
                            ? 'Coordinating team operations and schedules.'
                          : member.role === 'NETWORK_NODE' || member.department === 'Information Technology'
                            ? 'Capturing moments for photography.'
                          : member.role === 'CODE_WARRIOR' || member.department === 'Software Engineering'
                            ? 'Designing event visuals and assets.'
                          : member.role === 'SYSTEM_ADMIN'
                            ? 'Managing social media and online presence.'
                          : 'Content writing and documentation.'
                        }
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-2">
                      {[
                        { icon: Github, href: member.social.github, color: 'hover:text-white' },
                        { icon: Linkedin, href: member.social.linkedin, color: 'hover:text-blue-400' },
                        { icon: Mail, href: `mailto:${member.social.email}`, color: 'hover:text-cyber-cyan' },
                        { icon: Instagram, href: member.social.instagram, color: 'hover:text-pink-500' },
                      ].map((social, socialIndex) => (
                        <motion.a
                          key={socialIndex}
                          href={social.href}
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`text-gray-400 ${social.color} transition-colors duration-200 p-1 rounded-lg cyber-border`}
                        >
                          <social.icon className="h-4 w-4" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Cyber Glow Effect - only on desktop */}
                  {!isMobile && (
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur`} />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Join Team CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-12"
          >
            <div className="cyber-border rounded-3xl p-8 max-w-4xl mx-auto bg-black/50 backdrop-blur-sm relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white">
                  &gt; WANT TO JOIN THE RESISTANCE?
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-tech">
                  &gt; We're always recruiting passionate individuals to help organize epic events. 
                  Join Coding Junction and become part of the digital revolution that's shaping the future of tech.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a
                    href="https://coding-junction.in/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyber-cyan via-neon-purple to-neon-pink p-0.5 rounded-full font-orbitron font-bold group"
                  >
                    <span className="bg-black px-4 py-2 sm:px-8 sm:py-3 rounded-full text-white group-hover:bg-transparent transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                      &gt; ESTABLISH_CONNECTION
                      <Mail className="h-4 w-4" />
                    </span>
                  </motion.a>
                  <div className="text-sm text-gray-400 font-tech">
                    [RECRUITMENT_STATUS: ACTIVE]
                  </div>
                </div>
              </div>
              
              {/* Background Effects - only on desktop */}
              {!isMobile && (
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-8 h-8 border border-cyber-cyan animate-spin" style={{ animationDuration: '8s' }} />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-neon-purple animate-pulse" />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;