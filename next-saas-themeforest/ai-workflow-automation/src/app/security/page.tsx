import SecurityHero from '@/components/security/SecurityHero';
import SecurityFeatures from '@/components/security/SecurityFeatures';
import DeploymentOptions from '@/components/security/DeploymentOptions';
import ComplianceSection from '@/components/security/ComplianceSection';
import SecurityCTA from '@/components/security/SecurityCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Security & Compliance | Self-Hosted AI for Financial Services | Lunnoa',
  description:
    'Enterprise-grade security for regulated industries. Self-hosted deployment, full audit trails, data sovereignty, and compliance-ready infrastructure.',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <SecurityHero />
      <SecurityFeatures />
      <DeploymentOptions />
      <ComplianceSection />
      <SecurityCTA />
    </main>
  );
};

export default page;
