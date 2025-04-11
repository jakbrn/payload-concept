import { Access } from 'payload'

export const isCompanyAdmin: Access = ({ req, data }) => {
  if (!req.user) return false
  if (req.user.collection === 'administrators') return true
  if (req.user.company === data.company && req.user.role === 'admin') return true
  return false
}
