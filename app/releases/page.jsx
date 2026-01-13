import Link from 'next/link';
import { Calendar, Tag, Sparkles, ArrowRight } from 'lucide-react';
import { getReleasesList } from '@/lib/releases';
import ReleasesPageClient from './ReleasesPageClient';

export const metadata = {
  title: 'Release Notes - Lunnoa Automate',
  description: 'Stay up to date with the latest features, improvements, and fixes in Lunnoa Automate.',
};

export default function ReleasesPage() {
  const releases = getReleasesList();

  return <ReleasesPageClient releases={releases} />;
}
