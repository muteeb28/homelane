import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Process from './components/Process'
import Footer from './components/Footer'
import ChatWidget from './components/chat/ChatWidget'
import WhatsAppButton from './components/WhatsAppButton'
import DesignGallery from './components/gallery/DesignGallery'

type AppView = 'home' | 'design-gallery';
type GallerySection = 'kitchen' | 'living-room' | 'bedroom' | 'wardrobe' | 'home-office' | 'bathroom' | 'space-saving' | 'home-interiors';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [activeGallerySection, setActiveGallerySection] = useState<GallerySection>('kitchen');

  // Handle navigation clicks
  const handleNavigation = (view: AppView, section?: GallerySection) => {
    console.log('Navigating to:', view, 'section:', section);
    setCurrentView(view);
    if (section) {
      setActiveGallerySection(section);
    }
  };

  // Listen for global navigation events from components (e.g., Services "See All")
  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ view: AppView; section?: GallerySection }>;
      if (custom.detail) {
        const { view, section } = custom.detail;
        handleNavigation(view, section);
      }
    };
    window.addEventListener('navigate', handler as EventListener);
    return () => window.removeEventListener('navigate', handler as EventListener);
  }, []);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'design-gallery':
        return <DesignGallery activeSection={activeGallerySection} onSectionChange={setActiveGallerySection} />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Services />
            <Features />
            <Process />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} currentView={currentView} />
      {renderCurrentView()}
      <Footer />
      
      {/* Chat Components */}
      <ChatWidget />
      <WhatsAppButton />
    </div>
  )
}

export default App