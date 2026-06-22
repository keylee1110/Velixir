import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactSubmission',
  title: 'Contact Submissions',
  type: 'document',
  // Make it read-only for admins in desk structure to maintain security/audit trail,
  // although administrators can edit status.
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'purchaseChannel',
      title: 'Purchase Channel Interested In',
      type: 'string',
      options: {
        list: [
          { title: 'Shopee', value: 'Shopee' },
          { title: 'TikTok Shop', value: 'TikTok Shop' },
          { title: 'Other', value: 'Other' },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: 'orderCode',
      title: 'Order Code (If applicable)',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'Customer Message',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Resolved', value: 'resolved' },
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'createdAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'email',
      status: 'status',
    },
    prepare({ title, subtitle, status }) {
      return {
        title: title || 'Anonymous Submission',
        subtitle: `${subtitle || 'No Email'} - Status: ${status || 'new'}`,
      }
    },
  },
})
