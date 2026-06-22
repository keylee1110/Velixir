import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'founderStory',
  title: 'Founder Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Story Page Title',
      type: 'string',
      initialValue: 'OUR STORY & INSPIRATION',
    }),
    defineField({
      name: 'subtitle',
      title: 'Story Page Subtitle',
      type: 'string',
      initialValue: 'Crafting the liquid legends of tomorrow',
    }),
    defineField({
      name: 'content',
      title: 'Detailed Story Rich Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Editorial Story Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'quote',
      title: 'Featured Brand Quote',
      type: 'string',
      description: 'A highlight quote displayed with elegant serif formatting.',
      initialValue: 'Myths are not stories that never happened, but stories that happen outline and again.',
    }),
  ],
})
