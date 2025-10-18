/**
 * Sanity CLI Configuration
 * This file configures the Sanity CLI tool with project-specific settings
 * and customizes the Vite bundler configuration.
 * Learn more: https://www.sanity.io/docs/cli
 */

import { defineCliConfig } from 'sanity/cli';

// const projectId =  'ma2ex8bh';
// const projectId = 'lc0v2d89';
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'ma2ex8bh';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  studioHost: 'senet-estate-sales-prod',

  autoUpdates: false,

});
