import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy, ExternalLink, Cpu, Zap } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (heroRef.current) {
      VanillaTilt.init(heroRef.current, {
        max: 5,
        speed: 400,
        scale: 1.01,
      });
    }
    if (ctaRef.current) {
      VanillaTilt.init(ctaRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    }
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date('December 15, 2025 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update countdown immediately
    updateCountdown();
    
    // Update countdown every second
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const floatingAnimation = {
    y: [-15, 15, -15],
    rotate: [-2, 2, -2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const glitchVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, -1, 1, 0], // reduced from [-2, 2, 0]
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen lg:min-h-[110vh] flex items-center justify-center overflow-hidden pt-[80px] sm:pt-16 lg:pt-[130px]">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="data-stream"
            style={{
              left: `${10 + i * 30}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

   {/* Floating Cyber Elements */}
<div className="absolute inset-0 overflow-hidden">
  {[...Array(12)].map((_, i) => {
    
    const column = i % 4; 
    const row = Math.floor(i / 4);  
    
    return (
      <motion.div
        key={i}
        className="absolute text-cyber-cyan opacity-60 text-2xl"
        style={{ 
          left: `${15 + (column * 25)}%`,  
          top: `${10 + (row * 25)}%`       
        }}
        animate={{
          y: [-40, 40],
          x: [-15, 15], 
          rotate: [0, 360], 
          scale: [0.9, 1.1, 0.9],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 15 + Math.random() * 8,
          repeat: Infinity,
          delay: Math.random() * 10,
          ease: "easeInOut",
          type: "tween"
        }}
      >
        <Cpu className="h-4 w-4" />
      </motion.div>
    );
  })}
</div>

      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4 sm:space-y-8"
        >
          {/* Title with Glitch Effect */}
          <div className="space-y-2 sm:space-y-6">
            <motion.div
              animate={floatingAnimation}
              className="inline-block"
            >
              <motion.h1
                variants={glitchVariants}
                initial="initial"
                animate="animate"
                className="text-6xl md:text-8xl font-orbitron font-black glitch-text"
                data-text="BRAIN BATTLE"
                style={{ color: 'white' }}
              >
                BRAIN BATTLE
              </motion.h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <span className="text-4xl md:text-6xl font-orbitron font-black text-white animate-neon-pulse">
                3.0
              </span>
              {/* Background Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyber-cyan/10 via-neon-purple/10 to-neon-pink/10 blur-lg animate-pulse" />
            </motion.div>
          </div>

          {/* Cyberpunk Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex justify-center items-center space-x-4 text-lg font-tech text-gray-300">
              <span className="animate-pulse">[</span>
              <span className="text-neon-green">SYSTEM_READY</span>
              <span className="animate-pulse">]</span>
              <Zap className="h-5 w-5 text-neon-yellow animate-pulse" />
            </div>
          </motion.div>

          {/* Event Details with Cyber Styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: Calendar, text: 'DEC 15-18, 2025', color: 'text-cyber-cyan' },
              { icon: MapPin, text: 'UIT,BU CAMPUS', color: 'text-neon-purple' },
              { icon: Users, text: '500+ HACKERS', color: 'text-neon-pink' },
              { icon: Trophy, text: '₹10K PRIZE', color: 'text-neon-green' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cyber-border rounded-lg p-4 bg-black/50 backdrop-blur-sm"
              >
                <item.icon className={`h-6 w-6 ${item.color} mx-auto mb-2 animate-pulse`} />
                <p className="text-xs font-tech text-white">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Cyberpunk CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-8"
          >
            <motion.a
              ref={ctaRef}
              href="https://forms.gle/example"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyber-cyan via-neon-purple to-neon-pink p-1 rounded-full text-lg font-orbitron font-bold group relative overflow-hidden"
            >
              <span className="bg-black px-8 py-4 rounded-full text-white group-hover:bg-transparent transition-all duration-300 flex items-center gap-3">
                <span>&gt; REGISTER_NOW</span>
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>
          </motion.div>

          {/* Cyberpunk Countdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="pt-6"
          >
            <div className="cyber-border rounded-xl p-3 sm:p-4 md:p-6 max-w-xl mx-auto bg-black/50 backdrop-blur-sm overflow-hidden transform-gpu">
              <h3 className="text-base sm:text-lg md:text-xl font-tech text-cyber-cyan mb-3 sm:mb-4 md:mb-6 animate-pulse">
                &gt; SYSTEM_COUNTDOWN
              </h3>
              <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 text-center">
                {[
                  { value: countdown.days.toString().padStart(2, '0'), label: 'DAYS' },
                  { value: countdown.hours.toString().padStart(2, '0'), label: 'HRS' },
                  { value: countdown.minutes.toString().padStart(2, '0'), label: 'MIN' },
                  { value: countdown.seconds.toString().padStart(2, '0'), label: 'SEC' },
                ].map((unit) => (
                  <div key={unit.label} className="space-y-1 sm:space-y-2">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-orbitron font-black text-cyber-cyan animate-countdown-glow">
                      {unit.value}
                    </div>
                    <div className="text-xs sm:text-sm font-tech text-gray-400 uppercase tracking-wider">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Cyberpunk Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center relative overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-cyber-cyan to-neon-purple rounded-full mt-2"
            />
            <div className="absolute inset-0 bg-cyber-cyan/20 animate-pulse rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;