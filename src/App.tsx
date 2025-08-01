import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';
import Event from './components/Event';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Brain Battle 3.0 - Hack the Future with Code';
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-orbitron">
      <Navbar />
      <main>
        <Hero />
        <Event />
        <About />
        <Gallery />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;