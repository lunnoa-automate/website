import Hero from '@/components/home/Hero';
import Statistics from '@/components/home/Statistics';
import Features from '@/components/home/Features';
import CaseStudies from '@/components/home/CaseStudies';
import FeatureV2 from '@/components/home/FeatureV2';
import Testimonial from '@/components/home/Testimonial';
import Integration from '@/components/home/Integration';
import MeetOurTeam from '@/components/home/MeetOurTeam';
import Faq from '@/components/home/Faq';
import CTA from '@/components/home/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Workflow Automation - Lunnoa Automate',
  description:
    'Automate your workflows with AI-powered solutions. Build, deploy, and scale your business processes effortlessly with our no-code platform.',
};

export default function Home() {
  return (
    <main className="dark:bg-background-7 overflow-x-hidden bg-white">
      <Hero />
      <Statistics />
      <FeatureV2 />
      <CaseStudies />
      <Testimonial />
      <Integration />
      {/* <MeetOurTeam /> */}
      <Faq />
      <CTA />
    </main>
  );
}
