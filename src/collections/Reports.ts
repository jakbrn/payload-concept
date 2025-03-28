import type { CollectionConfig } from 'payload'

export const Reports: CollectionConfig = {
  slug: 'reports',
  fields: [
    {
      name: 'type',
      type: 'relationship',
      relationTo: 'report-types',
      hasMany: false,
      required: true,
    },
    {
      name: 'comment',
      type: 'textarea',
    },
    {
      name: 'company',
      type: 'relationship',
      relationTo: 'companies',
      hasMany: false,
      required: true,
    },
    {
      name: 'workstation',
      type: 'relationship',
      relationTo: 'workstations',
      hasMany: false,
      required: true,
    },
    {
      name: 'worker',
      type: 'relationship',
      relationTo: 'workers',
      hasMany: false,
      required: true,
    },
    {
      name: 'targetPosition',
      type: 'relationship',
      relationTo: 'positions',
      hasMany: false,
      required: true,
    },
    {
      name: 'closedAt',
      type: 'date',
    },
  ],
}
