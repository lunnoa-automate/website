import { getAllReleasesWithContent } from '@/lib/releases';
import ReleasesPageClient from './ReleasesPageClient';

export const metadata = {
  title: 'Release Notes - Lunnoa Automate',
  description: 'Stay up to date with the latest features, improvements, and fixes in Lunnoa Automate.',
};

export default function ReleasesPage() {
  const releases = getAllReleasesWithContent();

  return <ReleasesPageClient releases={releases} />;
}
