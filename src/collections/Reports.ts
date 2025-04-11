import { isCompanyAdmin } from '@/access/isCompanyAdmin'
import { isCompanyMember } from '@/access/isCompanyMember'
import type { CollectionConfig } from 'payload'

export const Reports: CollectionConfig = {
  slug: 'reports',
  access: {
    read: isCompanyMember,
    create: isCompanyMember, // TODO: check if user are sender
    update: isCompanyMember, // TODO: check if user are reciver
    delete: isCompanyAdmin,
  },
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
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
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
