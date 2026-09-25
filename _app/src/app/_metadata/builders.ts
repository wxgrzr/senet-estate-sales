import type { Metadata } from 'next';
import { siteDefaults } from './site';
import { buildCanonicalUrl } from './utils';
import type { PathType } from '@/app/constants';

type MetadataImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

export interface MetadataOptions extends Omit<Metadata, 'title' | 'description'> {
  title: Metadata['title'];
  description?: string;
  path: PathType;
  image?: string | MetadataImage;
  other?: Record<string, string>;
}

function resolveTitle(title: Metadata['title']): string {
  if (typeof title === 'string') return title;
  const { absolute, default: fallback } = (title ?? {}) as {
    absolute?: string;
    default?: string;
  };
  return absolute || fallback || siteDefaults.siteName;
}

function normalizeImage(image: string | MetadataImage, alt: string) {
  const img: MetadataImage = typeof image === 'string' ? { url: image } : image;
  return {
    url: img.url,
    width: img.width || 1200,
    height: img.height || 630,
    alt: img.alt || alt,
  };
}

export function createMetadata(options: MetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    image,
    openGraph,
    twitter,
    other,
    alternates,
    ...rest
  } = options;

  const resolvedTitle = resolveTitle(title);
  const canonicalUrl = buildCanonicalUrl(path);
  const ogImage = image && normalizeImage(image, resolvedTitle);
  // Pages without a description let Google build the snippet from page content.
  const descriptionFields = description ? { description } : {};

  return {
    title,
    ...descriptionFields,
    alternates: { canonical: canonicalUrl, ...alternates },
    openGraph: {
      ...siteDefaults.openGraph,
      url: canonicalUrl,
      ...(ogImage && {
        images: [ogImage, ...siteDefaults.openGraph.images],
      }),
      title: resolvedTitle,
      ...descriptionFields,
      ...openGraph,
    },
    twitter: {
      ...siteDefaults.twitter,
      ...(ogImage && { images: [ogImage.url] }),
      title: resolvedTitle,
      ...descriptionFields,
      ...twitter,
    },
    other: { ...siteDefaults.other, ...other },
    ...rest,
  };
}
