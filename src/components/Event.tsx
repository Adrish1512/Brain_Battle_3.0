import { motion } from 'framer-motion';

const Event = () => {
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
                date: 'Dec 15, 2025',
                status: 'executed',
              },
              {
                title: 'Brain Brawl',
                desc: 'Face off in a battle of wits and logic with other teams.',
                date: 'Dec 17, 2025',
                status: 'executed',
              },
              {
                title: 'Final Showdown - Hackathon',
                desc: 'The ultimate hackathon: build, innovate, and impress the judges.',
                date: 'Dec 18, 2025',
                status: 'running',
              },
              {
                title: 'Award Ceremony',
                desc: 'Celebrate the winners and all participants in style.',
                date: 'Dec 19, 2025',
                status: 'compiling',
              },
            ].map((event, idx, arr) => (
              <div key={event.title} className="relative z-10 flex flex-col items-center w-full">
                {/* Timeline dot */}
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyber-cyan via-neon-purple to-neon-pink border-4 border-black mb-2" />
                <div className="w-full max-w-xs sm:max-w-md md:max-w-lg bg-black/70 cyber-border rounded-2xl p-4 sm:p-6 flex flex-col items-start justify-between shadow-lg backdrop-blur-md mb-4">
                  <h3 className="text-lg sm:text-xl font-orbitron font-bold text-cyber-cyan mb-2">{event.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-tech mb-4">{event.desc}</p>
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
                {idx !== arr.length - 1 && (
                  <div className="w-1 h-8 bg-gradient-to-b from-cyber-cyan via-neon-purple to-neon-pink opacity-40" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Event; 