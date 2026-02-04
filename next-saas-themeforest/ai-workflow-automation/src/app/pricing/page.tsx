import Client from '@/components/pricing/Client';
import Faq from '@/components/pricing/Faq';
import Pricing from '@/components/pricing/Pricing';
import PricingCTA from '@/components/pricing/PricingCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing | Custom AI Automation for Financial Services | Lunnoa',
  description:
    'Self-hosted AI automation priced for your needs. Workflows, AI agents, and deployment tailored to your requirements. Contact sales for a custom quote.',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Pricing />
      <Client />
      <Faq />
      <PricingCTA />
    </main>
  );
};

export default page;
