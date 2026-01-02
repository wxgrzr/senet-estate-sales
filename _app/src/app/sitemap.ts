import { MetadataRoute } from 'next';
import { sitemapData } from '@/sanity/lib/queries';
import { headers } from 'next/headers';
import { client } from '@/sanity/lib/client';
import { Routes } from '@/app/constants';

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

  const staticPages = [
    Routes.Home,
    Routes.Faq,
    Routes.ScheduleConsultaion,
    Routes.Privacy,
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
    url: `${domain}${Routes.OurEstateSales}`,
    lastModified: new Date(),
    priority: 1,
    changeFrequency: 'daily',
  });

  // Add posts from Sanity
  if (allPosts != null && allPosts.length !== 0) {
    for (const p of allPosts as Array<{
      _type: 'post';
      slug: string;
      _updatedAt?: string;
    }>) {
      sitemap.push({
        url: `${domain}${Routes.OurEstateSales}/${p.slug}`,
        lastModified: p._updatedAt || new Date(),
        priority: 0.5,
        changeFrequency: 'daily',
      });
    }
  }

  return sitemap;
}
