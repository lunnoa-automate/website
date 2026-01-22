import { getReleasesList } from '@/lib/releases';

/**
 * Sitemap configuration for Lunnoa Automate website
 * Automatically generates sitemap.xml for SEO
 * 
 * @returns {Array} Array of sitemap entries
 */
export default function sitemap() {
  const baseUrl = 'https://lunnoaautomate.ch';
  
  // Get all releases for dynamic routes
  let releaseUrls = [];
  try {
    const releases = getReleasesList();
    releaseUrls = releases.map((release) => ({
      url: `${baseUrl}/releases/${release.version}`,
      lastModified: new Date(release.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error loading releases for sitemap:', error);
  }

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
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

  return [...staticPages, ...releaseUrls];
}
