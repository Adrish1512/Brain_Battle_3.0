import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Lightbulb, Trophy, Cpu } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';

const Event = () => {
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



  return (
    <section id="event" className="py-20 relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(6,182,212,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(236,72,153,0.1),transparent_70%)]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-black glitch-text text-white" data-text="EVENTS SCHEDULED">
            EVENTS SCHEDULED
          </h2>
          <div className="cyber-border rounded-2xl p-8 bg-black/60 backdrop-blur-md mx-auto max-w-2xl">
            <p className="text-lg md:text-xl text-gray-300 font-tech mb-6">
              &gt; Brain Battle 3.0 is back! ⚡<br></br>
                   Join us at UIT Burdwan for a thrilling cyberpunk-themed hackathon where innovation meets intensity. Compete, collaborate, and code your way to glory. Exciting prizes, real-world challenges, and a platform to unleash your creativity — all in one epic tech showdown.<br></br>
                   Hack the future. Win the battle. 🔥
            </p>
          </div>
          {/* Timeline Cards */}
          <div className="mt-12 flex flex-col items-center w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto relative pb-4 px-2 sm:px-4">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-cyan via-neon-purple to-neon-pink opacity-40 -translate-x-1/2 z-0" />
            {[ 
              {
                title: 'Online Coding Round',
                desc: 'Test your coding skills in a fast-paced online challenge.',
                date: 'Dec 8, 2025',
                status: 'Compiling',
                icon: Code,
                color: 'text-cyber-cyan',
                bgColor: 'bg-cyber-cyan/10',
                borderColor: 'border-cyber-cyan/30'
              },
              {
                title: 'Tech Triad',
                desc: 'A multi-domain challenge testing skills in Hardware, Software, and Logical Reasoning. Teams of three tackle questions from each domain under a 15-minute limit.',
                date: 'Dec 9, 2025',
                status: 'Compiling',
                icon: Cpu,
                color: 'text-cyber-purple',
                bgColor: 'bg-cyber-purple/10',
                borderColor: 'border-cyber-purple/30'
              },

              {
                title: 'Brain Brawl',
                desc: 'Face off in a battle of wits and logic with other teams.',
                date: 'Dec 10, 2025',
                status: 'Compiling',
                icon: Brain,
                color: 'text-neon-purple',
                bgColor: 'bg-neon-purple/10',
                borderColor: 'border-neon-purple/30'
              },
              {
                title: 'Final Showdown - Hackathon',
                desc: 'The ultimate hackathon: build, innovate, and impress the judges.',
                date: 'Dec 11, 2025',
                status: 'Compiling',
                icon: Lightbulb,
                color: 'text-cyber-yellow',
                bgColor: 'bg-cyber-yellow/10',
                borderColor: 'border-cyber-yellow/30'
              },
              {
                title: 'Award Ceremony',
                desc: 'Celebrate the winners and all participants in style.',
                date: 'Dec 12, 2025',
                status: 'Compiling',
                icon: Trophy,
                color: 'text-neon-pink',
                bgColor: 'bg-neon-pink/10',
                borderColor: 'border-neon-pink/30'
              },
            ].map((event, idx, arr) => (
              <motion.div 
                key={event.title} 
                className="relative z-10 flex flex-col items-center w-full group"
                whileHover={{ 
                  scale: isMobile ? 1.01 : 1.02,
                  y: isMobile ? -2 : -5,
                }}
              >
                {/* Timeline dot */}
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyber-cyan via-neon-purple to-neon-pink border-4 border-black mb-2" />
                <div 
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className={`w-full max-w-xs sm:max-w-md md:max-w-lg cyber-border backdrop-blur-sm border ${event.borderColor} rounded-2xl p-4 sm:p-6 h-full transition-all duration-300 group-hover:shadow-neon-cyan ${event.bgColor}`}
                >
                  <div className="space-y-4">
                    <div className={`${event.color} ${event.bgColor} w-12 h-12 rounded-xl flex items-center justify-center ${!isMobile ? 'group-hover:scale-110' : ''} transition-transform duration-300 relative`}>
                      <event.icon className="h-6 w-6" />
                      {!isMobile && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      )}
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-cyber-cyan transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-tech leading-relaxed">
                      &gt; {event.desc}
                    </p>
                    <div className="flex items-center justify-between w-full mt-auto">
                      <span className="text-xs font-tech text-neon-purple">{event.date}</span>
                      <span className={`text-xs font-tech px-2 py-1 rounded-full ml-2
                        ${event.status === 'executed' ? 'bg-green-900 text-neon-green' : ''}
                        ${event.status === 'running' ? 'bg-yellow-900 text-cyber-yellow animate-pulse' : ''}
                        ${event.status === 'compiling' ? 'bg-pink-900 text-neon-pink animate-pulse' : ''}
                      `}>
                        {event.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Cyber Glow Effect - only on desktop */}
                  {!isMobile && (
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${event.color.replace('text-', 'from-')} to-transparent rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur`} />
                  )}
                </div>
                {idx !== arr.length - 1 && (
                  <div className="w-1 h-8 bg-gradient-to-b from-cyber-cyan via-neon-purple to-neon-pink opacity-40" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Event; 