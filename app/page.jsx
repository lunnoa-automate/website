'use client';

import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Story from '@/components/sections/Story';
import Features from '@/components/sections/Features';
import UseCases from '@/components/sections/UseCases';
import Team from '@/components/sections/Team';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import { useTracking, useScrollTracking } from '@/hooks/useTracking';

export default function HomePage() {
  const { trackPageView } = useTracking();
  
  // Enable scroll depth tracking
  useScrollTracking({ enabled: true });
  
  // Track initial page view
  useEffect(() => {
    trackPageView('/', 'Lunnoa Automate - Home');
  }, [trackPageView]);
  
  return (
    <main>
      <Hero />
      <UseCases />
      <Features />
      <Services />
      <Story />
      <Team />
      <FAQ />
      <CTA />
    </main>
  );
}
