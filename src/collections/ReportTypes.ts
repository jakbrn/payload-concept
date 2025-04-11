import { isCompanyAdmin } from '@/access/isCompanyAdmin'
import { isCompanyMember } from '@/access/isCompanyMember'
import type { CollectionConfig } from 'payload'

export const ReportTypes: CollectionConfig = {
  slug: 'report-types',
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
      filterOptions: ({ data }) => {
        return {
          company: {
            equals: data.company,
          },
        }
      },
    },
  ],
}
