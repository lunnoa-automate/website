import { notFound } from 'next/navigation';
import { getReleaseContent, getAllReleaseVersions } from '@/lib/releases';
import ReleaseDetailClient from './ReleaseDetailClient';

// This function generates all the static paths at build time
export async function generateStaticParams() {
  const versions = getAllReleaseVersions();
  return versions;
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const release = getReleaseContent(params.version);
  
  if (!release) {
    return {
      title: 'Release Not Found - Lunnoa Automate',
    };
  }

  return {
    title: `v${release.version} - ${release.title} | Lunnoa Automate Release Notes`,
    description: `Release notes for Lunnoa Automate v${release.version}: ${release.title}. View all changes, improvements, and new features.`,
    openGraph: {
      title: `Lunnoa Automate v${release.version} - ${release.title}`,
      description: `Release notes for Lunnoa Automate v${release.version}: ${release.title}.`,
    },
  };
}

export default function ReleasePage({ params }) {
  const release = getReleaseContent(params.version);

  if (!release) {
    notFound();
  }

  return <ReleaseDetailClient release={release} />;
}
