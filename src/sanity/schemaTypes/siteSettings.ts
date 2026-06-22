import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Global Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      initialValue: 'VELIXIR',
    }),
    defineField({
      name: 'announcementText',
      title: 'Announcement Text',
      type: 'string',
      initialValue: 'DISCOVER VELIXIR — MYTHS REBORN THROUGH SCENT',
    }),
    defineField({
      name: 'shopeeUrl',
      title: 'Shopee Shop URL',
      type: 'url',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok Shop URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Contact Address',
      type: 'text',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Copyright/Info Text',
      type: 'string',
      initialValue: '© 2026 VELIXIR Parfums. All Rights Reserved.',
    }),
  ],
})
