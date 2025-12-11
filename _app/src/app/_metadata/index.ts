/**
 * Public API for metadata utilities
 */

// Core utilities
export { buildCanonicalUrl, mergeKeywords, mergeMetadata, BASE_URL } from './utils';

// Preset generators
export {
  createOpenGraphMetadata,
  createTwitterMetadata,
  type OpenGraphOptions,
  type TwitterOptions,
} from './presets';

// Main builder
export { createMetadata, type MetadataOptions } from './builders';

// Site defaults
export { siteDefaults } from './site';

