import { Access } from 'payload'

export const isAdmin: Access = ({ req }) => {
  if (!req.user) return false
  if (req.user.collection === 'administrators') return true
  return false
}
