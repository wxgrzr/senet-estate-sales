import type { Metadata } from 'next';
import { siteDefaults } from './site';
import { buildCanonicalUrl, mergeKeywords } from './utils';

const DEFAULT_OG_DIMENSIONS = {
  width: 1200,
  height: 630,
};

/**
 * Options for creating metadata
 */
export interface MetadataOptions {
  title: Metadata['title'];
  description: string;
  path?: string; // Used to generate canonical URL
  keywords?: string[];
  image?:
    | string
    | { url: string; width?: number; height?: number; alt?: string };
  openGraph?: Metadata['openGraph'];
  twitter?: Metadata['twitter'];
  other?: Record<string, string>;
  alternates?: Metadata['alternates'];
  icons?: Metadata['icons'];
  robots?: Metadata['robots'];
  // Allow any other Metadata fields
  [key: string]: any;
}

function resolveTitle(title: Metadata['title']): string {
  if (!title) {
    return siteDefaults.siteName;
  }

  if (typeof title === 'string') {
    return title;
  }

  if (typeof title === 'object') {
    const templateTitle = title as { absolute?: string; default?: string };
    return (
      templateTitle.absolute || templateTitle.default || siteDefaults.siteName
    );
  }

  return siteDefaults.siteName;
}

function buildOpenGraphImage(image: MetadataOptions['image'], alt: string) {
  if (!image) return undefined;
  if (typeof image === 'string') {
    return { url: image, alt, ...DEFAULT_OG_DIMENSIONS };
  }

  if (!image.url) return undefined;

  return {
    url: image.url,
    alt: image.alt || alt,
    width: image.width || DEFAULT_OG_DIMENSIONS.width,
    height: image.height || DEFAULT_OG_DIMENSIONS.height,
  };
}

function buildTwitterImages(image: MetadataOptions['image']) {
  if (!image) return undefined;

  if (typeof image === 'string') {
    return [image];
  }

  return image.url ? [image.url] : undefined;
}

/**
 * Creates a complete Metadata object with site defaults automatically merged
 */
export function createMetadata(options: MetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    keywords = [],
    image,
    openGraph,
    twitter,
    other,
    alternates,
    icons,
    robots,
    ...rest
  } = options;

  const resolvedTitle = resolveTitle(title);
  const canonicalUrl = path ? buildCanonicalUrl(path) : undefined;

  const mergedKeywords = mergeKeywords(
    (siteDefaults.keywords as string[]) || [],
    keywords,
  );

  const ogImage = openGraph?.images
    ? undefined
    : buildOpenGraphImage(image, resolvedTitle);

  const twitterImages = twitter?.images ? undefined : buildTwitterImages(image);

  const defaultOpenGraphImages =
    (ogImage
      ? [ogImage, ...(siteDefaults.openGraph?.images || [])]
      : siteDefaults.openGraph?.images) || undefined;

  const finalOpenGraph: Metadata['openGraph'] = {
    ...(siteDefaults.openGraph || {}),
    ...(canonicalUrl && { url: canonicalUrl }),
    ...(defaultOpenGraphImages && { images: defaultOpenGraphImages }),
    title: resolvedTitle,
    description,
    ...openGraph,
  };

  const defaultTwitterImages =
    twitterImages || siteDefaults.twitter?.images || undefined;

  const finalTwitter: Metadata['twitter'] = {
    ...(siteDefaults.twitter || {}),
    ...(defaultTwitterImages && { images: defaultTwitterImages }),
    title: resolvedTitle,
    description,
    ...twitter,
  };

  const finalAlternates =
    canonicalUrl || alternates || siteDefaults.alternates
      ? {
          ...(siteDefaults.alternates || {}),
          ...(canonicalUrl && { canonical: canonicalUrl }),
          ...(alternates || {}),
        }
      : undefined;

  const metadata: Metadata = {
    title,
    description,
    ...(mergedKeywords.length > 0 && { keywords: mergedKeywords }),
    ...(finalAlternates && { alternates: finalAlternates }),
    openGraph: finalOpenGraph,
    twitter: finalTwitter,
    ...(siteDefaults.other || other
      ? {
          other: {
            ...(siteDefaults.other || {}),
            ...(other || {}),
          },
        }
      : {}),
    ...(icons && { icons }),
    ...(robots && { robots }),
    ...rest,
  };

  return metadata;
}
