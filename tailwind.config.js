/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'tech': ['Share Tech Mono', 'monospace'],
      },
      colors: {
        'cyber-purple': '#8B5CF6',
        'cyber-pink': '#EC4899',
        'cyber-cyan': '#06B6D4',
        'cyber-green': '#10B981',
        'cyber-yellow': '#F59E0B',
        'neon-purple': '#A855F7',
        'neon-pink': '#F472B6',
        'neon-cyan': '#22D3EE',
        'neon-green': '#34D399',
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'cyber-float': 'cyber-float 6s ease-in-out infinite',
        'data-stream': 'data-stream 20s linear infinite',
        'scan-line': 'scan-line 2s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'neon-pulse': {
          '0%': { 
            textShadow: '0 0 5px #06B6D4, 0 0 10px #06B6D4, 0 0 15px #06B6D4, 0 0 20px #06B6D4',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 10px #06B6D4, 0 0 20px #06B6D4, 0 0 30px #06B6D4, 0 0 40px #06B6D4',
            filter: 'brightness(1.2)'
          },
        },
        'cyber-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        'data-stream': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'scan-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 20px #06B6D4',
        'neon-purple': '0 0 20px #8B5CF6',
        'neon-pink': '0 0 20px #EC4899',
        'cyber-glow': '0 0 30px rgba(6, 182, 212, 0.5), inset 0 0 30px rgba(139, 92, 246, 0.2)',
      },
    },
  },
  plugins: [],
};