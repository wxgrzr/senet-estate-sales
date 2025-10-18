import { MetadataRoute } from 'next';
import { sitemapData } from '@/sanity/lib/queries';
import { headers } from 'next/headers';
import { client } from '@/sanity/lib/client';

/**
 * This file creates a sitemap (sitemap.xml) for the application. Learn more about sitemaps in Next.js here: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 * Be sure to update the `changeFrequency` and `priority` values to match your application's content.
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await client.fetch(sitemapData, {}, { cache: 'no-store' });
  const headersList = await headers();
  const sitemap: MetadataRoute.Sitemap = [];
  const domain: string = headersList.get('host')?.startsWith('http')
    ? headersList.get('host')!
    : `https://${headersList.get('host')}`;

  // Add static pages manually
  const staticPages = [
    '/',
    '/estate-sale-questions',
    '/request-estate-sale-consultation',
  ];
  staticPages.forEach((path) => {
    sitemap.push({
      url: `${domain}${path}`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'monthly',
    });
  });

  sitemap.push({
    url: domain + '/upcoming-estate-sales',
    lastModified: new Date(),
    priority: 1,
    changeFrequency: 'weekly',
  });

  // Add posts from Sanity
  if (allPosts != null && allPosts.length !== 0) {
    for (const p of allPosts as Array<{
      _type: 'post';
      slug: string;
      _updatedAt?: string;
    }>) {
      sitemap.push({
        url: `${domain}/upcoming-estate-sales/${p.slug}`,
        lastModified: p._updatedAt || new Date(),
        priority: 0.5,
        changeFrequency: 'weekly',
      });
    }
  }

  return sitemap;
}
