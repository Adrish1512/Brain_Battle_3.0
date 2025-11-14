import { useEffect, Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Event from './components/Event';
import LoadingScreen from './components/LoadingScreen';

// Preload gallery images as early as possible - even before Gallery component loads
// Using static imports for better Vite optimization and immediate loading
import img05Preload from '../images/05.jpg';
import img03Preload from '../images/03.jpg';
import img01Preload from '../images/01.jpg';

const preloadGalleryImages = () => {
  // Create preload links for critical images immediately
  const criticalImages = [img05Preload, img03Preload, img01Preload];
  
  criticalImages.forEach((imgSrc) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imgSrc;
    (link as any).fetchPriority = 'high';
    document.head.appendChild(link);
    
    // Also preload via Image object for immediate browser cache
    const img = new Image();
    img.src = imgSrc;
    (img as any).fetchPriority = 'high';
  });
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Update document title
    document.title = 'Brain Battle 3.0';
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Start preloading gallery images IMMEDIATELY on app load
    preloadGalleryImages();
    
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