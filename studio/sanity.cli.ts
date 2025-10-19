/**
 * Sanity CLI Configuration
 * This file configures the Sanity CLI tool with project-specific settings
 * and customizes the Vite bundler configuration.
 * Learn more: https://www.sanity.io/docs/cli
 */

import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from './environment';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  studioHost: 'senet-estate-sales-prod',

  autoUpdates: false,

});
