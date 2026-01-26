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
import Integrations from './components/pages/Integrations';
import ReleaseNotes from './components/pages/ReleaseNotes';
import { useTracking } from './hooks/useTracking';
import { useScrollTracking } from './hooks/useScrollTracking';
import { initEngagementTracking, trackPageVisitForScoring, trackScrollDepthForScoring } from './lib/engagement-scoring';
import { initFunnelTracking } from './lib/funnel-tracking';
import { initTrackingDebugger } from './lib/tracking-debugger';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { trackPageView } = useTracking();

  // Initialize scroll tracking for current page
  useScrollTracking({ pageKey: currentPage, enabled: true });

  // Initialize engagement, funnel tracking, and debugger on mount
  useEffect(() => {
    initEngagementTracking();
    initFunnelTracking();
    initTrackingDebugger();
  }, []);

  useEffect(() => {
    // Handle hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash;
      let newPage = 'home';
      let pageTitle = 'Lunnoa Automate - Home';
      
      if (hash === '#/impressum') {
        newPage = 'impressum';
        pageTitle = 'Lunnoa Automate - Impressum';
        window.scrollTo(0, 0);
      } else if (hash === '#/datenschutz' || hash === '#/datenschutzerklaerung') {
        newPage = 'datenschutz';
        pageTitle = 'Lunnoa Automate - Datenschutz';
        window.scrollTo(0, 0);
      } else if (hash === '#/integrations' || hash === '#/integrationen') {
        newPage = 'integrations';
        pageTitle = 'Lunnoa Automate - Integrations';
        window.scrollTo(0, 0);
      } else if (hash === '#/release-notes' || hash === '#/releases') {
        newPage = 'release-notes';
        pageTitle = 'Lunnoa Automate - Release Notes';
        window.scrollTo(0, 0);
      }
      
      setCurrentPage(newPage);
      
      // Track page view
      trackPageView(`/${newPage === 'home' ? '' : newPage}`, pageTitle, {
        page_type: newPage,
      });
      
      // Track for engagement scoring
      trackPageVisitForScoring(newPage);
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [trackPageView]);

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

  if (currentPage === 'integrations') {
    return (
      <>
        <Header />
        <Integrations />
        <Footer />
      </>
    );
  }

  if (currentPage === 'release-notes') {
    return (
      <>
        <Header />
        <ReleaseNotes />
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
