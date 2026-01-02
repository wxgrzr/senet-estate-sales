import type { Metadata } from 'next';
import { siteDefaults } from './site';
import { buildCanonicalUrl, mergeKeywords, mergeMetadata } from './utils';
import { createOpenGraphMetadata, createTwitterMetadata } from './presets';

/**
 * Options for creating metadata
 */
export interface MetadataOptions {
  title: Metadata['title'];
  description: string;
  path?: string; // Used to generate canonical URL
  keywords?: string[];
  openGraph?:  {
    title?: string;
    description?: string;
    url?: string;
    path?: string;
    image?: string | { url: string; width?: number; height?: number; alt?: string };
    type?: 'website' | 'article';
  };
  twitter?: {
    title?: string;
    description?: string;
    image?: string | string[];
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  };
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
    return templateTitle.absolute || templateTitle.default || siteDefaults.siteName;
  }

  return siteDefaults.siteName;
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
    openGraph,
    twitter,
    other,
    alternates,
    icons,
    robots,
    ...rest
  } = options;

  const resolvedTitle = resolveTitle(title);

  // Build canonical URL if path is provided
  const canonicalUrl = path ? buildCanonicalUrl(path) : undefined;

  // Merge keywords with site defaults
  const mergedKeywords = mergeKeywords(
    (siteDefaults.keywords as string[]) || [],
    keywords,
  );

  // Build OpenGraph metadata
  let finalOpenGraph: Metadata['openGraph'];
  if (openGraph) {
    // Check if it's a simple object (using preset-friendly format) or full OpenGraph object
    const isSimpleFormat =
      ('title' in openGraph || 'description' in openGraph || 'image' in openGraph || 'path' in openGraph) &&
      !('images' in openGraph && Array.isArray(openGraph.images));

    if (isSimpleFormat) {
      // Use preset for simple format
      finalOpenGraph = createOpenGraphMetadata({
        title: openGraph.title || resolvedTitle,
        description: openGraph.description || description,
        url: 'url' in openGraph ? openGraph.url : undefined,
        path: 'path' in openGraph ? openGraph.path : path,
        image: 'image' in openGraph ? openGraph.image : undefined,
        type: 'type' in openGraph ? openGraph.type : undefined,
        siteName: 'siteName' in openGraph ? openGraph.siteName : undefined,
      });
      // Merge any additional OpenGraph fields that weren't handled by preset
      const presetKeys = ['title', 'description', 'url', 'path', 'image', 'type', 'siteName'];
      const additionalFields = Object.fromEntries(
        Object.entries(openGraph).filter(([key]) => !presetKeys.includes(key))
      );
      if (Object.keys(additionalFields).length > 0) {
        finalOpenGraph = { ...finalOpenGraph, ...additionalFields };
      }
    } else {
      // Full OpenGraph object - merge with defaults
      const baseOpenGraph = siteDefaults.openGraph || {};
      finalOpenGraph = { ...baseOpenGraph, ...openGraph };
    }
  } else {
    // Use preset with defaults
    finalOpenGraph = createOpenGraphMetadata({
      title: resolvedTitle,
      description,
      path,
    });
  }

  // Build Twitter metadata
  let finalTwitter: Metadata['twitter'];
  if (twitter) {
    // If twitter is a simple object with title/description, use preset
    if ('title' in twitter || 'description' in twitter) {
      finalTwitter = createTwitterMetadata({
        title: twitter.title || resolvedTitle,
        description: twitter.description || description,
        image: 'image' in twitter ? twitter.image : undefined,
        card: 'card' in twitter ? twitter.card : undefined,
      });
      // Merge any additional Twitter fields
      if (Object.keys(twitter).length > 0) {
        finalTwitter = { ...finalTwitter, ...twitter };
      }
    } else {
      // Otherwise merge with defaults
      const baseTwitter = siteDefaults.twitter || {};
      finalTwitter = { ...baseTwitter, ...twitter };
    }
  } else {
    // Use preset with defaults
    finalTwitter = createTwitterMetadata({
      title: resolvedTitle,
      description,
    });
  }

  // Merge other metadata
  const mergedOther = {
    ...(siteDefaults.other || {}),
    ...(other || {}),
  };

  // Build final metadata object
  const metadata: Metadata = {
    title: title || resolvedTitle,
    description,
    ...(mergedKeywords.length > 0 && { keywords: mergedKeywords }),
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
        ...alternates,
      },
    }),
    ...(alternates && !canonicalUrl && { alternates }),
    openGraph: finalOpenGraph,
    twitter: finalTwitter,
    ...(Object.keys(mergedOther).length > 0 && { other: mergedOther }),
    ...(icons && { icons }),
    ...(robots && { robots }),
    ...rest,
  };

  // Merge with site defaults (for any fields not explicitly set)
  return mergeMetadata(siteDefaults as Partial<Metadata>, metadata);
}
