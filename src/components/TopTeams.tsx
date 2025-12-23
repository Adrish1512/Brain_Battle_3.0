import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';

const TopTeams = () => {
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
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.2,
          });
        }
      });
    }
  }, [isMobile]);

  // Top 3 teams data - replace with actual team names
  const topTeams = [
    {
      rank: 1,
      name: 'Binary Breakers',
      icon: Trophy,
      color: 'text-cyber-yellow',
      bgColor: 'bg-cyber-yellow/10',
      borderColor: 'border-cyber-yellow/30',
      glowColor: 'from-cyber-yellow',
    },
    {
      rank: 2,
      name: 'Binary Echoes',
      icon: Medal,
      color: 'text-gray-300',
      bgColor: 'bg-gray-300/10',
      borderColor: 'border-gray-300/30',
      glowColor: 'from-gray-300',
    },
    {
      rank: 3,
      name: 'Tech Wave',
      icon: Award,
      color: 'text-cyber-cyan',
      bgColor: 'bg-cyber-cyan/10',
      borderColor: 'border-cyber-cyan/30',
      glowColor: 'from-cyber-cyan',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 30 },
    visible: { opacity: 1, y: 0 },
  };

  const podiumVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="top-teams" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {!isMobile && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.05),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(6,182,212,0.05),transparent_70%)]" />
          </>
        )}
      </div>

      {/* Data Grid Background - only on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-3">
          <div className="grid grid-cols-4 h-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-r border-cyber-yellow/10" />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
          variants={containerVariants}
          className="text-center space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-orbitron font-black glitch-text" data-text="TOP 3 TEAMS">
              TOP 3 TEAMS
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-tech max-w-2xl mx-auto">
              &gt; Champions of Brain Battle 3.0 - The elite code warriors who conquered the digital arena
            </p>
          </motion.div>

          {/* Podium Layout */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {topTeams.map((team, index) => {
              const IconComponent = team.icon;
              const isFirst = team.rank === 1;
              const isSecond = team.rank === 2;
              
              return (
                <motion.div
                  key={team.rank}
                  ref={(el) => (cardRefs.current[index] = el)}
                  variants={podiumVariants}
                  className={`${isFirst ? 'order-1 md:order-2' : isSecond ? 'order-2 md:order-1' : 'order-3'} flex-1 max-w-xs`}
                >
                  <motion.div
                    whileHover={{ 
                      scale: isMobile ? (isFirst ? 1.02 : 1.01) : (isFirst ? 1.08 : 1.05),
                      y: isMobile ? (isFirst ? -4 : -2) : (isFirst ? -12 : -8),
                    }}
                    className="relative group"
                  >
                    <div className={`cyber-border ${team.bgColor} backdrop-blur-sm border ${team.borderColor} rounded-2xl p-6 transition-all duration-300 ${!isMobile ? 'group-hover:shadow-neon-cyan' : ''} ${isFirst ? 'relative overflow-hidden' : ''}`}>
                      {/* Winner Badge for 1st place */}
                      {isFirst && (
                        <div className="absolute top-2 right-2 bg-cyber-yellow/20 rounded-full p-1">
                          <Trophy className="h-4 w-4 text-cyber-yellow animate-pulse" />
                        </div>
                      )}
                      <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3">
                          <div className={`${team.color} ${team.bgColor} ${isFirst ? 'w-14 h-14' : 'w-12 h-12'} rounded-xl flex items-center justify-center ${isFirst ? 'animate-pulse' : ''}`}>
                            <IconComponent className={isFirst ? 'h-7 w-7' : 'h-6 w-6'} />
                          </div>
                          <div className={`${isFirst ? 'text-4xl' : 'text-3xl'} font-orbitron font-black ${team.color} ${isFirst ? 'animate-neon-pulse' : ''}`}>
                            #{team.rank}
                          </div>
                        </div>
                        <h3 className={`${isFirst ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-orbitron font-bold text-white`}>
                          {team.name}
                        </h3>
                        <div className={`${isFirst ? 'h-24 md:h-32' : isSecond ? 'h-16 md:h-24' : 'h-12 md:h-20'} bg-gradient-to-t ${isFirst ? 'from-cyber-yellow/30' : isSecond ? 'from-gray-300/20' : 'from-cyber-cyan/20'} to-transparent rounded-lg flex items-end justify-center`}>
                          <div className={`text-xs ${isFirst ? 'text-sm text-cyber-yellow font-bold' : 'text-gray-400'} font-tech mb-2`}>
                            {isFirst ? '🏆 CHAMPION 🏆' : isSecond ? '2ND PLACE' : '3RD PLACE'}
                          </div>
                        </div>
                      </div>
                    </div>
                    {!isMobile && (
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${team.glowColor} to-transparent rounded-2xl opacity-0 transition-opacity duration-300 -z-10 blur ${isFirst ? 'group-hover:opacity-40' : 'group-hover:opacity-30'}`} />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopTeams;

