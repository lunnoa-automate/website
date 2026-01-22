import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Story from '@/components/sections/Story';
import Features from '@/components/sections/Features';
import UseCases from '@/components/sections/UseCases';
import Team from '@/components/sections/Team';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
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
