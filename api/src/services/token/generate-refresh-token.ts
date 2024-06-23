import jwt from 'jsonwebtoken'

import config from '~/config'

export const REFRESH_TOKEN_EXPIRATION_TIME = 7 * 24 * 60 * 60 // 7 days

export function generateRefreshToken(payload: { userId: number }) {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: REFRESH_TOKEN_EXPIRATION_TIME,
  })
}
