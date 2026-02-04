import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import AIHandbookHero from '@/components/resources/AIHandbookHero';
import AIHandbookContent from '@/components/resources/AIHandbookContent';
import AIHandbookCTA from '@/components/resources/AIHandbookCTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Adoption Handbook for Financial Services | Free Download | Lunnoa',
  description:
    'Download the free guide to implementing AI automation in PE, wealth management, and banking. Learn evaluation criteria, build the business case, and avoid common pitfalls.',
};

export default function AIHandbookPage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <AIHandbookHero />
      <AIHandbookContent />
      <AIHandbookCTA />
    </main>
  );
}
