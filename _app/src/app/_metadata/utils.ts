/**
 * Base URL for the site
 */
export const BASE_URL = 'https://www.senetestatesales.com';

/**
 * Builds a canonical URL from a path
 * @param path - The path (e.g., '/', '/about', '/our-estate-sales')
 * @returns Full canonical URL
 */
export function buildCanonicalUrl(path: string = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${normalizedPath}`;
}

/**
 * Merges keywords arrays, deduplicating values
 */
export function mergeKeywords(
  baseKeywords: string[] = [],
  additionalKeywords: string[] = [],
): string[] {
  const combined = [...baseKeywords, ...additionalKeywords];
  return Array.from(new Set(combined));
}
