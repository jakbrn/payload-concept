// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Companies } from './collections/Companies'
import { Workers } from './collections/Workers'
import { Reports } from './collections/Reports'
import { Workstations } from './collections/Workstations'
import { Positions } from './collections/Positions'
import { ReportTypes } from './collections/ReportTypes'
import { Administrators } from './collections/Administrators'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Administrators.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Administrators, Users, Companies, Positions, Workstations, Workers, ReportTypes, Reports],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
