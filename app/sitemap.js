import { getReleasesList } from '@/lib/releases';

export default function sitemap() {
  const baseUrl = 'https://lunnoaautomate.ch';
  
  // Get all releases for dynamic routes
  const releases = getReleasesList();
  const releaseUrls = releases.map((release) => ({
    url: `${baseUrl}/releases/${release.version}`,
    lastModified: new Date(release.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/integrations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/releases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...releaseUrls,
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
