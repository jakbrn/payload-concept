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
      filterOptions: ({ data }) => {
        return {
          company: {
            equals: data.company,
          },
        }
      },
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
      filterOptions: ({ data }) => {
        return {
          company: {
            equals: data.company,
          },
        }
      },
    },
    {
      name: 'worker',
      type: 'relationship',
      relationTo: 'workers',
      hasMany: false,
      required: true,
      filterOptions: ({ data }) => {
        return {
          company: {
            equals: data.company,
          },
        }
      },
    },
    {
      name: 'targetPosition',
      type: 'relationship',
      relationTo: 'positions',
      hasMany: false,
      required: true,
      filterOptions: ({ data }) => {
        return {
          company: {
            equals: data.company,
          },
        }
      },
    },
    {
      name: 'completedAt',
      type: 'date',
    },
  ],
}
