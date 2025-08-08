import { useEffect, Suspense, lazy } from 'react';
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
    document.title = 'Brain Battle 3.0';
    
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
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Event />
          <About />
          <Gallery />
          <Team />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;