import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import TrustHero from '@/components/trust/TrustHero';
import TrustOverview from '@/components/trust/TrustOverview';
import SecurityDocuments from '@/components/trust/SecurityDocuments';
import TrustCTA from '@/components/trust/TrustCTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Trust Center | Security Documentation | Lunnoa Automate',
  description:
    'Access security documentation, compliance information, and audit reports. Transparency in how we protect your data.',
};

export default function TrustPage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <TrustHero />
      <TrustOverview />
      <SecurityDocuments />
      <TrustCTA />
    </main>
  );
}
