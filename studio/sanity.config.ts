import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'lusansa',

  projectId: 'sp1vpxdb',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentListItem()
              .id('homepage-singleton')
              .schemaType('homepage')
              .title('Homepage'),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'homepage'
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
