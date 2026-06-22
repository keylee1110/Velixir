import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { projectId, dataset } from './src/sanity/env'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'velixir_studio',
  title: 'Velixir Parfums Dashboard',

  // Fallback to dummy strings for compilation if environment variables aren't loaded yet
  projectId: projectId || 'dummy-project-id',
  dataset: dataset || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Manager')
          .items([
            // Singleton: Site Settings
            S.listItem()
              .title('Global Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            // Singleton: Homepage Layout
            S.listItem()
              .title('Homepage Content')
              .id('homepage')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('homepage')
              ),
            // Singleton: Founder Story
            S.listItem()
              .title('Founder Story')
              .id('founderStory')
              .child(
                S.document()
                  .schemaType('founderStory')
                  .documentId('founderStory')
              ),
            S.divider(),
            // regular collections
            S.documentTypeListItem('product').title('Products'),
            S.documentTypeListItem('lendoLabArticle').title('Lendo-Lab Articles'),
            S.documentTypeListItem('policy').title('Policies'),
            S.divider(),
            // contact submissions - Read Only in desk structure to feel premium
            S.documentTypeListItem('contactSubmission').title('Contact Submissions'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
