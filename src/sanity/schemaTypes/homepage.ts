import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'VELIXIR PARFUMS',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      initialValue: 'Redefining Luxury',
    }),
    defineField({
      name: 'heroVideo',
      title: 'Hero Video URL or Path',
      type: 'string',
      description: 'Can be local path like "/videos/hero.mp4" or absolute stream URL.',
      initialValue: '/videos/hero.mp4',
    }),
    defineField({
      name: 'heroPoster',
      title: 'Hero Video Poster Image',
      type: 'image',
      description: 'Static image shown before the video loads or as fallback.',
    }),
    defineField({
      name: 'heroPrimaryCTA',
      title: 'Hero Primary CTA button',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Button Text', initialValue: 'DISCOVER THE COLLECTION' },
        { name: 'link', type: 'string', title: 'Button Link', initialValue: '/fragrances' },
      ],
    }),
    defineField({
      name: 'heroSecondaryCTA',
      title: 'Hero Secondary CTA button',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Button Text', initialValue: 'SHOP ON SHOPEE' },
        { name: 'link', type: 'string', title: 'Button Link', initialValue: 'https://shopee.vn/' },
      ],
    }),
    defineField({
      name: 'collectionBannerTitle',
      title: 'Collection Banner Title',
      type: 'string',
      initialValue: 'EVERY MYTH HAS ITS SCENT',
    }),
    defineField({
      name: 'collectionBannerSubtitle',
      title: 'Collection Banner Subtitle',
      type: 'string',
      initialValue: 'Discover fragrances shaped by legends, crafted for modern icons.',
    }),
    defineField({
      name: 'collectionBannerImage',
      title: 'Collection Banner Background Image (Optional)',
      type: 'image',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
      initialValue: 'INSPIRED BY LEGENDS, MADE FOR ICONS',
    }),
    defineField({
      name: 'aboutText',
      title: 'About Section Poetic Text',
      type: 'text',
      initialValue: 'Velixir transforms ancient myths into modern scent rituals. Each fragrance is created as a symbol — a presence, a memory, an aura. Designed to make your essence unforgettable.',
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Section Image',
      type: 'image',
    }),
  ],
})
