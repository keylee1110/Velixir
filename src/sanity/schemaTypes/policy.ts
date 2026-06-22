import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'policy',
  title: 'Policies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Policy Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Policy Details',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
        },
      ],
    }),
    defineField({
      name: 'type',
      title: 'Policy Type',
      type: 'string',
      options: {
        list: [
          { title: 'Privacy Policy', value: 'privacy' },
          { title: 'Shipping Policy', value: 'shipping' },
          { title: 'Return & Exchange Policy', value: 'returns' },
          { title: 'General Terms', value: 'general' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
    },
  },
})
