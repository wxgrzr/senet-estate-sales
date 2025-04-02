import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {slugOnSave} from './actions/slugOnSave'

export default defineConfig({
  name: 'default',
  title: 'senet-estate-sales_web',

  projectId: 'lc0v2d89',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  // Slugify on save capability
  // document: {
  //   actions: (prev) =>
  //     prev.map((originalAction) =>
  //       originalAction.action === 'publish' ? slugOnSave(originalAction) : originalAction,
  //     ),
  // },
})
