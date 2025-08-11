import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Zap, Eye } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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
  }, []);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop',
      alt: 'Team collaboration during hackathon',
      caption: 'BRAIN_BATTLE_2.0 >> TEAM_SYNC',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop',
      alt: 'Coding session',
      caption: 'NEURAL_CODING >> ACTIVE',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      alt: 'Team working together',
      caption: 'COLLECTIVE_INTELLIGENCE >> ONLINE',
      status: 'BRAIN BATTLE 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
      alt: 'Presentation time',
      caption: 'DEMO_PROTOCOL >> EXECUTED',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
      alt: 'Developer workspace',
      caption: 'WORKSTATION_MATRIX >> READY',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: 'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=800&h=600&fit=crop',
      alt: 'Tech event',
      caption: 'INITIALIZATION >> SUCCESS',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
      alt: 'Networking session',
      caption: 'NETWORK_PROTOCOL >> ACTIVE',
      status: 'BRAIN BATTLE 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
      alt: 'Award ceremony',
      caption: 'VICTORY_SEQUENCE >> COMPLETE',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop',
      alt: 'Workshop session',
      caption: 'SKILL_UPGRADE >> INSTALLING',
      status: 'BRAIN BATTLE 2.0',
    },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      ARCHIVED: 'text-gray-400',
      PROCESSING: 'text-cyber-cyan',
      CONNECTED: 'text-neon-green',
      COMPLETE: 'text-neon-purple',
      STANDBY: 'text-cyber-yellow',
      LAUNCHED: 'text-neon-pink',
      SYNCING: 'text-cyber-cyan',
      ACHIEVED: 'text-neon-green',
      UPDATING: 'text-neon-purple',
      'BRAIN BATTLE 1': 'text-neon-green',
      'BRAIN BATTLE 2.0': 'text-cyber-cyan',
    };
    return colors[status as keyof typeof colors] || 'text-white';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, scale: 1, rotateY: 0 },
    visible: { opacity: 1, scale: 1, rotateY: 0 },
  };

    return (
    <section id="gallery" className="py-10 sm:py-16 md:py-20 relative overflow-hidden min-h-screen">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(236,72,153,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-orbitron font-black glitch-text" data-text="EVENT ARCHIVES">
              EVENT ARCHIVES
            </h2>
            <div className="cyber-border rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto bg-black/50 backdrop-blur-sm">
              <p className="text-sm sm:text-lg md:text-xl text-gray-300 leading-relaxed font-tech">
                &gt; Access archived data from previous Brain Battle operations. 
                Witness the innovation, collaboration, and digital warfare that defines our cyber community.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden rounded-2xl cyber-border bg-black/50 aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105 group-active:scale-105"
                  />
                  
                  {/* Cyber Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs sm:text-sm font-tech ${getStatusColor(image.status)} animate-pulse`}>
                            [{image.status}]
                          </span>
                          <div className="flex items-center gap-1 sm:gap-2 text-cyber-cyan">
                            <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="text-xs sm:text-sm font-tech">ACCESS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-cyber-cyan animate-scan-line"></div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-cyan to-neon-purple rounded-2xl opacity-0 group-hover:opacity-50 group-active:opacity-50 transition-opacity duration-300 -z-10 blur" />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8 sm:pt-12">
            <div className="cyber-border rounded-2xl p-4 sm:p-8 max-w-2xl mx-auto bg-black/50 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white mb-4">
                &gt; JOIN THE NEXT CHAPTER
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 font-tech">
                &gt; Create new memories, forge digital alliances, and showcase your skills at Brain Battle 3.0. 
                Your code could be featured in our next data archive!
              </p>
              <a
                href="https://forms.gle/example"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-gradient-to-r from-cyber-cyan via-neon-purple to-neon-pink p-0.5 rounded-full font-orbitron font-bold group"
              >
                <span className="bg-black px-2 py-1 sm:px-4 sm:py-2 rounded-full text-white group-hover:bg-transparent transition-all duration-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                  &gt; ENTER_THE_MATRIX
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] cyber-border rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain"
              />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-cyber-cyan/20 transition-colors duration-200 cyber-border"
              >
                <X className="h-6 w-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;