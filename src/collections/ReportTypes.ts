import type { CollectionConfig } from 'payload'

export const ReportTypes: CollectionConfig = {
  slug: 'report-types',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'comment',
      type: 'checkbox',
      required: true,
      defaultValue: false,
    },
    {
      name: 'company',
      type: 'relationship',
      relationTo: 'companies',
      hasMany: false,
      required: true,
    },
    {
      name: 'position',
      type: 'relationship',
      relationTo: 'positions',
      required: true,
    },
  ],
}
