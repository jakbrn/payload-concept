import { isAdmin } from '@/access/isAdmin'
import { isCompanyAdmin } from '@/access/isCompanyAdmin'
import { isCompanyMember } from '@/access/isCompanyMember'
import type { CollectionConfig } from 'payload'

export const Companies: CollectionConfig = {
  slug: 'companies',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: isCompanyMember,
    create: isAdmin,
    update: isCompanyAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'users',
      type: 'join',
      collection: 'users',
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
