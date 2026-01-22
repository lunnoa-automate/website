import Benefits from '@/components/home/Benefits';
import CaseStudy from '@/components/home/CaseStudy';
import FAQ from '@/components/home/FAQ';
import Feature from '@/components/home/Feature';
import FeatureV2 from '@/components/home/FeatureV2';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Services from '@/components/home/Services';
import CTA from '@/components/shared/cta/CTA';
import Reviews from '@/components/home/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Messaging Platform || NextSaaS',
};

const Homepage13 = () => {
  return (
    <main className="bg-background-4 dark:bg-background-9">
      <Hero />
      <Feature />
      <Benefits />
      <Services />
      <FeatureV2 />
      <Integration />
      <CaseStudy />
      <FAQ />
      <Reviews />
      <CTA
        className="bg-background-2 dark:bg-background-7"
        badgeText="Get started"
        badgeClass="!badge-cyan"
        ctaHeading="Start messaging smarter today"
        description="Start your free trial today and experience the power of NextSaaS—where efficiency meets innovation."
        descriptionClass="text-secondary/60 dark:text-accent/60 max-w-[530px]"
        btnClass="btn-primary hover:btn-secondary dark:btn-accent dark:hover:btn-primary"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default Homepage13;
