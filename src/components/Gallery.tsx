import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';

// Import images properly for Vite
import img01 from '../../images/01.jpg';
import img03 from '../../images/03.jpg';
import img05 from '../../images/05.jpg';
import img07 from '../../images/07.jpg';
import img08 from '../../images/08.jpg';
import imgAGC from '../../images/AGC_20231207_150422544.jpg';
import imgIMG1 from '../../images/IMG_20231207_213018.jpg';
import imgIMG2 from '../../images/IMG20231207163435.jpg';
import imgIMG3 from '../../images/IMG_8288.JPG';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Preload critical images (first 3 visible images)
  useEffect(() => {
    const criticalImages = [img05, img03, img01];
    criticalImages.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        setLoadedImages((prev) => new Set([...prev, imgSrc]));
      };
    });
  }, []);

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
      src: img05,
      alt: 'Team collaboration during hackathon',
      caption: 'BRAIN_BATTLE_2.0 >> TEAM_SYNC',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: img03,
      alt: 'Coding session',
      caption: 'NEURAL_CODING >> ACTIVE',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: img01,
      alt: 'Team working together',
      caption: 'COLLECTIVE_INTELLIGENCE >> ONLINE',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: imgIMG2,
      alt: 'Presentation time',
      caption: 'DEMO_PROTOCOL >> EXECUTED',
      status: 'BRAIN BATTLE 1.0',
    },
    {
      src: img07,
      alt: 'Developer workspace',
      caption: 'WORKSTATION_MATRIX >> READY',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: imgAGC,
      alt: 'Tech event',
      caption: 'INITIALIZATION >> SUCCESS',
      status: 'BRAIN BATTLE 1.0',
    },
    {
      src: img08,
      alt: 'Networking session',
      caption: 'NETWORK_PROTOCOL >> ACTIVE',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: imgIMG3,
      alt: 'Award ceremony',
      caption: 'VICTORY_SEQUENCE >> COMPLETE',
      status: 'BRAIN BATTLE 2.0',
    },
    {
      src: imgIMG1,
      alt: 'Workshop session',
      caption: 'SKILL_UPGRADE >> INSTALLING',
      status: 'BRAIN BATTLE 1.0',
    },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'BRAIN BATTLE 1': 'text-neon-green',
      'BRAIN BATTLE 2.0': 'text-cyber-cyan',
    };
    return colors[status as keyof typeof colors] || 'text-white';
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
            {images.map((image, index) => {
              const isCritical = index < 3;
              const isLoaded = loadedImages.has(image.src);
              
              return (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative overflow-hidden rounded-2xl cyber-border bg-black/50 aspect-[4/3]">
                    {!isLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-pulse flex items-center justify-center">
                        <div className="text-cyber-cyan text-xs font-tech">LOADING...</div>
                      </div>
                    )}
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading={isCritical ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={isCritical ? "high" : "auto"}
                      onLoad={() => {
                        setLoadedImages((prev) => new Set([...prev, image.src]));
                      }}
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105 group-active:scale-105 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
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
            );
            })}
          </div>

          {/* Video + Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left: Video */}
            <div className="cyber-border rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/ey-vdvy2Xe8?si=JDOxcShMlSKcDn5l"
                  title="Brain Battle Video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Right: Title + Description */}
            <div className="cyber-border rounded-2xl p-4 sm:p-6 bg-black/50 backdrop-blur-sm space-y-4">
              <h3 className="text-2xl sm:text-3xl font-orbitron font-bold">
                Brain Battle 2.0 - After Movie
              </h3>
              <div className="text-sm sm:text-base text-gray-300 font-tech leading-relaxed">
                <p>&gt; Ideas sparked. Minds collided.</p>

                <p className="mt-4">
                  Magic happened. This wasn’t just a hackathon — it was a journey of energy, teamwork, and raw creation.
                  Every frame carries a story, every face a spark, every cheer a memory worth reliving.
                </p>

                <p className="mt-4">
                  Here’s the aftermovie — a celebration of passion, innovation, and the people who made it unforgettable.
                </p>
              </div>
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
                loading="eager"
                fetchPriority="high"
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
