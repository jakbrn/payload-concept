import { isAdmin } from '@/access/isAdmin'
import type { CollectionConfig } from 'payload'

export const Administrators: CollectionConfig = {
  slug: 'administrators',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [],
}
