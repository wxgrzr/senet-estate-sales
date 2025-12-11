import type { Metadata } from 'next';
import { siteDefaults } from './site';
import { buildCanonicalUrl } from './utils';

/**
 * Options for creating OpenGraph metadata
 */
export interface OpenGraphOptions {
  title: string;
  description: string;
  url?: string;
  path?: string; // Alternative to url - will be converted to canonical URL
  image?: string | { url: string; width?: number; height?: number; alt?: string };
  type?: 'website' | 'article';
  siteName?: string;
}

/**
 * Creates OpenGraph metadata with site defaults merged in
 */
export function createOpenGraphMetadata(
  options: OpenGraphOptions,
): Metadata['openGraph'] {
  const url = options.url || (options.path ? buildCanonicalUrl(options.path) : undefined);
  
  const image = options.image
    ? typeof options.image === 'string'
      ? { url: options.image, width: 1200, height: 630 }
      : options.image
    : undefined;

  const baseOpenGraph = siteDefaults.openGraph || {};

  return {
    ...baseOpenGraph,
    title: options.title,
    description: options.description,
    ...(url && { url }),
    ...(image && {
      images: image ? [image, ...(baseOpenGraph.images || [])] : baseOpenGraph.images,
    }),
    ...(options.type && { type: options.type }),
    ...(options.siteName && { siteName: options.siteName }),
  };
}

/**
 * Options for creating Twitter metadata
 */
export interface TwitterOptions {
  title: string;
  description: string;
  image?: string | string[];
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
}

/**
 * Creates Twitter metadata with site defaults merged in
 */
export function createTwitterMetadata(
  options: TwitterOptions,
): Metadata['twitter'] {
  const baseTwitter = siteDefaults.twitter || {};
  
  const images = options.image
    ? Array.isArray(options.image)
      ? options.image
      : [options.image]
    : baseTwitter.images;

  return {
    ...baseTwitter,
    title: options.title,
    description: options.description,
    ...(images && { images }),
    ...(options.card && { card: options.card }),
  };
}

