/**
 * Environment variable validation for Sanity Studio
 * Uses assertValue pattern to fail fast if required variables are missing
 */

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

// Google Maps API key is optional - studio will work without it, but maps input won't function
export const googleMapsApiKey =
  process.env.SANITY_STUDIO_GOOGLE_MAPS_API_KEY;

// Project ID is required - fail fast if missing
export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID || 'ma2ex8bh',
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID',
);

// Dataset defaults to production but can be overridden
export const dataset =
  process.env.SANITY_STUDIO_DATASET || 'production';
