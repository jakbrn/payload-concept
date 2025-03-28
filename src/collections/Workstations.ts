import type { CollectionConfig } from 'payload'

export const Workstations: CollectionConfig = {
  slug: 'workstations',
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
      name: 'company',
      type: 'relationship',
      relationTo: 'companies',
      hasMany: false,
      required: true,
    },
  ],
}
