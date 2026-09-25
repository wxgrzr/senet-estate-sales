import type { MetadataRoute } from 'next';
import { sitemapData } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { buildCanonicalUrl } from '@/app/_metadata';
import { Routes } from '@/app/constants';

// Search Console has sitemap.xml submitted; keep it alive so new sale pages get discovered.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch(sitemapData);

  const staticPages: MetadataRoute.Sitemap = Object.values(Routes).map(
    (path) => ({ url: buildCanonicalUrl(path) }),
  );

  const postPages: MetadataRoute.Sitemap = (posts ?? [])
    .filter((p) => p.slug)
    .map((p) => ({
      url: buildCanonicalUrl(`${Routes.OurEstateSales}/${p.slug}`),
      lastModified: p._updatedAt,
    }));

  return [...staticPages, ...postPages];
}
