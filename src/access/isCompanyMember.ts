import { Access } from 'payload'

export const isCompanyMember: Access = ({ req, data }) => {
  if (!req.user) return false
  if (req.user.collection === 'administrators') return true
  if (req.user.company === data.company) return true
  return false
}
