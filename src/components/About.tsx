import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Trophy, Clock, Target, Zap, Cpu, Shield, Wifi } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';

const About = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          speed: 400,
          glare: true,
          'max-glare': 0.2,
        });
      }
    });
  }, []);

  const features = [
    {
      icon: Clock,
      title: '48 HRS CODING',
      description: 'Non-stop development marathon to hack reality',
      color: 'text-cyber-cyan',
      bgColor: 'bg-cyber-cyan/10',
      borderColor: 'border-cyber-cyan/30',
    },
    {
      icon: Users,
      title: 'TEAM SYNC',
      description: 'Connect with elite developers and designers',
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10',
      borderColor: 'border-neon-purple/30',
    },
    {
      icon: Trophy,
      title: 'MEGA REWARDS',
      description: 'Cash prizes, internships, and exclusive gear',
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/10',
      borderColor: 'border-neon-green/30',
    },
    {
      icon: Target,
      title: 'REAL MISSIONS',
      description: 'Solve industry challenges with cutting-edge tech',
      color: 'text-neon-pink',
      bgColor: 'bg-neon-pink/10',
      borderColor: 'border-neon-pink/30',
    },
    {
      icon: Shield,
      title: 'MENTOR ACCESS',
      description: 'Get guidance from tech industry veterans',
      color: 'text-cyber-green',
      bgColor: 'bg-cyber-green/10',
      borderColor: 'border-cyber-green/30',
    },
    {
      icon: Cpu,
      title: 'SKILL UPGRADE',
      description: 'Level up through workshops and tech talks',
      color: 'text-cyber-yellow',
      bgColor: 'bg-cyber-yellow/10',
      borderColor: 'border-cyber-yellow/30',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_70%)]" />
      </div>

      {/* Data Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-cyber-cyan/20" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black glitch-text" data-text="ABOUT BRAIN BATTLE 3.0">
              ABOUT BRAIN BATTLE 3.0
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="cyber-border rounded-2xl p-6 bg-black/50 backdrop-blur-sm">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-tech">
                  &gt; Brain Battle 3.0 is the ultimate cyberpunk hackathon experience hosted by{' '}
                  <span className="text-cyber-cyan font-bold animate-pulse">CODING JUNCTION</span>, 
                  where digital warriors converge to hack reality and push the boundaries of what's possible in the matrix.
                </p>
              </div>
              <div className="cyber-border rounded-2xl p-6 bg-black/30 backdrop-blur-sm">
                <p className="text-lg text-gray-400 leading-relaxed font-tech">
                  &gt; Open to all code warriors, data architects, and digital rebels. Whether you're a seasoned hacker 
                  or a fresh recruit to the resistance, this event will challenge you to think beyond the system 
                  and build something that breaks the rules.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50 
                }}
                className="group relative"
              >
                <div className={`cyber-border ${feature.bgColor} backdrop-blur-sm border ${feature.borderColor} rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-neon-cyan`}>
                  <div className="space-y-4">
                    <div className={`${feature.color} ${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative`}>
                      <feature.icon className="h-6 w-6" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-cyber-cyan transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-tech text-sm">
                      &gt; {feature.description}
                    </p>
                  </div>
                  
                  {/* Cyber Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color.replace('text-', 'from-')} to-transparent rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <div className="cyber-border rounded-3xl p-8 max-w-4xl mx-auto bg-black/50 backdrop-blur-sm relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white">
                  &gt; READY TO JACK IN?
                </h3>
                <p className="text-lg text-gray-300 font-tech">
                  &gt; Registration protocols are now active! Secure your access to this epic cyber adventure 
                  and become part of the digital revolution. Limited neural interfaces available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a
                    href="https://forms.gle/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyber-cyan via-neon-purple to-neon-pink p-1 rounded-full font-orbitron font-bold group relative overflow-hidden"
                  >
                    <span className="bg-black px-8 py-3 rounded-full text-white group-hover:bg-transparent transition-all duration-300 flex items-center gap-2">
                      &gt; REGISTER_NOW
                      <Zap className="h-4 w-4" />
                    </span>
                  </motion.a>
                  <div className="text-sm text-gray-400 font-tech">
                    [EARLY_ACCESS_EXPIRES: MAR_01]
                  </div>
                </div>
              </div>
              
              {/* Background Animation */}
              <div className="absolute inset-0 opacity-10">
                <Wifi className="absolute top-4 right-4 h-8 w-8 text-cyber-cyan animate-pulse" />
                <Cpu className="absolute bottom-4 left-4 h-6 w-6 text-neon-purple animate-spin" style={{ animationDuration: '8s' }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;