import type { CollectionConfig } from 'payload'

export const Workers: CollectionConfig = {
  slug: 'workers',
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
    {
      name: 'position',
      type: 'relationship',
      relationTo: 'positions',
      hasMany: false,
      required: true,
    },
  ],
}
