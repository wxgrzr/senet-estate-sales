import { defineConfig, isDev } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemas';
import { deskStructure } from './structure';
import { googleMapsInput } from '@sanity/google-maps-input';
import { googleMapsApiKey, projectId, dataset } from './environment';

const plugins = [
  structureTool({ structure: deskStructure }),
  ...(googleMapsApiKey
    ? [
        googleMapsInput({
          apiKey: googleMapsApiKey,
        }),
      ]
    : []),
];

if (isDev) {
  plugins.push(visionTool());
}

export default defineConfig({
  name: 'default',
  title: 'senet-estate-sales-web',
  projectId,
  dataset,
  plugins,
  schema: {
    types: schemaTypes,
  },
});
