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
  const [showContent, setShowContent] = useState(false);

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
    setShowContent(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className="min-h-screen bg-black text-white overflow-x-hidden font-orbitron">
        {showContent && <Navbar />}
        <main>
          {showContent && <Hero />}
          {showContent && (
            <>
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
        {showContent && (
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        )}
      </div>
    </>
  );
}

export default App;