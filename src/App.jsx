import { useState, useEffect } from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Story from './components/sections/Story';
import Features from './components/sections/Features';
import UseCases from './components/sections/UseCases';
import Team from './components/sections/Team';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';
import Impressum from './components/pages/Impressum';
import Datenschutz from './components/pages/Datenschutz';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/impressum') {
        setCurrentPage('impressum');
        window.scrollTo(0, 0);
      } else if (hash === '#/datenschutz' || hash === '#/datenschutzerklaerung') {
        setCurrentPage('datenschutz');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Legal pages have their own header/footer
  if (currentPage === 'impressum') {
    return (
      <>
        <Header />
        <Impressum />
        <Footer />
      </>
    );
  }

  if (currentPage === 'datenschutz') {
    return (
      <>
        <Header />
        <Datenschutz />
        <Footer />
      </>
    );
  }

  // Home page
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Story />
        <Features />
        <UseCases />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
