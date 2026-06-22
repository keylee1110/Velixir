import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'e.g., Eau De Parfum for Men / Women / Unisex',
    }),
    defineField({
      name: 'priceText',
      title: 'Price Display Text',
      type: 'string',
      description: 'e.g., From 290.000₫',
    }),
    defineField({
      name: 'priceNumber',
      title: 'Numeric Price',
      type: 'number',
      description: 'Optional numeric price for backend calculations',
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes Available',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['15ml', '50ml', '100ml'],
    }),
    defineField({
      name: 'gender',
      title: 'Gender / Category Target',
      type: 'string',
      options: {
        list: [
          { title: 'Male', value: 'male' },
          { title: 'Female', value: 'female' },
          { title: 'Unisex', value: 'unisex' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'collection',
      title: 'Collection Group',
      type: 'string',
      description: 'e.g., The Mythological Legends',
    }),
    defineField({
      name: 'scentFamily',
      title: 'Scent Family',
      type: 'string',
      description: 'e.g., Woody Spicy, Amber Gourmand',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'description',
      title: 'Poetic Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'notes',
      title: 'Key Scent Notes Highlight',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'topNotes',
      title: 'Top Notes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'heartNotes',
      title: 'Heart Notes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'baseNotes',
      title: 'Base Notes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'mood',
      title: 'Mood / Sensation',
      type: 'string',
      description: 'e.g., Commanding, bold, dark and magnetic',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hoverImage',
      title: 'Hover Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Product Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'shopeeUrl',
      title: 'Shopee Shop Product URL',
      type: 'url',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok Shop Product URL',
      type: 'url',
    }),
    defineField({
      name: 'otherMarketplaceUrls',
      title: 'Other Marketplace Channels',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'channelName', type: 'string', title: 'Channel Name' },
            { name: 'url', type: 'url', title: 'Product URL' },
          ],
        },
      ],
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
      description: 'Lower values appear first.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subtitle',
      media: 'mainImage',
    },
  },
})
