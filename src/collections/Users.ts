import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'username',
  },
  auth: {
    loginWithUsername: true,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
      required: true,
      defaultValue: 'user',
    },
    {
      name: 'sender',
      type: 'checkbox',
      label: 'Is this worker a sender?',
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
  ],
}
