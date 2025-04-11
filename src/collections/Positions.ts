import { isCompanyAdmin } from '@/access/isCompanyAdmin'
import { isCompanyMember } from '@/access/isCompanyMember'
import type { CollectionConfig } from 'payload'

export const Positions: CollectionConfig = {
  slug: 'positions',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: isCompanyMember,
    create: isCompanyAdmin,
    update: isCompanyAdmin,
    delete: isCompanyAdmin,
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
