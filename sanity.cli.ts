import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '<your project ID>';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  project: {
    basePath: '/studio',
  },
  studioHost: process.env.SANITY_STUDIO_STUDIO_HOST || '', // Visit https://www.sanity.io/docs/environment-variables to learn more about using environment variables for local & production.

  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: false,
});
