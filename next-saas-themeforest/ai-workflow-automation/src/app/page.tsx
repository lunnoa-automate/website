import Hero from '@/components/home/Hero';
import LogoBar from '@/components/home/LogoBar';
import ValuePillars from '@/components/home/ValuePillars';
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
  title: 'AI Workflow Automation for Financial Services | Lunnoa Automate',
  description:
    'Automate MNPI screening, capital calls, KYC, and due diligence with self-hosted AI agents. Cut ops time by 50-80%. Built for Private Equity, Wealth Management, and Banking.',
};

export default function Home() {
  return (
    <main className="dark:bg-background-7 overflow-x-hidden bg-white">
      <Hero />
      <LogoBar />
      <ValuePillars />
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
