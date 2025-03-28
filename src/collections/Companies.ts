import type { CollectionConfig } from 'payload'

export const Companies: CollectionConfig = {
  slug: 'companies',
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
      name: 'workers',
      type: 'join',
      collection: 'workers',
      on: 'company',
    },
    {
      name: 'workstations',
      type: 'join',
      collection: 'workstations',
      on: 'company',
    },
    {
      name: 'positions',
      type: 'join',
      collection: 'positions',
      on: 'company',
    },
    {
      name: 'reportTypes',
      type: 'join',
      collection: 'report-types',
      on: 'company',
    },
  ],
}
