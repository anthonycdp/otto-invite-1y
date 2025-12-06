import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import InfoSection from './components/InfoSection';
import MapSection from './components/MapSection';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <div className="font-body text-gray-800 antialiased overflow-x-hidden selection:bg-toyYellow selection:text-toyPurple">
      <BackgroundMusic src="/amigo-toy-story.mp3" />
      <Header />
      <main>
        <Hero />
        <About />
        <InfoSection />
        <MapSection />
        <Gallery />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}

export default App;
