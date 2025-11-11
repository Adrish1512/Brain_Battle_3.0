import { useEffect, Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Event from './components/Event';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Update document title
    document.title = 'Brain Battle 3.0';
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className="min-h-screen bg-black text-white overflow-x-hidden font-orbitron">
        {!isLoading && <Navbar />}
        <main>
          {!isLoading && (
            <>
              <Hero />
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Event />
              </Suspense>
              <About />
              <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                <Gallery />
              </Suspense>
            </>
          )}
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;